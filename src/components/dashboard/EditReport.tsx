import styles from "@/styles/border.module.css";
import Image from "next/image";
import Button from "./Button";
export default function EditReport() {
  return (
    <section
      id="second-driver"
      className={`${styles.border_section} w-9/12 overflow-hidden relative rounded-[8px]  p-5 bg-[#0D2735]`}
    >
      <Image
        width={100}
        height={100}
        alt="Checklist Logo"
        className="absolute bottom-0 right-0 w-16"
        src={"/assets/image/checklist.png"}
      />

      <div className="relative">
        <h4 className="font-bold text-base text-white">
          You Have Filled Out Your Report Today!
        </h4>

        <p className="text-sm text-grey">Do you want to edit your report?</p>
        <Button>Edit Button</Button>
      </div>
    </section>
  );
}
