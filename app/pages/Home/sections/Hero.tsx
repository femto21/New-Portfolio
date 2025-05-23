"use client";

import { TbSchool } from "react-icons/tb";
import { FaCanadianMapleLeaf, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { AuroraBackground } from "../../../../ui/aurora-background";
import MouseAnimation from "../components/MouseAnimation";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full top-0">
      <div className="absolute flex flex-col gap-4 text-lg top-[20.5%] left-8  items-center z-20">
        <a
          href="https://github.com/femto21"
          rel="noopener"
          target="_blank"
          className="icon-shadow hover:-translate-y-1 nav-color2 transition-all duration-300"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://www.linkedin.com/in/arpitgahlot/"
          rel="noopener"
          target="_blank"
          className="icon-shadow hover:-translate-y-1 nav-color2 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <div className="bg-[#f5efff] h-12 w-[1px] m-auto mt-1 icon-shadow"></div>
      </div>
      <div className="absolute rotate-90 text-sm top-[23%] right-0 z-20 text-shadow font-clashDisplay">
        <a
          href="mailto:arpitgahlot@dal.ca"
          className="nav-color2 transition-all duration-300 ease-out"
        >
          Contact &nbsp; Me
        </a>
      </div>
      <div className="w-full h-auto font-clashDisplay flex flex-row gap-8 ">
        <div className="w-full mx-40 mt-26 bg-gray-950/20  rounded-4xl overflow-hidden">
          <AuroraBackground className="object-contain w-full h-full rounded-4xl">
            <div className="p-12 w-full h-full  flex flex-col z-10 ">
              <div className="flex flex-col">
                <div className="pb-8 border-b-[1.25px] border-[#a594f9]">
                  <p className="mb-4 text-5xl text-color2 text-shadow font-bold">
                    Greetings,
                  </p>
                  <p className="text-4xl text-color1 text-shadow font-medium">
                    my name is Arpit Gahlot
                  </p>
                </div>
              </div>
              <div className="pt-4 pb-4 flex flex-row justify-around border-b-[1.25px] border-[#a594f9]">
                <div className="w-100 border-r-[1.25px] border-[#a594f9] mr-4">
                  <p className="text-color2 text-l text-shadow">
                    Software Engineer
                  </p>
                </div>
                <div className="w-100 border-r-[1.25px] border-[#a594f9] mr-4">
                  <p className="text-color2 text-l text-shadow">
                    Full Stack Developer
                  </p>
                </div>
                <div className="w-100 ">
                  <p className="text-color2 text-l text-shadow">
                    AI/ML Engineer
                  </p>
                </div>
              </div>
              <div className="flex flex-row pt-6">
                <div className="w-full border-r-[1.25px] border-[#a594f9] mr-4">
                  <p className="text-2xl text-color2 text-shadow flex flex-row items-center gap-1.5">
                    <TbSchool />
                    Dalhousie University
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-2xl text-color2 text-shadow flex flex-row gap-1.5 items-center">
                    <FaCanadianMapleLeaf /> Canada
                  </p>
                </div>
              </div>
            </div>
          </AuroraBackground>
        </div>

        <div className="absolute top-[29%] left-1/2 -translate-x-5 flex flex-row items-center gap-0">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isAtTop ? 1 : 0,
              transition: { duration: 1 },
            }}
            className="text-5xl icon-shadow opacity-80"
          >
            <MouseAnimation />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
