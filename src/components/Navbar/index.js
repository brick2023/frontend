import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import api from "api/security";
import LoginModal from "components/LoginModal";

const Navbar = ({isLogin, setIsLogin}) => {
    const [showLoginModal, toggleLoginModal] = useModal(false);
    const [openProfile, setOpenProfile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogin = async () => {
            // verify jwt token
            const res = await api.post('/verify_token', {
                jwt: localStorage.getItem('jwt'),
            });

            const verify_message = res.data;
            setIsLogin(verify_message === 'ok' ? true : false);
        }
        
        handleLogin();
        
    }, [setIsLogin]); 

    const handleProfileClick = () => {
        setOpenProfile(!openProfile);
        navigate('/profile');
        navigate(0); // refresh the page
    }

    const handleLogOutClick = () => {
        setOpenProfile(!openProfile);
        localStorage.removeItem('jwt');
        setIsLogin(false);
        navigate('/');
    }

    const handleBackToHome = () => {
        navigate('/');
    }

    // async search
    const search = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        navigate('/search', { state: { query } });
        navigate(0);
    }

    // Button before Login
    const BeforeLogin = () => {
        return (
            <button className="login-btn" onClick={toggleLoginModal}>
                Login
            </button>
        );
    }

    const DropDownProfile = () => {
        return (
            <div className="dropDownProfile">
                <ul>
                    <li onClick={handleProfileClick} > Profile </li>
                    <li onClick={handleLogOutClick} > Log Out </li>
                </ul>
            </div>
        );
    }
    
    // Button after Login
    const AfterLogin = () => {
        return (
            <button className="user-btn" onClick={ () => setOpenProfile(!openProfile) }>
                <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="User" />
            </button>    
        );
    }

    return <div>
        <nav className="navbar navbar-design">
            <div className="container-fluid">
                <div className="navbar-brand" onClick={handleBackToHome}>
                    <img src="https://cdn-icons-png.flaticon.com/128/3698/3698586.png" alt="Logo" className="navbar-llama" />
                    <p className="navbar-title">NCKU Self-Learning</p>
                </div>

                <form onSubmit={search}>
                    <input name="query" placeholder="Search" className="search-form-design" />
                    <button type="submit" className="search-button">
                        <img className="search-icon" src="https://cdn-icons-png.flaticon.com/512/10385/10385257.png" alt="Search" />
                    </button>
                </form>

                {isLogin ? <AfterLogin /> : <BeforeLogin />}
            </div>
        </nav>
        <LoginModal show={showLoginModal} onClose={toggleLoginModal} setIsLogin={setIsLogin} />
        { openProfile && <DropDownProfile /> }
    </div>
};

// 使用自定義 Hook 簡化 Modal 的顯示與隱藏邏輯
const useModal = (initialState = false) => {
    const [show, setShow] = useState(initialState);

    const toggle = () => {
        setShow(!show);
    };

    return [show, toggle];
};


export default Navbar;