import { formatDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardItemLandscape: React.FC<any> = ({ data, type, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className={`flex-col gap-2 md:items-center md:gap-2 flex`}>
          <div className="w-[328px] h-[172px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>

          <div className="flex w-full gap-2 flex-col gap">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-4"></div>

            <div className="flex flex-col gap-1 w-full">
              <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
              <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
              <div className="w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
            </div>

            <div className="flex flex-row max-w-fit gap-3 text-gray">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"></div>
              <p>|</p>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-[3rem] rounded-lg py-3"></div>
            </div>
          </div>
        </div>
      ) : data.title ? (
        <Link
          href={`/${type == "Article" ? "articles" : "events"}/${data.slug}`}
          about={data.title}
          title={data.title}
          className={`flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]`}
        >
          <Image
            width={100}
            height={180}
            src={`/uploads/${data.cover_landscape}`}
            alt={data.title}
            title={data.title}
            className="w-full h-[178px] md:h-[168px] rounded-xl object-cover"
            priority
          />

          <div className="flex md:flex-1 flex-col gap">
            <span
              about={data.title}
              title={data.title}
              className="font-semibold text-2xl text-primary"
            >
              {data.title.length > 40
                ? data.title.substring(0, 48) + " ..."
                : data.title}
            </span>

            <p className="font-normal text-sm text-gray">
              {data.snippets.substring(0, 170) + " ..."}
            </p>

            <p className="font-normal text-xs text-gray mt-5">
              {formatDate(data.created_at)} &nbsp; | &nbsp; {data.duration} min
              read
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href={`/${type == "Article" ? "articles" : "events"}/${data.slug}`}
          about={data.name}
          title={data.name}
          className={`flex-col gap-2 md:items-center md:gap-2 flex md:w-[320px]`}
        >
          <Image
            width={100}
            height={180}
            src={`/uploads/${data.cover_landscape}`}
            alt={data.name}
            title={data.name}
            className="w-full h-[178px] md:h-[168px] rounded-xl object-cover"
            priority
          />

          <div className="flex md:flex-1 flex-col gap">
            <span
              about={data.name}
              title={data.name}
              className="font-semibold text-2xl text-primary"
            >
              {data.name.length > 40
                ? data.name.substring(0, 48) + " ..."
                : data.name}
            </span>

            <p className="font-normal text-sm text-gray">
              {data.snippets.substring(0, 170) + " ..."}
            </p>

            <p className="font-normal text-xs text-gray mt-5">
              {formatDate(data.created_at)} &nbsp; | &nbsp; {data.duration} min
              read
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardItemLandscape;
