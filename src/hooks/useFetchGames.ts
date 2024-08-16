import { useEffect, useState } from "react";
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";
import useFetchData from "./useFetchData";

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
  }

const useFetchGames = () => useFetchData<Game>("/games")

export default useFetchGames;