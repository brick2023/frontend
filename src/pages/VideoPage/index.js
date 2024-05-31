import React, { useEffect, useState, useRef } from "react";
import {useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideo, getName, getTime, getLastSummary, recordTime } from "api/video";
import { getLessonInfo, getAllLesson } from "api/course";
import Chatbot from "components/ChatBot/chatbot";
import "./style.css";

// The usage of useLocation can see this issue on stackoverflow
// https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component

const Lessons = ({ lesson_id, lesson_name, course_id }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLessonClick = () => {
        navigate('/video', { state: { lesson_id: lesson_id, course_id: course_id }});
        navigate(0);
    }

    return (
        <div className="other-lesson-content">
            <div className="img-container" onClick={handleLessonClick}>
                <img src="https://cdn-icons-png.flaticon.com/512/1926/1926769.png" width={'100%'} alt="img" />
            </div>
            <div className="other-lesson-info">
                <p className="other-lesson-info-text">Lesson ID : {lesson_id}</p>
                <p className="other-lesson-info-text">Lesson Name : {lesson_name}</p>
                { lesson_id === location.state.lesson_id ? <p className="now-watching">目前正在觀看</p> : null}
            </div>
        </div>
    );
}

// When the video thumbnail clicked in HomePage/home.js, it will pass the lesson's course_id to this page
// But for now, home.js hasn't finished yet, so we just use a fixed course_id here
const VideoPage = () => {
    const location = useLocation();

    const [videoUrl, setVideoUrl] = useState('');
    const [videoName, setVideoName] = useState('');
    const [lastSummary, setLastSummary] = useState('');
    const [lessonInfo, setLessonInfo] = useState({});
    const [relatedLessons, setRelatedLessons] = useState([]);

    const playerRef = useRef(null);
    useNavigate(0);

    useEffect(() => {
        const fetchLessonInfo = async () => {
            try {
                console.log('fetch lesson info');
                const lessonInfo = await getLessonInfo(location.state.lesson_id);
                setLessonInfo(lessonInfo.data);
                console.log('lessonInfo:', lessonInfo);
            } catch (error) {
                console.error('Error fetching or processing lesson info:', error);
            }
        }
        const fetchRelatedLessons = async () => {
            try {
                console.log('fetch related lessons');
                const relatedLessons = await getAllLesson(location.state.course_id);
                setRelatedLessons(relatedLessons.data);
                console.log('relatedLessons:', relatedLessons);
            } catch (error) {
                console.error('Error fetching or processing related lessons:', error);
            }
        }
        // async get Test video
        async function fetchVideo() {
            try {
                console.log('fetching video');
                const response = await getVideo(location.state.lesson_id);
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
                const videoName  = await getName(location.state.lesson_id);
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
                const Time  = await getTime(location.state.lesson_id);
                console.log('Time = ',Time);
                const videoTime = Time.data;
                const [hours, minutes, seconds] = videoTime.split(':').map(parseFloat);
                const total = hours * 3600 + minutes * 60 + seconds;
                console.log('Time',total);
                //setVideoTime(total);
                // This is an instance function that can be called to seek to a specific point in the video.
                playerRef.current.seekTo(total, 'seconds');
            } catch (error) {
                console.error('Error fetching or processing video:', error);
            }
        }
        const fetchLastSummary = async() => {
            try {
                const SummaryInfo = await getLastSummary(location.state.lesson_id);
                setLastSummary(SummaryInfo.data);
                console.log('fetch last time summary:',SummaryInfo.data)             
            } catch (error) {
                console.error('Error fetching last time summary:', error);
            }
        }

        
        fetchLessonInfo();
        fetchRelatedLessons();
        fetchVideo();
        fetchVideoName();
        fetchVideoTime();
        fetchLastSummary();
    }, [location.state.lesson_id, location.state.course_id]);

    const handlePause = () => {
        const seconds = playerRef.current.getCurrentTime();
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
        const main = hrs + ':' + mins + ':' + secs;
        recordTime(location.state.lesson_id,main);
        console.log('影片已暫停',main);
    };

    return (
        <div className="video-container">
            <div className="video-info">
                <div className="player-wrapper">
                    <ReactPlayer 
                        ref={playerRef}
                        url = {videoUrl}
                        playing={true}
                        controls={true}
                        preload="auto"
                        width="100%"
                        height="100%"
                        onPause={handlePause}
                    />
                </div>
                <div className="video-title">
                    <p className="video-name"> {videoName} </p>
                </div>
                <div className="lesson-info">
                    <p className="lesson-summary-text"> 課程簡介 : </p>
                    <div className="lesson-summary">
                        { lessonInfo.summary === '' ? '本課程暫無簡介' : lessonInfo.summary }
                    </div>
                    <p className="lesson-content-text"> 課程內容 : </p>
                    <div className="lesson-content">
                        { lessonInfo.srt === '' ? '本課程暫無內容' : lessonInfo.srt }
                    </div>
                    <p className="lesson-content-text"> 前情提要: </p>
                    <div className="lesson-content">
                        { lastSummary === '未有觀看紀錄' ? '未有觀看紀錄' : lastSummary }
                    </div>
                </div>
            </div>
            <div className="other-lessons">
                <p className="relative-videos">相關影片</p>
                { relatedLessons.map((lesson) => {
                    return (
                        <Lessons 
                            lesson_id={lesson.id} 
                            lesson_name={lesson.name} 
                            course_id={lesson.course_id}
                            key={lesson.id} 
                        />
                    );
                }) }
            </div>
            <Chatbot course_id={location.state.course_id} />
        </div>
    );
};

export default VideoPage;