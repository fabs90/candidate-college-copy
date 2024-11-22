import TickCicleIcon from "@/components/icons/TickCicleIcon";

export default function TickCicle() {
  return (
    <div className="absolute animate-downUp flex left-0 -top-[30%] xsm:-top-[19%] items-center gap-2 rounded-[5px] py-3 px-4 bg-white/20 border border-white ">
      <div className="bg-secondary rounded-full p-1">
        <TickCicleIcon />
      </div>
      <div className="leading-[20px] text-[14px]">
        <h4 className="font-extrabold text-secondary">1200+</h4>
        <h5 className="font-medium text-[#fff]">Success Events</h5>
      </div>
    </div>
  );
}
