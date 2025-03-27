import React from 'react';
import Footer from '../components/footer';
const Services = () => {
return (
    <div className="animate-fadeIn ml-4 md:ml-12 max-w-screen overflow-x-hidden">
        <h1 className="text-xl md:text-2xl text-center mb-6 mt-4 md:mb-8 md:mt-5">Services</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {[
                { title: "Consultation", description: "Consultation with our doctors is available 24/7. You can consult with our doctors anytime, anywhere.", bgColor: "bg-gray-500" },
                { title: "Medicine Delivery", description: "Get your medicines delivered to your doorstep. We provide medicine delivery services.", bgColor: "bg-gray-500" },
                { title: "Lab Tests", description: "Book lab tests online and get tested at home. We provide home lab testing services.", bgColor: "bg-gray-500" },
                { title: "Insurance", description: "Get health insurance for you and your family. We provide health insurance services.", bgColor: "bg-purple-500" },
                { title: "Emergency", description: "Get emergency services at your doorstep. We provide emergency services.", bgColor: "bg-purple-600" }
            ].map((service, index) => (
                <div
                    key={index}
                    className={`w-11/12 md:w-96 h-48 md:h-64 ${service.bgColor} text-white shadow-md rounded-lg flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 m-2 md:m-4`}
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{service.title}</h2>
                    <p className="text-center text-xs md:text-sm">{service.description}</p>
                </div>
            ))}
        </div>
        <Footer />
    </div>
);
};

export default Services;
