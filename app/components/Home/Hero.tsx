"use client";

import { Vortex } from "../ui/Vortex";
import { TbSchool } from "react-icons/tb";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { TiGlobeOutline } from "react-icons/ti";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "Game Developer",
  ];
  return (
    <div className="w-full flex flex-row gap-8 border-green-200">
      <div className="w-full mt-15 mb-20 h-88 pb-6 border-pink-200 rounded-4xl overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={70}
          baseHue={220}
          baseSpeed={-0.5}
          baseRadius={3}
          className="object-contain w-full h-full rounded-4xl"
        >
          <div className="p-8 w-full h-full border-red-300 flex flex-col z-10 ">
            <div className="flex flex-col">
              <div className="pb-8 border-b-[1.25px] border-[#a594f9]">
                <p className="mb-4 text-5xl  text-color2 text-shadow">
                  Greetings,
                </p>
                <p className="text-4xl  text-color1 text-shadow">
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
        </Vortex>
      </div>
    </div>
  );
};
export default Hero;
