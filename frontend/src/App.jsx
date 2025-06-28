import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Signup from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';
import About from './screens/about';
import Appointment from './screens/appointment';
import Profile from './screens/profile';
import Medicines from './screens/medicines';
import LabTest from './screens/lab-test';
import Cart from './screens/cart';
import { CartProvider, useCart } from './components/CartContext';

function AppRoutes() {
  const { addToCart } = useCart();
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/cart' && <Nav />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/medicines" element={<Medicines onAddToCart={addToCart} />} />
        <Route path="/lab-test" element={<LabTest />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1 className="text-2xl text-center mb-8 mt-5">404 Not Found</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
