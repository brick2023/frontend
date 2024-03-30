import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModal from "components/LoginModal";

const Navbar = ({setIsLogin}) => {
    const [showLoginModal, toggleLoginModal] = useModal(false);
    return <div>
        <nav className="navbar sticky-top bg-body-tertiary navbar-design">
            <div className="container-fluid">
                <div className="navbar-llama-relative-box">
                    <img src="https://cdn-icons-png.flaticon.com/128/3698/3698586.png" alt="Logo" className="navbar-llama" />
                </div>
                <p className="navbar-title">NCKU Self-Learning</p>
                <button type="button" onClick={toggleLoginModal}>
                    Log In
                </button>
            </div>
        </nav>
        <LoginModal show={showLoginModal} onClose={toggleLoginModal} setIsLogin={setIsLogin} />
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