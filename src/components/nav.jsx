import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white text-violet-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold tracking-wide">MediConnect</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-violet-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/appointment" className="hover:text-violet-400 transition">Appointment</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-violet-400 transition">Services</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-violet-400 transition">About</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="bg-violet-100 text-violet-600 px-4 py-2 rounded-md shadow hover:bg-violet-200 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-violet-600 text-white px-4 py-2 rounded-md shadow hover:bg-violet-500 transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
