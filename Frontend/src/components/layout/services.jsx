import React from 'react';

function BulletPoints() {
  const points = [
    'Responsive design with Tailwind CSS.',
    'Easy-to-use and customizable.',
    'Supports light and dark themes.',
    'Seamless integration with React Router.',
    'Built-in support for error handling.',
    'Optimized for performance and speed.',
  ];

  return (
    <div className="w-full px-5 md:px-0">
    <div className="container mx-auto px-4 py-16 block transition-transform duration-300">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-900 mb-10">
        Our Services
      </h2>
      <div className="flex flex-col sm:flex-row items-center h-auto sm:h-64">
        {/* Bullet Points */}
        <div className="sm:w-1/2 mb-6 sm:mb-0 sm:mr-8 h-full">
          <ul className="list-disc pl-5 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="text-gray-700 text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="sm:w-1/2 h-full flex items-center justify-center">
          <img 
            src="../../../public/aboutUs.png" 
            alt="Services" 
            className="w-full h-64 sm:h-64 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default BulletPoints;
