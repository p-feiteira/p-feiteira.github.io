// app/api/contact/route.ts
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `New Website message from ${name}`,
      html: `
        <h2>Received a new message from my personal website!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

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
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 })
  }
}
