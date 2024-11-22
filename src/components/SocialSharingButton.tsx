// Import Package
import React, {useState} from "react";

// Data Types
interface SocialSharingButtonProps {
  title: string;
  desc: string;
  articleUrl: string;
  width: string;
  height: string;
  share: string;
  Icon: React.FC<React.SVGAttributes<SVGElement>>;
}

// Component
const SocialSharingButton: React.FC<SocialSharingButtonProps> = ({
  title, 
  desc,
  articleUrl,
  width,
  height, 
  share, 
  Icon,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
   <div className="text-[#707070] hover:text-[#000000] cursor-pointer" 
        onClick={() => handleCopy(articleUrl)} 
        title={desc} 
        onMouseEnter = {() => setIsHovered(true)}
        onMouseLeave = {() => setIsHovered(false)}>
      {share ? (
        <a href={share} className="flex flex-row items-center gap-x-3" target="_blank">
          <Icon width={width} height={height} fill={isHovered ? "black" : "#707070"}/>
          <div className="text-[10px] md:text-sm font-normal">{title}</div>
        </a>
      ) : (
        <a className="flex flex-row items-center gap-x-3">
          <Icon width={width} height={height} fill={isHovered ? "black" : "#707070"}/>
          <div className="text-[10px] md:text-sm font-normal">{title}</div>
        </a>
      )}
    </div> 
  )
};

export default SocialSharingButton;