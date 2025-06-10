"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return <div className="flex items-center justify-center flex-col gap-6 text-center my-40">
        <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={350}
            height={350}
            className="rounded-full"
            loading="eager"
            priority
        />
        <HeroName />
        <div className="flex flex-col sm:flex-row gap-4">
            <ContactButton />
            <ResumeButton />
        </div>
    </div>
}

function HeroName() {
    const fullName = "Hi! I'm Pedro Feiteira";
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => setStarted(true), 300);
        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        if (!started) return;
        if (displayed.length < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayed(fullName.slice(0, displayed.length + 1));
            }, displayed.length == 3 ? 900 : 100); // Typing speed (ms)
            return () => clearTimeout(timeout);
        } else {
            setDone(true);
        }
    }, [started, displayed, fullName]);

    return (
        <h1 className="text-7xl font-bold font-mono">
            {displayed}
            <span
                className={`ml-1 ${done ? "inline animate-blink" : "invisible"}`}
                aria-hidden="true"
            >
                <span className="terminal-underscore">_</span>
            </span>
            <p>
                <span style={{ visibility: done ? "visible" : "hidden" }} className="text-3xl font-normal text-gray-500">
                    <span key={done ? "spawned": "hidden"} className="spawn-animation">Software Developer</span>
                </span>
            </p>
        </h1>
    );
}

function ContactButton() {
    return <Button
        onClick={() => window.location.href = "#contact"}
    >
    Contact Me
    </Button>;
}

function ResumeButton() {
    return <a href="/CV_2025.pdf" download>
  <Button variant="outline" className="text-green-500 hover:text-white">
    Download Resume
  </Button>
</a>
;
}