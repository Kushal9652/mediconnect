import React, { useRef, useEffect } from 'react';

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

const CARD_WIDTH = 240; // px
const CARD_GAP = 24; // px (Tailwind space-x-6)
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

const Testimonials = () => {
  const carouselRef = useRef(null);
  const totalCards = testimonials.length;
  const sets = 3; // Number of times to duplicate testimonials

  // Duplicate testimonials for seamless infinite effect
  const infiniteTestimonials = Array(sets).fill(testimonials).flat();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    // Start at the first card of the second set
    const startScroll = TOTAL_CARD_WIDTH * totalCards;
    carousel.scrollLeft = startScroll;

    let animationFrame;
    let speed = 5; // px per frame (increased for faster movement)

    function animate() {
      if (carousel) {
        carousel.scrollLeft += speed;
        // If we've reached the end of the second set, reset to the start of the second set
        if (carousel.scrollLeft >= TOTAL_CARD_WIDTH * totalCards * 2) {
          carousel.scrollLeft = startScroll;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [totalCards]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-violet-100 via-blue-50 to-blue-200 py-16 px-2">
      <h2 className="text-4xl font-extrabold text-violet-700 mb-10 tracking-tight drop-shadow-lg animate-fadeInDown" data-aos="fade-down">What Our Users Say</h2>
      <div
        ref={carouselRef}
        className="w-full max-w-full flex flex-nowrap overflow-x-auto no-scrollbar space-x-6 snap-x snap-mandatory px-0 md:px-2 transition-all duration-700"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[240px] max-w-[240px] flex-shrink-0 h-[260px] bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-500 border-t-4 border-violet-200 snap-center group cursor-pointer relative animate-float"
            style={{ boxShadow: '0 4px 16px 0 rgba(76, 29, 149, 0.12)' }}
            data-aos="fade-up"
            data-aos-delay={(index % totalCards) * 100}
          >
            <div className="mt-2 mb-2 flex justify-center w-full">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-violet-200 shadow-md object-cover bg-white group-hover:scale-110 transition-transform duration-500 animate-pulse"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-base font-bold text-violet-700 mb-1 drop-shadow animate-fadeInUp">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm italic mb-1 animate-fadeInUp">“{testimonial.review}”</p>
            </div>
            <div className="mt-1 flex justify-center">
              <svg className="w-6 h-6 text-violet-200 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 6.17A7.001 7.001 0 0 0 2 13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1c0-2.21-1.79-4-4-4 .34-1.16 1.13-2.16 2.17-2.83zM17.17 6.17A7.001 7.001 0 0 0 12 13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1c0-2.21-1.79-4-4-4 .34-1.16 1.13-2.16 2.17-2.83z" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-2xl group-hover:shadow-violet-200 transition-all duration-500" style={{ zIndex: 1 }}></div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-lg text-gray-500 animate-fadeInUp" data-aos="fade-up" data-aos-delay="600">Join our happy community and share your experience!</p>
    </div>
  );
};

export default Testimonials;

