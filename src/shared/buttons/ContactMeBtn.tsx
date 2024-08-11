import { FaEnvelope } from "react-icons/fa";

function ContactMeBtn() {
  return (
    <div>
      <button className="relative flex items-center gap-1 overflow-hidden bg-transparent hover:text-sky-950 transition-all duration-200 border border-sky-600 dark:border-sky-400 px-4 py-1 rounded-lg text-sky-700 dark:hover:text-sky-900 dark:text-sky-400 group">
        <FaEnvelope className="z-10 text-sky-700 transition-all duration-200 group-hover:text-sky-950 dark:group-hover:text-sky-900 dark:text-sky-400" />
        <span className="relative z-10 font-medium">Contact me</span>
        <span className="absolute inset-0 bg-sky-600 dark:bg-sky-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
      </button>
    </div>
  );
}

export default ContactMeBtn;
