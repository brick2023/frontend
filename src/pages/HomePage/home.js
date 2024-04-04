import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Chatbot from './chatbot';

const Home = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/video');
    };

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
            <div className='Courses'>
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
            </div>
            <Chatbot />
          </main>
        </div>
    );
};

export default Home;