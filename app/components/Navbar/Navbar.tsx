import Link from "next/link";
import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

export enum Position {
  Fixed = "fixed",
}

type NavbarProps = {
  position?: Position;
};

enum LinkItem {
  Home = "Home",
  Works = "Works",
  Skills = "Skills",
  Blogs = "Blogs",
}

enum LinkUrl {
  Home = "#home",
  works = "#works",
  Skills = "#skills",
  Blogs = "https://medium.com/@LinuxHari"
}

type Links = {
  label: LinkItem;
  url: LinkUrl;
  dataCy?: Lowercase<LinkItem>;
};

const internalLinks: Links[] = [
  { label: LinkItem.Home, url: LinkUrl.Home, dataCy: "home" },
  { label: LinkItem.Works, url: LinkUrl.works, dataCy: "works" },
  { label: LinkItem.Skills, url: LinkUrl.Skills, dataCy: "skills" },
  { label: LinkItem.Blogs, url: LinkUrl.Blogs, dataCy: "blogs" },
];

const Navbar: FC<NavbarProps> = ({ position }) => {
  return (
    <nav data-testid="navbar">
      <div
        className={`${position === Position.Fixed ? "fixed h-fit" : "sm:sticky"} top-2 z-10 hidden w-full flex-row-reverse items-start justify-between pl-small pr-small sm:flex-row md:flex`}
      >
        <ul className="flex items-start gap-small">
          {internalLinks.map((link: Links, index: number) => (
            <li key={index}>
              <Link
                data-cy={link.dataCy}
                href={link.url}
                className="text-md font-semibold mix-blend-screen sm:text-xl text-dark dark:text-light transition-colors duration-300"
                 target={link.url.includes("https")? "_blank": "_self"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row-reverse items-start gap-small sm:flex-row md:gap-medium">
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
