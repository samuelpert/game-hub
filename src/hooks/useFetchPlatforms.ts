import useFetchData from "./useFetchData";
import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const useFetchPlatforms = () => ({data: platforms, error: null});

export default useFetchPlatforms;