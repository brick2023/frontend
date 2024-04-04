import axios from "axios";

const securityApi = axios.create({
    baseURL: "http://brick2.yenslife.top:2023",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
});

export default securityApi;