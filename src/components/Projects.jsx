import React from "react";
import { PROJECTS } from "../data";

const Projects = () => {
  return (
    <section className="py-40 px-5 md:px-10 w-full md:w-auto space-y-14 text-white relative" id="projects">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-fit z-10 justify-center items-center">
        {PROJECTS.map(({ name, description, image, url, className }, i) => (
          <figure
            key={name}
            className={`bg-gradient-to-r from-[#2c1f3e] to-[#190c2d] py-5 px-4 lg:px-8 flex items-center gap-x-4 md:w-80 lg:w-96 rounded-lg border-t-2 border-[#622bb6] ${className}`}
          >
            <img
              src={image}
              alt="icon"
              className={`h-16 w-18 ${i !== 2 ? "brightness-150" : ""}`}
            />
            <div className="space-y-1">
              <h3 className="text-2xl font-sans font-semibold whitespace-nowrap">
                {name}
              </h3>
              <p className="text-sm">{description}</p>
              <a
                href={url}
                target="_blank"
                className="backdrop-blur-3xl bg-purple-100/20 border border-white/50 inline-block !mt-3 uppercase px-3 py-1 rounded-lg text-sm"
              >
                View it
              </a>
            </div>
          </figure>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 h-80 w-80 -z-10 rounded-full bg-[#673d9e] blur-[60px]"></div>
      </div>
    </section>
  );
};

export default Projects;
