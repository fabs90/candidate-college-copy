import type { Event, EventCountdowns } from "@/app/page";
import ButtonCountdown from "./atom/ButtonCountdown";
import ButtonType from "./atom/ButtonType";

export default function ButtonWrapper({
  event,
  eventCountdowns,
}: {
  event: Event;
  eventCountdowns: EventCountdowns;
}) {
  return (
    <div className="flex flex-col md:flex-row  gap-5 lg:flex-row justify-start mb-[60px] lg:mb-[88px] mt-8">
      <ButtonCountdown eventCountdowns={eventCountdowns} event={event} />
      <ButtonType event={event} />
    </div>
  );
}
