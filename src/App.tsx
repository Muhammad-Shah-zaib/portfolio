import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services/Services";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="overflow-x-hidden dark:bg-primary bg-secondary transition-all duration-200 text-zinc-950 dark:text-zinc-200">
      <HeaderContainer />
      <Home />
      <AboutMe />
      <Projects />
      <Services />
      <ContactMe />
    </div>
  );
}

export default App;
