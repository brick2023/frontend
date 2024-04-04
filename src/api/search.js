import axios from "axios";

const searchApi = axios.create({
    baseURL: "http://brick2.yenslife.top:2023/search",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
});
// search keyword in input
const searchKeyword = (keyword) => searchApi.get(`?keyword=${keyword}`);
export default searchKeyword;