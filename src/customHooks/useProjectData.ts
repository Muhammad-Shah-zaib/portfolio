import { useMemo } from "react";

interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
}

interface ProjectData {
  name: string;
  description: string;
  techStack: TechStack;
  imagePath?: string;
}

interface ProjectCollection {
  [key: string]: ProjectData;
}

const useProjectData = (): ProjectCollection => {
  // defining the projects
  const projects = useMemo(
    () => ({
      nfrw: {
        name: "NFRW - Nust Funds Raising Website",
        description:
          "A central platform to collect donations for the needy student studying at NUST, specifically designed for NUST.",
        techStack: {
          frontend: ["React", "React-spinners", "rxjs", "ShadCn UI"],
          backend: ["DotnetCore Web API", "C#"],
          database: ["MS SQL Server"],
        },
        imagePath: "NFRW-landing-page.jpeg",
      },
    }),
    []
  );

  return projects;
};

export default useProjectData;
