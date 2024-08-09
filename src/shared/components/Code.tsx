import React from "react";

interface CodeProps {
  children: React.ReactNode;
}
function Code({ children }: CodeProps) {
  return (
      <span
        className={`transition-all duration-200 bg-zinc-600  py-0.5 px-2 text-sm text-red-400 dark:text-zinc-950 dark:font-bold rounded-full`}
      >
        {children}
      </span>
  );
}

export default Code;
