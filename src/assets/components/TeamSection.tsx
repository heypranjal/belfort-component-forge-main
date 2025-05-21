import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import bgservicev from "../images/bgimg11.png";

const teamMembers = [
  {
    name: 'Emily Johnson',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Michael Roberts',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Sarah Williams',
    position: 'Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Daniel Chen',
    position: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative section-padding bg-white overflow-hidden">
    
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
          <p className="text-gold uppercase tracking-wider font-medium mb-4">Our Professionals</p>
          <h2 className="heading-lg mb-6">Meet The Team</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-medium text-xl">{member.name}</h3>
                <p className="text-gold">{member.position}</p>

                <div className="flex mt-4 space-x-3">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 bg-white text-dark-gray flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
