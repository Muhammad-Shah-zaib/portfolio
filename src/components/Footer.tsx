import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import outlookIconSvg from "../assets/outlook-icon.svg";
import Socials from "../shared/components/Socials";


function Footer() {
  // Function to handle copying email to clipboard
  const copyToClipboard = () => {
    const EMAIL = "MuhammdShahzaib@outlook.com";
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        toast.success("Email copied to clipboard!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        toast.error("Failed to copy email!");
      });
  };

  return (
    <div className="flex flex-col items-center justify-end w-full py-10">
      <div className="max-w-[310px] sm:max-w-[450px] md:max-w-[740px] border-b border-zinc-500 lg:max-w-[960px] py-4 w-full flex justify-between items-center gap-1">
        <div className="flex flex-col">
          <span className="text-5xl font-bold">Let's</span>
          <span className="text-5xl font-bold">Work Together -</span>
        </div>
        <div>
          <div
            onClick={copyToClipboard} // Attach the click handler
            role="button"
            className="flex items-center gap-1 px-2 py-1 text-sm border-2 dark:border-sky-700 border-sky-700 font-medium cursor-pointer font-roboto rounded-lg"
          >
            <span>MuhammdShahzaib@outlook.com</span>
            <img src={outlookIconSvg} alt="Outlook icon" />
          </div>
        </div>
      </div>
      <div className="max-w-[310px] sm:max-w-[450px] md:max-w-[740px] flex justify-between px-4 py-2 w-full">
        <span className="text-xs">&copy 2024 all rights reserved</span>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
