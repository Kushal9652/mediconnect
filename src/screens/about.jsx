import React from 'react';
import Doctors from '../components/doctors';
import Footer from '../components/footer';

const About = () => {
    return (
        <div className="p-5 font-sans leading-relaxed bg-gradient-to-b from-gray-100 to-white">
            {/* Header Section */}
            <h2 className="text-5xl text-purple-800 font-extrabold mb-14 text-center animate-slideInDown">
                About <span className="text-violet-600">MediConnect</span>
            </h2>

            {/* Image Section */}
            <div className="flex justify-center mb-8">
                <img
                    src="/image.png"
                    alt="MediConnect Logo"
                    className="w-120 h-60 rounded-3xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Introduction Section */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <p className="text-gray-800 text-lg mb-6 animate-fadeIn transition-opacity duration-1000 delay-300">
                    Welcome to <strong className="text-purple-700">MediConnect</strong>, your trusted platform for connecting healthcare providers and patients. 
                    Our mission is to simplify healthcare access and improve communication between medical professionals and those in need.
                </p>
                <p className="text-gray-800 text-lg animate-fadeIn transition-opacity duration-1000 delay-500">
                    At MediConnect, we believe in leveraging technology to create a seamless and efficient healthcare experience. 
                    Whether you're a patient looking for the right doctor or a healthcare provider aiming to expand your reach, 
                    MediConnect is here to bridge the gap.
                </p>
            </div>

            {/* Values Section */}
            <div className="mt-10 text-center max-w-4xl mx-auto">
                <h3 className="text-4xl text-purple-700 font-semibold mb-6 animate-slideInLeft">
                    Our Values
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-4 text-left animate-fadeIn transition-opacity duration-1000 delay-700">
                    <li><strong>Compassionate Care:</strong> We prioritize empathy and understanding in every interaction.</li>
                    <li><strong>Innovation:</strong> Harnessing the latest technology to improve healthcare delivery.</li>
                    <li><strong>Accessibility:</strong> Making healthcare services available to everyone, everywhere.</li>
                    <li><strong>Trust and Transparency:</strong> Building relationships based on honesty and reliability.</li>
                </ul>
            </div>

            {/* Vision Section */}
            <div className="mt-12 text-center max-w-4xl mx-auto">
                <h3 className="text-4xl text-purple-700 font-semibold mb-6 animate-slideInRight">
                    Our Vision
                </h3>
                <p className="text-gray-800 text-lg animate-fadeIn transition-opacity duration-1000 delay-900">
                    To revolutionize the healthcare industry by creating a world where quality healthcare is just a click away. 
                    We aim to empower individuals and healthcare providers through technology, fostering a healthier and more connected global community.
                </p>
            </div>

            {/* Team Image Section */}
            <div className="mt-12 flex justify-center">
                <img
                    src="/doc2.jpg"
                    alt="Healthcare Team"
                    className="rounded-lg shadow-lg w-full max-w-4xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Doctors Section */}
            <div className="mt-12 animate-fadeIn transition-opacity duration-1000 delay-1100">
                <Doctors />
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default About;