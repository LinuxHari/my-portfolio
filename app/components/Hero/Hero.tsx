import { FC } from "react";
import Header from "./Header";
import Text from "./Text";
import NavbarWrapper from "../Navbar/NavbarWrapper";
// import Showreel from "./Showreel";
// import ShowreelMobile from "./ShowreelMobile";

const Hero: FC = () => {
  return (
    <>
      <div data-testid="homeHeroSection" className="flex h-[90vh] md:h-screen flex-col" id="home">
        <Header />
        <NavbarWrapper />
        {/* <div className="flex-grow lg:hidden">
          <ShowreelMobile />
        </div> */}
        <Text />
      </div>
      {/* <div className="hidden w-full lg:block">
        <Showreel />
      </div> */}
    </>
  );
};

export default Hero;
