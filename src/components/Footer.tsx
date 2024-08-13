import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import outlookIconSvg from "../assets/outlook-icon.svg";
import Socials from "../shared/components/Socials";

function Footer() {
  // Function to handle copying email to clipboard
  const copyToClipboard = async () => {
    const EMAIL = "MuhammdShahzaib@outlook.com";
    try {
      if (navigator.clipboard) {
        // Modern Clipboard API
        await navigator.clipboard.writeText(EMAIL);
        toast.success("Email copied to clipboard!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = EMAIL;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        toast.success("Email copied to clipboard!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error("Failed to copy email: ", err);
      toast.error("Failed to copy email!");
    }
  };

  return (
    <div className="flex flex-col items-center pb-2 pt-10 px-4 md:px-0">
      <div className="sm:max-w-[450px] md:max-w-[740px] border-b border-zinc-500 lg:max-w-[960px] py-4 w-full flex justify-between items-center gap-1">
        <div className="hidden xs:flex flex-col">
          <span className="text-xl md:text-5xl font-bold">Let's</span>
          <span className="text-xl md:text-5xl font-bold">Work Together -</span>
        </div>
        <div className="block xs:hidden text-xl font-bold">Let's Work</div>
        <div className="w-full flex justify-end">
          <div
            onClick={copyToClipboard} // Attach the click handler
            role="button"
            className="flex items-center gap-0 md:gap-1 px-1 md:px-2 md:py-1 text-sm border-2 dark:border-sky-700 border-sky-700 font-medium cursor-pointer font-roboto rounded-lg"
          >
            <span className="text-xs xs:text-sm font-roboto">MuhammdShahzaib@outlook.com</span>
            <img src={outlookIconSvg} alt="Outlook icon" />
          </div>
        </div>
      </div>
      <div className="sm:max-w-[450px] md:max-w-[740px] flex justify-between px-4 py-2 w-full">
        <span className="text-xs">&copy; 2024 all rights reserved</span>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
