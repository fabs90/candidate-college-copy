import styles from "@/styles/border.module.css";
import { CloseIcon, InformationIcon } from "@/components/icons";
import Button from "@/components/dashboard/Button";

import { useRouter } from "next/navigation";

import useLogout from "@/hooks/useLogout";

export default function Logout() {
  const { isActive, setIsActive } = useLogout();

  const router = useRouter();
  return (
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } inset-0 rounded-[8px] fixed justify-center items-center    bg-black/60 z-30`}
    >
      <div
        className={`${styles.border_driver} rounded-[16px] relative py-12  gap-3  w-[35%] flex flex-col justify-center items-center bg-primary`}
      >
        <InformationIcon />
        <div
          onClick={() => setIsActive()}
          className="absolute cursor-pointer top-5 right-5"
        >
          <CloseIcon />
        </div>
        <div className="max-w-[80%] relative">
          <h1 className="text-white text-2.5xl font-bold text-center">
            Confirm Logout?
          </h1>
          <p className="text-grey mt-3 relative  text-center">
            You will need to login again.
          </p>
        </div>
        <div className="flex gap-5 mt-5 relative">
          <button
            onClick={() => setIsActive()}
            className="border text-sm font-medium rounded-[30px] py-3 px-7 border-secondary bg-transparent text-secondary"
          >
            Cancel
          </button>
          <button className="  text-sm font-medium rounded-[30px] py-3 px-7   bg-[#CB3A31] text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
