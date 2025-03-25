import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Signup from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';
import Services from './screens/services';
import About from './screens/about';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
