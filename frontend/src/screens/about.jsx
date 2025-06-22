import React from 'react';
import Doctors from '../components/doctors';
import Footer from '../components/footer';

const About = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-100 flex flex-col overflow-x-hidden">
            {/* Header Section */}
            <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-16 bg-gradient-to-r from-violet-100 via-white to-blue-100 shadow-md rounded-b-3xl mb-14 relative overflow-hidden">
                {/* Animated background shapes */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-violet-200 rounded-full opacity-30 blur-2xl animate-pulse -z-10" style={{animationDuration: '6s'}}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse -z-10" style={{animationDuration: '8s'}}></div>
                <div className="flex-1 flex flex-col items-center md:items-end mb-8 md:mb-0">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-violet-800 mb-6 drop-shadow-lg animate-fadeInDown text-center md:text-right transition-all duration-700" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
                        About <span className="text-violet-500">MediConnect</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-xl animate-fadeInUp text-center md:text-right transition-all duration-700" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                        <span className="font-bold text-violet-600">MediConnect</span> is reimagining healthcare for the digital age. We empower patients and providers to connect, communicate, and collaborate effortlessly—anytime, anywhere.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 max-w-xl animate-fadeInUp text-center md:text-right transition-all duration-700" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                        Our platform blends cutting-edge technology with a human touch, making access to quality care simple, secure.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="bg-white/80 rounded-3xl shadow-xl p-4 transition-transform duration-700 hover:scale-105 w-64 md:w-80 lg:w-96 flex items-center justify-center animate-fadeInUp" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
                        <img
                            src="/image.png"
                            alt="MediConnect Logo"
                            className="w-full h-40 md:h-56 object-contain rounded-2xl shadow-md transition-transform duration-700 hover:scale-110 hover:shadow-2xl"
                            style={{transitionTimingFunction: 'cubic-bezier(.4,2,.6,1)'}}
                        />
                    </div>
                </div>
            </section>

            {/* Values & Vision Section */}
            <section className="w-full flex flex-col md:flex-row gap-8 px-6 md:px-16 mb-16">
                <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center animate-fadeInLeft transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-violet-50/80 hover:border-violet-200 border-2 border-transparent cursor-pointer group" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                    <h3 className="text-3xl md:text-4xl text-violet-700 font-semibold mb-6 transition-colors duration-300 group-hover:text-violet-900">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-800 space-y-4 text-left w-full max-w-md">
                        <li className="transition-all duration-300 group-hover:pl-2"> <strong>Compassionate Care:</strong> We prioritize empathy and understanding in every interaction.</li>
                        <li className="transition-all duration-300 group-hover:pl-2"> <strong>Innovation:</strong> Harnessing the latest technology to improve healthcare delivery.</li>
                        <li className="transition-all duration-300 group-hover:pl-2"> <strong>Accessibility:</strong> Making healthcare services available to everyone, everywhere.</li>
                        <li className="transition-all duration-300 group-hover:pl-2"> <strong>Trust and Transparency:</strong> Building relationships based on honesty and reliability.</li>
                    </ul>
                </div>
                <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center animate-fadeInRight transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50/80 hover:border-blue-200 border-2 border-transparent cursor-pointer group" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                    <h3 className="text-3xl md:text-4xl text-violet-700 font-semibold mb-6 transition-colors duration-300 group-hover:text-violet-900">Our Vision</h3>
                    <p className="text-gray-800 text-lg md:text-xl text-center transition-all duration-300 group-hover:tracking-wide">
                        To revolutionize the healthcare industry by creating a world where quality healthcare is just a click away. We aim to empower individuals and healthcare providers through technology, fostering a healthier and more connected global community.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 mb-16 gap-8">
                <div className="flex-1 flex flex-col items-center md:items-center animate-fadeInLeft text-center" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
                    <h3 className="text-3xl md:text-4xl font-semibold text-violet-700 mb-6">Meet Our Team</h3>
                    <p className="text-gray-700 text-lg md:text-xl max-w-xl mb-4">
                        Our dedicated team of healthcare professionals and technologists is committed to providing you with the best possible experience. We work together to ensure that MediConnect remains at the forefront of healthcare innovation.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center animate-fadeInRight" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
                    <div className="bg-white/80 rounded-2xl shadow-xl p-4 w-80 md:w-96 animate-float">
                        <img
                            src="/doc2.jpg"
                            alt="Healthcare Team"
                            className="rounded-xl shadow-md w-full h-48 md:h-56 object-cover object-center transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="w-full px-2 md:px-8 lg:px-16 mb-16 animate-fadeInUp" style={{animationDelay: '1s', animationFillMode: 'both'}}>
                <Doctors />
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default About;