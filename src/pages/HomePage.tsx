import Article from "../components/Article";
import articlesStore from "../store/useArticlesStore";
import MobileNavbar from "../components/MobileNavbar";
import DesktopNavbar from "../components/DesktopNavbar";
import Section from "../components/Section";
import Header from "../components/Header";
import BiggerBanner from "../components/BiggerBanner";
import Footer from "../components/Footer";
import TvArticle from "../components/TvArticle";
import PodcastCard from "../components/PodcastCard";
import BottomFooter from "../components/BottomFooter";

const HomePage = () => {
  const {
    urbanRenewal,
    investmentsSection,
    renewalUrban,
    realEstateTV,
    leftSection,
    topGridSection,
    realEstateForResidence,
    realEstateAndInvestments,
    opinions,
    housingSection,
    news,
    faceBehind,
    design,
    podcasts,
  } = articlesStore();

  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />

      <main className=" flex flex-col text-right">
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="sr-only">
            מרכז הנדל״ן – חדשות נדל״ן, התחדשות עירונית והשקעות
          </h1>
          <div className="flex mt-10 md:mt-20 w-full mx-auto px-4">
            {/*main right section */}
            <div className="flex flex-col items-center md:w-[74%] ">
              <section className=" md:px-2 ">
                <a href="#" aria-label="המכירה המוקדמת בעיצומה">
                  <img
                    src="/banner1.png"
                    alt="מרכז הנדלן אילת 2025"
                    className="w-400 md:px-2"
                  />
                </a>
              </section>
              <article className="flex flex-col xl:flex-row mt-10 w-[95%]">
                <a href="#" aria-label="התחדשות עירונית ">
                  <img
                    src={urbanRenewal.img}
                    alt={urbanRenewal.alt}
                    className="w-400"
                  />
                </a>
                <div className="md:px-7 mx-5 px-5 py-4 flex flex-col justify-between">
                  <footer className="text-gray-400 hidden md:block">
                    <span className="ml-2"> {urbanRenewal.date}</span>|
                    <span className="mr-2">{urbanRenewal.author}</span>
                  </footer>
                  <h3 className="mt-5 font-bold text-xl md:text-2xl md:mb-7 ">
                    {urbanRenewal.title}
                  </h3>
                  <p>{urbanRenewal.content}</p>
                  <footer className="text-gray-400 mt-5 block md:hidden">
                    <span className="ml-2"> {urbanRenewal.date}</span>|
                    <span className="mr-2">{urbanRenewal.author}</span>
                  </footer>
                </div>
              </article>
              <div className="w-full px-4">
                <ul className="hidden md:grid mt-5 grid-cols-1 md:grid-cols-3 gap-4 ">
                  {[...topGridSection, ...topGridSection].map((item, i) => (
                    <Article
                      key={item.title + i}
                      img={item.img}
                      alt={item.alt}
                      title={item.title!}
                      date={item.date!}
                      author={item.author!}
                    />
                  ))}
                </ul>
              </div>

              <section className="hidden md:block mt-18">
                <a href="#">
                  <img
                    src={"/real-estate-center-snow-banner.png"}
                    alt="מרכז הנדלן על השלג"
                    className="mt-2 px-5 xl:w-400"
                  />
                </a>
              </section>
            </div>
            {/* main left section */}
            <div className="hidden  md:block md:border-r-2 md:border-purple-400 md:px-5 w-[26%] space-y-5">
              <h2 className="font-bold text-lg xl:text-3xl ">
                הכתבות הנצפות ביותר
              </h2>
              <ul className="space-y-16">
                {leftSection.map((item, i) =>
                  item.type === "banner" ? (
                    <article key={item.img + i} className="mt-3">
                      <a>
                        <img src={item.img} alt={item.alt} />
                      </a>
                    </article>
                  ) : (
                    <Article
                      key={item.img + i}
                      img={item.img}
                      alt={item.alt}
                      title={item.title!}
                      date={item.date!}
                      author={item.author!}
                    />
                  )
                )}
              </ul>
            </div>
          </div>

          <section className="md:hidden px-4">
            <ul className="mb-10">
              {Array.from({ length: 3 }, () => investmentsSection).map(
                (item, i) => (
                  <Article
                    key={item.img + i}
                    img={item.img}
                    alt={item.alt}
                    title={item.title}
                    date={item.date}
                    author={item.author}
                  />
                )
              )}
            </ul>
          </section>

          <section className="md:hidden px-4">
            <Header
              img="/icon1.png"
              imgAlt="נדל״ן למגורים"
              buttonStyles="bg-[#E4B200] "
              headerStyles=""
            />
            <ul className="mb-10">
              {Array.from({ length: 3 }, () => housingSection).map(
                (item, i) => (
                  <Article
                    key={item.img + i}
                    img={item.img}
                    alt={item.alt}
                    title={item.title}
                    date={item.date}
                    author={item.author}
                  />
                )
              )}
            </ul>
          </section>

          {/* Main content that will be hidden on smaller screens */}
          <div className="hidden md:grid px-2 w-full mt-30 mb-50 ">
            <Section
              header={{
                img: "/icon1.png",
                imgAlt: "נדל״ן למגורים",
                buttonStyles: "bg-[#E4B200] border-[#E4B200]",
              }}
              articles={Array.from({ length: 4 }, () => realEstateForResidence)}
            />
            <Section
              header={{
                img: "/icon3.png",
                imgAlt: "נדל״ן למגורים",
                buttonStyles: "bg-[#56E6AE] border-[#56E6AE]",
              }}
              articles={Array.from({ length: 4 }, () => renewalUrban)}
            />

            <BiggerBanner />
            <Section
              header={{
                img: "/icon5.png",
                imgAlt: "נדל״ן למגורים",
                buttonStyles: "bg-[#00BFFF] border-[#00BFFF]",
              }}
              articles={Array.from(
                { length: 4 },
                () => realEstateAndInvestments
              )}
            />
            <Section
              header={{
                img: "/icon6.png",
                imgAlt: "נדל״ן למגורים",
                buttonStyles: "bg-[#377D22] border-[#377D22] text-white",
              }}
              articles={Array.from({ length: 4 }, () => opinions)}
            />
            <BiggerBanner />
            <Section
              header={{
                img: "/icon4.png",
                imgAlt: "חדשות הענף",
                buttonStyles: "bg-orange-500 border-orange-500 text-white",
              }}
              articles={Array.from({ length: 4 }, () => news)}
            />
            <Section
              header={{
                img: "/icon7.png",
                imgAlt: "הפנים מאחורי",
                buttonStyles: "bg-[#A31F1F] border-[#A31F1F] text-white",
              }}
              articles={Array.from({ length: 4 }, () => faceBehind)}
            />
            <BiggerBanner />
            <Section
              header={{
                img: "/icon8.png",
                imgAlt: "הפנים מאחורי",
                buttonStyles: "bg-[#F660E5] border-[#F660E5] text-white",
              }}
              articles={Array.from({ length: 4 }, () => design)}
            />
          </div>
        </div>

        {/* TV Section */}
        <div className="bg-[#0B0119] flex flex-col items-center pb-50 mt-10 md:mt-0 pt-20 md:py-20 mx-0">
          <div className="md:w-[70%]">
            <Header
              img="/icon2.png"
              imgAlt="נדלן TV"
              buttonStyles="bg-pink-500 border-gray-400 text-white"
              headerStyles="mx-4"
            />
            <div className="md:flex">
              <article className="bg-[#1c112b] py-2 mx-4">
                <div className="mx-2">
                  <a href="#">
                    <img src="/video1.png" alt="נדלן TV" className="w-full" />
                  </a>
                  <section className="text-white">
                    <Footer
                      date={realEstateTV.date}
                      author={realEstateTV.author}
                      styles="hidden md:block"
                    />
                    <h3 className=" md:text-2xl font-extrabold mt-2 md:mt-5 md:max-w-[25rem]">
                      {realEstateTV.title}
                    </h3>
                    <p className=" mt-2 ">{realEstateTV.content}</p>
                    <Footer
                      date={realEstateTV.date}
                      author={realEstateTV.author}
                      styles="block md:hidden"
                    />
                  </section>
                </div>
              </article>

              <div className="block md:hidden bg-[#1c112b]  my-3  mx-4 ">
                <TvArticle />
              </div>
              <div className="hidden md:flex flex-col justify-between md:my-0">
                {Array.from({ length: 3 }).map((_, i) => (
                  <TvArticle key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* podcasts section */}

        <section className="hidden md:flex flex-col mt-70 mb-70 mx-auto max-w-screen-xl">
          <Header
            img="/icon9.png"
            imgAlt="פודקאסטים"
            buttonStyles="bg-pink-500 border-pink-500 text-white"
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-10 w-[95%] ">
              {podcasts.map((item, i) => (
                <PodcastCard
                  key={item.content + i}
                  img={item.img}
                  alt={item.alt}
                  name={item.name}
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  author={item.author}
                />
              ))}
            </div>
          </div>
        </section>
        <BottomFooter />
      </main>
    </>
  );
};

export default HomePage;
