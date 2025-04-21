import Image from "next/image";
import { CardSpotlight } from "../ui/card-spotlight";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
};

const ProjectCard = (props: Project) => {
  console.log(props);

  return (
    <CardSpotlight className="h-96 w-90 rounded-2xl">
      <p className="text-xl relative z-20 mt-2 text-color1 text-shadow">
        {props.title}
      </p>
      <div className="mt-4">
        <Image src={props.image} width={250} height={200} alt={props.title} />
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
    </CardSpotlight>
  );
};

export default ProjectCard;
