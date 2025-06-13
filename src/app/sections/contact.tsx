import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react"
import Image from "next/image";


export default function Contact() {
    return <div id="contact">
        <h1 className="text-5xl font-bold text-center my-8">Contact Me</h1>
        <div className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
            <div>
                <ContactInfo />
            </div>
            <ContactForm />
        </div>
    </div>
}

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const data = await res.json()
            alert(data.message)
            setForm({ name: "", email: "", message: "" })
        } catch {
            alert("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
           <span className="text-3xl font-semibold">Send a Message</span> 
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
            <Input name="name" placeholder="Your name" className="w-xs" value={form.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your email" className="w-xs" value={form.email} onChange={handleChange} required />
            <Textarea name="message" placeholder="Your message" className="resize-none h-40" value={form.message} onChange={handleChange} required />
            <Button type="submit" disabled={loading}>
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
            <h2 className="text-3xl font-semibold">Get in touch</h2>
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