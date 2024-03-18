import React from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
    return (
        <div>
            <h1 style={{marginBottom: "20px", marginTop: "20px", textAlign: "center"}}>Lesson Name</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    playing={true}
                    controls={true}
                />
            </div>
        </div>
    );
};

export default VideoPage;