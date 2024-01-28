import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import api from "api/account";

const LoginModal = ({ show, onClose , setIsLogin }) => {

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [jwt, setJwt] = useState(''); // jwt token

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
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>登入</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="帳號" value={account} onChange={(e) => setAccount(e.target.value)} />
                <input type="password" placeholder="密碼" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>登入狀態：{loginStatus}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    關閉
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    登入
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
