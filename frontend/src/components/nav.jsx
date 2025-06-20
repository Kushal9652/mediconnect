import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white text-violet-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold tracking-wide">MediConnect</span>
        </div>
        <button
          className="md:hidden text-violet-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 font-medium absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <li className="border-b md:border-none">
            <Link
              to="/"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/appointment"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Appointment
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/services"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/about"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li className="md:hidden border-b">
            <Link
              to="/signup"
              className="inline-block px-2 py-1 text-sm bg-violet-100 text-violet-600 rounded-md shadow hover:bg-violet-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </li>
          <li className="md:hidden">
            <Link
              to="/login"
              className="inline-block px-3 py-1 bg-violet-600 text-white rounded-md shadow hover:bg-violet-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
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
          <Link
            to="/profile"
            className="bg-violet-100 text-violet-600 px-4 py-2 rounded-md shadow hover:bg-violet-200 transition"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
