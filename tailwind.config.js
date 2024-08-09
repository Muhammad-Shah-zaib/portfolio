/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#E0E8F6"
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        biorhyme: ["Biorhyme", "serif"],
      },
    },
  },
  plugins: [],
};
