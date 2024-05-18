import axios from "axios";

const searchApi = axios.create({
    baseURL: "http://brick2.yenslife.top:2023/search",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
});
// search keyword in input
export const searchKeyword = (keyword) => searchApi.get(`/summary?keyword=${keyword}`);
export const searchSrt = (keyword) => searchApi.get(`/srt?keyword=${keyword}`);
export const getImage = (lesson_id) => searchApi.get(`/photo/${lesson_id}`, { responseType: "blob" });
