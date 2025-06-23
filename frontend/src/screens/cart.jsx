import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(stored);
    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(updated);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleRemove = (idx) => {
    const updated = cart.filter((_, i) => i !== idx);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
  };

  const handleCheckout = () => {
    setShowPayment(true);
    setPaymentSuccess(false);
    setError('');
  };

  const handlePay = (e) => {
    e.preventDefault();
    // Simple validation
    if (!card.number || !card.name || !card.expiry || !card.cvv) {
      setError('Please fill in all fields.');
      return;
    }
    setTimeout(() => {
      setPaymentSuccess(true);
      setShowPayment(false);
      setCart([]);
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('storage'));
      setCard({ number: '', name: '', expiry: '', cvv: '' });
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="flex-1 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-violet-700 mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-lg text-gray-600">Your cart is empty.</div>
        ) : (
          <div className="w-full max-w-3xl space-y-4">
            {cart.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between border-l-4 border-violet-400">
                <div>
                  <div className="font-semibold text-violet-700 text-lg mb-1">
                    {item.type === 'medicine' ? item.name : item.name}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">
                    {item.type === 'medicine' ? item.description : item.description}
                  </div>
                  {item.type === 'labtest' && item.price && (
                    <div className="text-violet-600 font-bold">{item.price}</div>
                  )}
                </div>
                <button
                  className="mt-4 md:mt-0 bg-red-100 text-red-600 px-4 py-2 rounded shadow hover:bg-red-200 transition font-semibold"
                  onClick={() => handleRemove(idx)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-end mt-8">
              <button
                className="bg-violet-600 text-white px-6 py-3 rounded-lg shadow hover:bg-violet-700 transition text-lg font-semibold"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
        {/* Payment Modal */}
        {showPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <form onSubmit={handlePay} className="bg-white rounded-xl shadow-lg p-8 w-80 flex flex-col gap-4 relative">
              <button type="button" className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowPayment(false)}>&times;</button>
              <h2 className="text-xl font-bold text-violet-700 mb-2">Payment Details</h2>
              {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
              <input
                type="text"
                placeholder="Card Number"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300"
                value={card.number}
                onChange={e => setCard({ ...card, number: e.target.value })}
                maxLength={16}
              />
              <input
                type="text"
                placeholder="Name on Card"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300"
                value={card.name}
                onChange={e => setCard({ ...card, name: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-violet-300"
                  value={card.expiry}
                  onChange={e => setCard({ ...card, expiry: e.target.value })}
                  maxLength={5}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="border rounded px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-violet-300"
                  value={card.cvv}
                  onChange={e => setCard({ ...card, cvv: e.target.value })}
                  maxLength={4}
                />
              </div>
              <button
                type="submit"
                className="bg-violet-600 text-white px-4 py-2 rounded-lg shadow hover:bg-violet-700 transition font-semibold mt-2"
              >
                Pay Now
              </button>
            </form>
          </div>
        )}
        {/* Payment Success Message */}
        {paymentSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-xl font-bold text-green-600 mb-2">Payment Successful!</div>
              <div className="text-gray-700 mb-4">Thank you for your purchase.</div>
              <button
                className="bg-violet-600 text-white px-4 py-2 rounded-lg shadow hover:bg-violet-700 transition font-semibold"
                onClick={() => setPaymentSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart; 