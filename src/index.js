import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './About';
import Login from './Login';
import SignUp from './signup';
import Main from './App.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
      <Route path="/App.js" element={<Main />} />
    </Routes>
   </BrowserRouter>
);


