import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
// import user api test to get video
import { getTest } from "api/user";

const VideoPage = () => {
    
    const [videoUrl, setVideoUrl] = React.useState('');

    useEffect(() => {
        // async get Test video
        async function fetchVideo() {
            try {
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
                    playing={true}
                    controls={true}
                />
            </div>
        </div>
    );
};

export default VideoPage;