import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [form, setForm] = useState({ name: '', email: '' });
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
        const res = await axios.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setForm({ name: res.data.name, email: res.data.email });
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
      const res = await axios.post('/api/profile', form, {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">Profile</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center">{success}</div>}
        {!editMode ? (
          <div>
            <div className="mb-6">
              <label className="text-gray-700 font-medium block mb-2">Name:</label>
              <div className="px-4 py-2 border rounded-lg bg-gray-50">{user.name}</div>
            </div>
            <div className="mb-6">
              <label className="text-gray-700 font-medium block mb-2">Email:</label>
              <div className="px-4 py-2 border rounded-lg bg-gray-50">{user.email}</div>
            </div>
            <button onClick={() => setEditMode(true)} className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md">Edit Profile</button>
          </div>
        ) : (
          <form onSubmit={handleSave}>
            <div className="mb-6">
              <label htmlFor="name" className="text-gray-700 font-medium block mb-2">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md">Save</button>
              <button type="button" onClick={() => { setEditMode(false); setForm(user); }} className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 shadow-md">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile; 