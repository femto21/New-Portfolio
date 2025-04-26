"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
};

const ProjectCard = (props: Project) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-96 w-full p-3 rounded-2xl flex flex-row hover:shadow-2xl transition-all duration-300 ease-out hover:shadow-violet-500/[0.1]"
    >
      <img src={props.image} className="rounded-xl h-90 " alt={props.title} />
      <div className="px-4 ">
        <div className="flex flex-row items-center justify-center">
          <p className="text-4xl relative z-20 text-color1 text-shadow">
            {props.title}
          </p>
        </div>

        <div className="text-color2 text-shadow mt-4 relative z-20">
          {props.description}
        </div>
        <div className="text-color2 text-shadow relative z-20 flex flex-row flex-wrap">
          {props.tech.map((currentTech) => {
            return <p key={currentTech}>#{currentTech}&nbsp;</p>;
          })}
        </div>

        <div className="text-l text-color1 text-shadow relative flex flex-row-reverse z-20">
          <a href={props.url} target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
