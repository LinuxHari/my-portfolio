import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [showBottomNav, setNavStatus] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth < 640) {
        setNavStatus(true); 
      } else {
        setNavStatus(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
   <>
    <header className="flex justify-center bg-transparent backdrop-blur-md py-3 md:py-5 font-sans static sm:fixed top-0 z-10 w-full">
      <nav className="w-full px-4 md:px-10 sm:w-[640px] lg:w-lg flex justify-between items-center">
        <Logo className="rotation object-cover h-10 w-10 p-1 border-2 border-white rounded-full"/>
       <NavLinks className="static bg-none top-0 hidden sm:inline-block"/>
      </nav>
    </header>
    <NavLinks className={`fixed ${showBottomNav ? "top-[95vh] left-1/2": "top-[17px] -right-24"} sm:hidden duration-200 -translate-x-1/2 transform w-full z-max bg-[#11071f]`}/>
   </>
  );
};

export default Navbar;
