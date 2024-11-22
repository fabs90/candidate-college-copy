import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ArrowBack() {
  return (
    <div className="swiper-button-prev slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full !left-[25%] lg:!left-[40%] !translate-x-[40%]">
      <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
    </div>
  );
}
