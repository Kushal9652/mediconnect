import React from 'react'

const banner = () => {
return (
    <div>
            <div className="bg-gradient-to-r from-violet-700 to-violet-500">
                    <div className="container mx-auto px-6 py-32">
                    <div className="flex items-center justify-between ml-32">
                            <div className="w-1/3 mr-32">
                            <img src="/banner.png" alt="Banner" className="w-full" />
                            </div>
                            <div className="w-1/2">
                            <h1 className="text-4xl font-bold text-white">
                                    Your Health is Our Priority
                            </h1>
                            <p className="mt-4 text-white font-medium">
                                    We are committed to providing you with the best care and support.
                            </p>
                            <button className="mt-8 bg-white text-violet-600 px-6 py-2 rounded-md shadow hover:bg-gray-200 transition">
                                    Book an Appointment
                            </button>
                            </div>
                    </div>
                    </div>
            </div>
    </div>
)
}

export default banner
