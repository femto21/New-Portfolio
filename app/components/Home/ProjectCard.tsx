"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: String[];
  tech: string[];
  image: string;
  url: string;
};

const ProjectCard = (props: Project) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="pt-6 border-t-[1px] mb-0 border-t-[#f5efff]/10 border-opacity-20">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-96 w-full relative p-6 rounded-2xl  flex flex-row hover:shadow-2xl transition-all duration-300 ease-out hover:shadow-violet-500/[0.1]"
      >
        <div
          className={`absolute w-full h-full top-0 left-0 bg-white transition-opacity rounded-2xl ease-out duration-300 ${
            hovered ? " opacity-10 " : "opacity-0"
          }`}
        ></div>
        <img
          src={props.image}
          className="rounded-xl z-20 hover:scale-110 duration-300 ease-out"
          alt={props.title}
        />
        <div className="px-4 z-20">
          <div className="flex flex-row items-center justify-center">
            <p className="text-4xl relative z-20 text-color1 text-shadow">
              {props.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            {props.tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className="bg-gray-600 px-2 py-1 text-color2 text-shadow rounded-lg"
                >
                  {tag.name}
                </div>
              );
            })}
          </div>
          <div className="text-color2 text-shadow relative z-20 flex flex-row flex-wrap">
            {props.tech.map((currentTech) => {
              return <p key={currentTech}>#{currentTech}&nbsp;</p>;
            })}
          </div>
          <div className="text-color2 text-shadow mt-4 relative z-20">
            {props.description}
          </div>

          <div className="text-l text-color1 text-shadow relative flex flex-row-reverse z-20">
            <a href={props.url} target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
