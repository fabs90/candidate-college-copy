import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetching<T>(name: string, url: string) {
  const { isPending, error, data } = useQuery<T>({
    queryKey: ["repoData"],
    queryFn: () => axios.get("/api/articles").then((res) => res.data),
  });

  return { isPending, error, data };
}
