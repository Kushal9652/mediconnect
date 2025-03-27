import React from 'react'

const Testimonials = () => {
return (
    <div className="flex flex-col items-center bg-violet-50 py-10">
            <h2 className="text-3xl font-bold text-violet-600 mb-6">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                    {Array(6).fill().map((_, index) => (
                    <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                            <h3 className="text-xl font-semibold text-violet-700 mb-2">User {index + 1}</h3>
                            <p className="text-gray-600">This is a review from user {index + 1}. It’s a great experience!</p>
                    </div>
                    ))}
            </div>
    </div>
)

}
export default Testimonials;
