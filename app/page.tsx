import type { Metadata } from "next";
import { homeMetadata } from "../utils/metadata/homeMetadata";
import { homeSchema } from "../utils/metadata/Schemas";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Hero from "./components/Hero/Hero";
import LoaderWrapper from "./components/Loader/LoaderWrapper";
import Overlay from "./components/Loader/Overlay";
import WorksSection from "./components/Works/WorksSection";
import Footer from "./components/Footer/Footer";
import { works } from "./data";
// import Loader from "./components/Loader/Loader";

export const metadata: Metadata = homeMetadata;

const Home = async () => {

  return (
    <>
      <Hero />
      <Overlay />
      <LoaderWrapper />
      <About />
      <WorksSection works={works} />
      <Expertise />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </>
  );
};

export default Home;
