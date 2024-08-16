import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useFetchData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
       
        useEffect(() => {
          setLoading(true);
            const controller = new AbortController();
          apiClient
            .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((res) => {
              setData(res.data.results)
              setLoading(false);})
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setLoading(false);
                setError(err.message)});

            return () => controller.abort();   
        }, []);

  return (
    {data, error, isLoading}
  )

}

export default useFetchData;