import React from "react";
import Features from "./features";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useState, useEffect } from "react";

const HomePage = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const jwtFromLocalStorage = localStorage.getItem('jwt');
        setIsLogin(jwtFromLocalStorage ? true : false);
    }, []); 

    return <div>
        <Navbar setIsLogin={setIsLogin} />
        {isLogin ? <p>已登入</p> : <Features />}
        <Footer />
    </div>;
};


export default HomePage;
