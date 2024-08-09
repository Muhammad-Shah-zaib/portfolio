import darkSvg from "../assets/dark-theme.svg";
import { motion } from "framer-motion";
import ContactMeBtn from "../shared/buttons/ContactMeBtn";
import { THeaderContainerProps } from "../containers/HeaderContainer";
import lightSvg from "../assets/light-theme.svg";

function Header({isDarkTheme, toggleTheme}: THeaderContainerProps) {
  return (
    console.log("isDarkTheme=> ", isDarkTheme),
    // Container
    <div className="transition-all duration-200 flex justify-around gap-8 items-center py-2 px-8">
      {/* SIGNATURE */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`font-bold font-dancing text-3xl `}
      >
        Shahzaib
      </motion.h1>

      {/* MID_NAV_BAR-CTN */}
      <nav className={`flex justify-between gap-20 items-center`}>
        {/* NAVIGATIONS-CTN */}
        <div className={`flex gap-4`}>
          <span className="text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4 text-sky-700 dark:text-sky-400">
            Home
          </span>
          <span className="text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4">
            About
          </span>
          <span className="text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4">
            Projects
          </span>
          <span className="text-lg cursor-pointer hover:text-sky-700 dark:hover:text-sky-400 hover:underline decoration-sky-700 dark:decoration-sky-400 underline-offset-4">
            Resume
          </span>
        </div>
        {/* CONTACT ME BUTTON */}
        <ContactMeBtn />
      </nav>

      {/* MODE CHANGE BUTTON */}
      <span
        onClick={() => toggleTheme()}
        className={`cursor-pointer hover:bg-sky-200 dark:hover:bg-zinc-800 transition-all duration-200 p-1 rounded-xl`}
      >
        <motion.img
          src={isDarkTheme ? lightSvg : darkSvg}
          alt="Dark theme"
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 30 }}
          transition={{ duration: 0.2 }}
        />
      </span>
    </div>
  );
}

export default Header;
