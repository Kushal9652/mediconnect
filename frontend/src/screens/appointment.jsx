import AppointmentForm from "../components/AppointmentForm";
import { Calendar, Clock, Mail, User, Shield, Heart, Star, Phone, MapPin, Award } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';

const Appointments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white flex flex-col">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 flex-1">
        <div className="text-center mb-12 animate-fade-in" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6 animate-scale-in" data-aos="zoom-in">
            <Calendar className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-6 animate-fade-in" data-aos="fade-up">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in" data-aos="fade-up" data-aos-delay="200">
            Schedule your visit with our healthcare professionals. We're here to provide 
            you with the best medical care in a comfortable environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in group" data-aos="flip-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" data-aos="zoom-in">
              <User className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Personal Care</h3>
            <p className="text-gray-600">Tailored treatment plans for your unique needs</p>
          </div>
          <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in group" data-aos="flip-up" data-aos-delay="100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" data-aos="zoom-in">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Flexible Hours</h3>
            <p className="text-gray-600">Convenient scheduling to fit your busy lifestyle</p>
          </div>
          <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in group" data-aos="flip-right" data-aos-delay="200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300" data-aos="zoom-in">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Easy Communication</h3>
            <p className="text-gray-600">Stay connected with instant confirmations</p>
          </div>
        </div>

        {/* Appointment Form */}
        <div data-aos="fade-up">
          <AppointmentForm />
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 space-y-20">
          {/* Why Choose Us Section */}
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-12">
              Why Choose MediConnect?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group hover:scale-105 transition-all duration-300" data-aos="zoom-in-up">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Trusted Care</h3>
                <p className="text-gray-600 text-sm">Board-certified physicians with years of experience</p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="100">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Compassionate</h3>
                <p className="text-gray-600 text-sm">We care about you as a person, not just a patient</p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="200">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-gray-600 text-sm">Consistently rated as the top medical practice</p>
              </div>
              <div className="group hover:scale-105 transition-all duration-300" data-aos="zoom-in-up" data-aos-delay="300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Award Winning</h3>
                <p className="text-gray-600 text-sm">Recognized for excellence in patient care</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white animate-fade-in" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-purple-100">
                Have questions? We're here to help you every step of the way.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-all duration-300" data-aos="flip-left">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-purple-100">(555) 123-4567</p>
                  <p className="text-sm text-purple-200 mt-1">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300" data-aos="flip-up" data-aos-delay="100">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-purple-100">info@mediconnect.com</p>
                  <p className="text-sm text-purple-200 mt-1">24/7 Response</p>
                </div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300" data-aos="flip-right" data-aos-delay="200">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/30 transition-all duration-300">
                  <MapPin className="w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold mb-2">Visit Us</h3>
                  <p className="text-purple-100">123 Health Street</p>
                  <p className="text-sm text-purple-200 mt-1">Downtown Medical District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-12">
              What Our Patients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" data-aos="zoom-in">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"Exceptional care and amazing staff. I've never felt more comfortable at a medical facility."</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Patient since 2020</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"The online booking system is so convenient, and the doctors are incredibly knowledgeable."</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-600">Patient since 2019</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"From booking to follow-up, everything is seamless. Highly recommend MediConnect!"</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Emily Rodriguez</p>
                    <p className="text-sm text-gray-600">Patient since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;