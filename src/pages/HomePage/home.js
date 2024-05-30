import React , { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Chatbot from './chatbot';
import {getCourseInfo, getLessons ,getLessonForCourse, getAllLesson, fetchUserCourse} from "api/course"; 

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

    useEffect(() => {
      const fetchCourseInfo = async () => {
        try {
          const response = await getCourseInfo(); // Ensure this function is defined and returns course IDs
          const courseids = response.data.map(item => item.course_id);    // get courses_id and put into an array
          for (let index = 0; index < courseids.length; index++) {        // go throught the array to get lessons_id
            const response_2 = await getAllLesson(courseids[index]);   
            const lessonsids = response_2.data.map(item => item.id);
            console.log("hi",lessonsids); 
            
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
          <Sidebar backgroundColor="#FFF1C0">
            <Menu>
              <SubMenu label="Course 1">
                <MenuItem> Lesson 1 </MenuItem>
                <MenuItem> Lesson 2 </MenuItem>
                <MenuItem> Lesson 3 </MenuItem>
              </SubMenu>
              <SubMenu label="Course 2">
                <MenuItem> Lesson 1 </MenuItem>
                <MenuItem> Lesson 2 </MenuItem>
              </SubMenu>
              <SubMenu label="Course 3">
                <MenuItem> Lesson 1 </MenuItem>
                <MenuItem> Lesson 2 </MenuItem>
                <MenuItem> Lesson 3 </MenuItem>
                <MenuItem> Lesson 4 </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
          <main style={{ padding: 10 }}> 
            <div className='courses' style={{ marginLeft:40 ,marginBottom:100}}>
                <main style={{ padding: 10 }}> 
                  <div className='courses' style={{ marginLeft: 40, marginBottom: 100 }}>
                    {courseInfo.map(course => (
                      <div className='courseCard' style={{ display: 'flex', flexDirection: 'column', marginTop: 50 }} key={course.id}>
                        <h2 style={{ textAlign: 'left', marginBottom: 10, textShadow: '2px 2px 1px rgba(0,0,0,0.2)', marginLeft: 70 }}>
                          {course.course_name}
                          {course.id}
                          <span onClick={() => handleToggleExpand(course.id)} style={{ cursor: 'pointer', marginLeft: 10 }}>
                            {expandedStates[course.id]? <span>&#9662;</span> : <span>&#9652;</span>}
                          </span>
                        </h2>
                        {expandedStates[course.id] && (
                          <div className='videoRow' style={{ display: 'flex', overflowX: 'auto', maxWidth: '1240px', marginLeft: 70, scrollbarWidth: 'thin', scrollbarColor: '#d4cdcd #e0e0e0' }}>
                            <div className='videoCard' style={{ flex: 1, margin: '0 5px', backgroundColor: 'lightgrey', paddingBottom: 100, marginRight: 70, borderRadius: '7px', textShadow: '2px 2px 1px rgba(0,0,0,0.2)' }}>
                              <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} style={{ borderRadius: '8px', width: '250px', height: '200px', padding: 20 }}/>
                            </div>
                            <div className='videoCard' style={{ flex: 1, margin: '0 5px', backgroundColor: 'lightgrey', paddingBottom: 100, marginRight: 70, borderRadius: '7px', textShadow: '2px 2px 1px rgba(0,0,0,0.2)' }}>
                              <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} style={{ borderRadius: '8px', width: '250px', height: '200px', padding: 20 }}/>
                            </div>
                            <div className='videoCard' style={{ flex: 1, margin: '0 5px', backgroundColor: 'lightgrey', paddingBottom: 100, marginRight: 70, borderRadius: '7px', textShadow: '2px 2px 1px rgba(0,0,0,0.2)' }}>
                              <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} style={{ borderRadius: '8px', width: '250px', height: '200px', padding: 20 }}/>
                            </div>
                            <div className='videoCard' style={{ flex: 1, margin: '0 5px', backgroundColor: 'lightgrey', paddingBottom: 100, marginRight: 70, borderRadius: '7px', textShadow: '2px 2px 1px rgba(0,0,0,0.2)' }}>
                              <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} style={{ borderRadius: '8px', width: '250px', height: '200px', padding: 20 }}/>
                            </div>
                            <div className='videoCard' style={{ flex: 1, margin: '0 5px', backgroundColor: 'lightgrey', paddingBottom: 100, marginRight: 70, borderRadius: '7px', textShadow: '2px 2px 1px rgba(0,0,0,0.2)' }}>
                              <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} style={{ borderRadius: '8px', width: '250px', height: '200px', padding: 20 }}/>
                            </div>
                          </div>
                          
                        )}
                      </div>
                    ))}
                  </div>
                </main>

            </div>
            
            {/* <Chatbot /> */}
          </main>
        </div>
    );
};

export default Home;