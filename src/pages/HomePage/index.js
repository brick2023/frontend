import React from "react";
import Features from "./features";
import Home from "./home";

const HomePage = ({ isLogin }) => {

    return <div>
        {isLogin ? <Home /> : <Features />}
    </div>;
};

export default HomePage;
