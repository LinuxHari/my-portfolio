'use client'

import { useEffect } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Home = () => {
  const windowSize = globalThis.innerWidth;

  const speedProjs = windowSize < 768 ? -20 : -15;

  const speedSkills = windowSize < 768 ? 20 : 40;

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="min-h-screen bg-[#11071f] overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center">
        <ParallaxProvider className="md:w-[750px] lg:w-lg flex flex-col py-20 space-y-20 overflow-hidden">
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
  );
};

export default Home;
