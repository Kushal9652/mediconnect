import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Signup from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';
import Services from './screens/services';
import About from './screens/about';
import Appointment from './screens/appointment';
import Profile from './screens/profile';

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
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1 className="text-2xl text-center mb-8 mt-5">404 Not Found</h1>} />

      </Routes>
    </>
  );
}

export default App;
