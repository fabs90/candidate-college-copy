import type { Event } from "@/app/page";
export default function ButtonType({ event }: { event: Event }) {
  return (
    <button className="bg-secondary text-primary w-max mt-3 xl:mt-0 rounded-[20px] px-6 py-2 text-sm font-semibold">
      {event.type}
    </button>
  );
}
