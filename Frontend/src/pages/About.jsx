import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <header className="text-4xl font-bold text-blue-900 mb-8">About Us</header>
      <main className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <p className="mb-8 text-lg">
          At iGrain India, we are a leading service provider in agri commodities. Our journey is rooted in our commitment to providing timely information to the industry. Our reports, containing vital information on agri-commodities, are industry benchmarks. They include daily market rates, arrivals, production-supply-demand figures, import/export parity/disparity, and other critical information needed for strategic planning. Founded in 2009 with a vision to provide timely information to the industry, iGrain India simplifies and informs the agriculture industry, making essential information accessible to all. We take pride in sourcing the best reports on grains and food products from trusted farmers, traders, millers, extractors, importers, exporters, associations, and producers across India and abroad. Our product range celebrates India's rich culinary diversity. From the northern plains to the southern coast, we provide detailed market studies on various agricultural products. We believe in responsible industrial practices and ethical sourcing, supporting local farmers and communities. Our ultimate goal is customer delight, and our dedicated team is always ready to assist you. Our vision is to be the trusted bridge between you and the industry, becoming the preferred choice for seeking premium information on grains and food essentials that enrich your business.
        </p>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl">
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
            alt="Quality"
            className="w-48 h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">Quality</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
            alt="Variety"
            className="w-48 h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">Variety</h3>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1593720217365-9ab75fe301e4"
            alt="Sustainability"
            className="w-48 h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">Sustainability</h3>
        </div>
      </div>
    </div>
  );
};
