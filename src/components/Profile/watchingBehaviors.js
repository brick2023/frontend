import React from 'react';
import './style.css';
import ProgressBar from './ProgressBar';

//Create a function that get a random integer between 0 to 100 and return the number with type string
const getRandom = () => {
    return Math.floor(Math.random() * 100).toString();
}

const Lessons = ({ name }) => {
    return (
        <div className='behavior-lessons-block'>
            <div className='behavior-lesson-name'>
                <a href='#'> {name} </a>
            </div>
            <ProgressBar bgcolor="#FFF5D0" progress={getRandom()} height={15} />
        </div>
    );
}

const WatchingBehaviors = ({ studentLessons }) => {
    return (
        <div className="watching-behaviors-info">
            <div>
                <div className='watching-behaviors-info-title'> 回拉次數 </div>
                <div className='scroll-back-times'>
                    { studentLessons.map((lesson) => {
                        return <Lessons name={lesson.lesson_name} key={lesson.lesson_id} />
                    })}
                </div>
            </div>
            <div>
                <div className='watching-behaviors-info-title'> 暫停次數 </div>
                <div className='pause-times'>
                    { studentLessons.map((lesson) => {
                        return <Lessons name={lesson.lesson_name} key={lesson.lesson_id} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default WatchingBehaviors;