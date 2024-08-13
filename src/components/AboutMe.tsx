import DownloadResumeBtn from "../shared/buttons/DownloadResumeBtn";
import Code from "../shared/components/Code";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="about"
      className="font-roboto py-16 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.2, y: 10 }}
        transition={{ type: "spring", delay: 0.1, stiffness: 260, damping: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        className={`max-w-[250px] sm:max-w-[320px] md:max-w-[560px]`}
      >
        {/* HEADINGs */}
        <div className={`flex flex-col items-center`}>
          <h2 className={`font-black text-4xl`}>About Me</h2>
          <span
            className={`font-mono font-bold text-xs dark:text-sky-200 text-sky-900`}
          >
            Get to know me
          </span>
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4 mt-8 text-lg text-center">
          <span>
            Hello! I’m Muhammad Shahzaib, a passionate full-stack developer
            specializing in <Code>React</Code> and <Code>.NET Core</Code>.
            <span className="sm:block hidden">
              With a strong background in both frontend and backend
              technologies, I excel at creating dynamic, responsive,
              high-performance applications.
            </span>
          </span>
          <span>
            My experience in leading projects has strengthened my ability to
            manage <Code>deadlines</Code>, <Code>work with teams</Code>, and
            <Code>deliver top-notch results</Code>. I’m excited to bring my
            skills to help in turning your innovative ideas into reality. Let’s
            work together to create something amazing!
          </span>
        </div>
        {/* DOWNLOAD RESUME BUTTON */}
        <div className="flex justify-center mt-8">
          <DownloadResumeBtn />
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
