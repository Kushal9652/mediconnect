import React, { useState, useCallback } from 'react';
import Footer from '../components/footer';

const tests = [
  {
    name: 'Blood Test',
    description: 'Comprehensive blood analysis for health screening and diagnosis.',
    price: '₹500',
    icon: '🩸',
  },
  {
    name: 'Urine Test',
    description: 'Urinalysis to detect infections, kidney issues, and more.',
    price: '₹300',
    icon: '💧',
  },
  {
    name: 'X-Ray',
    description: 'Digital X-ray imaging for bones, chest, and more.',
    price: '₹800',
    icon: '🩻',
  },
  {
    name: 'ECG',
    description: 'Electrocardiogram to check heart health and rhythm.',
    price: '₹600',
    icon: '❤️',
  },
];

const LabTest = () => {
  const [booked, setBooked] = useState([false, false, false, false]);

  // Add to cart handler
  const handleAddToCart = useCallback((test) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ type: 'labtest', ...test });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  }, []);

  const handleBook = (idx) => {
    const updated = [...booked];
    updated[idx] = true;
    setBooked(updated);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="flex-1 flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-violet-700 mb-8">Book a Lab Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {tests.map((test, idx) => (
            <div key={test.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-violet-400">
              <div className="text-5xl mb-4">{test.icon}</div>
              <h2 className="text-xl font-semibold text-violet-700 mb-2">{test.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{test.description}</p>
              <div className="text-lg font-bold text-violet-600 mb-4">{test.price}</div>
              <div className="flex gap-2 w-full">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold shadow-md transition ${booked[idx] ? 'bg-green-400 text-white cursor-not-allowed' : 'bg-violet-600 text-white hover:bg-violet-700'}`}
                  onClick={() => handleBook(idx)}
                  disabled={booked[idx]}
                >
                  {booked[idx] ? 'Booked!' : 'Book Test'}
                </button>
                <button
                  className="flex-1 py-2 px-4 rounded-lg font-semibold shadow-md transition bg-violet-100 text-violet-700 hover:bg-violet-200"
                  onClick={() => handleAddToCart(test)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LabTest;
