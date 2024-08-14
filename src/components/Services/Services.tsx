import React, { useState } from "react";
import { motion } from "framer-motion";
import FrontendSkillCard from "../../shared/cards/FrontendSkillCard";
import BackendSkillCard from "../../shared/cards/BackendSkillCard";
import OtherSkillCard from "../../shared/cards/OtherSkillCard";
import curlyDownArrowSvg from "../../assets/curly-down-arrow.svg";
import { cardVariants } from "./variants";
import { useMediaQuery } from "@raddix/use-media-query"; // Import the hook

const Services: React.FC = () => {
  // Define the media query for screens below 768px
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Conditional drag property based on screen size
  const [dragEnabled, setDragEnabled] = useState(!isMobile);

  // Update dragEnabled state when screen size changes
  React.useEffect(() => {
    setDragEnabled(!isMobile);
  }, [isMobile]);

  return (
    <section
      id="skills"
      className="px-4 py-16 relative flex flex-col justify-center items-center gap-10"
    >
      {/* HEADING */}
      <div className="relative w-full flex flex-col items-center gap-1 select-none max-w-[310px] sm:max-w-[450px] md:max-w-[740px] lg:max-w-[960px]">
        <div className="absolute inset-0 -top-5 lg:-inset-20">
          {/* Animated Arrow */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="hidden md:block"
          >
            <img src={curlyDownArrowSvg} className="w-20" alt="Arrow" />
          </motion.div>
          {/* Text with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -35 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -35 }}
            transition={{ delay: 0.5 }}
            className="hidden md:inline-block"
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
            drag={dragEnabled}
            variants={cardVariants.left}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FrontendSkillCard />
          </motion.div>
          <motion.div
            drag={dragEnabled}
            variants={cardVariants.center}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BackendSkillCard />
          </motion.div>
          <motion.div
            drag={dragEnabled}
            variants={cardVariants.right}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            exit="exit"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <OtherSkillCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
