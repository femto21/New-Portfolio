"use client";
import { Vortex } from "../ui/Vortex";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Engineer",
    "Game Developer",
  ];
  return (
    <div className="w-full flex flex-row gap-8 border-2 border-green-200">
      <div className="w-full mt-20 m-20 h-96 p-6 border-2 border-pink-200 rounded-4xl overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={220}
          baseSpeed={-0.5}
          className="w-full h-full"
        >
          <div className="p-8 w-full h-full border-2 border-red-300 flex flex-col z-10 ">
            <div className="flex flex-col">
              <div className="pb-8 border-b-[1.25px] border-[#a594f9]">
                <p className="mb-4 text-5xl  text-color2 text-shadow">
                  Hello world,
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
                <p className="text-2xl text-color2 text-shadow">
                  Dalhousie University
                </p>
              </div>
              <div className="w-full">
                <p className="text-2xl text-color2 text-shadow">Canada</p>
              </div>
            </div>
          </div>
        </Vortex>
      </div>
    </div>
  );
};
export default Hero;
