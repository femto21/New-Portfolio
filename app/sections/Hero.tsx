"use client";

import { TbSchool } from "react-icons/tb";
import {
  FaCanadianMapleLeaf,
  FaDiscord,
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { AuroraBackground } from "../../ui/aurora-background";
import MouseAnimation from "../../components/MouseAnimation";
import { motion } from "motion/react";
import { IoIosMail } from "react-icons/io";

const Hero = ({ isAtTop }: { isAtTop: boolean }) => {
  return (
    <>
      <section className="relative h-screen flex flex-col justify-center w-full">
        <div className="hidden md:hidden min-[1020px]:-mb-30 min-[2000px]:mt-0 lg:flex absolute bottom-40 left-8 -translate-y-1/2 flex-col gap-4 text-lg items-center z-20">
          <a
            href="http://www.discord.com/users/530748472278646805"
            rel="noopener"
            target="_blank"
            className="icon-shadow hover:-translate-y-1 nav-color2 transition-all duration-300"
          >
            <FaDiscord />
          </a>

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

          <a
            href="mailto:arpitgahlot@dal.ca"
            rel="noopener"
            target="_blank"
            className="icon-shadow hover:-translate-y-1 nav-color2 transition-all duration-300 text-xl"
          >
            <IoIosMail />
          </a>

          <div className="bg-[#f5efff] h-18 w-px m-auto mt-1 icon-shadow"></div>
        </div>
        <div className="absolute bottom-80 right-0 min-[1020px]:-mb-30 min-[2000px]:mt-0 -translate-y-1/2 rotate-90 text-sm z-20 text-shadow font-clashDisplay">
          <a
            href="#about"
            className="hidden md:hidden lg:block nav-color2 transition-all duration-300 ease-out"
          >
            Scroll &nbsp; Down
          </a>
        </div>
        <div className="w-full font-clashDisplay flex flex-row items-center min-[1920px]:-mt-20 min-[2000px]:-mt-60">
          <div className="w-full mx-10 md:mx-20 lg:mx-40 bg-gray-950/20 rounded-4xl overflow-hidden">
            <AuroraBackground
              data-theme="dark"
              className="object-contain w-full h-full rounded-4xl"
            >
              <div className="p-12 w-full h-full flex flex-col z-10">
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
                      Cloud Architect
                    </p>
                  </div>
                  <div className="w-100 ">
                    <p className="text-color2 text-l text-shadow">
                      AI Engineer
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
        </div>
        <div className="hidden md:hidden lg:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-50 flex-row  gap-0">
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
      </section>
    </>
  );
};
export default Hero;
