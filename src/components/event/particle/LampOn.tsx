import LampOnIcon from "@/components/icons/LampOnIcon";

export default function LampOn() {
  return (
    <div className="absolute animate-upDown flex right-[3%] z-10 -bottom-[18%] items-center gap-2 rounded-[5px] py-3 px-4 bg-white/20 border border-white ">
      <div className="bg-secondary rounded-full p-1">
        <LampOnIcon />
      </div>
      <div className="leading-[20px] text-[14px]">
        <h4 className="font-extrabold text-secondary">Countless</h4>
        <h5 className="font-medium text-[#fff]">Interesting Events!</h5>
      </div>
    </div>
  );
}
