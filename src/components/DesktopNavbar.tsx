import { Search } from "lucide-react";
import articlesStore from "../store/useArticlesStore";

const DesktopNavbar = () => {
  const { navTopItems, navBotItems, socials } = articlesStore();
  return (
    <header className="sticky z-50 shadow-lg h-28 hidden md:flex text-sm">
      <div className="md:hidden xl:block">
        <a href="/">
          <img
            src="/real-estate-center-icon2.png"
            className="h-15 my-6"
            alt="real estate center icon"
          />
        </a>
      </div>
      <div className="w-full">
        <nav className="h-[50%] pr-5 w-full bg-[#5806C7] flex items-center justify-between">
          <ul className=" text-white gap-6 py-2 flex mr-3">
            {navTopItems.map((item, i) => (
              <li key={item + i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="gap-3  px-4 py-2 md:hidden xl:flex ">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </nav>
        <nav className="h-[50%] pr-5 flex items-center justify-between">
          <ul className="  gap-6 py-2 flex mr-3">
            {navBotItems.map((item, i) => (
              <li key={item + i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center w-64 border-2 ml-5 border-orange-500 rounded-full px-3 py-1">
            <Search className="w-4 h-4 text-orange-500" />

            <input
              type="text"
              placeholder="חיפוש"
              className="outline-none text-orange-500 placeholder-orange-500 pr-2"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNavbar;
