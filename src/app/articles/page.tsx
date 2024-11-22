"use client";
import { CTA, CardItem, Footer, ListItem, Navbar } from "@/components";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { articlesOnPage } from "@/data/articleData";
import axios from "axios";
import CardItemLandscape from "@/components/CardItemLandscape";
import JumboItem from "@/components/JumboItem";
import { categoryId } from "@/utils/category";
import ArrowWrapper from "@/components/main/eventSection/molecule/ArrowWrapper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "../../styles/swiper-article-page.css";
import getRandom, { Article } from "@/utils/getRandom";

// Import Static File
import {
  popularArticles,
  popularArticlesDataType,
} from "@/data/popularArticleData";

// Import Function
import { formatDate } from "@/utils/formatDate";
import { formatArticleTitle } from "@/utils/formatArticleTitle";
import { formatName } from "@/utils/formatName";

// Import Component
import CardPopularArticle from "@/components/articles/CardPopularArticle";
import CardLatestArticleLeft from "@/components/articles/CardLatestArticleLeft";
import CardLatestArticleRight from "@/components/articles/CardLatestArticleRight";

// Import Hooks
import { useArticlesData, Articles } from "@/app/hooks/useArticlesData";

// Import Icons
import TimeIcon from "@/components/icons/TimeIcon";

type ArticleType = {
  id: number;
  title: string;
  author: string;
  slug: string;
  category: string;
  cover_landscape: string;
  cover: string;
  body: string;
  snippets: string;
  duration: number;
  view: number;
  created_at: string;
  page: null | string | number;
  count: string;
};

