"use client";
import { CTA, Footer, Navbar } from "@/components";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import axios from "axios";
import CardItemLandscape from "@/components/CardItemLandscape";

import { formatDate } from "@/utils/time";
import HeroSection from "@/components/event/HeroSection";

const Programs = () => {
  const [isShowAllArticles, setIsShowAllArticles] = useState<boolean>(false);
  const [isSeeLatest, setIsSeeLatest] = useState<boolean>(false);
  const [currentIndexSlider, setCurrentIndexSlider] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [categories, setCategories] = useState<any[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] =
    useState<boolean>(false);
  const loadingContent = [1, 2, 3, 4, 5, 6];

  const fetchCategories = async () => {
    setIsLoadingCategories(true);

    try {
      const response = await axios.get(`api/event/categories`);

      setCategories(response.data.data);
      setIsLoadingCategories(false); // After setting the data, set isLoading to false
    } catch (error) {
      console.error(error);
    }
  };

  const [events, setEvents] = useState<any[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState<boolean>(false);
  const loadingContents = [1, 2, 3, 4, 5, 6];

  const fetchEvents = async () => {
    setIsLoadingEvents(true);

    try {
      const response = await axios.get(`api/events?count=100`);

      setEvents(response.data.data);
      setIsLoadingEvents(false); // After setting the data, set isLoading to false
    } catch (error) {
      console.error(error);
      setIsLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchEvents();
  }, []);

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="Events" isDetail={false} />

      {/* Hero */}
      <HeroSection />

      {/* Events */}
      <section
        id="event-main"
        className="flex z-10 relative flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white"
      >
        <div className="flex flex-col md:mx-auto md:max-w-5xl bg-white">
          {/* <div className="overflow-x-auto scrollbar-hide relative">
            <div className="flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide">
              {
                isLoadingCategories ? 
                loadingContent?.map((category, index) => (
                  <ListItem data={category} isLoading={true} onClick={(e: any) => setActiveCategory('')} active={''} />
                ))
                : 
                categories?.map((category, index) => (
                  <ListItem data={category} isLoading={false} onClick={(e: any) => setActiveCategory(category.name)} active={activeCategory} />
                ))
              }
            </div>
          </div> */}

          <div className="flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3">
            {isLoadingEvents
              ? loadingContent?.map((event, index) => (
                  <CardItemLandscape
                    key={index}
                    data={event}
                    type={"Event"}
                    isLoading={true}
                  />
                ))
              : events.map((event, index) => (
                  <Link
                    key={index}
                    href={`/events/${event.slug}`}
                    about={event.name}
                    title={event.name}
                    className={`flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]`}
                  >
                    <Image
                      width={100}
                      height={180}
                      src={`/uploads/${event.cover_landscape}`}
                      alt={event.name}
                      title={event.name}
                      className="w-full h-[178px] md:h-[168px] rounded-xl object-cover"
                      priority
                    />

                    <div className="flex md:flex-1 flex-col gap">
                      <span className="font-semibold text-2xl text-primary">
                        {event.name.length > 40
                          ? event.name.substring(0, 48) + " ..."
                          : event.name}
                      </span>

                      <p className="font-normal text-sm text-gray">
                        {event.snippets.substring(0, 150) + " ..."}
                      </p>

                      <p className="font-normal text-xs text-gray mt-5">
                        On {formatDate(event.start_date_time)} &nbsp; | &nbsp;
                        Regist On {formatDate(event.registration_date_time)}
                      </p>
                    </div>
                  </Link>
                ))}
          </div>

          {/* <div className={`${activeCategory != 'All' ? 'flex flex-col' : 'hidden'}`}>
            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray">
                <h2 className="font-semibold text-2xl md:text-4xl text-primary">{activeCategory}</h2>
            </div>

            <div className="flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3">
              {
                articlesOnPage.map((article, index) => (
                  <div key={index} className={`flex-col gap-2 md:items-center md:gap-5 flex`}>
                    <Image 
                      width={100}
                      height={50}
                      src={article.coverLandscape}
                      alt={article.name}
                      title={article.name}
                      className='w-full md:flex-1 h-full rounded-xl'
                      priority
                    />

                    <div className="flex md:flex-1 flex-col gap">
                        <h3 className="font-semibold text-xl md:text-2xl text-primary">
                          {article.name}
                        </h3>
                        <p className="font-normal text-sm md:text-base text-gray">
                          {article.snippets}
                        </p>

                        <p className="font-normal text-xs text-gray md:mt-5 mt-3">
                          {article.publishedAt} | {article.duration} min read
                        </p>
                      </div>
                  </div>
                ))
              }
            </div>
          </div> */}

          <div
            className={`${
              activeCategory != "All" ? "hidden" : "flex flex-col"
            }`}
          >
            {/* <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Latest</h2>
              <div className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary">
                See all <span className='text-primary text-sm md:text-base'><ArrowForwardRoundedIcon fontSize='inherit' color='inherit' /></span>
              </div>
            </div> */}

            {/* <div className="flex flex-col gap-5 w-full mt-7">
              <JumboItem data={articlesOnPage[currentIndexSlider]} isLoading={true} />

              <div className="md:flex flex-row gap-4 hidden">
                {
                  articlesOnPage.slice(1, articlesOnPage.length - 1).map((article, index) => (
                    <CardItemLandscape key={index} data={article} type='Article' isLoading={true} />
                  ))
                }
              </div>

              <div className="flex flex-row gap-1 md:hidden items-center justify-center w-full">
                {
                  articlesOnPage.map((article, index) => (
                    <div onClick={(e) => setCurrentIndexSlider(index)} className={`flex  p-[5px] h-2 ${currentIndexSlider == index ? 'w-8 bg-secondary' : 'w-2 bg-primary'} rounded-full cursor-pointer`}></div>
                  ))
                }
              </div>
            </div> */}

            {/* <section className="my-14 w-full rounded-xl bg-primary h-[350px]"></section> */}

            {/* <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-6">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">External Programs</h2>
              <div className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary">
                See all <span className='text-primary text-sm md:text-base'><ArrowForwardRoundedIcon fontSize='inherit' color='inherit' /></span>
              </div>
            </div> */}

            {/* <section className="w-full h-full bg-white py-10 md:pt-10 md:pb-2 flex flex-col gap-9 overflow-hidden">
              <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 no-scrollbar scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                <div className="flex flex-row gap-4 no-scrollbar scrollbar-hide" style={{ minWidth: `${articlesOnLanding.length * 22}rem`, }}>
                  {articlesOnLanding.map((article, index) => (
                    <CardItem key={index} data={article} type={'Programs'} isLoading={true} />
                  ))}
                </div>
              </div>
            </section> */}

            {/* <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-16">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Internal Programs</h2>
              <div className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary">
                See all <span className='text-primary text-sm md:text-base'><ArrowForwardRoundedIcon fontSize='inherit' color='inherit' /></span>
              </div>
            </div> */}

            {/* <section className="w-full h-full bg-white py-10 md:py-10 flex flex-col gap-9 overflow-hidden">
              <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 no-scrollbar scrollbar-hide" style={{ scrollbarWidth: "none" }}>
                <div className="flex flex-row gap-4 no-scrollbar scrollbar-hide" style={{ minWidth: `${articlesOnLanding.length * 22}rem`, }}>
                  {articlesOnLanding.map((article, index) => (
                    <CardItem key={index} data={article} type={'Programs'} isLoading={true} />
                  ))}
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Programs;
