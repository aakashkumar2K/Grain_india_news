import React, { useState, useEffect } from 'react';
import grain1 from '/caroselimgs/grain1.webp'
import grain2 from '/caroselimgs/grain2.webp'
import grain3 from '/caroselimgs/grain3.webp'
import grain4 from '/caroselimgs/grain4.webp'
import grain5 from '/caroselimgs/grain5.webp'
import grain6 from '/caroselimgs/grain6.webp'
const images = [
  grain1,
  grain2,
  grain3,
  grain4,
  grain5,
  grain6,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-8 mb-8">
      <div className="overflow-hidden rounded-lg shadow-lg relative w-[90%] mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            } transition-all duration-1000 ease-in-out`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-96"
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md  focus:outline-none "
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md  focus:outline-none "
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
