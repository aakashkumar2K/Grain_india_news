import React from 'react';

export function About() {
  const sections = [
    {
      title: "Our Commitment to Quality",
      image: "https://images.unsplash.com/photo-1567849859756-79bf6a9d62f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "We pride ourselves on delivering the highest quality information and services in the agri-commodity sector.",
    },
    {
      title: "Global Market Insights",
      image: "https://plus.unsplash.com/premium_photo-1682096592504-5bc960bea6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww",
      description: "Our extensive network allows us to provide unparalleled insights into global agricultural markets.",
    },
    {
      title: "Supporting Local Communities",
      image: "https://plus.unsplash.com/premium_photo-1683140908202-a8741a87045a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJ1c2luZXNzd29tYW58ZW58MHx8MHx8fDA%3D",
      description: "We're committed to ethical sourcing and supporting local farmers and communities across India.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            At iGrain India, we are a leading service provider in agri commodities. Founded in 2009, our journey is rooted in our commitment to providing timely, accurate information to the industry. Our reports, containing vital information on agri-commodities, have become industry benchmarks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We take pride in sourcing the best reports on grains and food products from trusted farmers, traders, millers, extractors, importers, exporters, associations, and producers across India and abroad. Our product range celebrates India's rich culinary diversity, providing detailed market studies on various agricultural products.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our vision is to be the trusted bridge between you and the industry, becoming the preferred choice for seeking premium information on grains and food essentials that enrich your business. With a focus on responsible industrial practices and ethical sourcing, we're committed to supporting local farmers and communities while delivering unparalleled value to our clients.
          </p>
        </div>
        
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-16 bg-white rounded-lg shadow-lg overflow-hidden`}>
            <div className="w-full lg:w-1/2">
              <img src={section.image} alt={section.title} className="w-full h-64 lg:h-80 object-contain" />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}