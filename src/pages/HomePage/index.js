import React from "react";
import Features from "./features";
import Home from "./home";
import Navbar from "components/Navbar";
import { useState, useEffect } from "react";

const HomePage = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const jwtFromLocalStorage = localStorage.getItem('jwt');
        setIsLogin(jwtFromLocalStorage ? true : false);
    }, []); 

    return <div>
        <Navbar setIsLogin={setIsLogin} />
        {isLogin ? <Home /> : <Features />}
    </div>;
};

export default HomePage;
