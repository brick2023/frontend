import React from 'react';
import ProgressBar from './ProgressBar';
import './style.css';

//Create a function that get a random integer between 0 to 100 and return the number with type string
const getRandom = () => {
    return Math.floor(Math.random() * 100).toString();
}

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

const Lessons = ({ name }) => {
    return (
        <div className='lessons-block'>
            <div className='lesson-name-and-watchtime'>
                <div className='lesson-name'>
                    <a href='#'> {name} </a>
                </div>
                <span className='divide-line'> &#124; </span>
                <span className='lesson-total-watch-time'> 00:00:00 </span>
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
                    return <Lessons name={lesson.lesson_name} key={lesson.lesson_id} />
                })}
            </div>
        </div>
    );
};

export default TotalWatchingTime;