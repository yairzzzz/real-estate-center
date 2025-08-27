import articlesStore from "../store/useArticlesStore";

const TvArticle = () => {
  const { realEstateTV } = articlesStore();
  return (
    <article className=" flex p-2 md:bg-[#1c112b]">
      <a href="">
        <img
          className="flex-shrink-0 w-[24rem]"
          src={realEstateTV.seconadryImg}
          alt={realEstateTV.secondaryAlt}
        />
      </a>
      <div className="mx-3 flex flex-col justify-between">
        <h3 className="text-white text-md">{realEstateTV.secondaryTitle}</h3>

        <div className="text-gray-400 text-xs">
          <span className="ml-1">{realEstateTV.date}</span> |{" "}
          <span className="mr-1">{realEstateTV.author}</span>
        </div>
      </div>
    </article>
  );
};

export default TvArticle;
