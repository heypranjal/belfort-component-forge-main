
import React from 'react';
import { Paintbrush, Code, Gem, Trophy, BarChart, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 text-gold" />,
    title: 'Creative Design',
    description: 'We craft visually stunning designs that capture your brand\'s essence and create meaningful connections with your audience.',
  },
  {
    icon: <Code className="w-12 h-12 text-gold" />,
    title: 'Web Development',
    description: 'Our developers build robust, scalable web applications using the latest technologies to ensure optimal performance.',
  },
  {
    icon: <Gem className="w-12 h-12 text-gold" />,
    title: 'Brand Identity',
    description: 'We develop comprehensive brand strategies that communicate your core values and differentiate you in the market.',
  },
  {
    icon: <Trophy className="w-12 h-12 text-gold" />,
    title: 'SEO Optimization',
    description: 'Improve your online visibility with our search engine optimization strategies tailored to your specific business goals.',
  },
  {
    icon: <BarChart className="w-12 h-12 text-gold" />,
    title: 'Digital Marketing',
    description: 'We implement targeted digital marketing campaigns that drive engagement and convert leads into loyal customers.',
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-gold" />,
    title: 'Strategic Consulting',
    description: 'Our expert consultants provide actionable insights and innovative solutions to help your business navigate challenges.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-wider font-medium mb-4">What We Offer</p>
          <h2 className="heading-lg mb-6">Our Premium Services</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
