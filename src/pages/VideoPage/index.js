import React from "react";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
// import user api test to get video
import { getTest } from "api/user";
import { getVideo, getName, getTime } from "api/video";

const video_id = 15;

const VideoPage = () => {
    
    const [videoUrl, setVideoUrl] = useState('');
    const [videoName, setVideoName] = useState('');
    const [videoTime, setVideoTime] = useState('');

    useEffect(() => {
        // async get Test video
        async function fetchVideo() {
            try {
                console.log('fetching video');
                const response = await getVideo(video_id);
                const url = URL.createObjectURL(response.data);
                setVideoUrl(url);
                console.log(url);
            } catch (error) {
                console.error('Error fetching or processing video:', error);
            }
        }
        const fetchVideoName = async () => {
            try{
                console.log('fetch video name');
                const videoName  = await getName(video_id);
                const name = videoName.data;
                console.log('name:', name);
                setVideoName(name);
            } catch (error) {
                console.error('Error fetching or processing video:', error);
            }
        }
        const fetchVideoTime = async() => {
            try {
                console.log('fetch vidoe time')
                const Time  = await getTime(video_id);
                const videoTime = Time.data;
                const [hours, minutes, seconds] = videoTime.split(':').map(parseFloat);
                const total = hours * 3600 + minutes * 60 + seconds;
                console.log('Time',total);
                setVideoTime(total);
            } catch (error) {
                console.error('Error fetching or processing video:', error);
            }
        }
        fetchVideo();
        fetchVideoName();
        fetchVideoTime();
    }, []);

    return (
        <div>
            <h1 style={{marginBottom: "20px", marginTop: "20px", textAlign: "center"}}>Lesson Name:{videoName}</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ReactPlayer 
                    url = {videoUrl}
                    playing={true}
                    controls={true}
                    preload="auto"
                    startTime={videoTime}
                />
            </div>
        </div>
    );
};

export default VideoPage;