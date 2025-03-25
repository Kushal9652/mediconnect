import React from 'react'
import '../index.css';

const Login = () => {
return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">Login</h2>
            <form>
                <div className="mb-6">
                    <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="text-gray-700 font-medium block mb-2">Password:</label>
                    <input type="password" id="password" name="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-6">
                    <button type="submit" className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md">Login</button>
                </div>
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Or login with</p>
                    <button type="button" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 shadow-md mb-2 flex items-center justify-center">
                        <img src="https://developers.google.com/static/identity/images/branding_guideline_sample_nt_sq_sl.svg" alt="Google Logo" className="w-5 h-5 mr-3"/>
                        Google
                    </button>
                    <button type="button" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md flex items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" className="w-5 h-5 mr-2"/>
                        Facebook
                    </button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Login
