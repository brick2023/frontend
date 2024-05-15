import axios from 'axios';

// api for lesson
const courseApi = axios.create({
    baseURL: 'http://brick2.yenslife.top:2023/course',
    // Bearer token
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
})

export const getStudentLessons = () => courseApi.get('/lessons');
export const getLessonInfo = (lesson_id) => courseApi.get(`/lesson/${lesson_id}`);
export const getAllLesson = (course_id) => courseApi.get(`/${course_id}`);