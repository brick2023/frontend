import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import api from "api/account";
import './modal.css';

const LoginModal = ({ show, onClose , setIsLogin }) => {

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [jwt, setJwt] = useState(''); // jwt token

    // Use additional function 'handleClose' instead of onClose is because 
    // I want to clear the input value and login status when close the modal.
    const handleClose = () => {
        onClose();
        setAccount('');
        setPassword('');
        setLoginStatus('');
    }

    // 因為非同步的關係，所以 jwt 會在下一次 render 時才會改變，所以這裡要用 useEffect
    useEffect(() => {
        if (jwt) {
            localStorage.setItem('jwt', jwt);
            console.log(jwt);
        }
    }, [jwt]); // 只有當 jwt 改變時才會觸發

    const handleLogin = async () => {
        const res = await api.post('/login', {
            email: account,
            password,
        });

        const loginMessage = res.data.message;

        // set login status if 0 then login success, 1 no account, 2 password error
        if (loginMessage === 0) {
            setLoginStatus('登入成功');
            const jwtToken = res.data.jwt.access_token;
            setJwt(jwtToken);
            setIsLogin(true);
        } else if (loginMessage === 1) {
            setLoginStatus('無此帳號');
        } else if (loginMessage === 2) {
            setLoginStatus('密碼錯誤');
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header">
                <img className="modal-header-img" src="https://cdn-icons-png.flaticon.com/128/3698/3698586.png" alt="icon" />
                <Modal.Title className="modal-title"> NCKU Self-Learning </Modal.Title>
                <button className="modal-close-btn" onClick={handleClose}> &#9747; </button>
            </Modal.Header>
            <Modal.Body>
                <img className="llama-img" src="llama_head.png" alt="llama" />
                <div className="input-content">
                    <input className="username-input" type="text" placeholder="帳號" value={account} 
                        onChange={(e) => setAccount(e.target.value)} />
                    <input className="password-input" type="password" placeholder="密碼" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                    { loginStatus !== '' && <p>登入狀態：{loginStatus}</p> }
                </div>
                <button className="login-button" onClick={handleLogin}>
                    登入
                </button>
            </Modal.Body>
            {/* Not using Modal.Footer is because it will have an ugly line between
             Modal.Body and Modal.Footer. */}
        </Modal>
    );
};

export default LoginModal;
