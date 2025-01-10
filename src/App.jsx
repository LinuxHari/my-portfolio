import { Helmet } from "react-helmet";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { description, title } from "./constants";

function App() {
  const windowSize = window.innerWidth;

  const speedProjs = windowSize < 768 ? -25 : -15;

  const speedSkills = windowSize < 768 ? 20 : 40;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content="Hari portfolio, Linux Hari portfolio, Hariharan portfolio, Software engineer, Full stack engineer, Javascript developer, Personal website"/>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <main className="min-h-screen bg-[#11071f] overflow-hidden">
        <Navbar />
        <div className="flex flex-col items-center">
          <ParallaxProvider className="md:w-[640px] lg:w-lg flex flex-col py-20 space-y-20 overflow-hidden">
            <Parallax speed={30}>
              <Hero />
            </Parallax>
            <Parallax speed={speedProjs}>
              <Projects />
            </Parallax>
            <Parallax speed={speedSkills}>
              <Skills />
            </Parallax>
            <Parallax speed={-15}>
              <Education />
            </Parallax>
            <Parallax speed={10}>
              <Contact />
            </Parallax>
          </ParallaxProvider>
        </div>
      </main>
    </>
  );
}

export default App;
