import SocialMediaSection from "@/components/common/socialMedia";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
    return <footer className="muted-foreground-5 dark:text-white py-10">
        <div className="flex justify-center mb-8">
            <Button asChild >
                <Link href="#home" scroll={true}>
                    Back to Top
                </Link>
            </Button>
        </div>
        <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Pedro Feiteira. All rights reserved.
            </p>
        </div>
        <div className="flex justify-center mt-4">
            <SocialMediaSection />
        </div>
    </footer>;
}