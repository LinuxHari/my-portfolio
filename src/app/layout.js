import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { canonical, description, keywords, title } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical,
    openGraph: {
      title,
      description,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=McLaren&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="twitter:title"
          content="Welcome to Linux Hari's Portfolio"
        />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio! Here, you’ll find a collection of my work, skills, and projects I’ve poured my passion into. Whether it’s developing sleek, user-friendly applications, crafting efficient backend solutions, or bringing ideas to life through design, each project tells a story of growth and creativity."
        />
        <meta name="google-site-verification" content="-qPnSw8sGMOzoSSxCzsrOqABWVoI59XLVwjgN4wi95c" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
