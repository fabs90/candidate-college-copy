import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Jost } from "next/font/google";
import { formatEndpointText } from "@/utils/formatEndpointText";
const jost = Jost({ weight: "700", subsets: ["cyrillic"] });
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

export default function DivisionSection() {
  const [isLoadingDivision, setIsLoadingDivision] = useState<boolean>();
  const loadingContent = [1, 2, 3, 4, 5, 6];
  const [divisions, setDivision] = useState<any[]>();

  const fetchAboutDivision = async () => {
    setIsLoadingDivision(true);

    try {
      const response = await axios.get(`api/divisions`);
      console.log(response.data.data);
      setDivision(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingDivision(false);
    }
  };

  useEffect(() => {
    fetchAboutDivision();
  }, []);

  return (
    <section className="w-full h-full bg-white md:px-[70px] px-5 pt-[70px] pb-40">
      <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
        Divisions
      </h3>
      <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
        Divisions Who Support CC
      </h2>
      <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7 text-center m-auto lg:w-3/4 xsm:w-full xxsm:w-full w-[95%] pt-[15px]">
        Here, you will find information related to Divisions actively supporting
        Candidate College. Gain insights into their contributions and how they
        strengthen the community.
      </p>

      <div className="mt-[55px] mx-auto mb-0">
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
          {isLoadingDivision
            ? loadingContent.map((division, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[550px] !h-[550px] relative"
                >
                  <Image
                    height={1}
                    width={1}
                    src={``}
                    alt="slide_image"
                    className="!w-[550px] !h-[550px] object-cover rounded-sm shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)]"
                  />
                </SwiperSlide>
              ))
            : divisions?.map((division, index) => (
                <SwiperSlide key={index} className=" relative">
                  {({ isActive }) => {
                    return (
                      <div className="after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(0,0,0,0.9)] after:to-[rgba(0,0,0,0.2)]">
                        <Link href={`/about/division/${division.slug}`}>
                          {isActive ? (
                            <div className=" uppercase shadow absolute flex z-50 items-end inset-0 p-4 sm:p-10">
                              <span
                                className={`${jost.className} text-white font-medium text-[11px] sm:text-[24px]`}
                              >
                                {division.name}
                              </span>
                            </div>
                          ) : (
                            <div
                              className={`absolute -rotate-90   flex z-50 justify-center  items-center   inset-0 sm:py-20`}
                            >
                              <span
                                className={`${jost.className} text-white tracking-[4px] font-bold text-[11px] sm:text-[24px] uppercase`}
                              >
                                {division.name}
                              </span>
                            </div>
                          )}
                          <Image
                            height={1}
                            width={1}
                            src={`uploads/${division.image}`}
                            key={index}
                            title={formatEndpointText(division.slug)}
                            alt="slide_image"
                            className="!w-[261px] !h-[256px] sm:!w-[550px] sm:!h-[550px] object-cover rounded-sm shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)]"
                          />
                        </Link>
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full left-0">
              <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
            </div>
            <div className="swiper-button-next slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full right-0">
              <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
