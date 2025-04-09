"use client";

import React, { useRef, useEffect, useState } from "react";
import { Target, Users, Lightbulb, Leaf } from "lucide-react";

const Objectives = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Single intersection observer for the entire section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const objectives = [
    {
      icon: Target,
      title: "Investment Promotion",
      description:
        "Promote real estate investment and development opportunities across Kenya and East Africa.",
    },
    {
      icon: Users,
      title: "Strategic Connections",
      description:
        "Connect developers, financial institutions, and potential buyers in one premier platform.",
    },
    {
      icon: Lightbulb,
      title: "Investor Education",
      description:
        "Educate investors on legal, financial, and technological aspects of property ownership.",
    },
    {
      icon: Leaf,
      title: "Innovation Spotlight",
      description:
        "Showcase smart homes, green building, and cutting-edge innovations in property technology.",
    },
  ];

  return (
    <section
      id='objectives'
      ref={sectionRef}
      className='py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03] pattern-grid'></div>

      {/* Simplified Background - Single Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/10'></div>

      {/* Single pulsing orb instead of multiple */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl animate-pulse-slow'></div>

      {/* Accent Line */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

      {/* Reduced decorative elements - only shown when section is visible and client-side */}
      {isClient && isVisible && (
        <div className='absolute left-1/3 top-1/4 w-6 h-6 border-2 border-purple-500/20 rotate-45 animate-pulse-slow'></div>
      )}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div
          className={`text-center mb-12 md:mb-20 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <div className='inline-block px-3 py-1 bg-purple-500/10 backdrop-blur-sm text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase relative overflow-hidden group transition-transform duration-300 ease-out shadow-[0_4px_10px_rgba(139,92,246,0.1)] border border-purple-200/20'>
            <span className='relative z-10'>Our Mission</span>
            <span className='absolute inset-0 w-full h-full bg-purple-400/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500'></span>
          </div>

          <h2 className='mt-6 text-3xl md:text-5xl font-serif font-bold text-purple-800'>
            <span className='relative inline-block px-2'>
              Event Objectives
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p className='mt-8 max-w-3xl mx-auto text-gray-600 text-lg'>
            The Nairobi Property Expo aims to create a dynamic platform for
            showcasing investment-ready properties and fostering strategic
            business connections.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}>
          {/* Connecting Line Between Cards (Desktop only) */}
          <div className='absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400/10 via-purple-400/30 to-purple-400/10 hidden lg:block'></div>

          {objectives.map((objective, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border border-white/50 p-6 md:p-8 rounded-md group relative z-10 transition-all duration-300 ease-out hover:translate-y-[-5px] hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] shadow-[0_10px_20px_rgba(124,58,237,0.06)]`}
              style={{ transitionDelay: `${index * 150}ms` }}>
              {/* Card Interior Pattern */}
              <div className='absolute inset-0 opacity-[0.02] pattern-diagonal'></div>

              {/* Accent Corner */}
              <div className='absolute top-0 right-0 w-8 h-8 overflow-hidden'>
                <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500 to-transparent rotate-45 transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300 ease-out'></div>
              </div>

              {/* Icon Container with Glass Effect */}
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500/10 to-indigo-500/20 backdrop-blur-md rounded-md flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300 relative shadow-[0_5px_15px_rgba(139,92,246,0.2)] border border-purple-200/30'>
                <objective.icon className='w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform duration-300' />

                {/* Shadow Effect */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)]'></div>
              </div>

              <h3 className='text-xl font-serif font-semibold mb-3 group-hover:text-purple-700 transition-colors duration-300 text-purple-800'>
                {objective.title}
              </h3>

              <p className='text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300'>
                {objective.description}
              </p>

              {/* Bottom Line Reveal */}
              <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 group-hover:w-full transition-all duration-300 ease-out'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Foreground Element */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm'></div>
    </section>
  );
};

export default Objectives;
