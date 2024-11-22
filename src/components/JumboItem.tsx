import { formatDate } from "@/utils/time";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const JumboItem: React.FC<any> = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div
          className={`flex-col md:flex-row gap-2 md:items-center md:gap-5 flex`}
        >
          <div className="w-[650px] h-[340px] rounded-xl object-cover bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>

          <div className="md:flex w-full gap-2 flex-1 flex-col gap hidden">
            <div className="flex flex-col gap-1">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"></div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"></div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-full rounded-lg py-5"></div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-1/3 rounded-lg py-5"></div>
            </div>

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
      ) : (
        <div
          className={`flex-col md:flex-row gap-2 md:items-center md:gap-5 flex`}
        >
          <Link
            href={`/articles/${data?.slug ?? ""}`}
            about={data?.title ?? ""}
            title={data?.title ?? ""}
          >
            <Image
              width={100}
              height={50}
              src={`/uploads/${data && data.cover_landscape}`}
              alt={data && data.title}
              title={data && data.title}
              className="w-full md:w-[650px] md:h-[340px] md:flex-1 object-cover h-full rounded-xl"
              priority
            />
          </Link>

          <div className="md:flex md:flex-1 flex-col gap-3">
            <h3 className="font-semibold text-2xl md:text-4xl text-primary">
              {data && data.title}
            </h3>
            <p className="font-normal text-sm md:text-base text-gray">
              {data?.snippets
                ? data.snippets.substring(0, 100) + " ..."
                : "No snippets available."}
            </p>

            <p className="font-normal text-xs text-gray mt-2">
              {formatDate(data && data.created_at)} | {data && data.duration}{" "}
              min read
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default JumboItem;
