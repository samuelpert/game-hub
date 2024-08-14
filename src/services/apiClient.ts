import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e6bb1f2798a7436387374d88df136a5c"
    }
})