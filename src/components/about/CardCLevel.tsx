// Import Modules
import React, { useState } from "react";

// Import Component
const CardCLevel = (props: any) => {
  // Use State
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center mt-7 group">
      {/* Picture */}
      <div
        className="flex flex-col bg-primary w-56 h-56 rounded-lg shadow-lg hover:bg-sky-950 transition duration-700 ease-in-out justify-end items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <picture className="rounded-lg justify-center block overflow-hidden">
          <img
            className={`${
              isHovered ? "group-hover:scale-[1.1]" : ""
            } transition duration-500 ease-in-out w-48`}
            src={props.img}
            title={props.chair}
          />
        </picture>
      </div>
      {/* Name */}
      <div
        className={`absolute flex flex-col justify-center items-center translate-y-[210%] bg-secondary px-[30px] py-[20px] rounded-b-lg shadow-[inset_-1px_3px_4px_rgba(0,0,0,0.4)] ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition duration-300 ease-in-out w-56`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-[12px] text-primary font-bold">{props.name}</div>
        <div className="text-[10px] text-primary font-light">{props.chair}</div>
      </div>
    </div>
  );
};

export default CardCLevel;
