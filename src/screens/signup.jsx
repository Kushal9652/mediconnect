import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">Signup</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="text-gray-700 font-medium block mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Email:</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-700 font-medium block mb-2">Password:</label>
            <input type="password" id="password" name="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
