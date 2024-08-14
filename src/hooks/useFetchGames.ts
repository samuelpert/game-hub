import { useEffect, useState } from "react";
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchingGames {
    count: number;
    results: Game[];
  }

const useFetchGames = () => {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState("");
       
        useEffect(() => {
            const controller = new AbortController();
          apiClient
            .get<FetchingGames>("/games", {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)});

            return () => controller.abort();   
        }, []);

  return (
    {games, error}
  )
}

export default useFetchGames;