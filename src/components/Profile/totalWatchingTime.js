import React from 'react';
import './style.css';

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

const TotalWatchingTime = () => {
    return (
        <div className="total-watching-time-info">
            <CourseInfoTitle />
            <div className='student-course-watch'>
                
            </div>
        </div>
    );
};

export default TotalWatchingTime;