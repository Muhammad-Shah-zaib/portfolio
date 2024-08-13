import { ToastContainer } from "react-toastify";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services/Services";
import HeaderContainer from "./containers/HeaderContainer";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "./store/store";

function App() {
  const isDarkTheme = useAppSelector((state) => state.themeSlice.isDarkTheme);
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden dark:bg-primary bg-secondary transition-all duration-200 text-zinc-950 dark:text-zinc-200">
      <div>
        <HeaderContainer />
      </div>
      <Home />
      <AboutMe />
      <Projects />
      <Services />
      <ContactMe />
      <div>
        <Footer />
        <ToastContainer
          theme={isDarkTheme ? "dark" : "light"}
          position="bottom-center"
        />
      </div>
    </div>
  );
}

export default App;
