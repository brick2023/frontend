// import logo from './logo.svg';
import './App.css';
// import { test as userTest } from 'api/user'
import React from 'react';
// import {useState , useEffect} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import routes from 'utils/router'

function App() {

  return (<div>
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
    </HashRouter>
  </div>
  );
}

export default App;
