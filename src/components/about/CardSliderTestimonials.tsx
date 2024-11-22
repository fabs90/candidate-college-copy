// Import Packages
import { useState } from "react"
import Image from "next/image"

// Import Icons
import QuoteIcon from "@/components/icons/QuoteIcon"
import ArrowIcon from "@/components/icons/ArrowIcon";

// Data Types
interface CardSliderProps {
  width: string,
  height: string,
  index: number,
  testimonialTrue: string,
  testimonialFalse: string,
  image: string,
  name: string,
  position: string,
  division: string,
  batch: number,
}

// Component
const CardSliderTestimonials = ({
  width, 
  height, 
  index, 
  testimonialTrue,
  testimonialFalse, 
  image, 
  name, 
  position, 
  division, 
  batch
} : 
  CardSliderProps
) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [isShowMore, setIsShowMore] = useState<number>(0)
  return (
    <div className="flex flex-col justify-between lg:w-[22rem] xxsm:w-[19rem] lg:h-[30rem] xxsm:h-[30rem] px-6 py-8 bg-white rounded-xl shadow-[2px_2px_12px_2px_rgba(0,0,0,0.1)] lg:gap-6 xxsm:gap-2">
      {/* Content Line 1 */}
      <div className="flex flex-col gap-2">
        {/* Icon */}
        <div className="mb-2">
          <QuoteIcon width={width} height={height} fill="#FFE88B" />
        </div>
        {/* Testimonial */}
        <div className="text-[#547A90] lg:text-[12px] xxsm:text-[11px] font-semibold">
          {isShowMore === index && showMore === true ? (testimonialTrue) :  (testimonialFalse)}
        </div>
        {/* Show More */}
        <div className="flex flex-row items-center gap-1 cursor-pointer" 
             title="Click to show more"
             onClick={() => {setShowMore((data) => !data); setIsShowMore(index)}}>
          <div className="text-[#20526E] lg:text-[12px] xxsm:text-[10px] font-bold">
            Show {showMore && isShowMore === index ? "Less" : "More"}
          </div> 
          <div className="pt-1">
            <ArrowIcon 
              width="16" 
              height="20" 
              stroke="#1B4E6B" 
              direction={showMore && isShowMore === index ? "up" : "down"} />
          </div>
        </div>
      </div>
      {/* Content Line 2 */}
      <div className="flex flex-row items-center gap-4">
        {/* Image */}
        <div>
          <Image 
            src={`/uploads/${image}`}
            alt={name}
            width={0}
            height={0}
            className="w-12 h-12 rounded-full object-cover"
            priority
            />
        </div>
        {/* Name and Position */}
        <div className="flex flex-col gap-1 text-primary">
          {/* Name */}
          <div className="lg:text-sm xxsm:text-[12px] font-bold">{name}</div>
          {/* Positon */}
          <div className="lg:text-xs xxsm:text-[10px] font-medium">{position} {division} Batch {batch}</div>
        </div>
      </div>
    </div>
  )
}

export default CardSliderTestimonials