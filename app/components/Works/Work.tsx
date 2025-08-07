'use client'

import Link from "next/link";
import { FC, Key, useEffect, useState } from "react";
import { WorkBase } from "../../type";
import { useTheme } from "next-themes";

type WorkProps = {
  work: WorkBase;
  index: Key;
};

const Work: FC<WorkProps> = ({ work, index }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const overlayClass = mounted && theme === "dark" ? "bg-black/30" : "bg-black/20";

  return (
    <Link
      href={work.url}
      key={index}
      data-testid={`homeWork${index}`}
      className="flex items-center justify-center h-96 md:h-[600px] z-10 w-full md:w-[calc(50%-6px)]"
      target="_blank"
    >
      <div
        id="description"
        className="relative z-20 h-full w-full"
      >
        <img
          className="absolute left-small top-small z-20 h-20 w-auto rounded-md object-cover"
          src={work.homeLogo.url}
          alt={work.name}
          width={work.homeLogo.width}
          height={work.homeLogo.height}
        />
        <div className={`absolute inset-0 z-10 rounded-lg ${overlayClass}`}></div>
        <div className="absolute bottom-small left-small z-20 pr-small text-light space-y-2 md:space-y-0">
          <h2 className="md:pb-smallest text-3xl font-bold">{work.role}</h2>
          <h3 className="text-xl">{work.name}</h3>
        </div>
        <img
          className="relative h-full w-full rounded-lg object-cover"
          src={work.homeImage.url}
          alt={work.name}
          width={work.homeImage.width}
          height={work.homeImage.height}
        />
      </div>
    </Link>
  );
};

export default Work;
