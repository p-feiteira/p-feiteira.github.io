// app/api/contact/route.ts
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { checkRateLimit } from "../../[locale]/sections/lib/rateLimit"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Translations for API responses
const translations = {
  en: {
    spam: "Spam detected",
    nameRequired: "Name is required",
    nameMinLength: "Name must be at least 2 characters",
    nameMaxLength: "Name must be less than 100 characters",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email format",
    messageRequired: "Message is required",
    messageMinLength: "Message must be at least 10 characters",
    messageMaxLength: "Message must be less than 1000 characters",
    tooManyRequests: "Too many requests. Please try again later.",
    invalidBody: "Invalid request body",
    serverError: "Server configuration error",
    success: "Message sent successfully!",
    failed: "Failed to send message. Please try again later.",
    emailSubjectOwner: "New Website message from {name}",
    emailSubjectUser: "Thanks for contacting me, {name}!",
    emailBodyOwner: "Received a new message from my personal website!",
    emailBodyUser: "Thanks for reaching out! I've received your message and will get back to you as soon as possible.",
    yourMessage: "Your Message",
    bestRegards: "Best regards",
  },
  pt: {
    spam: "Spam detectado",
    nameRequired: "O nome e obrigatorio",
    nameMinLength: "O nome deve ter pelo menos 2 caracteres",
    nameMaxLength: "O nome deve ter menos de 100 caracteres",
    emailRequired: "O email e obrigatorio",
    emailInvalid: "Formato de email invalido",
    messageRequired: "A mensagem e obrigatoria",
    messageMinLength: "A mensagem deve ter pelo menos 10 caracteres",
    messageMaxLength: "A mensagem deve ter menos de 1000 caracteres",
    tooManyRequests: "Demasiados pedidos. Por favor tente novamente mais tarde.",
    invalidBody: "Corpo do pedido invalido",
    serverError: "Erro de configuracao do servidor",
    success: "Mensagem enviada com sucesso!",
    failed: "Falha ao enviar mensagem. Por favor tente novamente mais tarde.",
    emailSubjectOwner: "Nova mensagem do website de {name}",
    emailSubjectUser: "Obrigado por me contactar, {name}!",
    emailBodyOwner: "Recebi uma nova mensagem do meu website pessoal!",
    emailBodyUser: "Obrigado por entrar em contacto! Recebi a sua mensagem e responderei assim que possivel.",
    yourMessage: "A sua mensagem",
    bestRegards: "Com os melhores cumprimentos",
  },
}

type Locale = keyof typeof translations

function getLocale(request: Request): Locale {
  const acceptLanguage = request.headers.get("Accept-Language") || ""
  if (acceptLanguage.toLowerCase().startsWith("pt")) {
    return "pt"
  }
  return "en"
}

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
function validateAndSanitize(
  data: {
    name?: string
    email?: string
    message?: string
    website?: string // honeypot field
  },
  t: (typeof translations)["en"]
): { valid: boolean; errors: string[]; sanitized: { name: string; email: string; message: string } } {
  const errors: string[] = []
  let valid = true

  // Check honeypot field (should be empty)
  if (data.website && data.website.trim() !== "") {
    errors.push(t.spam)
    valid = false
  }

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.push(t.nameRequired)
    valid = false
  } else {
    const nameTrimmed = data.name.trim()
    if (nameTrimmed.length < 2) {
      errors.push(t.nameMinLength)
      valid = false
    } else if (nameTrimmed.length > 100) {
      errors.push(t.nameMaxLength)
      valid = false
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== "string") {
    errors.push(t.emailRequired)
    valid = false
  } else if (!isValidEmail(data.email)) {
    errors.push(t.emailInvalid)
    valid = false
  }

  // Validate message
  if (!data.message || typeof data.message !== "string") {
    errors.push(t.messageRequired)
    valid = false
  } else {
    const messageTrimmed = data.message.trim()
    if (messageTrimmed.length < 10) {
      errors.push(t.messageMinLength)
      valid = false
    } else if (messageTrimmed.length > 1000) {
      errors.push(t.messageMaxLength)
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
  const locale = getLocale(req)
  const t = translations[locale]

  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : req.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json({ message: t.tooManyRequests }, { status: 429 })
    }

    // Parse request body
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ message: t.invalidBody }, { status: 400 })
    }

    // Validate and sanitize input
    const validation = validateAndSanitize(body, t)
    if (!validation.valid) {
      return NextResponse.json({ message: validation.errors.join(", ") }, { status: 400 })
    }

    const { name, email, message } = validation.sanitized

    // Check environment variables
    if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured")
      return NextResponse.json({ message: t.serverError }, { status: 500 })
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
      subject: t.emailSubjectOwner.replace("{name}", name),
      html: `
        <h2>${t.emailBodyOwner}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user (in their language)
    await transporter.sendMail({
      from: `"Pedro Feiteira" <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: t.emailSubjectUser.replace("{name}", name),
      html: `
        <p>Hi ${name},</p>
        <p>${t.emailBodyUser}</p>
        <hr>
        <p><strong>${t.yourMessage}:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>${t.bestRegards},<br>Pedro Feiteira</p>
      `,
    })

    return NextResponse.json({ message: t.success })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ message: t.failed }, { status: 500 })
  }
}
