import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { useLayoutEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import {
    BrowserRouter, 
    Routes,
    Route,
  } from "react-router-dom";


import Resume from './resume';
import GitHub from './github';
import Msnscript from './Msnscript';

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Wrapper>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/resume" element={<Resume/>} />
              <Route path="/github" element={<GitHub/>} />
              <Route path="/msnscript1" element={<Msnscript/>} />
          </Routes>
        </Wrapper>
    </BrowserRouter>
);

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
