
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Belfort</h3>
            <p className="text-gray-400 mb-6">
              We deliver exceptional digital solutions that help businesses transform, innovate, and thrive in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold transition-colors duration-300 rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold transition-colors duration-300 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold transition-colors duration-300 rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold transition-colors duration-300 rounded-full flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 bg-white/10 text-white focus:outline-none flex-grow"
              />
              <button 
                type="submit"
                className="bg-gold text-white p-3 hover:bg-white hover:text-gold transition-colors duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">© 2025 Belfort. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
