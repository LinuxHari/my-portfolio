import "./globals.css";
import type { Metadata } from "next";
import { lato } from "../utils/fonts";
import React from "react";
import { ThemeProvider } from "next-themes";
import NavbarMobile from "./components/Navbar/NavbarMobile/NavbarMobile";

export const metadata: Metadata = {
  metadataBase: new URL("https://linuxhari-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={`${lato.className}`}>
      <head>
      <link rel="icon" type="image/svg+xml" href="Logo.png" />
      </head>
      <body
        suppressHydrationWarning
        className="bg-light text-dark dark:bg-dark dark:text-light"
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <NavbarMobile />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
