import React from 'react';

const testimonials = [
  {
    name: 'User 1',
    review: "This is a review from user 1. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'User 2',
    review: "This is a review from user 2. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'User 3',
    review: "This is a review from user 3. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'User 4',
    review: "This is a review from user 4. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'User 5',
    review: "This is a review from user 5. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'User 6',
    review: "This is a review from user 6. It's a great experience!",
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-violet-100 via-blue-50 to-blue-200 py-16 px-2">
      <h2 className="text-4xl font-extrabold text-violet-700 mb-10 tracking-tight drop-shadow-lg animate-fadeInDown">What Our Users Say</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-violet-200"
            style={{ boxShadow: '0 4px 16px 0 rgba(76, 29, 149, 0.10)' }}
          >
            <div className="-mt-14 mb-2 flex justify-center w-full">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-4 border-violet-200 shadow-md object-cover bg-white"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="text-center mt-2">
              <h3 className="text-lg font-bold text-violet-700 mb-1 drop-shadow">{testimonial.name}</h3>
              <p className="text-gray-600 text-base italic mb-2 animate-fadeInUp">“{testimonial.review}”</p>
            </div>
            <div className="mt-2 flex justify-center">
              <svg className="w-6 h-6 text-violet-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 6.17A7.001 7.001 0 0 0 2 13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1c0-2.21-1.79-4-4-4 .34-1.16 1.13-2.16 2.17-2.83zM17.17 6.17A7.001 7.001 0 0 0 12 13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1c0-2.21-1.79-4-4-4 .34-1.16 1.13-2.16 2.17-2.83z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-lg text-gray-500 animate-fadeInUp">Join our happy community and share your experience!</p>
    </div>
  );
};

export default Testimonials;
