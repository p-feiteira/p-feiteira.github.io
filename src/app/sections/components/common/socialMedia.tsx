import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialMedia = [
  {"icon": "linkedin", "href": "https://www.linkedin.com/in/p-feiteira/"},
  {"icon": "github", "href": "https://github.com/p-feiteira"},
  {"icon": "x", "href": "https://x.com/feiteira_dev"},

]

export default function SocialMediaSection() {
  return (
    <div className="items-center">
      {socialMedia.map((media, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className="hover:text-primary"
          asChild
        >
          <Link href={media.href} className="flex items-center" target="_blank" rel="noopener noreferrer">
            <img
              src={`/icons/${media.icon.toLowerCase()}.svg`}
              alt={`${media.icon} icon`}
              className="h-5 w-5 dark:invert"
            />
          </Link>
        </Button>
      ))}
    </div>
  )
}