import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r text-violet-500 shadow-lg">
      <div className="container mx-0 px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="flex items-center space-x-4">
          {/* Uncomment if you want to add a logo */}
          {/* <img src="/logo.png" alt="Mediconnect Logo" className="h-10 w-10" /> */}
          <span className="text-3xl font-bold tracking-wide">Mediconnect</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <a href="/" className="hover:text-gray-200 transition">Home</a>
          </li>
          <li>
            <a href="/appointment" className="hover:text-gray-200 transition">Appointment</a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-200 transition">Services</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200 transition">About</a>
          </li>
        </ul>


        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
            Sign Up
          </button>
          <button className="bg-violet-700 text-white px-4 py-2 rounded-md shadow hover:bg-violet-500 transition">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
