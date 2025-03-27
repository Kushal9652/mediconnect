import React from 'react'
import Doctors from '../components/doctors'

const about = () => {
return (
    <div className="p-5 font-sans leading-relaxed animate-fadeIn bg-white">
        <h2 className="text-4xl text-purple-800 font-extrabold mb-6 text-center">About MediConnect</h2>
        <div className="flex justify-center mb-6">
            <img src="/doc1.jpg" alt="MediConnect Logo" className="w-32 h-32 rounded-full shadow-lg" />
        </div>
        <p className="text-gray-800 text-lg mb-6">
            Welcome to <strong className="text-purple-700">MediConnect</strong>, your trusted platform for connecting healthcare providers and patients. 
            Our mission is to simplify healthcare access and improve communication between medical professionals and those in need.
        </p>
        <p className="text-gray-800 text-lg mb-6">
            At MediConnect, we believe in leveraging technology to create a seamless and efficient healthcare experience. 
            Whether you're a patient looking for the right doctor or a healthcare provider aiming to expand your reach, 
            MediConnect is here to bridge the gap.
        </p>
        <div className="mt-6">
            <h3 className="text-3xl text-purple-700 font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-3">
                <li><strong>Compassionate Care:</strong> We prioritize empathy and understanding in every interaction.</li>
                <li><strong>Innovation:</strong> Harnessing the latest technology to improve healthcare delivery.</li>
                <li><strong>Accessibility:</strong> Making healthcare services available to everyone, everywhere.</li>
                <li><strong>Trust and Transparency:</strong> Building relationships based on honesty and reliability.</li>
            </ul>
        </div>
        <div className="mt-8">
            <h3 className="text-3xl text-purple-700 font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-800 text-lg">
                To revolutionize the healthcare industry by creating a world where quality healthcare is just a click away. 
                We aim to empower individuals and healthcare providers through technology, fostering a healthier and more connected global community.
            </p>
        </div>
        <div className="mt-8 flex justify-center">
            <img src="/doc2.jpg" alt="Healthcare Team" className="rounded-lg shadow-lg w-full max-w-4xl" />
        </div>
        <div className="mt-8">
            <Doctors />
        </div>
    </div>
)

}

export default about