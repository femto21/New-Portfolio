"use client";
import Link from "next/link";
import { FaEarlybirds } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  return (
    <header>
      <nav
        id="home"
        className="md:px-4 md:py-6 px-6 py-6 flex items-center font-clashDisplay top-2 z-20"
      >
        <div className="w-full flex justify-between items-center max-w-9/12 m-auto">
          <div className="flex justify-between">
            <div className="pr-12  border-r-[1.25px] border-[#F5EFFF]">
              <Link
                href="/"
                className="text-xl font-medium nav-color1 text-shadow-subtle transition-all hover:scale-102 duration-150 ease-out flex flex-row items-center"
              >
                <FaEarlybirds />
                Femto
              </Link>
            </div>
            <div className="ml-12 flex gap-8 justify-between items-center">
              <Link
                href="#about"
                className="font-bold transition-all  duration-150 nav-color2 ease-out text-shadow"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-between gap-6 ">
            <Link
              href="#work"
              className="font-medium nav-color1 transition-all  duration-150 ease-out text-shadow-subtle"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="font-medium nav-color1 transition-all duration-150 ease-out text-shadow-subtle"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-medium nav-color1 transition-all  duration-150 ease-out text-shadow-subtle"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-3xl nav-color1 transition-all duration-150"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden bg-transparent border-t border-[#F5EFFF]/20 px-6 py-4"
          >
            <div className="flex flex-col gap-4 text-lg mt-2">
              <Link
                href="#work"
                onClick={() => setOpen(false)}
                className="nav-color2 text-shadow"
              >
                Experience
              </Link>

              <Link
                href="#projects"
                onClick={() => setOpen(false)}
                className="nav-color2 text-shadow"
              >
                Projects
              </Link>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="nav-color2 text-shadow"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default NavBar;
