import React , { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Chatbot from './chatbot';
import {getCourseInfo, getLessons ,getLessonForCourse, getAllLesson, fetchUserCourse} from "api/course"; 
import { getImage } from "api/search";

var id_image_exist_dict = {};

const VideoCard = ({expand, title, id, course_id, summary}) => {
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleVideoCardClick = () => {
    navigate('/video', { state: { lesson_id: id, course_id: course_id }});
    navigate(0);
  }

  const fetchImage = async () => {
      console.log('fetch image');
      try {
          const response = await getImage(id); // Pass lesson_id instead of a fixed value
          const blobURL = URL.createObjectURL(response.data);
          setImage(blobURL);
          console.log(blobURL);
          id_image_exist_dict[id] = blobURL;
      } catch (error) {
          console.error('Error fetching image:', error);
      }
  };

  if (id_image_exist_dict[id]) {
      return (
          <div className='video-card' onClick={handleVideoCardClick}>
              <img className='video-thumbnail' src={id_image_exist_dict[id]} alt='video-thumbnail' />
              <div className='video-description'>
                  <h3><b> {title} </b></h3>
              </div>
              {summary}
          </div>
      );
  }
  fetchImage();
  console.log(image);

  return (
      <div className='video-card' onClick={handleVideoCardClick} >
          <img className='video-thumbnail' src={image} alt='video-thumbnail'/>
          <div className='video-description'>
              <h3><b> {title} </b></h3>
          </div>
          {/* {expand ? <Srts srts={srt} lesson_id={id} course_id={course_id} /> : null} */}
          {summary}
      </div>
  );
}

const Home = () => {

  const navigate = useNavigate();
  //course 開闔
  // const [isExpanded, setIsExpanded] = useState(true);
  // const handleToggleExpand = () => {
  //   setIsExpanded(prevState => !prevState);
  // };
  const handleImageClick = () => {
      navigate('/video');
  };

  // 處理展開和關閉的函數

  const [expandedStates, setExpandedStates] = useState({});
  const handleToggleExpand = (courseId) => {
    setExpandedStates(prevStates => ({
      ...prevStates,
      [courseId]: !prevStates[courseId]  // 切換當前課程的展開狀態
    }));
  };


    const [courseInfo, setCourseInfo] = useState([]);
    // course_id : lesson_id list
    const [courseLessonDict, setCourseLessonDict] = useState({});
    // lesson_id: lesson summary
    const [id_summary_dict, setLessonSummaryDict] = useState({});
    // lesson_id: lesson name
    const [id_name_dict, setLessonNameDict] = useState({});

    useEffect(() => {
      const fetchCourseInfo = async () => {
        try {
          const response = await getCourseInfo(); // Ensure this function is defined and returns course IDs
          const courseids = response.data.map(item => item.course_id);    // get courses_id and put into an array
          for (let index = 0; index < courseids.length; index++) {        // go throught the array to get lessons_id
            const response_2 = await getAllLesson(courseids[index]);   
            const lessonsids = response_2.data.map(item => item.id);
            const lessonSummaries = response_2.data.map(item => item.summary);
            console.log("hi",lessonsids); 
            setCourseLessonDict(prevState => ({
              ...prevState,
              [courseids[index]]: lessonsids
            }));
            for (let i = 0; i < lessonsids.length; i++) {
              id_summary_dict[lessonsids[i]] = lessonSummaries[i];
              id_name_dict[lessonsids[i]] = response_2.data[i].name;
            }
            setLessonSummaryDict(id_summary_dict);
            setLessonNameDict(id_name_dict);
          }
        setCourseInfo(response.data); // Assuming the response data is the array of course IDs
        }catch (error) {
          console.error('Failed to fetch courseInfo', error);
        }
      }
    
      fetchCourseInfo();
      // fetchUserCourse()
    }, []);


    return (
        <div style={{ display: 'flex', minHeight: '85vh'}}>
          <div className='courses' style={{ marginLeft:40 ,marginBottom:100}}>
              <main style={{ padding: 10 }}> 
                <div className='courses' style={{ marginLeft: 40, marginBottom: 100 }}>
                  {courseInfo.map(course => (
                    <div className='courseCard' style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }} key={course.id}>
                      <h2 style={{ textAlign: 'left', marginBottom: 10, textShadow: '2px 2px 1px rgba(0,0,0,0.2)', marginLeft: 70 }}>
                        {course.course_name} course_id: {course.course_id}
                        <span onClick={() => handleToggleExpand(course.id)} style={{ cursor: 'pointer', marginLeft: 10 }}>
                          {expandedStates[course.id]? <span>&#9662;</span> : <span>&#9652;</span>}
                        </span>
                      </h2>
                      {expandedStates[course.id] && (
                        <div className='videoRow' style={{ display: 'flex', overflowX: 'auto', maxWidth: '1240px', marginLeft: 70, scrollbarWidth: 'thin', scrollbarColor: '#d4cdcd #e0e0e0' }}>
                          {courseLessonDict[course.course_id].map(lessonId => (
                            <VideoCard title={`${id_name_dict[lessonId]}`} id={lessonId} course_id={course.course_id} summary={id_summary_dict[lessonId]} expand={true} key={lessonId} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </main>
          </div>
            {/* <Chatbot /> */}
        </div>
    );
};

export default Home;