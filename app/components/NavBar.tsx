import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="md:px-4 md:py-6 px-6 py-6 flex items-center top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-9/12 m-auto">
        <div className="flex justify-between">
          <div className="pr-12  border-r-[1.25px] border-[#e2d9ff]">
            <Link href="/" className="text-xl  font-medium ">
              Arpit Gahlot
            </Link>
          </div>
          <div className="ml-12 flex gap-8 justify-between items-center">
            <Link
              href="/about"
              className="font-bold text-[#e2d9ff] text-shadow-nav hover:text-emerald-300 hover:text-shadow-nav-hover"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-6 ">
          <Link
            href="#experience"
            className="font-medium text-[#c6b5ff] hover:text-emerald-300"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="font-medium text-[#c6b5ff] hover:text-emerald-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="font-medium text-[#c6b5ff] hover:text-emerald-300"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
