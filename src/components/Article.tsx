import type { ArticleProps } from "../types/types";

const MobileArticle = ({ img, alt, title, date, author }: ArticleProps) => {
  return (
    <li className="mt-3 list-none ">
      <article className="flex md:block">
        <a href="">
          <img src={img} alt={alt} className="w-full" />
        </a>
        <div className=" flex flex-col justify-between w-full px-2">
          <div className="flex items-start justify-center md:h-[5rem]">
            <h2 className="font-semibold text-xs xl:text-[0.9rem] mt-2 max-w-70">
              {title}
            </h2>
          </div>

          <footer className="block md:flex flex-col xl:flex-row text-gray-400 text-xs md:mt-10">
            <span>{date}</span>
            <span className="mx-2">|</span>
            <span>{author}</span>
          </footer>
        </div>
      </article>
    </li>
  );
};

export default MobileArticle;
