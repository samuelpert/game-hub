import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface FetchingGenres {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
       
        useEffect(() => {
          setLoading(true);
            const controller = new AbortController();
          apiClient
            .get<FetchingGenres>("/genres", {signal: controller.signal})
            .then((res) => {
              setGenres(res.data.results)
              setLoading(false);})
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setLoading(false);
                setError(err.message)});

            return () => controller.abort();   
        }, []);

  return (
    {genres, error, isLoading}
  )

}
export default useGenres;