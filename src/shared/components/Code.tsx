import React from "react";

interface CodeProps {
  children: React.ReactNode;
}
function Code({ children }: CodeProps) {
  return (
      <span
        className={`transition-all duration-200 bg-sky-800 dark:bg-sky-200  py-0.5 px-2 text-sm text-blue-100 dark:text-sky-900 dark:font-black rounded-full`}
      >
        {children}
      </span>
  );
}

export default Code;
