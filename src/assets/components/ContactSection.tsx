
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-gold uppercase tracking-wider font-medium mb-4">Get In Touch</p>
          <h2 className="heading-lg mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="heading-md mb-6">Let's Start a Conversation</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear about your project and how we can help. Fill out the form, and we'll be in touch as soon as possible.
            </p>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-gold mt-1" />
              <div>
                <h4 className="font-medium">Our Location</h4>
                <address className="text-gray-600 not-italic">
                  1234 Park Avenue, <br />
                  New York, NY 10001
                </address>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 text-gold mt-1" />
              <div>
                <h4 className="font-medium">Call Us</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 text-gold mt-1" />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-gray-600">info@belfortcompany.com</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-light-gray p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none bg-white"
                  />
                </div>
              </div>
              <div className="mb-6">
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none bg-white"
                />
              </div>
              <div className="mb-6">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none bg-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex items-center px-8 py-3 bg-gold text-white hover:bg-dark-gray transition-colors duration-300 uppercase text-sm tracking-wider font-medium",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 border border-green-200">
                  Your message has been sent successfully. We'll be in touch soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
