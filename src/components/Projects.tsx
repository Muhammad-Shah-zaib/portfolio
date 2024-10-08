import React from "react";
import ProjectCard from "../shared/cards/ProjectCard"; // Adjust the path as necessary
import useProjectData from "../customHooks/useProjectData"; // Adjust the path as necessary

const Projects: React.FC = () => {
  // Use the custom hook to get multiple projects data
  const { nfrw, noteboard } = useProjectData();

  return (
    <section id="projects" className="flex flex-col items-center gap-4 px-4 sm:px-10 md:px-20 sm:py-10 py-16">
      {/* Heading */}
      <div className="sm:mb-8 flex flex-col items-center">
        <h1 className="text-4xl font-roboto font-black mb-2">Projects</h1>
        <span className="font-bold text-sky-900 dark:text-sky-200 text-xs font-mono">
          Some of my work
        </span>
      </div>
      {/* Project cards */}
      <div className="flex flex-col gap-10">
        <ProjectCard {...nfrw} />
        <ProjectCard {...noteboard} layout="IMAGE_FIRST" />
        {/* Add more ProjectCard components for additional projects */}
      </div>
    </section>
  );
};

export default Projects;
