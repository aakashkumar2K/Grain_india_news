import React from "react";
import { NavLink } from 'react-router-dom';

function HeroSection2() {
  return (
    <div className="w-full px-5 md:px-0">
      <NavLink 
        to='/about' 
        className="container mx-auto px-4 py-16 block transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div>
          <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
            About Us
          </h1>
          
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
        </div>
      </NavLink>
    </div>
  );
}

export default HeroSection2;
