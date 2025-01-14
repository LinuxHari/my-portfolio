import { NAV_LINKS } from "@/data";

const NavLinks = ({ className }) => {
  return (
    <div className={`w-fit ${className} duration-500 z-50 rounded-full`}>
      <ul className="grid grid-cols-3 gap-y-0 p-0 border-2 border-white w-60 sm:w-[360px] lg:w-[450px] rounded-full overflow-hidden">
        {NAV_LINKS.map(({ name, url, icon }) => (
          <li
            key={name}
            className="text-white font-medium hover:bg-[#7143a0] py-1 sm:px-5"
          >
            <a
              href={url}
              aria-label={name}
              className="flex gap-x-1 items-center justify-center"
            >
              <img src={icon} className="h-5 w-auto invert sm:hidden" />
              <span className="hidden sm:inline">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
