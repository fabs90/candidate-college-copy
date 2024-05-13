import { MutationFunction, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, FormEventHandler, useState } from "react";

export default function useLoginForm() {
  const [rememberme, setRememberme] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const mutation = useMutation({
    mutationFn: (event: FormData) => {
      console.log(event.get("email"));
      return axios.post("/api", event);
    },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutation.mutate(new FormData(event.currentTarget));
  };

  return {
    rememberme,
    setRememberme,
    mutation,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
  };
}
