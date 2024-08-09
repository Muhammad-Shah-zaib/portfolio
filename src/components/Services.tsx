import React from "react";
import ProjectCard from "../shared/cards/ProjectCard"; // Adjust the path as necessary
import useProjectData from "../customHooks/useProjectData"; // Adjust the path as necessary

const Services: React.FC = () => {
  // Use the custom hook to get multiple projects data
  const { nfrw } = useProjectData();

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center gap-4 px-20 py-10">
      {/* Heading */}
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-4xl font-roboto font-black">Projects</h1>
        <span className="font-bold text-sky-900 dark:text-sky-200 text-xs font-mono">
          Some of my work
        </span>
      </div>
      {/* Project cards */}
      <div className="grid grid-cols-2 gap-10">
        <ProjectCard {...nfrw} />
        {/* Add more ProjectCard components for additional projects */}
      </div>
    </div>
  );
};

export default Services;
