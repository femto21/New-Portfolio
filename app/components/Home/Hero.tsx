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
      <div className="w-full mt-20 h-96 p-6 border-2 border-pink-200 rounded-4xl overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={220}
          baseSpeed={-0.5}
          className="w-full h-full"
        >
          <div className="p-8 w-full h-full border-2 border-red-300 flex flex-col z-10 ">
            <div className="flex flex-col ">
              <div>
                <p className="mb-4 text-5xl  text-[#cabeee] text-shadow-head">
                  Hello world,
                </p>
                <p className="text-4xl  text-[#b27aee] text-shadow-head">
                  my name is Arpit Gahlot
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </Vortex>
      </div>
      <div className="mt-20 p-6 border-2 border-blue-300 w-96 h-96 rounded-4xl"></div>
    </div>
  );
};
export default Hero;
