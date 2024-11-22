import CalendarIcon from "@/components/icons/CalendarIcon";
import MegaphoneIcon from "@/components/icons/MegaphoneIcon";
import StarEventIcon from "@/components/icons/StarEventIcon";

export default function Circle() {
  return (
    <div className="absolute inset-x-2 animate-circleUp border-2 aspect-square   border-white/30 rounded-full">
      <div className="w-[15%] aspect-square animate-circleDown flex items-center justify-center absolute rounded-full left-[6%] bottom-[6%] bg-[linear-gradient(138.82deg,#B9D4FD_9.95%,#5EACDD_92.12%)]">
        <CalendarIcon />
      </div>
      <div className="w-[12%] aspect-square animate-circleDown flex items-center justify-center absolute rounded-full right-[6%] bottom-[9%] bg-[linear-gradient(138.82deg,#EBE7C5_9.95%,#5E9ED9_62.54%)]">
        <StarEventIcon />
      </div>
      <div className="w-[13%] aspect-square animate-circleDown flex items-center justify-center absolute rounded-full right-[6%] top-[9%] bg-[linear-gradient(138.82deg,#C7EFC6_7.18%,#539352_81.98%)]">
        <MegaphoneIcon />
      </div>
    </div>
  );
}
