import React, { useState } from 'react';
import Doctors from '../components/doctors';
import Footer from '../components/footer';
import ExpandedService from '../components/ExpandedService';

const About = () => {
    const [expandedService, setExpandedService] = useState(null);

    const services = [
        { 
            title: "Consultation", 
            description: "Consultation with our doctors is available 24/7. You can consult with our doctors anytime, anywhere.", 
            details: "Our consultation services connect you with experienced doctors who provide personalized advice and treatment plans. Whether it's a routine check-up or a specific health concern, our doctors are here to help. We also offer video consultations for your convenience, ensuring you receive expert care from the comfort of your home. Our platform allows you to schedule appointments easily, access your medical history, and receive follow-up care seamlessly. With a focus on patient satisfaction, we aim to make healthcare accessible and stress-free for everyone. Additionally, our doctors specialize in a wide range of fields, including general medicine, pediatrics, gynecology, dermatology, and more. This ensures that you receive expert advice tailored to your specific needs. Our 24/7 availability means you can get help whenever you need it, even during emergencies. We prioritize your privacy and security, ensuring that all consultations are confidential and conducted in a secure environment.", 
            bgColor: "bg-white" 
        },
        { 
            title: "Medicine Delivery", 
            description: "Get your medicines delivered to your doorstep. We provide medicine delivery services.", 
            details: "We ensure timely delivery of medicines to your home, saving you time and effort. Our service is reliable and ensures that you never miss your medication. With our easy-to-use platform, you can upload prescriptions, track orders, and receive reminders for refills. We partner with trusted pharmacies to ensure the authenticity and quality of medicines. Our delivery network is designed to be fast and efficient, even in remote areas. Whether it's a one-time order or a recurring prescription, we make sure your health needs are met without any hassle. Our platform also offers discounts and special offers on bulk orders, making healthcare more affordable. You can set up automatic refills for chronic conditions, ensuring you never run out of essential medications. We also provide a dedicated customer support team to assist you with any queries or issues related to your orders. Our goal is to make medicine delivery seamless, affordable, and accessible for everyone.", 
            bgColor: "bg-white" 
        },
        { 
            title: "Lab Tests", 
            description: "Book lab tests online and get tested at home. We provide home lab testing services.", 
            details: "Our lab test services offer accurate and reliable results from the comfort of your home. We partner with certified labs to ensure quality and precision. From blood tests to specialized diagnostics, we cover a wide range of tests with quick and secure reporting. Our trained professionals ensure safe and hygienic sample collection at your convenience. You can track your test status online and access detailed reports through our platform. With a focus on accuracy and speed, we aim to make diagnostic testing stress-free and accessible for everyone. Our services include a wide range of tests such as blood sugar, cholesterol, thyroid, vitamin levels, and more. We also offer advanced diagnostic tests like MRI, CT scans, and genetic testing. Our team ensures that all samples are handled with the utmost care and transported under strict temperature-controlled conditions. Additionally, we provide expert consultations to help you understand your test results and take the next steps in your healthcare journey.", 
            bgColor: "bg-white" 
        },
        { 
            title: "Insurance", 
            description: "Get health insurance for you and your family. We provide health insurance services.", 
            details: "We offer comprehensive health insurance plans to safeguard your family's health and finances. Choose from a variety of plans tailored to your needs. Our team assists you in understanding policies, filing claims, and ensuring a hassle-free experience. We work with leading insurance providers to offer you the best coverage options. Whether it's hospitalization, outpatient care, or preventive health check-ups, our plans are designed to cover all aspects of your healthcare journey. With 24/7 support, we ensure that you are never alone in navigating the complexities of health insurance. Our plans include coverage for critical illnesses, maternity care, and even alternative treatments like Ayurveda and homeopathy. We also provide cashless hospitalization services at a wide network of hospitals. Our dedicated claims team ensures that your claims are processed quickly and efficiently. Additionally, we offer wellness programs and preventive care packages to help you stay healthy and reduce healthcare costs in the long run.", 
            bgColor: "bg-white" 
        },
        { 
            title: "Emergency", 
            description: "Get emergency services at your doorstep. We provide emergency services.", 
            details: "Our emergency services are designed to provide immediate assistance during critical situations. We are just a call away to help you in emergencies. From ambulance services to urgent medical care, we ensure prompt and reliable support when you need it the most. Our team is trained to handle a wide range of emergencies, including accidents, cardiac issues, and trauma care. With advanced equipment and a network of specialists, we prioritize saving lives and minimizing complications. Our goal is to provide rapid response and compassionate care during the most challenging times. Our ambulances are equipped with state-of-the-art life-saving equipment and staffed by trained paramedics. We also provide telemedicine support to guide you through the initial steps of care while help is on the way. Our emergency hotline is available 24/7, ensuring that you can reach us at any time. Additionally, we offer post-emergency follow-up care to help you recover and regain your health.", 
            bgColor: "bg-white" 
        },
        {
            title: "Mental Health Support",
            description: "Access mental health professionals for counseling and therapy, anytime you need support.",
            details: "Our mental health support services connect you with licensed therapists and counselors for confidential sessions. Whether you're dealing with stress, anxiety, depression, or just need someone to talk to, our professionals are here to help. We offer both online and in-person sessions, flexible scheduling, and resources for self-care and wellness. Your mental well-being is our priority, and we strive to create a safe, supportive environment for all.",
            bgColor: "bg-white"
        }
    ];

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

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

            {/* Services Section */}
            <section className="w-full px-2 md:px-8 lg:px-16 mb-16 animate-fadeIn" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
                <h1 className="text-xl md:text-2xl text-center mb-6 mt-4 md:mb-8 md:mt-5">Services</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative w-full md:w-[32rem] h-56 md:h-80 ${service.bgColor} shadow-md rounded-2xl flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-violet-50 m-2 md:m-4 animate-fadeInUp`}
                            style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}
                            onClick={() => toggleService(index)}
                        >
                            <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-violet-700 transition-colors duration-300 group-hover:text-violet-900">{service.title}</h2>
                            <p className="text-center text-xs md:text-sm text-black transition-colors duration-300 group-hover:text-violet-800">{service.description}</p>
                        </div>
                    ))}
                </div>
                {expandedService !== null && (
                    <ExpandedService
                        service={services[expandedService]}
                        onClose={() => setExpandedService(null)}
                    />
                )}
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