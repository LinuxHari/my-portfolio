import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [showBottomNav, setNavStatus] = useState(false);

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
      <header
        className="flex justify-center bg-transparent backdrop-blur-md py-3 md:py-5 font-sans static sm:fixed top-0 z-10 w-full"
        data-aos="fade-down" data-aos-duration={500} data-aos-delay={300}
      >
        <nav className="w-full px-4 md:px-10 sm:w-[640px] lg:w-lg flex justify-between items-center">
          <Logo className="rotation object-cover h-10 w-10 p-1 border-2 border-white rounded-full" />
          <NavLinks className="static bg-none top-0 hidden sm:inline-block duration-500" />
        </nav>
      </header>
      <NavLinks
        className={`fixed sm:hidden z-max bg-[#11071f] 
          ${
            showBottomNav
              ? "left-1/2 -translate-x-1/2 bottom-0"
              : "top-[17px] right-5"
          }
          duration-0`}
      />
    </>
  );
};

export default Navbar;
