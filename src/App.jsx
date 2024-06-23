import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {

  const windowSize = window.innerWidth

  const pages = windowSize > 768? 3: 4

  const edusecSpeed = windowSize > 768? 1: 0.3

  const offset = windowSize > 768? [0.8, 1.3, 2, 2.7]:[0.85, 1.5, 2.9, 3.65]

  return (
   <div className="min-h-screen">
    <Navbar/>
     <main>
      <Parallax pages={pages} className="bg-[#11071f] md:w-[640px] lg:w-lg flex flex-col py-20 space-y-20 overflow-hidden">
        <ParallaxLayer speed={0.6} offset={0}>
          <Hero/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} offset={offset[0]} className="flex justify-center">
        <Projects/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} offset={offset[1]} className="flex justify-center">
          <Skills/>
        </ParallaxLayer>
        <ParallaxLayer speed={edusecSpeed} offset={offset[2]} className="flex justify-center">
          <Education/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.6} offset={offset[3]} className="flex justify-center">
          <Contact/>
        </ParallaxLayer>
      </Parallax>
      </main>
   </div>
  )
}

export default App
