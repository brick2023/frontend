import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";

const VideoPage = () => {
    
    const [videoUrl, setVideoUrl] = React.useState('');

    useEffect(() => {
        fetch('http://localhost:8000/user/test')
            .then(response => response.blob ())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setVideoUrl(url);
            })
            .catch((error) => {
                console.error('Error fetching or processing video:', error);
            }
        );
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