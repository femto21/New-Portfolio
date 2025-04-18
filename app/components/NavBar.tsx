import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav className="md:px-4 md:py-6 px-6 py-6 flex items-center top-0 z-20">
        <div className="w-full flex justify-between items-center max-w-9/12 m-auto">
          <div className="flex justify-between">
            <div className="pr-12  border-r-[1.25px] border-[#cabeee]">
              <Link
                href="/"
                className="text-xl  font-medium text-color1 text-shadow-nav"
              >
                Arpit Gahlot
              </Link>
            </div>
            <div className="ml-12 flex gap-8 justify-between items-center">
              <Link
                href="/about"
                className="font-bold text-color2 text-shadow-nav"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-6 ">
            <Link
              href="#experience"
              className="font-medium text-color1 text-shadow-nav-subtle "
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="font-medium text-color1 text-shadow-nav-subtle"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-medium text-color1 text-shadow-nav-subtle"
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