const Articles = () => {
  const [isShowAllArticles, setIsShowAllArticles] = useState<boolean>(false);
  const [isSeeLatest, setIsSeeLatest] = useState<boolean>(false);
  const [currentIndexSlider, setCurrentIndexSlider] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [articles, setArticles] = useState<Article[]>([]);
  const { latestSingleArticle, latestThreeArticles } = useArticlesData();

  const [randomArticles, setRandomArticles] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  const [categories, setCategories] = useState<any[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true);

  const [articlesByCategory, setArticlesByCategory] = useState<any[]>([]);
  const [isLoadingArticleByCategory, setIsLoadingArticleByCategory] =
    useState<boolean>(true);
  const loadingContent = [1, 2, 3, 4, 5, 6];

  const myRef = useRef<HTMLDivElement>(null);
  const scrollToRef = () =>
    myRef.current?.scrollIntoView({ behavior: "smooth" });

  const [currentIndexReadInsightful, setCurrentIndexReadInsightful] =
    useState<number>(0);

  // Used to get all articles data
  const fetchAllArticles = async () => {
    try {
      const response = await axios.get("/api/articles");
      setAllArticles(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArticleByCategory = async () => {
    setIsLoadingArticleByCategory(true);

    const id = categoryId(activeCategory, categories);

    try {
      const response = await axios.get(`/api/article/categories/${id}`);

      setArticlesByCategory(response.data.data.articles);

      setTimeout(() => {
        setIsLoadingArticleByCategory(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  const activeCategoryHandler = (category: string) => {
    setActiveCategory(category);
  };

  const fetchArticles = async () => {
    setIsLoadingArticles(true);

    try {
      const response = await axios.get(`/api/articles?count=10`);

      const sortedArticles: ArticleType[] = response.data.data;

      setArticles(sortedArticles);
      setRandomArticles(getRandom(sortedArticles, 10));
      setIsLoadingArticles(false);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  const fetchCategories = async () => {
    setIsLoadingCategories(true);

    try {
      const response = await axios.get(`/api/article/categories`);

      setTimeout(() => {
        setCategories(response.data.data);
        setIsLoadingCategories(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  // Used to sort articles data based on largest views
  const getMostViewedArticles = (arr: any[], n: any) => {
    const sortedArticles = arr.sort((a: any, b: any) => {
      return b.view - a.view;
    });

    return sortedArticles.slice(0, n);
  };

  // Used to format number of articles cards per row and simultaneously render cards
  const renderPopularArticles = () => {
    const mostViewed = getMostViewedArticles(allArticles, 10);

    const cardsPerRow = [3, 2, 3, 2];
    let currentIndex = 0;
    let number = 1;

    return cardsPerRow.map((numCards, rowIndex) => {
      let rowCards = [];

      rowCards = mostViewed.slice(currentIndex, currentIndex + numCards);
      currentIndex += numCards;

      return (
        <div
          key={rowIndex}
          className="flex lg:flex-row xxsm:flex-col lg:gap-2 xxsm:gap-4 lg:mt-0 xxsm:-mt-[22px]"
        >
          {rowCards.map((article: popularArticlesDataType, index: number) => (
            <CardPopularArticle
              number={number++}
              rowIndex={rowIndex}
              index={index}
              title={formatArticleTitle(article.title, 9)}
              duration={article.duration}
              date={formatDate(article.created_at)}
              author={formatName(article.author)}
              cover_landscape={article.cover_landscape}
              slug={article.slug}
            />
          ))}
          ;
        </div>
      );
    });
  };

  useEffect(() => {
    fetchAllArticles();
    fetchArticles();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchArticleByCategory();
  }, [activeCategory]);

  return (
    <main className="bg-primary h-full w-full">
      {/* Navbar */}
      <Navbar
        className="animate__animated animate__fadeInDownBig"
        active="Articles"
        isDetail={false}
      />

      {/* Hero */}
      <section className="flex overflow-hidden relative flex-col w-full h-auto min-h-full justify-center bg-[url('/decoration/hero-section-background.png')] bg-cover">
        <div className="flex flex-col lg:mx-32 xsm:mx-10 xxsm:mx-8 lg:mt-40 xsm:mt-44 xxsm:mt-32 mb-20">
          {/* Title */}
          <div className="flex">
            <h1 className="text-right font-bold lg:text-6xl xsm:text-5xl xxsm:text-3xl lg:pl-[200px] lg:leading-[5rem] xsm:leading-[4rem] xxsm:leading-[2.6rem] animate-slideRight text-white">
              Find Insightful Articles To Make You More{" "}
              <span className="text-secondary">Thoughtful</span> And Full Of New{" "}
              <span className="text-[#5EACDD]">Knowledge.</span>
            </h1>
          </div>

          {/* Sub Title */}
          <div className="flex flex-row lg:pr-[520px] xsm:pr-[100px] xxsm:pr-[40px] lg:-mt-[30px] xsm:mt-[140px] xxsm:mt-[120px] gap-x-8 lg:items-start xsm:items-center xxsm:items-end">
            {/* Button */}
            <div className="flex flex-col justify-center items-center lg:gap-y-8 xsm:gap-y-10 xxsm:gap-y-8">
              <div className="bg-white w-[0.8px] lg:h-28 xsm:h-20 xxsm:h-20 rounded-lg"></div>
              <button
                className="w-16 h-16 border-[1px] border-white rounded-full text-center text-white"
                title="Click to scroll down"
                onClick={scrollToRef}
              >
                Scroll
              </button>
            </div>
            {/* Desc */}
            <div className="flex flex-col lg:gap-y-11 xsm:gap-y-6 xxsm:gap-y-12">
              <p className="text-gray lg:text-[15px] xsm:text-[15px] xxsm:text-[13px] animate-slideRight">
                Candidate College can help you explore your potential and gain a
                comprehensive understanding, make you discover your dream
                education system, and help you get one step closer to your
                dreams, And make you shine brighter.
              </p>
              <p className="text-white font-semibold lg:text-2xl xsm:text-2xl xxsm:text-xl lg:pt-0 lg:pb-0 xsm:pt-12 xsm:pb-10 xxsm:pt-2 xxsm:pb-5 ">
                Latest Article
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="flex flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white">
        {/* Latest */}
        <div
          ref={myRef}
          className="flex flex-col md:mx-auto md:max-w-5xl bg-white"
        >
          <div className="overflow-x-auto scrollbar-hide relative">
            <div className="flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide">
              {isLoadingCategories
                ? loadingContent?.map((category, index) => (
                    <ListItem
                      key={index}
                      data={category}
                      isLoading={true}
                      onClick={(e: any) => setActiveCategory("")}
                      active={""}
                    />
                  ))
                : categories?.map((category, index) => (
                    <ListItem
                      key={index}
                      data={category}
                      isLoading={false}
                      onClick={(e: any) => activeCategoryHandler(category.name)}
                      active={activeCategory}
                    />
                  ))}
            </div>
          </div>

          <div
            className={`${
              activeCategory != "All" ? "flex flex-col" : "hidden"
            }`}
          >
            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">
                {activeCategory}
              </h2>
            </div>

            {/* Articles */}
            {articlesByCategory.length == 0 ? (
              <div className="w-full h-fit py-10 flex items-center justify-center">
                <div className="flex flex-col gap-2">
                  <Image
                    src="/decoration/empty.png"
                    title="Empty Article Decoration"
                    alt="Empty Article Decoration"
                    width={0}
                    height={0}
                    className="w-[25rem] h-[25rem] object-contain mx-auto"
                    priority
                  />
                  <p className="text-gray text-base text-center">
                    No Article Available on This Category
                  </p>
                </div>
              </div>
            ) : activeCategory != "All" ? (
              <div className="flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3">
                {isLoadingArticleByCategory
                  ? loadingContent?.map((article, index) => (
                      <CardItemLandscape
                        key={index}
                        data={article}
                        type={"Article"}
                        isLoading={true}
                      />
                    ))
                  : articlesByCategory
                      .slice(0)
                      .reverse()
                      .map((article, index) => (
                        <CardItemLandscape
                          key={index}
                          data={article}
                          type={"Article"}
                          isLoading={false}
                        />
                      ))}
              </div>
            ) : null}
          </div>

          <div
            className={`${
              activeCategory != "All" ? "hidden" : "flex flex-col"
            }`}
          >
            {/* Filter Articles by Category */}
            <div className="flex flex-row items-center justify-between pb-6">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">
                Latest
              </h2>
              <Link
                href="/articles/latest"
                title="Latest Articles"
                about="Latest Articles"
                className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary"
              >
                See all{" "}
                <span className="text-primary text-sm md:text-base">
                  <ArrowForwardRoundedIcon fontSize="inherit" color="inherit" />
                </span>
              </Link>
            </div>

            {/* Latest Articles */}
            <div className="flex lg:flex-row xxsm:flex-col py-2 lg:gap-4 xxsm:gap-10">
              {/* Row 1 */}
              {latestSingleArticle.map((data: Articles, index: number) => (
                <CardLatestArticleLeft
                  index={index}
                  cover_landscape={data.cover_landscape}
                  slug={data.slug}
                  title={data.title}
                  duration={data.duration}
                  created_at={formatDate(data.created_at)}
                />
              ))}
              {/* Row 2 */}
              <div className="flex flex-col lg:gap-2 xxsm:gap-6 lg:px-0 xxsm:px-1">
                {latestThreeArticles.map((data: Articles, index: number) => (
                  <CardLatestArticleRight
                    index={index}
                    slug={data.slug}
                    title={data.title}
                    duration={data.duration}
                    created_at={formatDate(data.created_at)}
                    author={formatName(data.author)}
                    cover_landscape={data.cover_landscape}
                  />
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="flex flex-col pt-14 pb-20" ref={myRef}>
              {/* Title */}
              <h1 className="text-primary text-2xl font-bold lg:mb-10 xxsm:mb-16">
                Popular Article
              </h1>
              {/* Card */}
              <div className="flex flex-col lg:justify-center lg:items-center lg:gap-4 xxsm:gap-0 md:px-36 xxsm:px-6">
                {renderPopularArticles()}
              </div>
            </div>

            {/* Read Insightful Articles */}
            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-16">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">
                Read Insightful Articles
              </h2>
              <Link
                href="/articles/read-insightful-articles"
                title="Read Insightful Articles"
                about="Read Insightful Articles"
                className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary"
              >
                See all{" "}
                <span className="text-primary text-sm md:text-base">
                  <ArrowForwardRoundedIcon fontSize="inherit" color="inherit" />
                </span>
              </Link>
            </div>

            {/* Articles */}
            <section className="w-full h-full bg-white py-10 md:py-10 flex flex-col gap-9 overflow-hidden">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                  // Adjust the number of slides per view for different screen widths
                  // When the screen width is less than 640px (typical mobile width), show only 1 slide
                  0: {
                    slidesPerView: 1,
                  },
                  // For larger screens, revert to 3 slides per view
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {isLoadingArticles
                  ? loadingContent?.map((article, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer">
                          <div className="rounded-lg w-[22rem] h-[22rem] bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>

                          <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                            <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-3"></div>

                            <div className="flex flex-col gap-1 w-full">
                              <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                              <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                              <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                              <div className="w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                            </div>

                            <Link
                              href="/articles"
                              title="Read More"
                              about="Read More"
                              className="bg-secondary text-transparent font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5 bg-gradient-to-r from-yellow-200 to-yellow-300 animate-pulse"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  : randomArticles?.map((article, index) => (
                      <SwiperSlide key={index} className="pb-6">
                        {/* Container */}
                        <div className="flex flex-col lg:w-[19rem] xxsm:w-[20rem] h-[29rem] bg-white rounded-xl shadow-xl cursor-pointer">
                          {/* Image */}
                          <div>
                            <Image
                              src={`/uploads/${article.cover}`}
                              alt={article.title}
                              title={article.title}
                              width={0}
                              height={0}
                              className="lg:w-[22rem] xxsm:w-[20rem] h-[14rem] rounded-t-lg object-cover"
                            />
                          </div>
                          {/* Content */}
                          <div className="flex flex-col p-4 gap-2">
                            {/* Title */}
                            <div className="text-primary font-bold text-lg h-16">
                              {formatArticleTitle(article.title, 5)}
                            </div>
                            {/* Desc */}
                            <div className="text-[#797979] font-normal text-sm h-20">
                              {formatArticleTitle(article.snippets, 13)}
                            </div>
                            <div className="flex flex-row justify-between">
                              {/* Created At */}
                              <div className="flex flex-row items-center gap-2">
                                <TimeIcon
                                  width="18"
                                  height="18"
                                  stroke="#797979"
                                />
                                <div className="text-[#797979] text-sm">
                                  {formatDate(article.created_at)}
                                </div>
                              </div>
                              {/* Read More */}
                              <Link href={`/articles/${article.slug}`}>
                                <div className="text-primary text-sm font-bold px-5 py-2 rounded-full bg-secondary">
                                  Read More
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
              </Swiper>
              <div className="flex flex-row gap-1 items-center justify-center w-full">
                {articles.slice(0, 4).map((_, index) => (
                  <div
                    key={index}
                    onClick={(e) =>
                      setCurrentIndexReadInsightful((prev) => index)
                    }
                    className={`flex  p-[5px] h-2 ${
                      currentIndexReadInsightful == index
                        ? "w-8 bg-secondary"
                        : "w-2 bg-[#B9B9B9]"
                    } rounded-full cursor-pointer`}
                  ></div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Articles;
