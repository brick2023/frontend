import React from "react";
import Features from "./features";
import Home from "./home";
import { useEffect } from "react";
import api from "api/security";

const HomePage = ({isLogin, setIsLogin}) => {

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

    return <div>
        {isLogin ? <Home /> : <Features />}
    </div>;
};

export default HomePage;
