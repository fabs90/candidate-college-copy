import { getDateNow } from "@/utils/getDateNow";

export default function InputDate() {
  return (
    <div className="w-full relative">
      <label className="text-white font-medium block" htmlFor="date">
        Date <span className="text-danger">*</span>
      </label>
      <input
        id="date"
        type="text"
        className="text-white textsm mt-2 w-full max-w-[50%] px-[18px] py-4 border rounded-[4px] border-grey bg-grey/60"
        readOnly
        value={getDateNow()}
      />
    </div>
  );
}
