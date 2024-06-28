import { getDateNow } from "@/utils/getDateNow";
import { SetStateAction } from "react";

export default function InputDate({
  value,
  setValue,
}: {
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
}) {
  return (
    <div className="w-full relative">
      <label className="text-white font-medium block" htmlFor="date">
        Date <span className="text-danger">*</span>
      </label>
      <input
        id="date"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="date"
        className="text-white text-sm mt-2 w-full max-w-[50%] px-[18px] py-4 border rounded-[4px] border-grey bg-transparent"
      />
      {/* <input
        id="date"
        type="date"
        className="text-white textsm mt-2 w-full max-w-[50%] px-[18px] py-4 border rounded-[4px] border-grey bg-grey/60"
        value={getDateNow()}
      /> */}
    </div>
  );
}
