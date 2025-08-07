"use client";

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FC, useRef } from "react";
import Work from "./Work";
import WorkText from "./WorkText";
import { WorkBase } from "../../type";

type WorksSectionProps = {
  works: WorkBase[];
};

const WorksSection: FC<WorksSectionProps> = ({ works }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (): void => {
      const updateHeight = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", updateHeight);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `${scrollRef.current?.offsetHeight}px bottom`,
        pin: true,
        invalidateOnRefresh: true,
        scrub: true,
      });
  
      //@ts-expect-error executed while unmounting
      return () => window.removeEventListener("resize", updateHeight);
      ;
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={scrollRef}
      className="relative flex h-full flex-col items-center justify-center px-small pb-medium"
    >
      <div
        ref={containerRef}
        className="flex h-screen w-full items-center justify-center"
      >
        <WorkText />
      </div>
      <div className="flex h-full w-full flex-wrap gap-5 md:gap-3" id="works">
        {works.map((work, index) => (
          <Work work={work} key={work.id} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
