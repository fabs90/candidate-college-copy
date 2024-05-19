import { LoginScheme } from "@/app/validation/LoginScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@tanstack/react-form";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-form-adapter";
import axios from "axios";

type addData = {
  url: string;
  isMultipart?: boolean;
};

export default function useAddData({ url, isMultipart = false }: addData) {
  const mutation: any = useMutation({
    mutationFn: (event: any) => {
      return axios.post(`/api/${url}`, event, {
        ...(isMultipart && {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      });
    },
    onError: (error: any, variables, context) => {
      console.log(error);
    },
  });

  return {
    mutation,
  };
}
