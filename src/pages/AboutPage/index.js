import React, {useState, useEffect} from "react";
import "./about.css";
import {getUserName, getUserEmail} from "api/user";
import {getStudentLessons} from "api/course";
import StudentInfo from "components/Profile/studentInfo";
import WatchingBehaviors from "components/Profile/watchingBehaviors";
import TotalWatchingTime from "components/Profile/totalWatchingTime";

const SwitchButtons = ({ setStatus }) => {
    const status0 = () => {
        setStatus(0);
    }

    const status1 = () => {
        setStatus(1);
    }
    
    return (
        <div className="switch-watch-info">
            <button id="total-watching-time" onClick={status0} > 觀看時長 </button>
            <button id="watching-situation" onClick={status1} > 暫停/回拉 </button>
        </div>
    );
}

const AboutPage = () => {
    const [userInfo, setUserInfo] = useState({ name: '', email: ''});
    const [studentLessons, setStudentLessons] = useState([]); 
    const [status, setStatus] = useState(0);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const name = await getUserName();
            const email = await getUserEmail();
            console.log(name, email);
            setUserInfo({ name: name.data, email: email.data });
        }
        const fetchStudentLessons = async () => {
            const lessons = await getStudentLessons();
            setStudentLessons(lessons.data);
            console.log(lessons);
        }

        fetchUserInfo();
        fetchStudentLessons();
    }
    , []);

    return (
        <div className="profile-container">
            < StudentInfo userName={userInfo.name} userEmail={userInfo.email} />
            <div className="watching-infos">
                <SwitchButtons setStatus={setStatus} />
                <div className='behavior-infos'>
                    { status === 0 ? 
                        <TotalWatchingTime studentLessons={studentLessons} /> : 
                        <WatchingBehaviors studentLessons={studentLessons}/> }
                </div>
            </div>
        </div>
    );
};

export default AboutPage;