import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './style.css';

//Create a function that get a random integer between 0 to 100 and return the number with type string
const getRandom = () => {
    return Math.floor(Math.random() * 100).toString();
}

const randomWatchTime = () => {
    let seconds = Math.floor(Math.random() * 1200);

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // 格式化成兩位數
    const formatNumber = (num) => num.toString().padStart(2, '0');

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(secs)}`;
};

const CourseInfoTitle = () => {
    return (
        <div className='course-info-titles'>
            <div className='course-info-title-1'>
                <span className='course-info-title-name' > 課程 </span>
                <img className='course-info-title-img'
                 src="https://cdn-icons-png.flaticon.com/512/710/710362.png" alt="book" />
            </div>
            <div className='course-info-title-2'>
                <span className='course-info-title-name' > 觀看時長 </span>
                <img className='course-info-title-img'
                 src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="clock" />
            </div>
            <div className='course-info-title-3'>
                <span className='course-info-title-name' > 觀看時長PR </span>
            </div>
        </div>
    );
}

const Lessons = ({ id, name, course_id }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/video', {state: { lesson_id: id, course_id: course_id}});
        navigate(0);
    }

    return (
        <div className='lessons-block'>
            <div className='lesson-name-and-watchtime'>
                <div className='lesson-name'>
                    <div onClick={handleNavigate}> {name} </div>
                </div>
                <span className='divide-line'> &#124; </span>
                <span className='lesson-total-watch-time'> { randomWatchTime() } </span>
            </div>
            <ProgressBar bgcolor="#FFF5D0" progress={getRandom()} height={15} />
        </div>
    );
}

const TotalWatchingTime = ({ studentLessons }) => {
    return (
        <div className="total-watching-time-info">
            <CourseInfoTitle />
            <div className='student-courses-watch'>
                { studentLessons.map((lesson) => {
                    return <Lessons id={lesson.lesson_id} name={lesson.lesson_name} course_id={lesson.course_id} key={lesson.lesson_id} />
                })}
            </div>
        </div>
    );
};

export default TotalWatchingTime;