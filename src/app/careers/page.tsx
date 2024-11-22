"use client";
import { Navbar, Footer } from "@/components";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper-careers.css";
import SearchIconNew from "@/components/icons/SearchIconNew";
import CaretGreyIcon from "@/components/icons/CaretGreyIcon";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import ArrowRight from "@/components/icons/ArrowRight";

const Careers = () => {
  const careers = [
    { id: 1, url: "/decoration/life-at-cc (1).jpg" },
    { id: 2, url: "/decoration/life-at-cc (2).jpg" },
    { id: 3, url: "/decoration/life-at-cc (3).jpg" },
    { id: 4, url: "/decoration/life-at-cc (4).jpg" },
    { id: 5, url: "/decoration/life-at-cc (5).jpg" },
    { id: 6, url: "/decoration/life-at-cc (6).jpg" },
    { id: 7, url: "/decoration/life-at-cc (7).jpg" },
  ];

  return (
    <main className="bg-white w-full h-full overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center relative h-fit md:h-screen overflow-hidden">
        <h1 className="mx-7 font-semibold text-white text-[36px] md:text-[60px] md:w-[90%] text-center md:leading-[100%] leading-[150%]">
          Explore your dream job destination!
        </h1>

        <form action="" className="mt-[42px] flex space-x-6">
          <div className="flex flex-col md:flex-row w-full mx-7 items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 bottom-2 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIconNew />
              </div>
              <input
                className="w-full mb-2 md:w-[425px] h-[52px] md:mr-6 rounded-[50px] pl-[40px] py-1"
                type="text"
                placeholder="Masukkan kata kunci"
              />
            </div>

            <div className="flex w-full gap-2 mb-2">
              <div className="relative w-full">
                <select
                  className="w-full md:w-[216px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border"
                  name=""
                  id=""
                >
                  <option value="">Department</option>
                </select>
                <div className="absolute inset-y-0 top-1 right-2 md:right-5 flex items-center pointer-events-none">
                  <CaretGreyIcon />
                </div>
              </div>

              <div className="relative w-full">
                <select
                  className="w-full md:w-[153px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border"
                  name=""
                  id=""
                >
                  <option value="">Divisi</option>
                </select>
                <div className="absolute inset-y-0 top-1 right-5 md:right-7 flex items-center pointer-events-none">
                  <CaretGreyIcon />
                </div>
              </div>
            </div>
            <button
              className="bg-secondary w-full lg:w-[92px] h-[52px] rounded-[50px] px-5"
              type="submit"
            >
              Cari
            </button>
          </div>
        </form>
      </section>

      {/* Akhir Hero Section */}

      {/* Open Position Section */}
      <section className="w-full mb-[72px] flex flex-col justify-center items-center relative bottom-[72px] lg:mt-[96px] lg:bottom-[220px]">
        <h2 className="relative right-[80px] lg:right-[240px] lg:text-[32px] lg:leading-10 text-[#90A3BF]">
          All Open Positions
        </h2>

        <div className="mt-6 w-full  md:w-[972px] h-full rounded-[50px] pt-[42px] pb-8 bg-white">
          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                Front-end Developer
              </h3>
              <div className="flex items-center">
                <BriefCasePrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <DotPrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <ArrowRight />
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                Back-end Developer
              </h3>
              <div className="flex items-center">
                <BriefCasePrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <DotPrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <ArrowRight />
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                QA Analyst (WFH)
              </h3>
              <div className="flex items-center">
                <BriefCasePrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <DotPrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <ArrowRight />
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                UI/UX Designer
              </h3>
              <div className="flex items-center">
                <BriefCasePrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <DotPrimaryIcon />

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <ArrowRight />
            </div>
          </div>

          <h4 className="text-primary flex items-center justify-center font-bold text-center text-[14px] lg:text-[22px] leading-[28px] mb-12 mt-6">
            <a href="#">View more jobs</a>
            <div className="relative top-1 ml-3">
              <ArrowRight />
            </div>
          </h4>
        </div>
      </section>
      {/* AKhir Open Position Section */}

      {/* Life at CC Section */}
      <section className="w-full h-full bg-white flex flex-col lg:flex-row-reverse justify-center relative bottom-[80px] items-center">
        {/* image */}
        <div className="w-[327px] h-[296px] rounded-[25px] ">
          <img
            className="w-full h-full object-cover rounded-[25px]"
            src="https://i.postimg.cc/4yDrKs43/redd-f-5-U-28ojjgms-unsplash.jpg"
            alt="Life at CC"
          />
        </div>

        {/* text */}
        <div className="w-full h-full p-[48px] lg:w-[51%]">
          <h2 className="text-primary text-[28px] leading-9 text-center lg:text-start lg:text-[32px] font-bold mt-10 mb-6">
            Explore Life at CC
          </h2>

          <p className="text-[16px] text-black lg:text-[20px] leading-6 font-normal tracking-[0.5%] mb-6">
            Our core philosophy is people over process. Our culture has been
            instrumental to our success and has helped us attract and retain
            stunning colleagues, making work here more satisfying.
          </p>

          <div className="w-[150px] rounded-[50px] flex justify-start items-center bg-secondary">
            <a href="" className="px-4 py-3 text-[14px]">
              Read More
            </a>
            <div className="relative top-[2px] ml-3">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Life at CC Section */}

      {/* Slider life at CC Section */}
      <section className="w-full h-full bg-white md:px-[70px] px-5 py-[70px] relative bottom-[80px]">
        <h2 className="text-primary xl:text-[36px] text-[28px] font-semibold text-center pt-[10px] mb-6">
          Life at CC
        </h2>

        <div className="mt-[55px] mx-auto mb-0 rounded-[25px]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 10,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="swiper_container"
          >
            {careers.map((careers, index) => (
              <SwiperSlide className="!w-[183px] !h-[130px] lg:!w-[522px] lg:!h-[371px] relative">
                <img
                  src={careers.url}
                  key={index}
                  alt="slide_image"
                  className="w-[183px] h-[130px] lg:!w-[522px] lg:!h-[371px] object-cover shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)] rounded-[16px]"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[0%] lg:!left-[5%] !translate-x-[40%]">
                <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
              </div>
              <div className="swiper-button-next slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[95%] lg:!left-[92%] !translate-x-[-55%]">
                <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>
      {/* Akhir Slider life at CC Section */}

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Careers;
