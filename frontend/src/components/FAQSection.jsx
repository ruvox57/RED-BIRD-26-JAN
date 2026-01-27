import React, { useState, useEffect, useRef } from 'react';
import { faqItems } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="relative bg-[#0a0a0a] py-24 border-t border-white/5 animate-on-scroll">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest">
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`text-sm font-medium transition-colors duration-300 leading-relaxed ${
                  openIndex === index ? 'text-orange-400' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-orange-500/20 text-orange-500 rotate-0' 
                    : 'bg-white/5 text-orange-500/60 rotate-0'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              
              {/* Answer with smooth animation */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-sm leading-relaxed pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
