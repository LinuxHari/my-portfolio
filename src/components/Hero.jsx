import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const joined = new Date("10-09-2023");
  const today = new Date();
  const diffTime = Math.abs(today - joined);
  const experience = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));

  return (
    <section
      className="flex justify-center px-5 md:px-20 py-14 sm:py-24 lg:py-32 min-h-screen"
      id="me"
    >
      <div className="text-white py-16 xl:py-20 flex flex-col items-center gap-y-16 xl:gap-y-28">
        <div className="flex flex-col sm:flex-row justify-center gap-x-16">
          <div className="relative flex justify-center" data-aos="fade-right" data-aos-duration={750} data-aos-delay={300}>
            <div className="bg-[#a372eb] blur-[46px] rounded-full box-content h-56 w-48 xl:h-72 xl:w-64"></div>
            <img
              src="Hero.png"
              alt="Hari"
              className="h-56 w-48 sm:h-full sm:w-full z-10 p-7 absolute inset-0  sm:left-2 top-5 -translate-x-[5%] -translate-y-[10%]"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration={750} data-aos-delay={300}>
            <div className="-translate-y-72 sm:translate-y-0 relative">
              <img
                src="./arrow.png"
                alt="arrow"
                className="invert absolute top-20 sm:top-0 left-0 w-20 -translate-y-14 sm:-translate-x-28 sm:-translate-y-10 opacity-60 sm:rotate-90 -scale-y-100"
              />
              <p className="sm:-translate-x-6 sm:-translate-y-10">
                Hello! I am{" "}
                <span className="text-[#804ab6] text-lg">
                  <TypeAnimation
                    sequence={["Hariharan", 20000]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </div>
            <div className="hidden sm:block space-y-3 text-lg xl:text-xl">
              <p className="underline">A Coder who</p>
              <p className="text-4xl xl:text-5xl leading-snug">
                Judges the code
                <span className="block">
                  by its{" "}
                  <span className="relative text-[#7143a0]">
                    charm
                    <img
                      src="./ellipse.png"
                      className="absolute -top-1 right-0 invert h-16 w-40 xl:h-24 xl:w-52 rotate-[150deg]"
                      alt="ellipse"
                    />
                  </span>
                  ...
                </span>
              </p>
              <p className="text-base">
                Because if the code doesn&apos;t impress you, what can?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-8 md:space-y-14 min-h-[50vh] md:min-h-fit" data-aos="fade-down" data-aos-duration={750} data-aos-delay={300}>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl xl:text-6xl">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer.",
                  4000,
                  "Secure coder.",
                  4000,
                  "UI designer.",
                  4000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base lg:text-lg">
              Currently, I&apos;m a Software Engineer at{" "}
              <a
                href="https://www.travelfika.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                aria-label="travelfika"
              >
                Travelfika
              </a>
              .
            </p>
          </div>
          <div className="md:mr-24">
            <p className="leading-7 lg:leading-10 text-base lg:text-lg">
              A self-taught software engineer, functioning in industry for {experience} months now.
              <br className="hidden md:block" />I make meaningful and delightful
              digital products that create an equilibrium{" "}
              <br className="hidden md:block" /> between user needs and business
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
