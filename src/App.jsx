import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function App() {

  const windowSize = window.innerWidth 

  const speedProjs = windowSize < 768? -17: 30

  const speedSkills = windowSize < 768? 20: 0

  return (
    <div className="min-h-screen bg-[#11071f] overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center">
        <ParallaxProvider className="md:w-[640px] lg:w-lg flex flex-col py-20 space-y-20 overflow-hidden">
          <Parallax speed={-20}>
            <Hero />
          </Parallax>
          <Parallax speed={speedProjs}>
            <Projects />
          </Parallax>
          <Parallax speed={speedSkills}>
            <Skills />
          </Parallax>
          <Parallax speed={-20}>
            <Education />
          </Parallax>
          <Parallax speed={3}>
            <Contact />
          </Parallax>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default App;