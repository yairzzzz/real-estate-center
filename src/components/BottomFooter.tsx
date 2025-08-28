import { ChevronDown } from "lucide-react";
import articlesStore from "../store/useArticlesStore";

const BottomFooter = () => {
  const { socials, footerLinks } = articlesStore();
  return (
    <footer className="w-full text-white hidden md:block">
      <div className="bg-[#5806C7] h-180 w-full flex justify-center">
        <div className="bg-white w-[65%] h-25 ">
          {/* header with icons */}

          <div className="flex justify-between items-center relative mx-5  -top-2">
            <a href="">
              <img src="/icon10.png" alt="" />
            </a>

            <div className="flex gap-3  px-4 py-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5806C7] text-white hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {/* buttons section */}
          <div className="flex justify-between mt-20">
            {footerLinks.map((item, i) => (
              <nav key={item.section + i}>
                <h3
                  className="font-extrabold text-2xl mb-5"
                  key={item.section + i}
                >
                  {item.section}
                </h3>
                <ul className="space-y-5">
                  {item.links.map((link, j) => (
                    <li
                      className="font-extralight text-zinc-300"
                      key={link + j}
                    >
                      <a href="#">{link}</a>
                    </li>
                  ))}
                  <li className="mt-10 text-orange-500 flex items-center cursor-pointer">
                    <span>קרא עוד</span>
                    <span>
                      <ChevronDown className="size-4 mr-1" />
                    </span>
                  </li>
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
      <img src="/bottom-footer.png" alt="" />
    </footer>
  );
};

export default BottomFooter;
