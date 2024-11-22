import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Component
const CardMember = (props: any) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl justify-center items-center shadow-lg w-56 h-[320px] lg:mx-8 lg:my-14 xsm:m-5 xxsm:m-4">
      {/* Photo Profile */}
      <img src={props.img} className="rounded-full w-40 h-40 object-cover mx-auto mt-2 object-center" />
      {/* Name */}
      <div className="text-primary text-lg text-center font-extrabold pt-4">{props.name}</div>
      {/* Position */}
      <div className="text-yellow-300 text-sm text-center font-medium">{props.position}</div>
      {/* Social Media */}
      <div className="flex flex-row justify-center items-center p-4">
        {/* Instagram */}
        <div className="bg-blue-300 rounded-full p-1.5 mr-2">
          <a href={props.instagram} target="_blank"><InstagramIcon /></a>
        </div>
        {/* Linkedin */}
        <div className="bg-blue-300 rounded-full p-1.5">
          <a href={props.linkedin} target="_blank"><LinkedInIcon /></a>
        </div>
      </div>
    </div>
  );
};

export default CardMember;