export type Media = {
    url: string;
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