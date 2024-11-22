import React, { useState } from "react";
import Link from "next/link";

// Component
const CardPopularArticle = (props: any) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div
      key={props.number}
      className={`bg-primary w-[330px] h-[172px] rounded-xl relative ${
        props.number % 2 == 0
          ? "lg:mr-auto xxsm:ml-auto"
          : "lg:ml-auto xxsm:mr-auto"
      }`}
      onMouseEnter={() => setIsHovered(`${props.rowIndex}-${props.index}`)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <Link href={`/articles/${props.slug}`}>
        {/* Article Content  */}
        <div
          className={`flex lg:flex-row p-5 gap-x-5 transition-opacity duration-500 ease-in-out ${
            isHovered === `${props.rowIndex}-${props.index}`
              ? "opacity-0"
              : "opacity-100"
          }`}
        >
          {/* No */}
          <div className="text-3xl text-white/[.50] font-bold pt-2">
            {props.number}
          </div>
          {/* Content */}
          <div className="flex flex-col gap-y-8">
            {/* Title */}
            <p className="text-white font-semibold h-20">{props.title}</p>
            {/* Desc */}
            <p className="text-xs text-[#90A3BF]">
              {props.duration} Min Read | {props.date} | {props.author}
            </p>
          </div>
        </div>

        {/* Article Cover */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered !== `${props.rowIndex}-${props.index}`
              ? "opacity-0"
              : "opacity-100"
          }`}
        >
          <div className="flex justify-center">
            <img
              src={`/uploads/${props.cover_landscape}`}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardPopularArticle;
