// Modules
import React from "react";

// Component
const CardFounder = (props: any) => {
  return (
    <div>
      {/* Section Title */}
      <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
        {props.title}
      </h3>
      {/* Member Name */}
      <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
        {props.name}
      </h2>
      {/* Profile Picture */}
      <div className="flex justify-center mt-7">
        <div className="flex flex-col bg-primary w-56 h-56 rounded-lg shadow-lg hover:bg-sky-950 transition duration-700 ease-in-out justify-end items-center group">
          <picture className="flex justify-center rounded-lg block overflow-hidden">
            <img className="w-48 group-hover:scale-[1.1] transition duration-500 ease-in-out" src={props.img} title={props.chair} />
          </picture>
        </div>
      </div>
      {/* Description */}
      <p className="text-[#90A3BF] text-sm font-normal text-center m-auto leading-6 lg:w-3/5 xsm:w-4/5 xxsm:w-11/12 w-[95%] pt-[15px] mt-6">
        {props.description}
      </p>
    </div>
  );
};

export default CardFounder;