// app/api/contact/route.ts
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { checkRateLimit } from "../../sections/lib/rateLimit"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Sanitize HTML to prevent XSS
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

// Validate email format
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254
}

// Validate and sanitize input
function validateAndSanitize(data: {
  name?: string
  email?: string
  message?: string
  website?: string // honeypot field
}): { valid: boolean; errors: string[]; sanitized: { name: string; email: string; message: string } } {
  const errors: string[] = []
  let valid = true

  // Check honeypot field (should be empty)
  if (data.website && data.website.trim() !== "") {
    errors.push("Spam detected")
    valid = false
  }

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.push("Name is required")
    valid = false
  } else {
    const nameTrimmed = data.name.trim()
    if (nameTrimmed.length < 2) {
      errors.push("Name must be at least 2 characters")
      valid = false
    } else if (nameTrimmed.length > 100) {
      errors.push("Name must be less than 100 characters")
      valid = false
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required")
    valid = false
  } else if (!isValidEmail(data.email)) {
    errors.push("Invalid email format")
    valid = false
  }

  // Validate message
  if (!data.message || typeof data.message !== "string") {
    errors.push("Message is required")
    valid = false
  } else {
    const messageTrimmed = data.message.trim()
    if (messageTrimmed.length < 10) {
      errors.push("Message must be at least 10 characters")
      valid = false
    } else if (messageTrimmed.length > 1000) {
      errors.push("Message must be less than 1000 characters")
      valid = false
    }
  }

  return {
    valid,
    errors,
    sanitized: {
      name: sanitizeHtml((data.name || "").trim()),
      email: (data.email || "").trim().toLowerCase(),
      message: sanitizeHtml((data.message || "").trim()),
    },
  }
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : req.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse request body
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 })
    }

    // Validate and sanitize input
    const validation = validateAndSanitize(body)
    if (!validation.valid) {
      return NextResponse.json(
        { message: validation.errors.join(", ") },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.sanitized

    // Check environment variables
    if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured")
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send notification email to site owner
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      replyTo: email,
      subject: `New Website message from ${name}`,
      html: `
        <h2>Received a new message from my personal website!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Pedro Feiteira" <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: `Thanks for contacting me, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>Pedro Feiteira</p>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully!" })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
