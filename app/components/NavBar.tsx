import Link from "next/link";
import { FaEarlybirds } from "react-icons/fa";

const NavBar = () => {
  return (
    <header>
      <nav className="md:px-4 md:py-6 px-6 py-6 flex items-center top-0 z-20">
        <div className="w-full flex justify-between items-center max-w-9/12 m-auto">
          <div className="flex justify-between">
            <div className="pr-12  border-r-[1.25px] border-[#F5EFFF]">
              <Link
                href="/"
                className="text-xl font-medium nav-color1 text-shadow flex flex-row items-center"
              >
                <FaEarlybirds />
                Femto
              </Link>
            </div>
            <div className="ml-12 flex gap-8 justify-between items-center">
              <Link href="/about" className="font-bold nav-color2 text-shadow">
                About
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-6 ">
            <Link
              href="#experience"
              className="font-medium nav-color1 text-shadow-subtle"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="font-medium nav-color1 text-shadow-subtle"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-medium nav-color1 text-shadow-subtle"
            >
              contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
