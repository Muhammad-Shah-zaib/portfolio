import { useMemo } from "react";
import { ProjectCollection } from "../interfaces/projectInterfaces";



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
        githubRepoLink:
          "https://github.com/Muhammad-Shah-zaib/FundRaisingDashboard",
        imagePath: "NFRW-landing-page.jpeg",

      },
      // Add more projects here
      noteboard: {
        name: "Noteboard",
        description:
          "Noteboard, a React-based web application designed for managing and organizing your notes and whiteboards",
        techStack: {
          frontend: ["React", "TypeScript", "uiw-markdown-editor", "Redux.js"],
          backend: [".NET Core", "C#"],
          database: ["MySQL"],
        },
        githubRepoLink: "https://github.com/Muhammad-Shah-zaib/NoteBoard",
        imagePath: "noteboard-whiteboard-drawing.jpeg",
      },
    }),
    []
  );

  return projects;
};

export default useProjectData;
