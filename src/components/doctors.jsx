import React from 'react'

const doctors = () => {
return (
    <div>
        <div>
            <div className="text-violet-600 py-2 flex justify-center items-center">
                <div className="container mx-auto text-center h-full">
                    <h1 className="text-4xl font-bold">Our Doctors</h1>
                    <div className="text-center text-lg">Meet our team of experienced doctors</div>
                </div>
            </div>
            <div className="container mx-auto py-12 h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="doc3.jpg"
                            alt="Doctor 1"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h2 className="text-xl font-bold">Dr. John Doe</h2>
                            <p className="text-gray-600">Cardiologist</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="doc2.jpg"
                            alt="Doctor 2"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Dr. Jane Smith</h2>
                            <p className="text-gray-600">Neurologist</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-96 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="doc1.jpg"
                            alt="Doctor 3"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Dr. Emily Brown</h2>
                            <p className="text-gray-600">Pediatrician</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default doctors
