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
      className="h-96 w-96 relative p-8 rounded-2xl bg-black dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1]"
    >
      <img
        src={props.image}
        className={cn(
          "object-cover absolute inset-0 rounded-2xl transition-all duration-300 ease-out",
          hovered === true ? "opacity-30 " : "opacity-80"
        )}
        alt={props.title}
      />

      <div className="flex flex-row items-center justify-center">
        <p
          className={cn(
            "text-4xl relative z-20 mt-6 text-color1 text-shadow",
            !hovered && "opacity-0"
          )}
        >
          {props.title}
        </p>
      </div>

      <div
        className={cn(
          "text-color2 text-shadow mt-4 relative z-20",
          !hovered && "opacity-0"
        )}
      >
        {props.description}
      </div>
      <div
        className={cn(
          "text-color2 text-shadow relative z-20 flex flex-row flex-wrap",
          !hovered && "opacity-0"
        )}
      >
        {props.tech.map((currentTech) => {
          return <p key={currentTech}>#{currentTech}&nbsp;</p>;
        })}
      </div>

      <div
        className={cn(
          "text-l text-color1 text-shadow relative flex flex-row-reverse z-20",
          !hovered && "opacity-0"
        )}
      >
        <a href={props.url} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
