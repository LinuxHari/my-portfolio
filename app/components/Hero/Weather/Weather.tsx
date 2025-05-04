"use client";

import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAnimationStore } from "../../../../utils/store";

type WeatherProps = {
  temp: number;
  weather: string;
  icon: string;
};

const Weather: FC<WeatherProps> = ({ temp, weather, icon }) => {
  const weatherScopeRef = useRef<HTMLDivElement | null>(null);
  const weatherRef = useRef<HTMLDivElement | null>(null);
  const { normal } = useAnimationStore();

  useEffect(() => {
    if (!weather || !weatherRef.current || !weatherScopeRef.current) return;
  
    const scope = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          const width = weatherRef.current?.offsetWidth ?? 0;
          const height = weatherRef.current?.offsetHeight ?? 0;
          weatherScopeRef.current!.style.width = `${width}px`;
          weatherScopeRef.current!.style.height = `${height}px`;
        },
      });
  
      tl.set(weatherRef.current, { opacity: 0 })
        .to(weatherRef.current, {
          opacity: 0,
          top: 20,
          duration: normal,
          ease: "circ.out",
        })
        .set(weatherRef.current, { top: 0 })
        .to(weatherRef.current, {
          opacity: 0,
          top: -20,
          duration: normal,
          ease: "circ.out",
        })
        .to(weatherRef.current, {
          opacity: 1,
          top: 0,
          duration: normal,
          ease: "circ.out",
        });
  
      return () => scope.revert();
    }, weatherScopeRef);
  }, [normal, weather]);  

  useEffect(() => {
    const weatherWidth = weatherRef.current?.offsetWidth;
    const weatherHeight = weatherRef.current?.offsetHeight;
    if (weatherWidth && weatherScopeRef.current) {
      weatherScopeRef.current.style.width = `${weatherWidth}px`;
      weatherScopeRef.current.style.height = `${weatherHeight}px`;
    }
  }, []);

  if (!weather) return;
  const temperature = Math.round(temp);

  return (
    <div
      ref={weatherScopeRef}
      className="relative flex h-[12px] items-center justify-center text-nowrap sm:h-[18px]"
    >
      <div ref={weatherRef} className="mr-auto flex items-center w-fit gap-1 lowercase">
        <img src={icon} alt="" className="h-9 w-9" />
        <span className="text-sm sm:text-lg">{temperature}°</span>
        <span className="text-sm capitalize sm:text-lg">{weather}</span>
      </div>
    </div>
  );
};
export default Weather;
