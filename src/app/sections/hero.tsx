import Image from "next/image";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem} from "@/components/ui/navigation-menu";

export default function Hero() {
    return <div>
        <Image
            src="/profile.png"
            alt="Profile Picture"
            width={200}
            height={200}
            priority
        />
    </div>
}

