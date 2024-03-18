import './App.css';
// import { test as userTest } from 'api/user'
import React from 'react';
// import {useState , useEffect} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import routes from 'utils/router'
// import Navbar from "components/Navbar";
import Footer from "components/Footer";

function App() {

  return (
  <div className='App'>
    <HashRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        ))}
      </Routes>
      <Footer />
    </HashRouter>
  </div>
  );
}

export default App;
