import { driver } from "driver.js";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

function driverHead(router: AppRouterInstance) {
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
        element: "#fourth2-driver",
        popover: {
          title: "See Your Staff Report Completion",
          description:
            "Here you can see which of your staff that have and have not filled out today’s report.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#fourth-driver",
        popover: {
          title: "See All Your Submitted Reports",
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
          onNextClick: () => {
            router.push("/head/weekly-report");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#seventh-driver",
        popover: {
          title: "Click Here to Add a Report",
          description: "Access the Weekly Report menu from the sidebar.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/head");
            setTimeout(function () {
              driverObj.movePrevious();
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
          onNextClick: () => {
            router.push("/head/my-staff-report");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#nine-driver",
        popover: {
          title: "Click Here to See All Staff Reports",
          description: "You can access all your staff reports from this menu.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/head/weekly-report");
            setTimeout(function () {
              driverObj.movePrevious();
            }, 100);
          },
        },
      },
      {
        element: "#ten-driver",
        popover: {
          title: "Choose Your Staff to See Their Report",
          description:
            "You can see all your staff reports and filter based on month and week.",
          side: "right",
          align: "center",
          onNextClick: () => {
            router.push("/head/feedback/add/july");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#eleven-driver",
        popover: {
          title: "Click Here to Add Feedback",
          description:
            "You can add monthly feedback for your staff by accessing this menu.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/head/my-staff-report");
            setTimeout(function () {
              driverObj.movePrevious();
            }, 100);
          },
        },
      },
      {
        element: "#twelve-driver",
        popover: {
          title: "Choose Staff and Write Your Feedback",
          description:
            "Please note that you can’t edit your feedback after it is submitted.",
          side: "right",
          align: "center",
        },
      },
    ],
  });

  return { driverObj };
}

function driverStaff(router: AppRouterInstance) {
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
          title: "See All Your Submitted Reports",
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
          onNextClick: () => {
            router.push("/staff/weekly-report");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#seventh-driver",
        popover: {
          title: "Click Here to Add a Report",
          description: "Access the Weekly Report menu from the sidebar.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/staff");
            setTimeout(function () {
              driverObj.movePrevious();
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
        },
      },
    ],
  });

  return { driverObj };
}

function driverCLevel(router: AppRouterInstance) {
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
          title: "See Your Staff Report Completion",
          description:
            "Here you can see which of your staff that have and have not filled out today’s report.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#third-driver",
        popover: {
          title: "See Your Division and Staff Data",
          description:
            "Here you can see the total number of divisions and staff under your supervision.",
          side: "right",
          align: "center",
        },
      },
      {
        element: "#fourth-driver",
        popover: {
          title: "See All Your Staff Reports",
          description:
            "You can see all your staff reports and filter based on division, month, and week.",
          side: "right",
          align: "center",
          onNextClick: () => {
            router.push("/c-level/feedback/add/july");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#fifth-driver",
        popover: {
          title: "Click Here to Add Feedback",
          description:
            "You can add monthly feedback for your staff by accessing this menu.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/c-level");
            setTimeout(function () {
              driverObj.movePrevious();
            }, 100);
          },
        },
      },
      {
        element: "#sixth-driver",
        popover: {
          title: "Choose Staff and Write Your Feedback",
          description:
            "Please note that you can’t edit your feedback after it is submitted.",
          side: "bottom",
          align: "center",
          onNextClick: () => {
            router.push("/c-level/feedback/july");
            setTimeout(function () {
              driverObj.moveNext();
            }, 100);
          },
        },
      },
      {
        element: "#seventh-driver",
        popover: {
          title: "Click Here to See All Feedback",
          description:
            "You can see all the monthly feedback given to your staff by accessing this menu.",
          side: "right",
          align: "center",
          onPrevClick: () => {
            router.push("/c-level/feedback/add/july");
            setTimeout(function () {
              driverObj.movePrevious();
            }, 100);
          },
        },
      },
      {
        element: "#ten-driver",
        popover: {
          title: "Choose Your Staff to See The Feedback",
          description:
            "You can see all the feedback and filter based on division, month, and week.",
          side: "right",
          align: "center",
        },
      },
    ],
  });

  return { driverObj };
}

export default function useDriver({ root }: { root: string }) {
  const router = useRouter();
  switch (root) {
    case "/head":
      return driverHead(router);
    case "/staff":
      return driverStaff(router);
    case "/c-level":
      return driverCLevel(router);
    default:
      return driverHead(router);
  }
}
