import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
          <span className="block">Your Adventure</span>
          <span className="block text-emerald-400">Starts Here</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeIn animation-delay-300 max-w-2xl mx-auto">
          Discover premium outdoor gear designed for explorers, adventurers, and nature enthusiasts. 
          Quality equipment for unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-600">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;