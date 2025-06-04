import nodemailer from 'nodemailer';

interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password instead of regular password
  },
});

export async function sendEmail(config: EmailConfig) {
  try {
    const mailOptions = {
      from: config.from,
      to: config.to,
      subject: config.subject,
      text: config.text,
      html: config.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Function to send a contact form email
export async function sendContactFormEmail(
  name: string,
  email: string,
  message: string
) {
  const subject = `New Message from ${name}`;
  const html = message;

  return sendEmail({
    from: process.env.GMAIL_USER!,
    to: process.env.GMAIL_USER!, // Send to yourself
    subject,
    html,
  });
} 