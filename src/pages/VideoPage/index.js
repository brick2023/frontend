import React from "react";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
// import user api test to get video
import { getTest } from "api/user";
import Chatbot from "components/ChatBot/chatbot";

// When the video thumbnail clicked in HomePage/home.js, it will pass the lesson's course_id to this page
// But for now, home.js hasn't finished yet, so we just use a fixed course_id here
const VideoPage = () => {
    
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        // async get Test video
        async function fetchVideo() {
            try {
                console.log('fetching video');
                const response = await getTest();
                const url = URL.createObjectURL(response.data);
                setVideoUrl(url);
                console.log(url);
            } catch (error) {
                console.error('Error fetching or processing video:', error);
            }
        }
        fetchVideo();
    }, []);

    return (
        <div>
            <h1 style={{marginBottom: "20px", marginTop: "20px", textAlign: "center"}}>Lesson Name</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ReactPlayer 
                    // url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    url = {videoUrl}
                    // url = "http://brick2.yenslife.top:2023/user/test"
                    playing={true}
                    controls={true}
                    preload="auto"
                />
            </div>
            <Chatbot course_id={4} />
        </div>
    );
};

export default VideoPage;