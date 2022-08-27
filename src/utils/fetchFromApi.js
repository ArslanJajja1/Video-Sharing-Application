import axios from "axios";
const API_URL = "https://youtube-v31.p.rapidapi.com/";
const options = {
    params: {
        // relatedToVideoId: "7ghhRHRP6t4",
        // part: "id,snippet",
        // type: "video",
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromApi = async (url) => {
    const res = await axios.get(`${API_URL}/${url}`, options);
    const { data } = res;
    return data;
};
