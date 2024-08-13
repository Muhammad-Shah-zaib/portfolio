import TypingEffect from "react-typing-effect";
import mainAvatarSvg from "../assets/main-avatar.svg";
import Code from "../shared/components/Code";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      id="home"
      className="pt-16 cursor-default transition-all duration-200  2xl:min-h-[70vh] min-h-[70vh] lg:min-h-[100vh] min-w-screen` flex justify-center items-center"
    >
      {/* AVATAR CTN */}
      <motion.div
        className="flex flex-col gap-4 items-center max-w-[250px] sm:max-w-[320px] md:max-w-[560px]"
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>
          <img src={mainAvatarSvg} alt="avatar" />
        </span>
        {/* CONTAINER FOR NAME AND ROLES */}
        <div className="flex flex-col gap-1 items-center">
          {/* NAME */}
          <h1 className="lg:text-4xl md:text-3xl text-xl font-black font-biorhyme">
            Muhammad Shahzaib
          </h1>

          {/* ROELS */}
          <h3 className="transition-all duration-200 font-roboto font-bold md:text-xl text-lg lg:text-3xl dark:text-sky-200 text-sky-700">
            <TypingEffect
              text={["Web Developer", "Frontend Engineer", "Backend Engineer"]}
              speed={100} // typing speed
              eraseSpeed={50} // erasing speed
              eraseDelay={1000} // delay before starting to erase
              typingDelay={500} // delay before starting to type
            />
          </h3>
        </div>

        {/* A LITTLE DESCRIPTION ABOUT ME */}
        <div className="">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-wrap leading-relaxedP justify-center transition-all duration-200 font-roboto md:text-base sm:text-sm text-center text-zinc-600 dark:text-zinc-500"
          >
            I am a web developer who loves to build web applications with &nbsp;
            <Code>beautiful</Code>&nbsp;,&nbsp;<Code>responsive</Code>
            &nbsp;and&nbsp;
            <Code>interactive</Code> user interfaces.
          </motion.span>
        </div>

        {/* CONTACT ME BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
