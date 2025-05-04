import { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import getExperience from "../getExperience";

const title: string =
  "Hariharan Manohar - Software engineer specialized in web development";
export const description: string =
  `Software Engineer with ${getExperience()} in building user-centered web applications. Skilled in Next.js, Node.js and various web technologies, I enhances digital experiences through innovative, data-driven solutions and seamless functionality.`;
export const keywords: string[] = [
  "next.js",
  "react.js",
  "gsap",
  "software engineer",
  "fullstack developer",
  "ui/ux developer",
  "tiruchirappalli",
];
const authors: Author[] = [
  { name: "Hariharan Manohar", url: "https://linuxhari-portfolio.vercel.app" },
];
const generator: string = "Next.js";
const applicationName: string = "Linux Hari Portfolio";
const creator: string = "Linux Hari";
const robots: string = "index, follow";
const category: string = "Technology & Computing";

export const homeMetadata: Metadata = {
  title,
  description,
  keywords,
  authors,
  generator,
  applicationName,
  creator,
  publisher: creator,
  robots,
  category,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Linux Hari",
    url: `https://linuxhari-portfolio.vercel.app`,
  }
};
