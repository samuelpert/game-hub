import { GameQuery } from "../App";
import useFetchData from "./useFetchData";
import { Genre } from "./useFetchGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string; 
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
    genre: Genre;
  }

const useFetchGames = (gameQuery: GameQuery) => useFetchData<Game>("/games", {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery])

export default useFetchGames;