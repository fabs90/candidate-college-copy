// Import Package
import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"

// Import Utils
import { formatArticleTitle } from "@/utils/formatArticleTitle"

// Component
const CardLatestArticleLeft = (props: any) => {
  return (
    <div className="lg:w-[1360px] xxsm:w-[full] bg-white rounded-[16px] shadow-xl cursor-pointer" key={props.index}>
      <Link href={`articles/${props.slug}`} target="_blank">
        {/* Cover */}
        <div className="overflow-hidden rounded-tr-[16px] rounded-tl-[16px]">
          <Image 
            src={`/uploads/${props.cover_landscape}`}
            title={props.title}
            alt={props.title}
            width={200}
            height={100}
            quality={70}
            priority={true} 
            className="w-full lg:hover:scale-105 xxsm:hover:scale-100 ease-in duration-150"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col text-primary p-4 lg:h-24 xxsm:h-32 justify-between">
          {/* Title */}
          <div className="text-xl font-bold">
            {formatArticleTitle(props.title, 8)}
          </div>
          {/* Description */}
          <div className="text-xs font-normal">
            {props.duration} Min Read | {props.created_at}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardLatestArticleLeft
