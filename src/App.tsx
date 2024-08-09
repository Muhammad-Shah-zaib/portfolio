import AboutMe from "./components/AboutMe"
import Home from "./components/Home"
import Services from "./components/Services"
import HeaderContainer from "./containers/HeaderContainer"

function App() {

  return (
    <div className="overflow-x-hidden dark:bg-primary bg-secondary transition-all duration-200 text-zinc-950 dark:text-zinc-200">
        <HeaderContainer />
        <Home />
        <AboutMe />
        <Services />
    </div>
  )
}

export default App
