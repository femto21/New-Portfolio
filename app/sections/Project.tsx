import ProjectCard from "../../components/ProjectCard";
import { projects, type Project } from "@/lib/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-8 lg:mx-40 mt-30 border-amber-500">
      <div className="m-auto min-h-max border-solid w-full">
        <div className="m-auto w-fit">
          <p className="text-l mb-1 text-color2 text-shadow w-fit m-auto">
            Things That I Built
          </p>
          <p className="text-3xl text-color1 text-shadow w-fit m-auto">
            My Projects
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-between">
          {projects.map((project: Project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
