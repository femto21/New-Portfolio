"use client";

import { TbSchool } from "react-icons/tb";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { AuroraBackground } from "../ui/aurora-background";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "Game Developer",
  ];
  return (
    <div className="h-screen w-full">
      <div className="w-full h-auto font-clashDisplay flex flex-row gap-8 ">
        <div className="w-full mx-36 mt-32 bg-gray-950/20  rounded-4xl overflow-hidden">
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
                  <p className="text-color2 text-l text-shadow">ML Engineer</p>
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
    </div>
  );
};
export default Hero;
