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
        className="h-96 w-full relative p-6 pl-0 rounded-2xl flex flex-row hover:shadow-2xl transition-all duration-300 ease-out hover:shadow-violet-500/[0.1]"
      >
        <div
          className={`absolute w-full h-full top-0 left-0 bg-white transition-opacity rounded-2xl ease-out duration-300 ${
            hovered ? " opacity-10 " : "opacity-0"
          }`}
        ></div>
        <div className="z-20 basis-1/2 relative hover:cursor-pointer">
          <a href={props.url} target="_blank">
            <img
              src={props.image}
              className="rounded-xl w-full h-full object-cover hover:scale-110 duration-300 ease-out "
              alt={props.title}
            />
          </a>
        </div>
        <div className="px-8 z-20 grid grid-rows-[auto_auto_auto_1fr_auto] h-full basis-1/2">
          <div className="row-start-1 flex mb-1 flex-row items-center ">
            <p className="text-2xl z-20 text-shadow">
              <a href={props.url} className="nav-color1" target="_blank">
                {props.title}
              </a>
            </p>
          </div>
          <div className="row-start-2 mb-1 flex flex-row gap-2">
            {props.tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className="bg-gray-600 px-2 py-0.5 text-color2  text-shadow rounded-lg"
                >
                  {tag.name}
                </div>
              );
            })}
          </div>
          <div className="row-start-3 text-color2 text-shadow mb-1 z-20 flex flex-row flex-wrap">
            {props.tech.map((currentTech) => {
              return <p key={currentTech}>#{currentTech}&nbsp;</p>;
            })}
          </div>
          <div className="row-start-4 text-color2 text-shadow z-20">
            {props.description}
          </div>

          <div className="row-start-5 text-l text-shadow  z-20">
            <a href={props.url} target="_blank" className="nav-color1">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
