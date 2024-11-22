<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
=======
"use client";
import { CTA, CardItem, Footer, Navbar } from "@/components";
import Link from "next/link";
import Image from "next/image";
import {
  articleSectionOnLanding,
  eventSectionOnLanding,
  valueSectionOnLanding,
  values,
} from "@/data/staticData";
import { articles, articlesOnLanding } from "@/data/articleData";
import "./scrollable.css";
import { useEffect, useState, useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

import "../styles/swiper-about.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ButtonCountdown from "@/components/main/eventSection/molecule/atom/ButtonCountdown";
import ButtonType from "@/components/main/eventSection/molecule/atom/ButtonType";
import ButtonWrapper from "@/components/main/eventSection/molecule/ButtonWrapper";
import ArrowWrapper from "@/components/main/eventSection/molecule/ArrowWrapper";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import ThunderIcon from "@/components/icons/ThunderIcon";
import StarIcon from "@/components/icons/StarIcon";

export type EventCountdowns = {
  [slug: string]: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState<boolean>(false);

  const [eventStartTime, setEventStartTime] = useState(0); // Initialize with 0 or the actual start time from the API
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventCountdowns, setEventCountdowns] = useState<EventCountdowns>({});
  const loadingContent = [1, 2, 3, 4, 5, 6];

  // Set it to retrive article data randomly
  const getRandomArticles = (arr: any, n: any) => {
    const randomSorting = arr.sort(() => 0.5 - Math.random());
    return randomSorting.slice(0, n);
  };

  const fetchArticles = async () => {
    setIsLoadingArticles(true);
    try {
      const allDataResponse = await axios.get("/api/articles");
      const allArticles = allDataResponse.data.data;

      // Retrieve last uploaded article
      const latestArticle = allArticles[0];

      // Retrive article data randomly and only up to 9
      const randomArticles = getRandomArticles(allArticles.slice(1), 9);

      // Concatenate all article data into single array that has been set up previously
      const combinedArticles = [latestArticle, ...randomArticles];

      setTimeout(() => {
        setArticles(combinedArticles);
        setIsLoadingArticles(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      const eventData = response.data.data; // Get the data from the response
      setEvents(eventData);
      setIsLoadingEvents(false);

      // Calculate and set the countdown for each event
      const now = new Date().getTime();
      const countdowns: { [key: string]: any } = {};

      eventData.forEach((event: any) => {
        // Specify the type of 'event' as 'any'
        const eventStartTime = new Date(event.start_date_time).getTime();
        const timeDifference = eventStartTime - now;

        if (timeDifference <= 0) {
          // Event has started, set countdown to 0
          countdowns[event.slug] = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdowns[event.slug] = {
            days,
            hours,
            minutes,
            seconds,
          };
        }
      });

      setEventCountdowns(countdowns);
    } catch (error) {
      console.error("Error fetching events:", error);
      setIsLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to calculate and update the countdown for a specific event
  const updateCountdownForEvent = (eventSlug: any, startTime: any) => {
    const now = new Date().getTime();
    const timeDifference = startTime - now;

    if (timeDifference <= 0) {
      // Event has started, set countdown to 0
      setEventCountdowns((prevCountdowns) => ({
        ...prevCountdowns,
        [eventSlug]: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      }));
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setEventCountdowns((prevCountdowns) => ({
        ...prevCountdowns,
        [eventSlug]: {
          days,
          hours,
          minutes,
          seconds,
        },
      }));
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    // Update the countdown for each event
    for (const event of events) {
      const eventStartTime = new Date(event.start_date_time).getTime();
      updateCountdownForEvent(event.slug, eventStartTime);
    }

    // Set up an interval to update the countdown every second
    const countdownInterval = setInterval(() => {
      for (const event of events) {
        const eventStartTime = new Date(event.start_date_time).getTime();
        updateCountdownForEvent(event.slug, eventStartTime);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [events]);

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="Home" isDetail={false} />

      {/* Hero */}
      <section className="block md:flex pt-36 px-5 gap-12  md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit min-h-screen md:h-screen">
        {/* dot blue */}
        <div className="w-[35px] bottom-4 left-5 md:bottom-44 lg:bottom-16  xl:-left-12 absolute z-10 bg-[linear-gradient(138.82deg,#B9D4FD_9.95%,#5EACDD_92.12%)] rounded-full h-[35px]" />

        <div className="flex-auto  text-center md:text-start">
          <h1 className="font-semibold inline-block relative text-white text-3xl lg:text-[68px]  lg:leading-[82px] leading-[150%]">
            <div className="absolute right-0 -top-10">
              <StarIcon />
            </div>
            Achieve Quality Equally For All Indonesian Student
          </h1>

          <p className="text-gray lg:leading-[28px] mt-5 text-sm lg:text-base">
            Candidate College is an Education Platform that works to facilitate
            students in Indonesia at home and aboard to achieve a quality
            education system.
          </p>

          <div className="mt-6 flex gap-5">
            <Link
              href="/about"
              title="Get To Know About CC"
              about="Get To Know About CC"
              className="bg-secondary block w-6/12 md:w-4/12 text-primary font-medium text-base rounded-full p-5 text-center cursor-pointer"
            >
              Get To Know
            </Link>

            <Link
              href="/events"
              title="See Events on Candidate College"
              about="See Events on Candidate College"
              className="bg-transparent border border-secondary block w-6/12 md:w-4/12 text-secondary font-normal text-base rounded-full p-5 text-center cursor-pointer"
            >
              See Events
            </Link>
          </div>
        </div>
        <div className="relative   mt-20 md:mt-0 mx-auto flex justify-center items-center md:block w-full flex-1">
          {/* thumbs */}
          <div className="top-12 left-0 md:-left-8 md:top-0 rounded-[5px] w-[178px] absolute items-center gap-2 bg-white/20 border p-2 border-white   flex">
            <div className="w-fit p-2 aspect-square rounded-full bg-secondary">
              <ChecklistIcon />
            </div>
            <div>
              <h3 className="text-secondary font-extrabold text-[14px] leading-[17px]">
                Unlock
              </h3>
              <h4 className="text-white font-medium text-[12px] leading-[15px]">
                Your Potential
              </h4>
            </div>
          </div>
          {/* thumbs */}
          <div className="bottom-6 right-0 xl:-right-12 z-20 rounded-[5px] w-[200px] absolute items-center gap-2 bg-white/20 border p-2 border-white   flex">
            <div className="w-fit px-2 flex items-center justify-center p-1 aspect-square rounded-full bg-secondary">
              <ThunderIcon />
            </div>
            <div>
              <h3 className="text-white font-medium text-[14px] leading-[17px]">
                Take Your Learning to the{" "}
                <span className="text-secondary font-extrabold">
                  Next Level
                </span>
              </h3>
            </div>
          </div>
          {/* dot blue */}
          <div className="w-[35px] left-12 -top-6 md:left-0 md:-top-24 absolute z-10 bg-[linear-gradient(138.82deg,#B9D4FD_9.95%,#5EACDD_92.12%)] rounded-full h-[35px]" />
          {/* dot green */}
          <div className="w-[35px] -bottom-6 right-6 md:-bottom-16 md:right-0 absolute z-10 bg-[linear-gradient(138.82deg,#C7EFC6_7.18%,#539352_81.98%)] rounded-full h-[35px]" />

          <div className="md:w-full w-[230px] h-[300px]  aspect-square md:h-[450px]  lg:h-[510px] bottom-0    rounded-full  absolute z-10">
            <Image className="h-full rounded-full object-cover w-full"
              src={"person.png"}
              height={100}
              width={100}
              alt="Person"
            />
          </div>
          <div className="w-full max-w-[230px] md:max-w-none  aspect-square    md:w-[340px] md:h-[350px] lg:w-[419px] rounded-full lg:h-[426px] bg-secondary" />
        </div>
      </section>

      {/* Values */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-20 flex flex-col gap-9 md:items-center md:justify-center">
        <div className="flex flex-col gap-2 w-full md:items-center md:justify-center">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">
            {valueSectionOnLanding.subtitle}
          </h3>
          <h2 className="text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px] md:text-center">
            {valueSectionOnLanding.title}
          </h2>
          <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
            {valueSectionOnLanding.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center justify-center"
            >
              <Image
                src={`/decoration/${value.image}`}
                title={value.desc}
                alt={value.desc}
                className={`w-[13rem] h-[13rem] ${
                  value.id == 2 || value.id == 3
                    ? "md:w-[20rem] md:h-[20rem]"
                    : "md:w-[18rem] md:h-[18rem]"
                } object-contain`}
                width={0}
                height={0}
              />
              <p className="text-gray text-sm text-center lg:text-base md:w-[80%]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link
            href="/coming"
            title="See Our Events/Programs"
            about="See Our Events/Programs"
            className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4"
          >
            See Candidate College Events
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden">
        <div className="flex flex-col gap-2 w-full md:px-10">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">
            {articleSectionOnLanding.subtitle}
          </h3>
          <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:items-center">
            <h2 className="text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]">
              {articleSectionOnLanding.title}
            </h2>
            <p className="text-gray text-sm lg:text-base md:w-[40%]">
              {articleSectionOnLanding.description}
            </p>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {isLoadingArticles
            ? loadingContent?.map((article, index) => (
                <SwiperSlide>
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
            : articles?.map((article, index) => (
                <SwiperSlide>
                  <Link
                    href={`/articles/${article.slug}`}
                    title="Read More"
                    about="Read More"
                    className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer w-[22rem]"
                  >
                    <Image
                      src={`/uploads/${article.cover}`}
                      alt={article.title}
                      title={article.title}
                      className="rounded-lg w-[22rem] h-[22rem] object-cover"
                      width={0}
                      height={0}
                    />

                    <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                      <h3 className="font-semibold text-base text-primary">
                        {article.title.length > 33
                          ? article.title.substring(0, 33) + "..."
                          : article.title}
                      </h3>
                      <p className="font-normal text-sm text-gray">
                        {article.snippets.substring(0, 150) + "..."}
                      </p>
                      <Link
                        href={`/articles/${article.slug}`}
                        title="Read More"
                        about="Read More"
                        className="bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link
            href="/articles"
            title="Read More Articles"
            about="Read More Articles"
            className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4"
          >
            Read More Articles
          </Link>
        </div>
      </section>

      {/* Events */}
      <section className="flex flex-col w-full h-full bg-white pt-[100px] pb-40">
        <h3 className="text-primary md:px-[70px] xl:text-base text-sm font-normal text-center">
          Our Events
        </h3>
        <h2 className="text-secondary md:px-[70px] xl:text-[40px] text-[35px] font-semibold text-center">
          Join and Develop With Us
        </h2>
        <p className="text-primary text-base md:text-[18px] font-normal leading-6 text-center m-auto lg:w-4/6 md:w-3/4 w-[95%] pt-[15px]">
          Engage in enriching experiences that foster growth. Join us for
          insightful sessions, workshops, and more. Don't miss out!
        </p>

        <div className="mt-[105px] w-full m-auto">
          <Swiper
            slidesPerView={"auto"}
            // spaceBetween={55}
            centeredSlides={false}
            grabCursor={true}
            initialSlide={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="swiper_container !overflow-y-visible flex justify-center"
          >
            {isLoadingEvents
              ? loadingContent.map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="!w-[580px] rounded-[24px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] mx-5 lg:mx-0"
                  >
                    <div className="w-full h-full rounded-[24px] py-5 px-[20px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)]">
                      <div className="flex flex-col md:flex-row lg:flex-row justify-start mb-[60px] lg:mb-[88px] mt-8">
                        <button className="bg-secondary text-primary w-max rounded-[20px] px-6 py-2 text-sm font-semibold lg:mr-4"></button>
                        <button className="bg-secondary text-primary w-max mt-3 xl:mt-0 rounded-[20px] px-6 py-2 text-sm font-semibold"></button>
                      </div>
                      <h5 className="text-[#FFFFFF] xl:text-[26px] text-2xl font-semibold leading-[26px] text-left mb-3"></h5>
                      <p className="text-[#FFFFFF] xl:text-lg text-sm font-normal leading-[26px] text-left mb-8"></p>
                    </div>
                  </SwiperSlide>
                ))
              : events.map((event) => (
                  <SwiperSlide
                    key={event.slug}
                    className="!max-w-[580px] !h-[389px] rounded-[24px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] mx-5 lg:mx-0"
                    style={{
                      backgroundImage: `url(/uploads/${event.cover})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-full h-full rounded-[24px] py-5 px-[20px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)]">
                      <Link href={`/events/${event.slug}`}>
                        <ButtonWrapper
                          event={event}
                          eventCountdowns={eventCountdowns}
                        />
                        <h5 className="text-[#FFFFFF]  text-[24px]  font-semibold leading-[26px] text-left mb-3">
                          <div className="inline sm:hidden">
                            {event.name.substring(0, 48) + "..."}
                          </div>
                          <div className="hidden sm:inline">{event.name}</div>
                        </h5>
                        <p className="text-[#FFFFFF] text-[16px] text-sm font-normal leading-[24px] text-left mb-8">
                          <div className="inline sm:hidden">
                            {event.snippets.substring(0, 32) + "..."}
                          </div>
                          <div className="hidden sm:inline">
                            {event.snippets}
                          </div>
                        </p>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}

            <ArrowWrapper />
          </Swiper>
        </div>
      </section>
      {/* End of New Events */}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export type Event = {
  start_date_time: string;
  slug: string;
  cover: string;
  type: string;
  name: string;
  snippets: string;
};
>>>>>>> 24e0ed8 (mentoring)
