// Import Packages
import { FormEvent, useState, useEffect, useRef } from "react";
import axios, { AxiosError } from "axios";

// Import Icons
import GalleryAdd from "../add/svg/GalleryAdd";
import WarningIcon from "@/components/icons/WarningIcon";
import { IoIosArrowForward } from "react-icons/io";

// Import Components
import Swal from "sweetalert2";
import SubmitTestimonial from "./SubmitTestimonial";

// Data Types
export type Testimonial = {
  fullName: string;
  division: string;
  position: string;
  batch: number;
  testimonial: string;
  image: File;
};

export type Division = {
  id: number;
  name: string;
};

// Default Value
const defaultValue = {
  fullName: "",
  division: "Social Media Specialist",
  position: "Head",
  batch: 1,
  testimonial: "",
  image: "" as unknown as File,
};

export function TestimonialForm() {
  // Variables
  const [formState, setFormState] = useState<Testimonial>(defaultValue);
  const imgRef = useRef<HTMLDivElement>(null);

  const [divisions, setDivisions] = useState<Division[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [testimonial, setTestimonial] = useState<string>("");

  const [isFullNameValid, setIsFullNameValid] = useState<boolean>(true);
  const [testimonialWordCount, setTestimonialWordCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  // Used to send form data to API
  const handleSubmitFormTestimonial = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData();
    const { ...state } = formState;

    formData.append("name", fullName);
    formData.append("division", state.division);
    formData.append("position", state.position);
    formData.append("batch", state.batch.toString());
    formData.append("testimonial", testimonial);
    formData.append("image", state.image);

    let message = {
      msg: "",
      status: 200,
    };

    try {
      const response = await axios.post("/api/testimonials", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      message = {
        msg: response.data?.message,
        status: response.data?.status || response.status,
      };
    } catch (error: any) {
      const newError: AxiosError = error;

      message = {
        msg: newError.message,
        status: newError.status as unknown as number,
      };
    } finally {
      const current = imgRef.current;

      if (current) {
        current.style.backgroundImage = ``;
      }

      setFormState((prev) => ({
        ...prev,
        fullName: "",
        testimonial: "",
        image: "" as unknown as File,
        division: "",
        position: "",
      }));

      if (message.status >= 200 && message.status < 300) {
        setFullName("");
        setTestimonial("");
        setDivisions([]);
        Swal.fire({
          toast: true,
          position: "top-end",
          title: "Success! Your data has been saved",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          title: `Error ! ${message.msg}`,
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    }

    setIsSubmitting(false);
  };

  // Used to store image in form data and display preview image before store
  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = imgRef.current;

    if (current) {
      if (!e.target.files) return;

      const file = e.target.files[0];

      setFormState((prev) => ({
        ...prev,
        image: file,
      }));

      if (file && file.type.startsWith("image")) {
        const imageUrl = URL.createObjectURL(file);
        const imageElement = new Image();

        imageElement.src = imageUrl;
        current.style.backgroundImage = `url(${imageUrl})`;
        current.style.backgroundSize = "cover";
        current.style.backgroundPosition = "center";
        current.style.backgroundRepeat = "no-repeat";

        imageElement.onload = () => {
          URL.revokeObjectURL(imageUrl);
        };
      } else {
        current.innerHTML = "<p>File yang diunggah bukan gambar.</p>";
      }
    }
  };

  // Used to check user has entered name with valid format or not
  const handleFullNameChange = (e: any) => {
    const { value } = e.target;
    const isValidInput = /^[a-zA-Z\s]*$/.test(value);

    setIsFullNameValid(isValidInput);
    setFullName(value);
  };

  // Used to check user has enetered testimonial with valid fromat not
  const handleTestimonialChange = (event: any) => {
    const inputText = event.target.value;
    const words = inputText.trim().split(/\s+/);

    setTestimonialWordCount(words.length);
    setTestimonial(inputText);
  };

  const handleClick = () => setOpen(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("/api/divisions");

        setDivisions(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <form onSubmit={handleSubmitFormTestimonial} autoComplete="off">
      <div className="h-full w-full pb-4">
        {/* Form Content */}
        <div className="flex flex-col lg:gap-12 xxsm:gap-4">
          <div className="flex lg:flex-row xxsm:flex-col lg:gap-4 xxsm:gap-10">
            {/* Upload Image */}
            <div className="flex flex-col justify-center items-center">
              <div
                ref={imgRef}
                className="lg:w-44 xxsm:w-56 lg:h-44 xxsm:h-56 flex justify-center items-center rounded-lg bg-white"
              >
                <label htmlFor="photoMembers" className="cursor-pointer">
                  <GalleryAdd />
                </label>
                <input
                  id="photoMembers"
                  accept="image/*"
                  type="file"
                  onChange={handleImageInput}
                  hidden
                  required
                />
              </div>
            </div>
            {/* Upload Personal Data */}
            <div className="flex flex-row flex-wrap w-full justify-between lg:px-4 xxsm:px-2 lg:gap-6 xxsm:gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-2 lg:w-[48%] xxsm:w-full">
                <label htmlFor="fullName" className="text-[#fff]">
                  Full Name <span className="text-[#FF6F6F]">*</span>
                </label>
                <input
                  className="w-full text-[14px] p-[10px] rounded-sm bg-transparent border border-[#90A3BF] text-[#fff]"
                  placeholder="Full Name"
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
                {/* Check user input */}
                {!isFullNameValid && (
                  <div className="flex flex-row items-center text-[12px] text-[#FF6F6F] gap-1">
                    <WarningIcon width="14" height="14" fill="#FF6F6F" />
                    Only letters (a-z) allowed
                  </div>
                )}
              </div>
              {/* Divisions */}
              <div className="flex flex-col gap-2  lg:w-[48%] xxsm:w-full">
                <label htmlFor="division" className="text-[#fff]">
                  Division <span className="text-[#FF6F6F]">*</span>
                </label>
                <select
                  className="w-full text-[14px] p-[11px] rounded-sm bg-transparent border border-[#90A3BF] text-[#fff]"
                  id="division"
                  defaultValue={"Social Media Specialist"}
                  onChange={(e) =>
                    setFormState((prev: any) => {
                      return {
                        ...prev,
                        division: e.target.value,
                      };
                    })
                  }
                >
                  <option
                    value={"Development Officer"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    {"Development Officer"}
                  </option>
                  <option
                    value={"Relation Officer"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    {"Relation Officer"}
                  </option>
                  <option
                    value={"Operation Officer"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    {"Operation Officer"}
                  </option>
                  <option
                    value={"People Development"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    {"People Development"}
                  </option>
                  <option
                    value={"Creative Officer"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    {"Creative Officer"}
                  </option>
                  {divisions.map(({ name }, index) => (
                    <option
                      value={name}
                      key={index}
                      className="text-[#9CA3AF] bg-[#FFFFFF]"
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Position */}
              <div className="flex flex-col gap-2 lg:w-[48%] xxsm:w-full">
                <label htmlFor="position" className="text-[#fff]">
                  {" "}
                  Position <span className="text-[#FF6F6F]">*</span>
                </label>
                <select
                  className="w-full text-[14px] p-[11px] rounded-sm bg-transparent border border-[#90A3BF] text-[#fff]"
                  id="position"
                  defaultValue={"Head"}
                  onChange={(e) =>
                    setFormState((prev: any) => {
                      return {
                        ...prev,
                        position: e.target.value,
                      };
                    })
                  }
                >
                  <option
                    value={"Head"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    Head
                  </option>
                  <option
                    value={"Co Head"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    Co Head
                  </option>
                  <option
                    value={"Staff"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    Staff
                  </option>
                  <option
                    value={"Chief"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    Chief
                  </option>
                  <option
                    value={"Vice Chief"}
                    className="text-[#9CA3AF] bg-[#FFFFFF]"
                  >
                    Vice Chief
                  </option>
                </select>
              </div>
              {/* Batch */}
              <div className="flex flex-col gap-2 lg:w-[48%] xxsm:w-full">
                <label htmlFor="position" className="text-[#fff]">
                  Batch <span className="text-[#FF6F6F]">*</span>
                </label>
                <select
                  className="w-full text-[14px] p-[11px] rounded-sm bg-transparent border border-[#90A3BF] text-[#fff]"
                  id="position"
                  defaultValue={1}
                  onChange={(e) =>
                    setFormState((prev: any) => {
                      return {
                        ...prev,
                        batch: e.target.value,
                      };
                    })
                  }
                >
                  <option value={1} className="text-[#9CA3AF] bg-[#FFFFFF]">
                    Batch 1
                  </option>
                  <option value={2} className="text-[#9CA3AF] bg-[#FFFFFF]">
                    Batch 2
                  </option>
                  <option value={3} className="text-[#9CA3AF] bg-[#FFFFFF]">
                    Batch 3
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* Upload Testimonial */}
          <div className="flex flex-col gap-2 w-full lg:px-0 xxsm:px-2">
            <label htmlFor="testimonial" className="text-[#fff]">
              Testimonial <span className="text-[#FF6F6F]">*</span>
            </label>
            <textarea
              placeholder="Write your testimonial"
              className="bg-transparent p-[11px] border border-[#90A3BF] min-h-[180px] text-[#fff]"
              value={testimonial}
              onChange={handleTestimonialChange}
              required
            ></textarea>
            <div className="flex flex-row justify-between text-sm">
              <div className="text-[#fff]">Max. 100 words</div>
              <div className="text-[#fff]">{testimonialWordCount}/100</div>
            </div>
            {/* Check user input */}
            {testimonialWordCount > 100 && (
              <div className="flex flex-row text-xs text-[#FF6F6F] items-center gap-2">
                <WarningIcon width="14" height="14" fill="#FF6F6F" />
                Testimonial too long! (Max 100 words)
              </div>
            )}
          </div>
          {/* Submit Button */}
          <div className="flex flex-col justify-center items-center lg:mt-0 xxsm:mt-8">
            {!isFullNameValid ||
            testimonialWordCount > 100 ||
            !formState.image ? (
              <div
                className="flex justify-center items-center text-[12px] font-semibold rounded-3xl px-10 py-3 bg-slate-400 text-slate-200 cursor-pointer"
                title="Some fields are either not filled or contain incorrect entries"
              >
                SUBMIT TESTIMONIAL &nbsp;&nbsp;{" "}
                <IoIosArrowForward className="text-[18px]" />
              </div>
            ) : (
              <div
                className="flex justify-center items-center text-[12px] font-semibold rounded-3xl px-10 py-3 bg-secondary text-primary cursor-pointer"
                onClick={() => setOpen(true)}
              >
                SUBMIT TESTIMONIAL &nbsp;&nbsp;{" "}
                <IoIosArrowForward className="text-[18px]" />
              </div>
            )}
          </div>
          {/* Confirm Submit Modal */}
          <SubmitTestimonial open={open} onClick={handleClick} />
        </div>
      </div>
    </form>
  );
}
