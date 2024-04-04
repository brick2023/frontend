import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import LoginModal from "components/LoginModal";

const Navbar = ({setIsLogin}) => {
    const [showLoginModal, toggleLoginModal] = useModal(false);

    const search = (formData) => {
        const query = formData.get('query');
        alert(`Search: ${query}`);
    }

    return <div>
        <nav className="navbar sticky-top bg-body-tertiary navbar-design">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src="https://cdn-icons-png.flaticon.com/128/3698/3698586.png" alt="Logo" className="navbar-llama" />
                    <p className="navbar-title">NCKU Self-Learning</p>
                </div>

                <form action={search}>
                    <input name="query" placeholder="Search" className="search-form-design" />
                    <button type="submit" className="search-button">
                        <img className="search-icon" src="https://cdn-icons-png.flaticon.com/512/10385/10385257.png" alt="Search" />
                    </button>
                </form>

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