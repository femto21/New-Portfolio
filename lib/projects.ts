export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Tank Wars",
    description:
      "One of my biggest projects ever, a multiplayer 2D game built with the Pygame (CE) library. It is currently in progress and I miiiiggghht add an online option to it.",
    tags: ["Game Development", "Backend", "Database"],
    tech: ["Python", "MongoDB"],
    image: "/tank-wars.png",
    url: "https://github.com/femto21/TankWars",
  },
  {
    id: 2,
    title: "Femto AI",
    description:
      "An AI chatbot featuring my favorite fictional character, Femto/Griffith. The chatbot has a personality too!",
    tags: ["Full Stack Development", "AI", "Cloud"],
    tech: ["Next.js", "React", "Clerk", "TailwindCSS", "Daisy UI", "Supabase"],
    image: "/femto-ai.png",
    url: "https://github.com/femto21/Femto-AI",
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "My portfolio website :) Probably had the most fun building this out of all my projects",
    tags: ["Full Stack Development", "Cloud"],
    tech: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Aceternity UI",
      "ShadCN UI",
      "AWS",
    ],
    image: "/new-portfolio.png",
    url: "https://github.com/femto21/New-Portfolio",
  },
];
