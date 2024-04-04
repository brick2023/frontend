import axios from "axios";

const videoApi = axios.create({
    baseURL: "http://brick2.yenslife.top:2023/video",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    // type
    responseType: 'blob'
});


export default videoApi;