import { StaticImageData } from "next/image";

export type Media = {
    url: StaticImageData;
    height: number;
    width: number;
    fileName?: string;
  };  

export type WorkBase = {
    homeLogo: Media;
    id: string;
    url: string;
    name: string;
    role: string;
    homeImage: Media;
  };