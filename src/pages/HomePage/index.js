import React from "react";
import Features from "./features";
import Home from "./home";
import { useEffect } from "react";

const HomePage = ({isLogin, setIsLogin}) => {

    useEffect(() => {
        const jwtFromLocalStorage = localStorage.getItem('jwt');
        setIsLogin(jwtFromLocalStorage ? true : false);
    }, [setIsLogin]); 

    return <div>
        {isLogin ? <Home /> : <Features />}
    </div>;
};

export default HomePage;
