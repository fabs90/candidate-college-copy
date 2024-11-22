import { IoIosArrowForward } from "react-icons/io";
import InputFormTemplate from "./InputFormTemplate";
import GalleryAdd from "./svg/GalleryAdd";
import Swal from "sweetalert2";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios, { AxiosError } from "axios";
import {
  validationIntagram,
  validationLinkedin,
} from "@/utils/validationFormatLink";

export type member = {
  firstName: string;
  lastName: string;
  division_slug: string;
  position_slug: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
  email: string;

  image: File;
};

const defaultValue = {
  firstName: "",
  lastName: "",
  division_slug: "",
  position_slug: "",
  instagram: "",
  whatsapp: "",
  email: "",
  linkedin: "",

  image: "" as unknown as File,
};

export function FormTemp() {
  const formState = useState<member>(defaultValue);
  const imgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitFormMember = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    const state = formState[0];
    const fullName = state.firstName + " " + state.lastName;

    formData.append("name", fullName);
    formData.append("division_slug", state.division_slug);
    formData.append("position_slug", state.position_slug);

    formData.append("instagram", state.instagram);
    formData.append("linkedin", state.linkedin);
    formData.append("image", state.image);
    formData.append("email", state.email);
    formData.append("whatsapp", state.whatsapp);
    let message = {
      msg: "",
      status: 200,
    };
    try {
      validationLinkedin(state.linkedin);
      validationIntagram(state.instagram);
      const resp = await axios.post("/api/auth/register", formData, {
        headers: {
          "x-appname-key": "weekly-report",
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      message = {
        msg: resp.data?.message,
        status: resp.data?.status || resp.status,
      };
      // router.push(`/about/division/members/add/otp?token=${resp.data.token}`);
    } catch (err: any) {
      console.log(err);
      const newErr: AxiosError = err;
      message = {
        msg: newErr.message,
        status: newErr.status as unknown as number,
      };
    } finally {
      const current = imgRef.current;

      if (current) {
        current.style.backgroundImage = ``;
      }
      formState[1]((prev) => {
        return {
          ...prev,
          firstName: "",
          lastName: "",
          instagram: "",
          linkedin: "",
          image: "" as unknown as File,
        };
      });

      setIsLoading(false);

      if (message.status >= 200 && message.status < 300) {
        Swal.fire({
          title: "Success",
          text: "Successfully add your data!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: message.msg,
          icon: "error",
        });
      }
    }
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = imgRef.current;

    if (current) {
      if (!e.target.files) return;
      const file = e.target.files[0];
      formState[1]((prev) => {
        return { ...prev, image: file };
      });
      // Memastikan file yang dipilih adalah gambar
      if (file && file.type.startsWith("image")) {
        // Membuat objek URL untuk file gambar
        const imageUrl = URL.createObjectURL(file);
        const imageElement = new Image();
        imageElement.src = imageUrl;
        current.style.backgroundImage = `url(${imageUrl})`;
        current.style.backgroundSize = "cover";
        current.style.backgroundPosition = "center";
        current.style.backgroundRepeat = "no-repeat";
        // Menunggu gambar selesai dimuat
        imageElement.onload = () => {
          // Mengganti isi elemen div dengan gambar yang diunggah

          URL.revokeObjectURL(imageUrl); // Panggil revoke setelah penghapusan
        };
      } else {
        // Jika file bukan gambar, memberi pesan kesalahan
        current.innerHTML = "<p>File yang diunggah bukan gambar.</p>";
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitFormMember} autoComplete="off">
        {/* Loading */}
        {isLoading && (
          <div className="fixed z-50  backdrop-blur-sm flex justify-center items-center  inset-0">
            <AiOutlineLoading3Quarters className="animate-spin text-[42px] text-black" />
          </div>
        )}
        <div className="h-full w-full">
          <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col gap-4">
              <div className="min-w-[222px] max-h-[236px]">
                <div
                  ref={imgRef}
                  className="w-[80%] sm:w-full mx-auto h-[276px] sm:h-full flex items-center justify-center rounded-lg text-black bg-white"
                >
                  <label htmlFor="photoMembers" className="cursor-pointer">
                    <GalleryAdd />
                  </label>
                  <input
                    id="photoMembers"
                    accept="image/*"
                    hidden
                    onChange={handleImageInput}
                    type="file"
                  />
                </div>
              </div>
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2">
                <InputFormTemplate state={formState} />
              </div>
            </div>
            <div className="sm:ml-[238px]">
              <button
                disabled={isLoading}
                className="bg-secondary   mt-12 flex items-center gap-2 justify-center uppercase py-3 rounded-3xl w-full xsm:w-[288px]  text-primary text-[14px] font-semibold"
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Submit Data
                    <IoIosArrowForward className="text-[18px]" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
