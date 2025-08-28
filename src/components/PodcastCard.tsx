import { Headphones, Play } from "lucide-react";
import type { PodcastCardProps } from "../types/types";

const PodcastCard = ({
  img,
  alt,
  name,
  title,
  content,
  date,
  author,
}: PodcastCardProps) => {
  return (
    <article className="flex py-10">
      <div>
        <a href="">
          <img src={img} alt={alt} className="w-50" />
        </a>
      </div>
      <div className="mx-5 w-full flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h3 className="font-bold text-zinc-700 text-2xl">{name} </h3>
            <div className="flex ">
              <button className="cursor-pointer ">
                <Play className="size-5 ml-1" />
              </button>
              <button className="cursor-pointer ">
                <Headphones className="size-5" />
              </button>
            </div>
          </div>
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs mt-3 max-w-85">{content}</p>
        </div>

        <footer className="text-xs text-gray-400">
          <span>פודקסטים</span>
          <span className="mx-1">|</span>
          <span>{date}</span>
          <span className="mx-1">|</span>
          <span> {author}</span>
        </footer>
      </div>
    </article>
  );
};

export default PodcastCard;
