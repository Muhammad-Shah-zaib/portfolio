import React from "react";
import Code from "../components/Code"; // Adjust the path if needed
import { DescriptionText, Logo } from "../../interfaces/serviceInterfaces";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: DescriptionText[];
  logos: Logo[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  logos,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`bg-gradient-to-br from-sky-50 to-sky-100 dark:from-zinc-800 dark:to-neutral-800 rounded-lg flex flex-col gap-4 px-4 py-2 border hover:border-sky-500 border-sky-300 shadow shadow-sky-300 dark:shadow-zinc-600 dark:hover:border-zinc-500 transition-all duration-200 dark:border-zinc-600 h-[300px]`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="border-b border-sky-700 dark:border-zinc-600">
          {/* LOGOS CTN */}
          <div className={`flex gap-1 py-2 mb-1`}>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className={`rounded-lg px-1 py-0.5 ${logo.bgClass}`}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          {/* HEADING */}
          <h3 className={`font-medium text-xl text-sky-700 dark:text-sky-200`}>
            {title}
          </h3>
        </div>
        {/* DESCRIPTION */}
        <div>
          <span className="text-wrap text-zinc-900 dark:text-zinc-200">
            {description.map((text) => (
              <React.Fragment key={text.id}>
                {text.code ? <Code>{text.code}</Code> : text.text}
              </React.Fragment>
            ))}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
