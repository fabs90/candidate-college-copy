import LampOn from "@/components/event/particle/LampOn";
import Circle from "@/components/event/particle/Circle";
import BackCircle from "@/components/event/particle/BackCircle";
import TickCicle from "@/components/event/particle/TickCicle";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="block md:flex px-5 relative justify-center pt-28  items-center  md:max-w-6xl  md:mx-auto bg-primary min-h-screen ">
      <div className="w-full md:w-4/6">
        <h1 className="font-bold text-[36px] leading-[45px] md:text-start text-center md:text-[68px] md:leading-[84px] text-white">
          Discover Various Events for Your Shining Future
        </h1>
        <p className="md:text-start md:max-w-none max-w-[80%] md:mx-0 mx-auto text-center text-[12px] md:text-[20px] mt-6 text-[rgba(144,163,191,1)]">
          Candidate College Presenting a variety of productive activities done
          online to increase knowledge and new opportunities.
        </p>

        <Link href={"#event-main"}>
          <button
            type="button"
            className="flex px-8 py-4 mt-6 gap-2 md:mx-0 mx-auto font-semibold rounded-[30px] justify-center bg-secondary items-center text-primary"
          >
            See All Events <FaArrowDownLong />
          </button>
        </Link>
      </div>
      <div className="w-full  max-w-[500px] md:max-w-none md:mx-0 mx-auto md:w-3/6 md:my-0 mb-24 mt-32  relative flex justify-center items-center">
        <TickCicle />
        <LampOn />
        <Circle />
        <BackCircle />
        <Image
          src={"/main-image-event.png"}
          width={0}
          className="w-[90%] absolute bottom-2 left-0"
          height={0}
          alt="Event Image"
          title="Event Image"
        />
      </div>
    </section>
  );
}
