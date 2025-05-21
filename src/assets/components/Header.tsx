
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b', 
        isScrolled ? 'bg-white text-dark-gray border-gray-200 py-3' : 'bg-transparent text-white border-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="font-serif">KRISHNA BHUMI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <div className="relative group">
            <button className="nav-link flex items-center">
              Pages <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-0 bg-white text-dark-gray shadow-lg transition-all duration-300 min-w-[160px] py-2">
              <a href="#team" className="block px-4 py-2 hover:bg-light-gray">Team</a>
              <a href="#testimonials" className="block px-4 py-2 hover:bg-light-gray">Testimonials</a>
              <a href="#pricing" className="block px-4 py-2 hover:bg-light-gray">Pricing</a>
            </div>
          </div>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="hidden lg:flex items-center">
          <button className="px-6 py-2 border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 uppercase text-xs tracking-wider font-medium">
            Get in Touch
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-dark-gray z-40 lg:hidden transition-transform duration-300",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container-custom py-20">
          <nav className="flex flex-col space-y-6">
            <a href="#home" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#team" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#testimonials" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#portfolio" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="mt-6 px-8 py-3 bg-gold text-white uppercase text-sm tracking-wider font-medium self-start">
              Get in Touch
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
