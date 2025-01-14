import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { canonical, description, jobTitles, keywords, profiles, title } from "@/data";

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
  openGraph: {
    title,
    description,
  },
  robots: 'index, follow',
  alternates: {
    canonical,
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
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta name="google-site-verification" content="-qPnSw8sGMOzoSSxCzsrOqABWVoI59XLVwjgN4wi95c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hariharan",
              "url": canonical,
              "description": description,
              "sameAs": profiles,
              "jobTitle": jobTitles,
              "worksFor": {
                "@type": "Organization",
                "name": "Travelfika"
              },
              "keywords": keywords
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
