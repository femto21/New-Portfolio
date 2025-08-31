import ProjectCard from "../components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  image: string;
  url: string;
};

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      "https://arpitprojects.s3.amazonaws.com/projects.json",
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    return (await res.json()) as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section className="mx-40">
      <div className="m-auto w-full">
        <p className="text-4xl text-color1 text-shadow">My Projects</p>
        <div className="mt-10 flex flex-col gap-6 justify-between">
          {projects.map((project: Project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
