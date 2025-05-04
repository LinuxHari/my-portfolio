import { description, keywords } from "./homeMetadata";

export const homeSchema = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "Hariharan Manohar",
  url: "https://linuxhari-portfolio.vercel.app",
  description,
  sameAs: "https://linuxhari-portfolio.vercel.app",
  author: {
    "@type": "Person",
    name: "Hariharan Manohar",
    url: "https://linuxhari-portfolio.vercel.app",
  },
  inLanguage: "en",
  copyrightYear: 2025,
  genre: "http://vocab.getty.edu/aat/300179434",
  headline: "Software engineer specialized in web development",
  keywords,
  locationCreated: "Tamil Nadu",
};