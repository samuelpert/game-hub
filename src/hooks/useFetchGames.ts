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

const useFetchGames = (selectedGenre: Genre | null) => useFetchData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useFetchGames;