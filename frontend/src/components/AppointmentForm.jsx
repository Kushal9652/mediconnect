import { useState } from "react";
import { CalendarIcon, Clock, Mail, User, CheckCircle2 } from "lucide-react";
import { createAppointment } from '../config/apiConfig';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("All fields are required to book your appointment.");
      return;
    }
    setIsSubmitting(true);
    try {
      // Try to get user id from token (if available)
      let id = null;
      const token = localStorage.getItem('token');
      if (token) {
        // Try to decode the token to get user id (if JWT), or fetch user info from backend if needed
        // For now, try to get user id from localStorage if stored
        const userStr = localStorage.getItem('user');
        if (userStr) {
          try {
            const user = JSON.parse(userStr);
            id = user._id || user.id;
          } catch {}
        }
      }
      const payload = { ...formData };
      if (id) payload.id = id;
      await createAppointment(payload, token);
      setIsSubmitted(true);
      alert(`Appointment Booked Successfully!\nYour appointment is scheduled for ${formData.date} at ${formData.time}`);
    } catch (err) {
      setError(err.message || 'Failed to book appointment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center animate-scale-in border border-purple-100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-8 animate-scale-in">
            <CheckCircle2 className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-6">
            Appointment Confirmed!
          </h2>
          <div className="space-y-3 text-gray-700 mb-8 bg-purple-50 rounded-xl p-6">
            <p><strong className="text-purple-700">Name:</strong> {formData.name}</p>
            <p><strong className="text-purple-700">Email:</strong> {formData.email}</p>
            <p><strong className="text-purple-700">Date:</strong> {formData.date}</p>
            <p><strong className="text-purple-700">Time:</strong> {formData.time}</p>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            A confirmation email has been sent to your email address.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", date: "", time: "" });
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} noValidate className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 animate-fade-in border border-purple-100">
        <div className="space-y-8">
          {/* Name Field */}
          <div className="space-y-3 group">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center group-hover:text-purple-700 transition-colors duration-200">
              <User className="w-5 h-5 mr-3 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="h-14 border-2 border-purple-200 focus:border-purple-500 focus:ring-0 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 w-full px-4"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-3 group">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center group-hover:text-purple-700 transition-colors duration-200">
              <Mail className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
              Email Address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-14 border-2 border-purple-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 w-full px-4"
            />
          </div>

          {/* Date Field */}
          <div className="space-y-3 group">
            <label className="text-sm font-semibold text-gray-700 flex items-center group-hover:text-purple-700 transition-colors duration-200">
              <CalendarIcon className="w-5 h-5 mr-3 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
              Appointment Date
            </label>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={formData.date}
              onChange={e => handleInputChange("date", e.target.value)}
              className="h-14 border-2 border-purple-200 focus:border-purple-500 focus:ring-0 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 w-full px-4"
            />
          </div>

          {/* Time Field */}
          <div className="space-y-3 group">
            <label className="text-sm font-semibold text-gray-700 flex items-center group-hover:text-purple-700 transition-colors duration-200">
              <Clock className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
              Appointment Time
            </label>
            <input
              type="text"
              placeholder="HH:MM AM/PM"
              value={formData.time}
              onChange={e => handleInputChange("time", e.target.value)}
              className="h-14 border-2 border-purple-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 w-full px-4"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-600 text-center font-semibold py-2">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:transform-none disabled:hover:scale-100 mt-8"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Booking Your Appointment...
              </div>
            ) : (
              "Book Appointment"
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By booking an appointment, you agree to our terms of service and privacy policy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;