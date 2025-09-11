import React, { useState } from "react";
import {  ArrowLeft, Minus, Plus, Trash2, ShoppingBag, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      alert("Order placed successfully! Thank you for your purchase.");
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header with Back Button and Wishlist */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-purple-100 hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-700">Back</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-16 h-16 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any medicines to your cart yet.</p>
            <Link to="/medicines">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 rounded-xl font-semibold">
                Browse Medicines
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center mb-6">
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
                </span>
              </div>
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      {item.type === 'lab-test' && item.icon ? (
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                          {React.createElement(item.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                      ) : (
                        <img
                          src={item.image || "https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Item"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=Item";
                          }}
                        />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-2">
                        {item.purpose}
                      </p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 rounded-full border border-purple-200 hover:bg-purple-50 flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-full border border-purple-200 hover:bg-purple-50 flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 rounded-full border border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 p-6 sticky top-32 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-600">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-purple-100 pt-4 mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Tax</span>
                    <span>₹{(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{(getTotalPrice() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full h-14 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-500 hover:scale-105 hover:shadow-xl"
                >
                  {isCheckingOut ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Proceed to Checkout</span>
                    </div>
                  )}
                </button>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-red-600 border border-red-200 hover:bg-red-50 rounded-xl px-4 py-2 font-semibold"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;