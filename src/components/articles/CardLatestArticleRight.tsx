// Import Packages
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Utils
import { formatArticleTitle } from "@/utils/formatArticleTitle";

// Component
const CardLatestArticleRight = (props: any) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div
      className={`bg-primary text-white rounded-[16px] w-[310px] h-[150px] relative cursor-pointer ${
        props.index % 2 == 0
          ? "lg:ml-auto xxsm:mr-auto"
          : "lg:mr-auto xxsm:ml-auto"
      }`}
      key={props.index}
      onMouseEnter={() => setIsHovered(props.index)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <Link href={`articles/${props.slug}`} target="_blank">
        {/* Content */}
        <div
          className={`flex flex-col px-4 py-6 transition-opacity duration-500 ease-in-out ${
            isHovered === props.index ? "opacity-0" : "opacity-100"
          } h-full justify-between`}
        >
          {/* Title */}
          <div className="text-lg font-semibold">
            {formatArticleTitle(props.title, 6)}
          </div>
          {/* Detail */}
          <div className="text-xs text-[#90A3BF]">
            {props.duration} Min Read | {props.created_at} | {props.author}
          </div>
        </div>
        {/* Cover */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered === props.index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/uploads/${props.cover_landscape}`}
            title={props.title}
            alt={props.title}
            width={0}
            height={0}
            quality={70}
            priority={true}
            className="w-[320px] h-full object-fill rounded-[16px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default CardLatestArticleRight;
