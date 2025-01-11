import React, { useState } from "react";
import { NAV_LINKS } from "../data";
import Logo from "./Logo";

const Navbar = ({scroll}) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="flex justify-center bg-[#1a0b2e] md:bg-transparent md:backdrop-blur-md py-3 md:py-5 font-sans fixed top-0 z-10 w-full">
      <nav className="w-full px-4 md:px-10 md:w-[640px] lg:w-lg flex justify-between items-center">
        <Logo className="rotation h-8 w-8 object-cover md:h-10 md:w-10 p-1 border-2 border-white rounded-full"/>
        <button
          className="text-white text-4xl md:hidden"
          onClick={() => setShowNav(true)}
        >
          &#8801;
        </button>
        <div
          className={`min-h-screen md:min-h-fit w-80 md:w-fit fixed ${
            showNav ? "left-0" : "-left-full"
          } top-0 md:static bg-[#1a0b2e] md:bg-none duration-500 z-50 md:rounded-full`}
        >
          {/* <h1 className="text-white font-medium md:hidden py-7 px-7">Logo</h1> */}
          <div className="p-7 md:hidden"><Logo className="h-10 w-10 border-2 border-white rounded-full p-1"/></div>
          <ul className="flex flex-col md:flex-row gap-x-10 lg:gap-x-20 gap-y-5 md:gap-y-0 md:py-0 md:px-10 md:border-2 md:border-white md:rounded-full">
          {NAV_LINKS.map(({ name, url }) => (
            <li
              key={name}
              className="text-white font-medium hover:bg-white hover:bg-opacity-25 md:hover:bg-transparent px-7 py-5 md:py-1 md:px-0"
              onClick={scroll}
            >
              <a href={url} aria-label={name}>{name}</a>
            </li>
          ))}
          </ul>
          <button
            className="text-white absolute top-7 right-2 font-semibold md:hidden border border-white rounded-full px-1.5"
            onClick={() => setShowNav(false)}
          >
            &#x2715;
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
