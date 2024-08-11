import darkSvg from "../assets/dark-theme.svg";
import { motion } from "framer-motion";
import ContactMeBtn from "../shared/buttons/ContactMeBtn";
import { THeaderContainerProps } from "../containers/HeaderContainer";
import lightSvg from "../assets/light-theme.svg";
import { FaHome, FaExclamation, FaProjectDiagram } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

import { Link } from "react-scroll";

function Header({ isDarkTheme, toggleTheme }: THeaderContainerProps) {
  return (
    console.log("isDarkTheme=> ", isDarkTheme),
    (
      // Container
      <div className="z-50 fixed w-full flex justify-around gap-8 items-center py-2 px-8 backdrop-blur-md">
        {/* SIGNATURE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`font-bold font-dancing text-3xl select-none`}
        >
          Shahzaib
        </motion.h1>

        {/* MID_NAV_BAR-CTN */}
        <nav className={`flex justify-between gap-20 items-center`}>
          {/* NAVIGATIONS-CTN */}
          <div className={`flex gap-4 items-center`}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="transition-all flex items-center duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="transition-all flex items-center duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
            >
              <FaExclamation size={"1rem"} />
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="transition-all flex items-center gap-1 duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
            >
              <FaProjectDiagram />
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="transition-all flex items-center duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
            >
              <FaRegLightbulb />
              Skills
            </Link>
          </div>
          {/* CONTACT ME BUTTON */}
          <Link to="contact-me" smooth={true} duration={500}>
            <ContactMeBtn />
          </Link>
        </nav>

        {/* MODE CHANGE BUTTON */}
        <span
          onClick={() => toggleTheme()}
          className={`cursor-pointer hover:bg-sky-200 dark:hover:bg-zinc-800 transition-all duration-200 p-1 rounded-xl`}
        >
          <motion.img
            src={isDarkTheme ? lightSvg : darkSvg}
            alt="Dark theme"
            className="w-[30px] h-[30px]"
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 30 }}
            transition={{ duration: 0.2 }}
          />
        </span>
      </div>
    )
  );
}

export default Header;
