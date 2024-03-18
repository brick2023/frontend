import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from './chatbot';

const Home = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/video');
    };

    return (
        <div>
            <div className='Courses'>
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
                <img src="https://thumb.ac-illust.com/35/35f61f14dbe475df743fa2955a49ee3d_t.jpeg" alt="Video" onClick={handleImageClick} />
            </div>
            <Chatbot />
        </div>
    );
};

export default Home;