
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let start = 0;
      const step = end / (duration / 16); // 60fps -> ~16ms per frame
      
      const timer = setInterval(() => {
        start += step;
        setCount(Math.floor(start));
        
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated, end, duration]);

  return <div ref={countRef}>{count}{suffix}</div>;
};

const statsData = [
  { number: 250, suffix: '+', label: 'Projects Completed' },
  { number: 95, suffix: '%', label: 'Customer Satisfaction' },
  { number: 15, suffix: '+', label: 'Team Members' },
  { number: 120, suffix: '+', label: 'Global Clients' },
];

const StatsSection: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-24 bg-dark-gray text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.9)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-serif font-bold mb-3 text-gold">
                <Counter end={stat.number} duration={2000} suffix={stat.suffix} />
              </div>
              <p className="uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
