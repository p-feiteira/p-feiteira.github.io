import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Projects</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Button variant="outline">Get Started</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8 text-base">
                <a href="#" className="hover:text-primary">Home</a>
                <a href="#" className="hover:text-primary">About</a>
                <a href="#" className="hover:text-primary">Projects</a>
                <a href="#" className="hover:text-primary">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
