import React from "react";
import Code from "../../shared/components/Code";
import newLinkSvg from "../../assets/new-link.svg";
import { motion } from "framer-motion";

// Define interfaces for the tech stack
export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
}

// Define the props interface for the ProjectCard component
export interface ProjectCardProps {
  name: string;
  description: string;
  techStack: TechStack;
  imagePath?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
  imagePath,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-8 py-2">
        <div className="flex justify-between">
          {/* PROJECT NAME */}
          <span>
            <h1 className="text-2xl font-biorhyme font-black py-1 text-sky-900 dark:text-sky-100">
              {name}
            </h1>
          </span>
          {/* PROJECT REPO LINK */}
          <motion.span
            animate={{ rotate: 0.8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <a href="https://github.com/Muhammad-Shah-zaib/FundRaisingDashboard" target="_blank">
              <img src={newLinkSvg} alt="Repo link" />
            </a>
          </motion.span>
        </div>
        <span>
          <h1 className="text-xl font-biorhyme font-bold py-1 text-sky-900 dark:text-sky-100">
            Description:
          </h1>
          {description}
        </span>
        {/* TECH STACK */}
        <span>
          <h1 className="text-xl font-biorhyme font-bold py-1 text-sky-900 dark:text-sky-100">
            Tech Stack:
          </h1>
          {techStack.frontend && techStack.frontend.length > 0 && (
            <>
              <strong className="text-xl">. </strong> Frontend:{" "}
              {techStack.frontend.map((tech, index) => (
                <Code key={index}>{tech}</Code>
              ))}
              <br />
            </>
          )}
          {techStack.backend && techStack.backend.length > 0 && (
            <>
              <strong className="text-xl">.</strong> Backend:{" "}
              {techStack.backend.map((tech, index) => (
                <Code key={index}>{tech}</Code>
              ))}
              <br />
            </>
          )}
          {techStack.database && techStack.database.length > 0 && (
            <>
              <strong className="text-xl">.</strong> Database:{" "}
              {techStack.database.map((tech, index) => (
                <Code key={index}>{tech}</Code>
              ))}
            </>
          )}
        </span>
      </div>
      <div>{imagePath && <img src={imagePath} alt={`${name}-image`} />}</div>
    </>
  );
};

export default ProjectCard;
