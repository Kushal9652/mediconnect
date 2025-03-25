import React from 'react';

const Services = () => {
return (
    <div className="animate-fadeIn ml-12">
        <h1 className="text-2xl text-center mb-8 mt-5">Services</h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 justify-center">
            {[
                { title: "Consultation", description: "Consultation with our doctors is available 24/7. You can consult with our doctors anytime, anywhere.", bgColor: "bg-gray-500" },
                { title: "Medicine Delivery", description: "Get your medicines delivered to your doorstep. We provide medicine delivery services.", bgColor: "bg-gray-500" },
                { title: "Lab Tests", description: "Book lab tests online and get tested at home. We provide home lab testing services.", bgColor: "bg-gray-500" },
                { title: "Insurance", description: "Get health insurance for you and your family. We provide health insurance services.", bgColor: "bg-purple-500" },
                { title: "Emergency", description: "Get emergency services at your doorstep. We provide emergency services.", bgColor: "bg-purple-600" }
            ].map((service, index) => (
                <div
                    key={index}
                    className={`w-96 h-64 ${service.bgColor} text-white shadow-md rounded-lg flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 m-4`}
                >
                    <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-center text-sm">{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default Services;
