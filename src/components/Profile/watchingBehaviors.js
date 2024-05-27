import React from 'react';
import './style.css';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

//Create a function that get a random integer between 0 to 100 and return the number with type string
const getRandom = () => {
    return Math.floor(Math.random() * 100).toString();
}

const Lessons = ({id, name, course_id }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/video', {state: { lesson_id: id, course_id: course_id}});
        navigate(0);
    }

    return (
        <div className='behavior-lessons-block'>
            <div className='behavior-lesson-name'>
                <div onClick={handleNavigate}> {name} </div>
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
                <div className='scroll-back-times' style={{ backgroundImage: "url(/timer.png)" }} >
                    { studentLessons.map((lesson) => {
                        return <Lessons name={lesson.lesson_name} key={lesson.lesson_id} />
                    })}
                </div>
            </div>
            <div>
                <div className='watching-behaviors-info-title'> 暫停次數 </div>
                <div className='pause-times' style={{ backgroundImage: "url(/pause.png)" }} >
                    { studentLessons.map((lesson) => {
                        return <Lessons id={lesson.lesson_id} name={lesson.lesson_name} course_id={lesson.course_id} key={lesson.lesson_id} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default WatchingBehaviors;