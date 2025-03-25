import React from 'react'

const about = () => {
return (
    <div className="p-5 font-sans leading-relaxed animate-fadeIn">
        <h2 className="text-3xl text-purple-800 font-bold mb-4">About MediConnect</h2>
        <p className="text-gray-700 mb-4">
            Welcome to <strong className="text-purple-700">MediConnect</strong>, your trusted platform for connecting healthcare providers and patients. 
            Our mission is to simplify healthcare access and improve communication between medical professionals and those in need.
        </p>
        <p className="text-gray-700 mb-4">
            At MediConnect, we believe in leveraging technology to create a seamless and efficient healthcare experience. 
            Whether you're a patient looking for the right doctor or a healthcare provider aiming to expand your reach, 
            MediConnect is here to bridge the gap.
        </p>
        <div className="mt-6">
            <h3 className="text-2xl text-purple-700 font-semibold mb-3">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Compassionate Care</li>
                <li>Innovation</li>
                <li>Accessibility</li>
                <li>Trust and Transparency</li>
            </ul>
        </div>
        <div className="mt-8"></div>
    </div>
)
}

export default about
