import React, { useState } from 'react';

const BlogCard = ({ blog}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSeeMore = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    // Truncate the detail text to 100 characters
    const truncatedDetail = blog.detail.length > 100 
        ? blog.detail.substring(0, 100) + '...' 
        : blog.detail;

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                    <img
                        src={blog.blogImage}
                        alt={blog.heading}
                        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.heading}</h3>
                    <h7 className='text-m font-semibold text-gray-800 mb-2'>Grain India News @vinod Raghav</h7>
                    <p className="text-gray-600 h-20 overflow-hidden">{truncatedDetail}</p>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handleSeeMore}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        >
                            See More
                        </button>
                        
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg relative w-10/12 md:w-2/3 lg:w-3/5 xl:w-2/3 h-5/6 md:h-3/4 lg:h-4/5 xl:h-4/5 transition-all duration-300 transform scale-100 overflow-y-auto">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none text-4xl font-bold w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md transition duration-300 hover:bg-gray-100"
                        >
                            &times;
                        </button>
                        <img
                            src={blog.blogImage}
                            alt={blog.heading}
                            className="w-full h-64 object-cover rounded"
                        />
                        <h3 className="text-2xl font-bold mt-6 text-gray-800">{blog.heading}</h3>
                        <h7 className='text-xl font-semibold text-gray-800 mb-2'>Grain India News @vinod Raghav</h7>
                        <p className="text-gray-600 mt-4">{blog.detail}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogCard;