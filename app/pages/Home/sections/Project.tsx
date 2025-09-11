import { useEffect, useState } from "react";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import ProjectCard from "../components/ProjectCard";

const client = new S3Client({
  region: "ca-central-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "ca-central-1" },
    identityPoolId: "ca-central-1:8b24c1bc-674e-4caf-b770-bb81f46cc0c4",
  }),
});

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  image: string;
  url: string;
};

async function getProjects() {
  try {
    const command = new GetObjectCommand({
      Bucket: "arpitprojects",
      Key: "projects.json",
    });

    const data = await client.send(command);

    if (!data.Body) {
      throw new Error("No data body returned from S3");
    }

    const text = await new Response(data.Body as any).text();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await getProjects();
        setProjects(temp);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchData();
  }, []);
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
