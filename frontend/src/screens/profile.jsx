import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/apiConfig';

const Profile = () => {
  const [user, setUser] = useState({ username: '', email: '' });
  const [form, setForm] = useState({ username: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        setLoading(true);
        setError('');
        const res = await axios.get(`${API_BASE_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setForm({ username: res.data.username, email: res.data.email });
      } catch (err) {
        setError('Failed to load profile.');
        if (err.response && err.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/update`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
      setEditMode(false);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100"><div>Loading...</div></div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-violet-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-violet-500">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mb-4 border-4 border-violet-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-violet-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-violet-600 mb-1">{user.username}</h2>
          <p className="text-gray-500">Patient Profile</p>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition font-semibold"
          >
            Logout
          </button>
        </div>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <span className="font-semibold text-gray-700 w-24">Username:</span>
            <span className="flex-1 px-4 py-2 border rounded-lg bg-gray-50">{user.username}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-semibold text-gray-700 w-24">Email:</span>
            <span className="flex-1 px-4 py-2 border rounded-lg bg-gray-50">{user.email}</span>
          </div>
        </div>
        {!editMode ? (
          <button onClick={() => setEditMode(true)} className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 shadow-md font-semibold">Edit Profile</button>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label htmlFor="username" className="text-gray-700 font-medium block mb-1">Username</label>
              <input type="text" id="username" name="username" value={form.username} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400" />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium block mb-1">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400" />
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 shadow-md font-semibold">Save</button>
              <button type="button" onClick={() => { setEditMode(false); setForm(user); }} className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 shadow-md font-semibold">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;