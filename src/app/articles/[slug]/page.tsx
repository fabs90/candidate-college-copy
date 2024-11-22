"use client";
import React, { useEffect, useState, useRef } from "react";
import { CTA, Footer, Navbar } from "@/components";
import Image from "next/image";
import { articlesOnPage } from "@/data/articleData";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { formatDate } from "@/utils/time";
import Link from "next/link";
import { categoryId } from "@/utils/category";
import CardItemLandscape from "@/components/CardItemLandscape";

// Import Icon
import ViewsIcon from "@/components/icons/ViewsIcon";
import ReadingTimeIcon from "@/components/icons/ReadingTimeIcon";
import AuthorIcon from "@/components/icons/AuthorIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ShareIcon from "@/components/icons/ShareIcon";

// Import Function
import { formatTime } from "@/utils/formatTime";

// Import Component
import SocialSharingButton from "@/components/SocialSharingButton";

const Detail = () => {
  const slug = usePathname().slice(10);
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [isLoadingRelatedArticles, setIsLoadingRelatedArticles] =
    useState<boolean>(true);
  const loadingContents = [1, 2, 3, 4, 5, 6];

  const currentPath = usePathname();
  const articleUrl = `https://candidate-college.vercel.app${currentPath}`;
  const caption = "Check out this awesome article by Candidate College :";

  // Set it to retrive article data randomly
  const getRandomArticles = (arr: any[], n: number) => {
    const randomSorting = arr.sort(() => 0.5 - Math.random());
    return randomSorting.slice(0, n);
  };

  const fetchArticle = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/articles/${slug}`);

      setTimeout(() => {
        setArticle(response.data.data);
        setIsLoading(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchRelatedArticles = async () => {
    setIsLoadingRelatedArticles(true);
    try {
      const allDataResponse = await axios.get("/api/articles");
      const allArticles = allDataResponse.data.data;

      // Take articles data that match category of article being read
      const articleInSameCategory = allArticles.filter((item: any) => {
        return item.category === article.category && item.slug !== article.slug;
      });

      // Retrieve articles data randomly and only up to 3
      const randomArticles = getRandomArticles(articleInSameCategory, 3);

      setTimeout(() => {
        setRelatedArticles(randomArticles);
        setIsLoadingRelatedArticles(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsLoadingRelatedArticles(false);
    }
  };

  // Social Sharing Static Data
  const SocialSharing = [
    {
      id: 1,
      title: "Copy Link",
      desc: "Copy article link",
      articleUrl: articleUrl,
      width: isMobile ? "10" : "16",
      height: isMobile ? "10" : "16",
      Icon: LinkIcon,
      share: "",
    },
    {
      id: 2,
      title: "Share on Twitter",
      desc: "Share article on Twitter",
      articleUrl: "",
      width: isMobile ? "10" : "16",
      height: isMobile ? "10" : "16",
      Icon: TwitterIcon,
      share: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        caption + "\n" + articleUrl
      )}`,
    },
    {
      id: 3,
      title: "Share on Whatsapp",
      desc: "Share article on Whatsapp",
      articleUrl: "",
      width: isMobile ? "10" : "16",
      height: isMobile ? "10" : "16",
      Icon: WhatsappIcon,
      share: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        caption + "\n" + articleUrl
      )}`,
    },
    // {
    //   id: 4,
    //   title: "Share on Instagram",
    //   desc: "Share article on Instagram",
    //   articleUrl: "",
    //   width: isMobile ? "12" : "18",
    //   height: isMobile ? "12" : "18",
    //   Icon: InstagramIcon,
    //   share: "https://www.instagram.com",
    // }
  ];

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  useEffect(() => {
    if (article) {
      fetchRelatedArticles();
    }
  }, [article]);

  // Used to check screen size every time it changes
  const handleResize = () => {
    setIsMobile(window.innerWidth < 400);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <main className="bg-white h-full w-full">
      {/* Navbar */}
      <Navbar active="Articles" isDetail={true} />

      {/* Hero */}
      {isLoading ? (
        <section className="p-16 md:max-w-6xl md:mx-auto pt-32 md:pt-40 h-screen overflow-scroll scrollbar-hide gap-4 px-5 md:px-16">
          <div className="flex flex-col gap-4 md:px-24">
            <div className="flex flex-col gap-4 pb-6 border-b border-b-gray items-center justify-center">
              <div className=" md:w-[50%] md:py-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>

              <div className="flex flex-col gap-1 w-full items-start justity-start md:items-center md:justify-center">
                <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                <div className="w-2/3 py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center pt-2 gap-4 w-full md:justify-between">
              <div className="flex flex-row gap-2 text-gray items-center w-full">
                <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>{" "}
                |{" "}
                <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>{" "}
                |{" "}
                <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              </div>

              <div className="flex flex-row items-center gap-2 w-full md:justify-end md:self-end">
                <p className="text-gray">Share : </p>
                <div className="flex flex-row gap-2">
                  <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[15rem] md:h-[30rem] my-6 rounded-xl bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse object-cover mx-auto"></div>

          <div className="flex flex-col gap-2 w-full">
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            <div className="w-2/3 py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
          </div>
        </section>
      ) : (
        <section className="flex flex-col pt-32 md:pt-40 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-white md:justify-center md:items-center relative h-full">
          <div className="flex flex-col gap-4 md:px-24">
            <div className="flex flex-col gap-4 pb-6 border-b border-b-gray">
              {/* Title */}
              <h1 className="font-bold md:font-semibold text-primary text-3xl md:text-[60px] text-center md:w-[100%] md:leading-[110%] leading-[150%]">
                {article && article.title}
              </h1>

              {/* Snippets */}
              <p className="mt-2 md:mt-3 text-sm md:text-base text-center text-gray px-4 md:px-0 md:w-[100%] leading-[180%]">
                {article && article.snippets}
              </p>

              {/* Created At */}
              <p className="text-[#707070] text-center font-normal m-2">
                {formatDate(article && article.created_at)} |{" "}
                {formatTime(article && article.created_at)}
              </p>
            </div>

            <div className="flex flex-row items-center justify-between w-full pt-2 gap-4">
              <div className="flex flex-row gap-x-4 items-center">
                {/* Views */}
                <div className="flex flex-row gap-x-2 items-center">
                  <ViewsIcon
                    width={isMobile ? "12" : "18"}
                    height={isMobile ? "20" : "26"}
                  />
                  <div className="text-[#707070] text-[10px] md:text-sm font-normal">
                    {article && article.view} Views
                  </div>
                </div>
                {/* Reading Time */}
                <div className="flex flex-row gap-x-2 items-center">
                  <ReadingTimeIcon
                    width={isMobile ? "12" : "18"}
                    height={isMobile ? "20" : "26"}
                  />
                  <div className="text-[#707070] text-[10px] md:text-sm font-normal">
                    {article && article.duration} Min Read
                  </div>
                </div>
                {/* Author */}
                <div className="flex flex-row gap-x-2 items-center">
                  <AuthorIcon
                    width={isMobile ? "12" : "18"}
                    height={isMobile ? "20" : "26"}
                  />
                  <div className="text-[#707070] text-[10px] md:text-sm font-normal">
                    {article && article.author}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 mx-2 relative">
                {/* Share */}
                <div
                  className="flex flex-row gap-x-2 items-center cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setOpen((prevOpen) => !prevOpen)}
                >
                  <ShareIcon
                    width={isMobile ? "12" : "18"}
                    height={isMobile ? "20" : "26"}
                    strokeOpacity={isHovered || open ? "1.0" : "0.5"}
                  />
                </div>
                {/* Pop up Share */}
                {open && (
                  <div className="absolute w-40 md:w-48 top-10 -right-[10px] p-4 bg-white shadow-xl rounded-lg">
                    <div className="flex flex-col gap-y-4">
                      {SocialSharing.map((social, index) => (
                        <SocialSharingButton
                          key={index}
                          articleUrl={social.articleUrl}
                          title={social.title}
                          desc={social.desc}
                          width={social.width}
                          height={social.height}
                          Icon={social.Icon}
                          share={social.share}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Image
            src={`/uploads/${article && article.cover_landscape}`}
            alt="Cover Landscape"
            title="Cover Landscape"
            width={100}
            height={0}
            className="w-full h-full mt-2 rounded-xl object-cover hidden md:block"
          />

          <Image
            src={`/uploads/${article && article.cover}`}
            alt="Cover Landscape"
            title="Cover Landscape"
            width={100}
            height={0}
            className="w-full h-full mt-2 rounded-xl object-cover block md:hidden"
          />

          <div
            className="text-primary text-lg text-justify w-full prose prose-rich-text prose-headings:text-primary prose-strong:text-primary md:pt-10"
            dangerouslySetInnerHTML={{
              __html: article && article && article.body,
            }}
          />

          <div className="flex flex-row items-center justify-between pb-6 mt-10 border-b border-b-gray w-full">
            <h2 className="font-semibold text-2xl md:text-4xl text-primary">
              Related Articles
            </h2>
          </div>

          {/* Articles */}
          <div className="flex flex-col gap-8 md:gap-5 mt-5 md:flex-row md:items-start md:justify-start w-full">
            {isLoadingRelatedArticles
              ? loadingContents
                  .slice(0, 3)
                  .map((article, index) => (
                    <CardItemLandscape
                      data={article}
                      key={index}
                      isLoading={true}
                    />
                  ))
              : relatedArticles
                  .slice(0, 3)
                  .map((article, index) => (
                    <CardItemLandscape
                      data={article}
                      key={index}
                      type="Article"
                      isLoading={false}
                    />
                  ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
