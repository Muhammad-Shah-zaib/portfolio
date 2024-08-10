import React from "react";
import { motion } from "framer-motion";
import FrontendSkillCard from "../../shared/cards/FrontendSkillCard";
import BackendSkillCard from "../../shared/cards/BackendSkillCard";
import OtherSkillCard from "../../shared/cards/OtherSkillCard";
import curlyDownArrowSvg from "../../assets/curly-down-arrow.svg";
import { cardVariants } from "./variants"; // Adjust the path as needed

const Services: React.FC = () => {
  return (
    <section id="skills" className="py-10relative min-w-screen min-h-screen flex flex-col justify-center items-center gap-10">
      {/* HEADING */}
      <div className="relative w-full flex flex-col items-center gap-1 select-none max-w-[310px] sm:max-w-[450px] md:max-w-[740px] lg:max-w-[960px]">
        <div className="absolute inset-0 -top-5 lg:-inset-20">
          {/* Animated Arrow */}
          <motion.div
            animate={{ y: [0, -10, 0] }} // Bouncing effect
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img src={curlyDownArrowSvg} className="w-20" alt="Arrow" />
          </motion.div>
          {/* Text with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -35 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -35 }}
            transition={{ delay: 0.5 }}
            className="inline-block"
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono">Try dragging the cards</span>
          </motion.div>
        </div>
        <h2 className="font-biorhyme font-bold text-4xl">What I Do</h2>
        <span className="text-xs font-bold text-sky-900 dark:text-sky-200 font-mono">
          My Skills
        </span>
      </div>

      {/* CARDS */}
      <div className="w-full max-w-[310px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[960px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            drag
            variants={cardVariants.left}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }} // Ensures animation occurs only once
          >
            <FrontendSkillCard />
          </motion.div>
          <motion.div
            drag
            variants={cardVariants.center}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }} // Ensures animation occurs only once
          >
            <BackendSkillCard />
          </motion.div>
          <motion.div
            drag
            variants={cardVariants.right}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }} // Ensures animation occurs only once
          >
            <OtherSkillCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
