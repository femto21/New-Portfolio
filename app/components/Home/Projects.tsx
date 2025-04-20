import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="m-auto w-full">
        <p className="text-4xl text-color1 text-shadow">My Projects</p>
        <div className="mt-10 flex flex-row flex-wrap justify-between">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
