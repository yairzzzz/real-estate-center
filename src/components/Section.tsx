import Header from "./Header";
import Article from "./Article";
import type { SectionProps } from "../types/types";

const Section = ({ header, articles }: SectionProps) => {
  return (
    <section className="mt-30">
      <Header {...header} />

      <ul className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {articles.map((item, i) => (
          <Article
            key={item.img + i}
            img={item.img}
            alt={item.alt}
            title={item.title}
            date={item.date}
            author={item.author}
          />
        ))}
      </ul>
    </section>
  );
};

export default Section;
