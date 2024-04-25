import React from 'react';
import './style.css';

const StudentInfo = ({ userName, userEmail }) => {
    return (
        <div className="student-info">
            <div className='yellow-part-on-top'></div>
            <img className='profile-icon' src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="User"/>
            <div className='student-info-content'>
                <div className='student-info-lines'>
                    <p className='student-info-lines-title'>姓名</p>
                    <input type='text' className='border-style' value={userName} disabled />
                </div>
                <div className='student-info-lines'>
                    <p className='student-info-lines-title'>Email</p>
                    <input type='text' className='border-style' value={userEmail} disabled />
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;