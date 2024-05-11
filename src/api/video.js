import axios from "axios";

const videoApi = axios.create({
    baseURL: "http://brick2.yenslife.top:2023/lesson",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
});


export const getVideo = (videoId) => videoApi.get("/" + videoId, { responseType: 'blob' });
export const getTime = (videoId) => videoApi.get("/time/" + videoId);
export const recordTime = (videoId, timestamp) => videoApi.get("/record_time/" + videoId + "/" + timestamp);
export const getName = (videoId) => videoApi.get("/get_name/" + videoId);
export default videoApi;
