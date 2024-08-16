import useFetchData from "./useFetchData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}


const useFetchGenres = () => useFetchData<Genre>("/genres")

export default useFetchGenres;