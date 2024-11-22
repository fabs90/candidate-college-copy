import type { Event, EventCountdowns } from "@/app/page";
export default function ButtonCountdown({
  eventCountdowns,
  event,
}: {
  eventCountdowns: EventCountdowns;
  event: Event;
}) {
  const held = `${eventCountdowns[event.slug]?.days}d ${
    eventCountdowns[event.slug]?.hours
  }h ${eventCountdowns[event.slug]?.minutes}m ${
    eventCountdowns[event.slug]?.seconds
  }s`;

  const isHeld = () => {
    if (held === "0d 0h 0m 0s") {
      const timeDifference =
        new Date(event.start_date_time).getTime() - new Date().getTime();
      const expired = 2 * 60 * 60 * 1000; // 2 jam dalam milidetik
      console.log(expired);
      console.log(timeDifference);
      if (timeDifference < -expired) {
        return "Held";
      }

      return "On going";
    }

    return held;
  };

  isHeld();
  return (
    <button className="bg-secondary text-primary w-max rounded-[20px] px-6 py-2 text-sm font-semibold lg:mr-4">
      {isHeld()}
    </button>
  );
}
