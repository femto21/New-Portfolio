import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="md:px-4 md:py-6 px-6 py-6 flex items-center top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-9/12 m-auto">
        <div className="flex justify-between">
          <div className="pr-12  border-r-[1.25px] border-amber-50">
            <Link href="/" className="text-xl text-shadow-amber-50 font-medium">
              Arpit Gahlot
            </Link>
          </div>
          <div className="ml-12 flex gap-8 justify-between">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="#about" className="font-medium">
              About
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-6 font-medium">
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
