import useFrontendSkills from "../../customHooks/useFrontendSkills";
import Code from "../components/Code";
import reactLogo from "../../assets/react-logo.svg";
import reduxLogo from "../../assets/redux.svg";
import { motion } from "framer-motion";

function FrontendSkillCard() {
  const frontendSkills = useFrontendSkills();
  return (
    <div className="cursor-default bg-gradient-to-br from-sky-50 to-sky-100 dark:from-zinc-800 dark:to-neutral-800 rounded-lg flex flex-col gap-4 px-4 py-2 border hover:border-sky-500 border-sky-300 shadow shadow-sky-300 dark:shadow-zinc-600 dark:hover:border-zinc-500 transition-all duration-200 dark:border-zinc-600 h-[210px]">
      <div className="select-none flex justify-between border-b border-sky-700 dark:border-zinc-600 w-full">
        <h3
          className={`font-biorhyme py-2 font-medium text-xl text-sky-700 dark:text-sky-200`}
        >
          Frontend
        </h3>
        <div className="flex gap-1 items-cetner justify-center">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            src={reactLogo}
            alt="react"
            className={`w-[32px]`}
          />
          <motion.img src={reduxLogo} alt="redux" className={`w-[32px]`}/>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        {frontendSkills.map((s) => (
          <Code>{s}</Code>
        ))}
      </div>
    </div>
  );
}

export default FrontendSkillCard;
