import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import { Modal } from '../components/modal'; // Update this line if Modal is a named export
import API_BASE_URL from '../config/apiConfig';

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch user profile to get userId
    const token = localStorage.getItem('token');
    if (!token) {
      setApiError('You must be logged in to book an appointment.');
      return;
    }
    fetch(`${API_BASE_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          setUserId(data.id);
        } else {
          setApiError('You must be logged in to book an appointment.');
        }
      })
      .catch(() => setApiError('You must be logged in to book an appointment.'));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.time) errors.time = 'Time is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      if (!userId) {
        setApiError('You must be logged in to book an appointment.');
        return;
      }
      try {
        const response = await fetch('http://localhost:2800/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: userId }),
        });
        const data = await response.json();
        if (!response.ok) {
          setApiError(data.message || 'Failed to book appointment.');
        } else {
          setIsModalOpen(true);
        }
      } catch (err) {
        setApiError('Network error. Please try again.');
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="bg-lightgray min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl mb-10 mt-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Book an Appointment</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
                Date
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              {formErrors.date && <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>}
            </div>
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="time">
                Time
              </label>
              <input
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="time"
                type="time"
                value={formData.time}
                onChange={handleInputChange}
              />
              {formErrors.time && <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>}
            </div>
            {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="submit"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer className="mt-10" />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Appointment Scheduled</h2>
            <p className="text-gray-700 mb-4 sm:mb-6">Your appointment is scheduled. Please wait for the respective doctor to take your call.</p>
            <button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => {
                alert('Loading...');
                closeModal();
              }}
            >
              Connect zoom
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Appointment;

