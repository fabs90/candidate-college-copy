// Import Icons
import ConfirmIcon from "@/components/icons/ConfirmIcon"
import CloseIcon from "@/components/icons/CloseIcon"

// Import Styles
import styles from "@/styles/border.module.css";

// Data Types
interface SubmitTestimonialProps {
  open: boolean,
  onClick: () => void,
}

// Modals
export default function SubmitTestimonial({open, onClick}: SubmitTestimonialProps) {  
  return (
    <div className={`fixed inset-0 flex justify-center items-center ${open ? "visible bg-black/[.70]" : "invisible"} p-6`}> 
      {/* Container */}
      <div className={`flex flex-col justify-center items-center ${styles.border_graph} w-96 h-[260px] bg-primary rounded-lg gap-6 cursor-pointer`} onClick={onClick}>
        {/* Close */}
        <div className="grid w-full justify-items-end p-6 -mt-[60px]">
          <CloseIcon width="14" height="14" fill="white" />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-2 -mt-[40px]">
          <ConfirmIcon width="60" height="60" fill="#FFDE59" /> 
          <div className="font-bold text-2xl text-[#fff]">Confirm Submit?</div>
          <div className="text-[#9BB1BE] text-sm">Your testimonial cannot be changed.</div>
        </div>
        {/* Button */}
        <div className="flex flex-row relative">
          {/* Cancel */}
          <div className="absolute top-0 right-2 flex justify-center items-center lg:w-36 xxsm:w-28 lg:h-10 xxsm:h-10 text-sm text-white font-semibold bg-[#9BB1BE] rounded-lg cursor-pointer" onClick={onClick}>
            <div>Cancel</div>
          </div>
          {/* Submit */}
          <button className="absolute top-0 left-2 flex justify-center items-center lg:w-36 xxsm:w-28 lg:h-10 xxsm:h-10 text-sm text-primary font-semibold bg-secondary rounded-lg cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}