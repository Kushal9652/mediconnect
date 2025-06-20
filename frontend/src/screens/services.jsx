import React, { useState } from 'react';
import Footer from '../components/footer';
import ExpandedService from '../components/ExpandedService';

const Services = () => {
    const [expandedService, setExpandedService] = useState(null);

    const services = [
        { 
            title: "Consultation", 
            description: "Consultation with our doctors is available 24/7. You can consult with our doctors anytime, anywhere.", 
            details: "Our consultation services connect you with experienced doctors who provide personalized advice and treatment plans. Whether it's a routine check-up or a specific health concern, our doctors are here to help. We also offer video consultations for your convenience, ensuring you receive expert care from the comfort of your home. Our platform allows you to schedule appointments easily, access your medical history, and receive follow-up care seamlessly. With a focus on patient satisfaction, we aim to make healthcare accessible and stress-free for everyone. Additionally, our doctors specialize in a wide range of fields, including general medicine, pediatrics, gynecology, dermatology, and more. This ensures that you receive expert advice tailored to your specific needs. Our 24/7 availability means you can get help whenever you need it, even during emergencies. We prioritize your privacy and security, ensuring that all consultations are confidential and conducted in a secure environment.", 
            bgColor: "bg-gray-500" 
        },
        { 
            title: "Medicine Delivery", 
            description: "Get your medicines delivered to your doorstep. We provide medicine delivery services.", 
            details: "We ensure timely delivery of medicines to your home, saving you time and effort. Our service is reliable and ensures that you never miss your medication. With our easy-to-use platform, you can upload prescriptions, track orders, and receive reminders for refills. We partner with trusted pharmacies to ensure the authenticity and quality of medicines. Our delivery network is designed to be fast and efficient, even in remote areas. Whether it's a one-time order or a recurring prescription, we make sure your health needs are met without any hassle. Our platform also offers discounts and special offers on bulk orders, making healthcare more affordable. You can set up automatic refills for chronic conditions, ensuring you never run out of essential medications. We also provide a dedicated customer support team to assist you with any queries or issues related to your orders. Our goal is to make medicine delivery seamless, affordable, and accessible for everyone.", 
            bgColor: "bg-gray-500" 
        },
        { 
            title: "Lab Tests", 
            description: "Book lab tests online and get tested at home. We provide home lab testing services.", 
            details: "Our lab test services offer accurate and reliable results from the comfort of your home. We partner with certified labs to ensure quality and precision. From blood tests to specialized diagnostics, we cover a wide range of tests with quick and secure reporting. Our trained professionals ensure safe and hygienic sample collection at your convenience. You can track your test status online and access detailed reports through our platform. With a focus on accuracy and speed, we aim to make diagnostic testing stress-free and accessible for everyone. Our services include a wide range of tests such as blood sugar, cholesterol, thyroid, vitamin levels, and more. We also offer advanced diagnostic tests like MRI, CT scans, and genetic testing. Our team ensures that all samples are handled with the utmost care and transported under strict temperature-controlled conditions. Additionally, we provide expert consultations to help you understand your test results and take the next steps in your healthcare journey.", 
            bgColor: "bg-gray-500" 
        },
        { 
            title: "Insurance", 
            description: "Get health insurance for you and your family. We provide health insurance services.", 
            details: "We offer comprehensive health insurance plans to safeguard your family's health and finances. Choose from a variety of plans tailored to your needs. Our team assists you in understanding policies, filing claims, and ensuring a hassle-free experience. We work with leading insurance providers to offer you the best coverage options. Whether it's hospitalization, outpatient care, or preventive health check-ups, our plans are designed to cover all aspects of your healthcare journey. With 24/7 support, we ensure that you are never alone in navigating the complexities of health insurance. Our plans include coverage for critical illnesses, maternity care, and even alternative treatments like Ayurveda and homeopathy. We also provide cashless hospitalization services at a wide network of hospitals. Our dedicated claims team ensures that your claims are processed quickly and efficiently. Additionally, we offer wellness programs and preventive care packages to help you stay healthy and reduce healthcare costs in the long run.", 
            bgColor: "bg-purple-500" 
        },
        { 
            title: "Emergency", 
            description: "Get emergency services at your doorstep. We provide emergency services.", 
            details: "Our emergency services are designed to provide immediate assistance during critical situations. We are just a call away to help you in emergencies. From ambulance services to urgent medical care, we ensure prompt and reliable support when you need it the most. Our team is trained to handle a wide range of emergencies, including accidents, cardiac issues, and trauma care. With advanced equipment and a network of specialists, we prioritize saving lives and minimizing complications. Our goal is to provide rapid response and compassionate care during the most challenging times. Our ambulances are equipped with state-of-the-art life-saving equipment and staffed by trained paramedics. We also provide telemedicine support to guide you through the initial steps of care while help is on the way. Our emergency hotline is available 24/7, ensuring that you can reach us at any time. Additionally, we offer post-emergency follow-up care to help you recover and regain your health.", 
            bgColor: "bg-purple-600" 
        }
    ];

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

    return (
        <div className="animate-fadeIn ml-4 md:ml-12 max-w-screen overflow-x-hidden">
            <h1 className="text-xl md:text-2xl text-center mb-6 mt-4 md:mb-8 md:mt-5">Services</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative w-11/12 md:w-96 h-48 md:h-64 ${service.bgColor} text-white shadow-md rounded-lg flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out hover:scale-105 m-2 md:m-4`}
                        onClick={() => toggleService(index)}
                    >
                        <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{service.title}</h2>
                        <p className="text-center text-xs md:text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
            {expandedService !== null && (
                <ExpandedService
                    service={services[expandedService]}
                    onClose={() => setExpandedService(null)}
                />
            )}
            <Footer />
        </div>
    );
};

export default Services;
