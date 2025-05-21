
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-dark-gray text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)), url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-6 animate-fade-in">
            Beautiful Homes In Vrindavan <span className="text-gold">Come, Stay Safe:</span> Live Blessed!
          </h1>
          <p className="text-xl opacity-90 mb-12 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Vrindavan, known as 'The Land of Krishna', is now a transition city, attracting opportunities and population growth, upgrading Mathura-Vrindavan from Grade Z to Grade Y.









          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#services" 
              className="px-8 py-3 bg-gold text-white uppercase text-sm tracking-wider font-medium hover:bg-white hover:text-gold transition-colors duration-300"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              className="flex items-center text-white hover:text-gold transition-colors duration-300"
            >
              <span className="uppercase text-sm tracking-wider font-medium">Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#services" 
          className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
