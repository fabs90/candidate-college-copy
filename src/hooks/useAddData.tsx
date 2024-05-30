import { LoginScheme } from "@/validation/LoginScheme";
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
  const mutation = useMutation({
    mutationFn: (event: any) => {
      const form_data = new FormData();

      for (const key in event) {
        form_data.append(key, event[key]);
      }

      return axios.post(`/api/${url}`, form_data, {
        ...(isMultipart && {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      });
    },
    onSuccess: (data: any) => {
      console.log(data);
    },
    onError: (error: any, variables: any, context: any) => {
      console.log(error);
    },
  });

  return {
    mutation,
  };
}
