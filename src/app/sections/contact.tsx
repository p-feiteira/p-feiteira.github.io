import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react"
import Image from "next/image";
import { toast } from "sonner";
import { CONTACT_FORM } from "@/lib/constants";


export default function Contact() {
    return (
      <div id="contact" className="section-spacing">
        <h1 className="text-5xl font-bold text-center my-8">Contact Me</h1>
        <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8 md:grid md:grid-cols-2 md:gap-8">
          <div className="order-1 md:order-none">
            <ContactInfo />
          </div>
          <div className="order-2 md:order-none">
            <ContactForm />
          </div>
        </div>
      </div>
    );
}

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "", website: "" })
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
    const [loading, setLoading] = useState(false)
    const [lastSubmitTime, setLastSubmitTime] = useState(0)
    const formRef = useRef<HTMLFormElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: undefined })
        }
    }

    const validateForm = (): boolean => {
        const newErrors: { name?: string; email?: string; message?: string } = {}
        
        if (!form.name.trim()) {
            newErrors.name = "Name is required"
        } else if (form.name.trim().length < CONTACT_FORM.minNameLength) {
            newErrors.name = `Name must be at least ${CONTACT_FORM.minNameLength} characters`
        } else if (form.name.trim().length > CONTACT_FORM.maxNameLength) {
            newErrors.name = `Name must be less than ${CONTACT_FORM.maxNameLength} characters`
        }
        
        if (!form.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!validateEmail(form.email)) {
            newErrors.email = "Please enter a valid email address"
        }
        
        if (!form.message.trim()) {
            newErrors.message = "Message is required"
        } else if (form.message.trim().length < CONTACT_FORM.minMessageLength) {
            newErrors.message = `Message must be at least ${CONTACT_FORM.minMessageLength} characters`
        } else if (form.message.trim().length > CONTACT_FORM.maxMessageLength) {
            newErrors.message = `Message must be less than ${CONTACT_FORM.maxMessageLength} characters`
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Client-side rate limiting (prevent spam)
        const now = Date.now()
        const timeSinceLastSubmit = now - lastSubmitTime
        if (timeSinceLastSubmit < CONTACT_FORM.rateLimitWindow) {
            toast.error("Please wait a moment before sending another message")
            return
        }

        if (!validateForm()) {
            toast.error("Please fix the errors in the form")
            return
        }

        setLoading(true)
        if (statusRef.current) {
            statusRef.current.textContent = "Sending your message..."
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const data = await res.json()
            
            if (!res.ok) {
                throw new Error(data.message || "Failed to send message")
            }

            toast.success("Message sent successfully! I'll get back to you soon.")
            setForm({ name: "", email: "", message: "", website: "" })
            setErrors({})
            setLastSubmitTime(Date.now())
            if (statusRef.current) {
                statusRef.current.textContent = "Message sent successfully!"
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again later."
            toast.error(errorMessage)
            if (statusRef.current) {
                statusRef.current.textContent = "Failed to send message. Please try again."
            }
        } finally {
            setLoading(false)
        }
    }

    const maxMessageLength = CONTACT_FORM.maxMessageLength
    const messageLength = form.message.length

    return (
        <div>
            <span className="text-3xl font-semibold block text-center md:text-left">Send a Message</span>
            <div 
                ref={statusRef}
                className="sr-only"
                role="status"
                aria-live="polite"
                aria-atomic="true"
            />
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 my-5" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: "absolute", left: "-9999px" }}
                    aria-hidden="true"
                />
                <div>
                    <Input 
                        name="name" 
                        placeholder="Your name" 
                        className={`w-xs ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        value={form.name} 
                        onChange={handleChange}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        disabled={loading}
                        required 
                    />
                    {errors.name && (
                        <p id="name-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.name}
                        </p>
                    )}
                </div>
                
                <div>
                    <Input 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        className={`w-xs ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        value={form.email} 
                        onChange={handleChange}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        disabled={loading}
                        required 
                    />
                    {errors.email && (
                        <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
                            {errors.email}
                        </p>
                    )}
                </div>
                
                <div>
                    <Textarea 
                        name="message" 
                        placeholder="Your message" 
                        className={`resize-none h-40 ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        value={form.message} 
                        onChange={handleChange}
                        maxLength={maxMessageLength}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error message-counter" : "message-counter"}
                        disabled={loading}
                        required 
                    />
                    <div className="flex justify-between items-center mt-1">
                        {errors.message ? (
                            <p id="message-error" className="text-sm text-destructive" role="alert">
                                {errors.message}
                            </p>
                        ) : (
                            <span className="text-sm text-muted-foreground" id="message-counter">
                                {messageLength} / {maxMessageLength} characters
                            </span>
                        )}
                    </div>
                </div>
                
                <Button type="submit" disabled={loading} aria-busy={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}

const contacts = [
    { "icon": "email", "href": "pedrofeiteira.dev@gmail.com" },
    { "icon": "linkedin", "href": "linkedin.com/in/p-feiteira" },
    { "icon": "github", "href": "github.com/p-feiteira" },
    { "icon": "x", "href": "x.com/feiteira_dev" },
]

function ContactInfo() {
    return (
        <div className="flex flex-col gap-2 space-y-4">
            <h2 className="text-3xl font-semibold text-center md:text-left">Get in touch</h2>
            {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                    <Image
                        src={`/icons/${contact.icon.toLowerCase()}.svg`}
                        alt={`${contact.icon} icon`}
                        width={35}
                        height={35}
                        className="dark:invert"
                    />
                    <span className="text-md">{contact.href}</span>
                </div>))}
        </div>
    );
}