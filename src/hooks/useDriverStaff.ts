import { driver } from "driver.js";
import { useRouter } from "next/navigation";

export default function useDriverStaff() {
  const router = useRouter();
  const driverObj = driver({
    showProgress: true, // Because everyone loves progress bars!
    nextBtnText: "Next",
    prevBtnText: "Prev",

    doneBtnText: "Finish",
    popoverClass: "driverjs-theme",
    showButtons: ["next", "previous"],
    steps: [
      {
        element: "#first-driver",
        popover: {
          title: "Welcome to Your Dashboard",
          description: "You can access all menus from the sidebar.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#second-driver",
        popover: {
          title: "See Your Today Status",
          description:
            "You can see whether you have submitted a report or not today.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#third-driver",
        popover: {
          title: "See Your Completion Rate",
          description:
            "You can see how many percent is your weekly report completion.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#fourth-driver",
        popover: {
          title: "See All Your gdfgdf Submitted Reports",
          description:
            "You can access all your submitted reports and choose from month and week periods.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#fifth-driver",
        popover: {
          title: "See Your Performance Grade",
          description:
            "Every month, you will get a performance grade, it will show up here when available.",
          side: "left",
          align: "center",
        },
      },
      {
        element: "#sixth-driver",
        popover: {
          title: "See Your Performance Feedback",
          description:
            "Every month, you will get a performance feedback, it will show up here when available.",
          side: "left",
          align: "center",
        },
      },
      {
        element: "#seventh-driver",
        popover: {
          title: "Click Here to Add a Report",
          description: "Access the Weekly Report menu from the sidebar.",
          side: "right",
          align: "center",
          onNextClick: () => {
            router.push("/staff/weekly-report");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#eigth-driver",
        popover: {
          title: "Write Your Report Here",
          description:
            "You can also add a media. After submitting, you can edit or delete your report as long as it is on the same day.",
          side: "bottom",
          align: "center",
          onPrevClick: () => {
            router.push("/staff");
            setTimeout(function () {
              driverObj.movePrevious();
            }, 100);
          },
        },
      },
    ],
  });

  return { driverObj };
}
