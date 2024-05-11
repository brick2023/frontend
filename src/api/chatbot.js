import axios from "axios";

const chatbotGenerate = axios.create({
    baseURL: "http://brick2.yenslife.top:2023/chatbot",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
});
// generate response for chatbot
export const generate = (course_id, question) => chatbotGenerate.post(`/generate?course_id=${course_id}&question=${question}`);
export const generateDefault = (question) => chatbotGenerate.post(`/generate_default?question=${question}`);