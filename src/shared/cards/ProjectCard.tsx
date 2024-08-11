import React from "react";
import Code from "../../shared/components/Code";
import newLinkSvg from "../../assets/new-link.svg";
import { motion } from "framer-motion";
import { TechStack } from "../../interfaces/projectInterfaces";

// Define the props interface for the ProjectCard component
export interface ProjectCardProps {
  name: string;
  description: string;
  techStack: TechStack;
  githubRepoLink: string;
  imagePath?: string;
  layout?: "IMAGE_FIRST" | "CONTENT_FIRST"; // Add layout prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
  githubRepoLink,
  imagePath,
  layout = "CONTENT_FIRST", // Default to CONTENT_FIRST layout
}) => {
  return (
    <div
      className={`flex ${
        layout === "IMAGE_FIRST" ? "flex-row-reverse" : "flex-row"
      } justify-center gap-8 py-2`}
    >
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: layout === "IMAGE_FIRST" ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        {/* HEADER - TITLE AND REPO LINK */}
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
            transition={{ duration: 0.2, delay: 0.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <a href={githubRepoLink} target="_blank" rel="noopener noreferrer">
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
                <>
                  <Code key={index}>{tech}</Code>{" "}
                </>
              ))}
              <br />
            </>
          )}
          {techStack.backend && techStack.backend.length > 0 && (
            <>
              <strong className="text-xl">.</strong> Backend:{" "}
              {techStack.backend.map((tech, index) => (
                <>
                  <Code key={index}>{tech}</Code>{" "}
                </>
              ))}
              <br />
            </>
          )}
          {techStack.database && techStack.database.length > 0 && (
            <>
              <strong className="text-xl">.</strong> Database:{" "}
              {techStack.database.map((tech, index) => (
                <>
                  <Code key={index}>{tech}</Code>{" "}
                </>
              ))}
            </>
          )}
        </span>
      </motion.div>
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: layout === "IMAGE_FIRST" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {imagePath && <img src={imagePath} alt={`${name}-image`} />}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
