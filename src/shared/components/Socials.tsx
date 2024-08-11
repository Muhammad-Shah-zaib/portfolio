import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/muhammad-shahzaib-311724292/" target="_blank">
        <FaLinkedin
          size={"1.75rem"}
          className={`hover:text-zinc-700 dark:hover:text-zinc-400 transition-all duraiton-200 cursor-pointer`}
        />
      </a>
      <a href="https://github.com/Muhammad-Shah-zaib" target="_blank">
        <FaGithub
          size={"1.75rem"}
          className={`hover:text-sky-800 dark:hover:text-sky-600 transition-all duration-200 cursor-pointer`}
        />
      </a>
    </div>
  );
}

export default Socials;
