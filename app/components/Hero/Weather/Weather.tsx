"use client";

import React, { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAnimationStore } from "../../../../utils/store";
import { Cloud, Sun, CloudRain, CloudSnow, Zap, CloudDrizzle, EyeOff } from 'lucide-react';


type WeatherProps = {
  temp: number;
  weather: string;
  weatherCode: number;
};

const Weather: FC<WeatherProps> = ({ temp, weather, weatherCode }) => {
  const weatherScopeRef = useRef<HTMLDivElement | null>(null);
  const weatherRef = useRef<HTMLDivElement | null>(null);
  const { normal } = useAnimationStore();

   const getWeatherIcon = (code: number): JSX.Element => {
    if (code === 0) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code >= 1 && code <= 3) return <Cloud className="w-8 h-8 text-gray-500" />;
    if (code >= 45 && code <= 48) return <EyeOff className="w-8 h-8 text-gray-400" />;
    if (code >= 51 && code <= 57) return <CloudDrizzle className="w-8 h-8 text-blue-400" />;
    if (code >= 61 && code <= 67) return <CloudRain className="w-8 h-8 text-blue-600" />;
    if (code >= 71 && code <= 77) return <CloudSnow className="w-8 h-8 text-blue-200" />;
    if (code >= 80 && code <= 82) return <CloudRain className="w-8 h-8 text-blue-600" />;
    if (code >= 85 && code <= 86) return <CloudSnow className="w-8 h-8 text-blue-200" />;
    if (code >= 95 && code <= 99) return <Zap className="w-8 h-8 text-blue-500" />;
    return <Sun className="w-8 h-8 text-yellow-500" />;
  };


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
        {getWeatherIcon(weatherCode)}
        <span className="text-sm sm:text-lg">{temperature}°</span>
        <span className="text-sm capitalize sm:text-lg">{weather}</span>
      </div>
    </div>
  );
};
export default Weather;
