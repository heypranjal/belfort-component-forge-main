import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import bgservicev from "../images/bgimg11.png";

const testimonials = [
  {
    quote: "Working with Belfort was a game-changer for our business. Their strategic approach and attention to detail resulted in a website that perfectly captures our brand and has significantly increased our online conversion rates.",
    name: "Alexandra Morgan",
    position: "CEO, Aperture Inc.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
  },
  {
    quote: "The team at Belfort stands out for their creativity and technical expertise. They delivered our project ahead of schedule and were always available to address our concerns and implement changes quickly.",
    name: "Robert Chen",
    position: "Marketing Director, Quantum Media",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    quote: "Their holistic approach to digital marketing has helped us establish a strong online presence. The results speak for themselves – our web traffic has increased by 200% since we started working with Belfort.",
    name: "Sophie Williams",
    position: "Founder, Elevate Solutions",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative section-padding bg-light-gray overflow-hidden">
 
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
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-wider font-medium mb-4">Testimonials</p>
          <h2 className="heading-lg mb-6">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="md:w-1/3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-40 h-40 md:w-full md:h-auto object-cover rounded-full md:rounded-none"
                      />
                    </div>

                    <div className="md:w-2/3 relative">
                      <Quote className="absolute -top-6 left-0 w-12 h-12 text-gold/20" />
                      <p className="text-lg mb-6 italic text-gray-700">{testimonial.quote}</p>
                      <div>
                        <h4 className="font-medium text-lg">{testimonial.name}</h4>
                        <p className="text-gold">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-gold' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
