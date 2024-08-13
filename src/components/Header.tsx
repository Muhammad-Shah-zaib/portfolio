import darkSvg from "../assets/dark-theme.svg";
import { motion } from "framer-motion";
import ContactMeBtn from "../shared/buttons/ContactMeBtn";
import { THeaderContainerProps } from "../containers/HeaderContainer";
import lightSvg from "../assets/light-theme.svg";
import {
  FaHome,
  FaExclamation,
  FaProjectDiagram,
  FaBars,
  FaEnvelope,
} from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-scroll";

function Header({ isDarkTheme, toggleTheme }: THeaderContainerProps) {
  return (
    // Container
    <div className="z-50 fixed w-full flex justify-around gap-8 items-center py-2 px-4 md:px-8 backdrop-blur-md">
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
      <nav className={`flex justify-between sm:gap-20 gap-4 items-center`}>
        {/* NAVIGATIONS-CTN */}
        <div className={`hidden md:flex gap-4 items-center`}>
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
            <FaExclamation size={"1rem"} className="lg:block hidden" />
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="transition-all flex items-center gap-1 duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
          >
            <FaProjectDiagram className="lg:block hidden" />
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="transition-all flex items-center duration-200 text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4"
          >
            <FaRegLightbulb className="lg:block hidden" />
            Skills
          </Link>
        </div>
        {/* CONTACT ME BUTTON */}
        <span className="sm:block hidden">
          <Link to="contact-me" smooth={true} duration={500}>
            <ContactMeBtn />
          </Link>
        </span>
      </nav>

      {/* MODE CHANGE BUTTON */}
      <div className="flex gap-4 items-center">
        <span
          onClick={() => toggleTheme()}
          className={`cursor-pointer hover:bg-sky-200 dark:hover:bg-zinc-800 transition-all duration-200 p-1 rounded-xl`}
        >
          <motion.img
            src={isDarkTheme ? lightSvg : darkSvg}
            alt="Dark theme"
            className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 30 }}
            transition={{ duration: 0.2 }}
          />
        </span>
        <div className="relative flex flex-col gap-2">
          {/* OVERLAY */}
          <div
            id="header-overlay"
            className="hidden fixed w-screen h-screen opacity-30 bg-zinc-800 inset-0 -z-index-10"
            onClick={() => {
              const overlay = document.getElementById(
                "header-overlay"
              ) as HTMLDivElement;
              const navDropDown = document.getElementById(
                "nav-dropdown"
              ) as HTMLDivElement;
              if (overlay && navDropDown) {
                overlay.classList.add("hidden");
                navDropDown.classList.add("max-h-0");
                navDropDown.classList.remove("px-1");
                navDropDown.classList.remove("py-1");
                navDropDown.classList.remove("max-h-[500px]");
              }
            }}
          ></div>
          <span
            className="md:hidden block "
            onClick={() => {
              const overlay = document.getElementById(
                "header-overlay"
              ) as HTMLDivElement;
              const navDropDown = document.getElementById(
                "nav-dropdown"
              ) as HTMLDivElement;
              if (overlay && navDropDown) {
                overlay.classList.remove("hidden");
                navDropDown.classList.remove("max-h-0");
                navDropDown.classList.add("px-1");
                navDropDown.classList.add("py-1");
                navDropDown.classList.add("max-h-[500px]");
              }
            }}
          >
            <FaBars className="w-[18px] h-[18px]" />
          </span>
          <div
            id="nav-dropdown"
            className="absolute overflow-hidden flex flex-col gap-2 right-0 top-10 bg-sky-100 dark:bg-zinc-700 rounded-lg shadow-md dark:shadow-zinc-800 shadow-zinc-400 w-[150px] max-h-0 transition-all duration-200"
          >
            {/* HOME */}
            <motion.div
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="focus:bg-sky-200 dark:focus:bg-zinc-600 rounded-lg px-2 py-0.5"
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <FaHome />
                Home
              </Link>
            </motion.div>

            {/* ABOUT */}
            <motion.div
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="focus:bg-sky-200 dark:focus:bg-zinc-600 rounded-lg px-2 py-0.5"
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <FaExclamation />
                About
              </Link>
            </motion.div>

            {/* PROJECTS */}
            <motion.div
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="focus:bg-sky-200 dark:focus:bg-zinc-600 rounded-lg px-2 py-0.5"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <FaProjectDiagram />
                Projects
              </Link>
            </motion.div>

            {/* SKILLS */}
            <motion.div
              className="focus:bg-sky-200 dark:focus:bg-zinc-600 rounded-lg px-2 py-0.5"
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <FaRegLightbulb />
                Skills
              </Link>
            </motion.div>

            {/* CONTACT-ME */}
            <motion.div
              className="sm:hidden focus:bg-sky-200 dark:focus:bg-zinc-600 rounded-lg px-2 py-0.5"
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="contact-me"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <FaEnvelope />
                contact me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
