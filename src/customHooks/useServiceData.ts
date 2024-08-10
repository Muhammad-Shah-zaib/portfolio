import mysqlLogo from "../assets/mysql.svg";
import mongodbLogo from "../assets/mongodb.svg";
import reactLogo from "../assets/react-logo.svg";
import viteLogo from "../assets/vite.svg";
import reduxLogo from "../assets/redux.svg";
import typescriptLogo from "../assets/typescript.svg";
import nodejsLogo from "../assets/nodejs.svg";
import csharpLogo from "../assets/csharp.svg";
import { ServiceData } from "../interfaces/serviceInterfaces";

const useServiceData = (): ServiceData[] => {
  return [
    {
      id: 1,
      title: "Frontend Development",
      description: [
        { id: "desc1", text: "I bring your ideas to life using " },
        { id: "desc2", code: "React" },
        { id: "desc3", text: ", " },
        { id: "desc4", code: "Redux" },
        { id: "desc5", text: ", and " },
        { id: "desc6", code: "TypeScript" },
        { id: "desc7", text: ". Add exciting animations with " },
        { id: "desc8", code: "Framer_Motion" },
        {
          id: "desc9",
          text: " to make your site stand out. Let’s create a dynamic, high-quality web experience together. Contact me to get started!",
        },
      ],
      logos: [
        { id: "logo1", src: reactLogo, alt: "react", bgClass: "bg-zinc-100" },
        { id: "logo2", src: viteLogo, alt: "vite", bgClass: "bg-zinc-100" },
        { id: "logo3", src: reduxLogo, alt: "redux", bgClass: "bg-zinc-100" },
        {
          id: "logo4",
          src: typescriptLogo,
          alt: "typescript",
          bgClass: "bg-[#017ACB]",
        },
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      description: [
        { id: "desc10", text: "Expert in server-side development using " },
        { id: "desc15", code: "ASP.NET core" },
        { id: "desc16", text: " " },
        { id: "desc11", code: "Node.js" },
        { id: "desc12", text: " and " },
        { id: "desc13", code: "Express" },
        {
          id: "desc14",
          text: ". Specialize in building scalable APIs and managing databases. Let’s enhance your backend to ensure robustness and performance.",
        },
      ],
      logos: [
        { id: "logo5", src: nodejsLogo, alt: "nodejs", bgClass: "bg-zinc-100" },
        { id: "logo6", src: csharpLogo, alt: "csharp", bgClass: "bg-zinc-100" },
      ],
    },
    {
      id: 3,
      title: "Database Management",
      description: [
        {
          id: "desc17",
          text: "Expert in managing and optimizing databases using ",
        },
        { id: "desc18", code: "MySQL" },
        { id: "desc19", text: ", " },
        { id: "desc20", code: "MongoDB" },
        { id: "desc21", text: ", and " },
        { id: "desc22", code: "MS SQL Server" },
        {
          id: "desc23",
          text: ". Specialize in database design, performance tuning, and data integrity. Let’s ensure your data is efficiently managed and accessible.",
        },
      ],
      logos: [
        { id: "logo7", src: mysqlLogo, alt: "mysql", bgClass: "bg-zinc-100" },
        {
          id: "logo8",
          src: mongodbLogo,
          alt: "mongodb",
          bgClass: "bg-zinc-100",
        },
      ],
    },
    {
      id: 4,
      title: "Fullstack Development",
      description: [
        {
          id: "desc24",
          text: "Offering comprehensive full-stack development expertise with advanced skills in both frontend and backend technologies, including ",
        },
        { id: "desc25", code: "React" },
        { id: "desc26", text: " and " },
        { id: "desc27", code: "Redux" },
        {
          id: "desc28",
          text: " for dynamic and responsive user interfaces, and ",
        },
        { id: "desc29", code: "Node.js" },
        { id: "desc30", text: " and " },
        { id: "desc31", code: "ASP.NET Core" },
        {
          id: "desc32",
          text: " for robust and scalable backend solutions. Additionally, I implement secure ",
        },
        { id: "desc33", code: "authentication" },
        {
          id: "desc34",
          text: " methods to protect user data and ensure reliable access control. Let's collaborate to build comprehensive, end-to-end solutions tailored to your needs.",
        },
      ],
      logos: [
        { id: "logo9", src: reactLogo, alt: "react", bgClass: "bg-zinc-100" },
        {
          id: "logo10",
          src: nodejsLogo,
          alt: "nodejs",
          bgClass: "bg-zinc-100",
        },
        {
          id: "logo11",
          src: viteLogo,
          alt: "fullstack",
          bgClass: "bg-zinc-100",
        },
        {
          id: "logo12",
          src: typescriptLogo,
          alt: "typescript",
          bgClass: "bg-[#017ACB]",
        },
        {
          id: "logo13",
          src: csharpLogo,
          alt: "fullstack",
          bgClass: "bg-zinc-100",
        },
        {
          id: "logo14",
          src: reduxLogo,
          alt: "fullstack",
          bgClass: "bg-zinc-100",
        },
        // Include any other relevant logos
      ],
    },
    {
      id: 5,
      title: "Authentication",
      description: [
        {
          id: "desc29",
          text: "Implement robust authentication solutions using technologies such as ",
        },
        { id: "desc30", code: "JWT" },
        { id: "desc37", text: " and " },
        { id: "desc36", code: "Session Based" },
        {
          id: "desc35",
          text: ". Ensure secure and reliable user authentication for your applications. Let's protect your data and enhance user experience with top-notch authentication mechanisms.",
        },
      ],
      logos: [
        // Include other relevant logos if available
      ],
    },
  ];
};

export default useServiceData;
