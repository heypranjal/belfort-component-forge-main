import React from 'react';
import { CheckCircle } from 'lucide-react';
import bgservicev from "../images/bgimg11.png";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative section-padding bg-light-gray overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgservicev} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="About Belfort" 
              className="w-full h-auto rounded-sm shadow-xl"
            />
            <div className="hidden lg:block absolute -bottom-8 -right-8 bg-gold text-white p-6 w-48">
              <span className="block text-4xl font-serif font-semibold">25+</span>
              <span className="uppercase tracking-wider text-sm">Years Experience</span>
            </div>
          </div>
          
          <div>
            <p className="text-gold uppercase tracking-wider font-medium mb-4">About Our Company</p>
            <h2 className="heading-lg mb-6">We Build Creative Experiences</h2>
            <p className="text-gray-600 mb-8">
              Founded in 1998, Belfort has been at the forefront of digital innovation for over two decades. 
              We combine strategic thinking with technical expertise to deliver solutions that help our clients 
              thrive in today's competitive landscape.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                <span>Innovative design solutions for complex business challenges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                <span>Expert team of certified designers and developers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                <span>Transparent process with regular client updates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                <span>Long-term partnerships built on trust and results</span>
              </li>
            </ul>
            
            <button className="px-8 py-3 bg-gold text-white hover:bg-dark-gray transition-colors duration-300 uppercase text-sm tracking-wider font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
