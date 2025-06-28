import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartPop, setCartPop] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
    // Listen for storage changes (e.g., logout in another tab)
    const handleStorage = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    const handleCartPop = () => {
      setCartPop(true);
      setTimeout(() => setCartPop(false), 600);
    };
    window.addEventListener('cart-pop', handleCartPop);
    return () => window.removeEventListener('cart-pop', handleCartPop);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
    setIsLoggedIn(false);
    navigate('/login');
  };

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
              to="/medicines"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Medicines
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/lab-test"
              className="block px-4 py-2 hover:text-violet-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Lab Test
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
          {isLoggedIn ? (
            <>
              <li className="md:hidden border-b">
                <Link to="/profile" className="block px-4 py-2 hover:text-violet-400 transition" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </li>
              <li className="md:hidden">
                <button onClick={() => { setIsMenuOpen(false); handleLogout(); }} className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-800 transition">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="md:hidden border-b">
                <Link to="/signup" className="inline-block px-2 py-1 text-sm bg-violet-100 text-violet-600 rounded-md shadow hover:bg-violet-200 transition" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </li>
              <li className="md:hidden">
                <Link to="/login" className="inline-block px-3 py-1 bg-violet-600 text-white rounded-md shadow hover:bg-violet-500 transition" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn && (
            <>
              <Link to="/signup" className="bg-violet-100 text-violet-600 px-4 py-2 rounded-md shadow hover:bg-violet-200 transition">Sign Up</Link>
              <Link to="/login" className="bg-violet-600 text-white px-4 py-2 rounded-md shadow hover:bg-violet-500 transition">Log In</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/profile" className="bg-violet-100 text-violet-600 px-4 py-2 rounded-md shadow hover:bg-violet-200 transition flex items-center justify-center">
                {/* Profile icon (user avatar) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                </svg>
              </Link>
              <button onClick={handleLogout} className="bg-red-100 text-red-600 px-4 py-2 rounded-md shadow hover:bg-red-200 transition font-semibold">Logout</button>
            </>
          )}
          <Link to="/cart" className="relative group ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 text-violet-600 group-hover:text-violet-800 transition ${cartPop ? 'animate-bounce' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a2.25 2.25 0 012.12 1.575l.347 1.04M6.75 7.5h10.5m0 0l1.049 3.146a2.25 2.25 0 01-2.12 2.854H8.82a2.25 2.25 0 01-2.12-1.575L4.5 4.5m2.25 3h10.5m-6.75 9.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[1.2rem] text-center">{getTotalItems()}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
