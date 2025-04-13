import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <NavigationMenu className="m-auto w-9/12 p-5 flex-row gap-10 text-xl text-shadow-amber-800 font-medium">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#about">About Me</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#experience">Experience</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#crojects">Projects</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact">Contact Me</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavBar;
