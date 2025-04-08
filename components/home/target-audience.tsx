"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Users,
  Building,
  LandPlot,
  Briefcase,
  GanttChart,
  Scale,
  HomeIcon,
  Cpu,
  BadgeCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const TargetAudience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const featuredRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (featuredRef.current) {
        const { left, top, width, height } =
          featuredRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    if (featuredRef.current) {
      featuredRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (featuredRef.current) {
        featuredRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optimize by unobserving after animation
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
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

  // Handle auto-rotation of featured audience
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % audienceGroups.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + audienceGroups.length) % audienceGroups.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % audienceGroups.length);
  };

  const audienceGroups = [
    {
      icon: Users,
      title: "Property Buyers",
      description:
        "Local & diaspora investors seeking residential or commercial properties",
      image: "/property-buyer.jpg",
      color: "from-blue-500/30 to-blue-600/20",
    },
    {
      icon: Building,
      title: "Real Estate Developers",
      description: "Residential, commercial, and mixed-use property developers",
      image: "/real-estate-developer.jpg",
      color: "from-emerald-500/30 to-emerald-600/20",
    },
    {
      icon: Briefcase,
      title: "Financial Institutions",
      description:
        "Banks, SACCOs, and mortgage providers with financing solutions",
      image: "/financial-institution.jpg",
      color: "from-purple-500/30 to-purple-600/20",
    },
    {
      icon: GanttChart,
      title: "Government Agencies",
      description: "Regulatory bodies and policy makers in the property sector",
      image: "/government-agencies.jpg",
      color: "from-red-500/30 to-red-600/20",
    },
    {
      icon: LandPlot,
      title: "Construction Firms",
      description:
        "Building contractors, engineers, and construction companies",
      image: "/construction-and-design.jpg",
      color: "from-amber-500/30 to-amber-600/20",
    },
    {
      icon: Scale,
      title: "Legal & Insurance",
      description:
        "Property law experts, conveyancers, and insurance providers",
      image: "/legal-and-insurance.jpg",
      color: "from-indigo-500/30 to-indigo-600/20",
    },
    {
      icon: HomeIcon,
      title: "Real Estate Agents",
      description: "Property agents, brokers, valuers, and consultants",
      image: "/real-estate-agents.jpg",
      color: "from-pink-500/30 to-pink-600/20",
    },
    {
      icon: Cpu,
      title: "Property Tech",
      description: "Smart home, proptech, and innovative technology companies",
      image: "/property-tech.jpg",
      color: "from-cyan-500/30 to-cyan-600/20",
    },
  ];

  return (
    <section
      id='target-audience'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl animate-pulse-slow'></div>
      </div>

      {/* Animated particles for a subtle background effect */}
      {isClient && (
        <div className='absolute inset-0 opacity-[0.02]'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className='absolute w-3 h-3 border border-purple-500/30 rotate-45 animate-float-diagonal-slow'
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}></div>
          ))}
        </div>
      )}

      {/* Content Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-block px-3 py-1 bg-purple-500/10 text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase backdrop-blur-sm border border-purple-200/20 shadow-[0_4px_10px_rgba(139,92,246,0.1)] transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            <span className='relative z-10'>Who Should Attend</span>
          </div>

          <h2
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-purple-800 transition-all duration-500 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            <span className='relative inline-block px-2'>
              Target Audience
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-gray-600 text-lg transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            The Nairobi Property Expo 2025 brings together key stakeholders in
            the real estate ecosystem for an unparalleled networking and
            business opportunity.
          </p>
        </div>

        {/* Featured Audience Display (visible on larger screens) */}
        <div
          ref={featuredRef}
          className={`hidden lg:block mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className='relative'>
            {/* Progress Indicator */}
            <div className='absolute -top-8 left-0 right-0 flex justify-center gap-2 py-3'>
              {audienceGroups.map((_, idx) => (
                <button
                  key={`indicator-${idx}`}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-purple-500" : "bg-gray-200"
                  }`}
                  onClick={() => setActiveIndex(idx)}></button>
              ))}
            </div>

            {/* Wrapper with 3D perspective */}
            <div className='flex perspective' style={{ perspective: "1200px" }}>
              {/* Featured Image Panel (Left) */}
              <div
                className='w-1/2 h-[480px] relative backdrop-blur-sm bg-black/5 shadow-[0_20px_50px_rgba(124,58,237,0.15)] rounded-l-xl overflow-hidden border border-white/30 transform-gpu'
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${mousePosition.x * -2}deg) rotateX(${
                    mousePosition.y * 2
                  }deg)`,
                  transition: "transform 0.2s ease-out",
                }}>
                {audienceGroups.map((audience, idx) => (
                  <div
                    key={`feature-${idx}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      activeIndex === idx ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                      <Image
                        src={audience.image}
                        alt={audience.title}
                        fill
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        className='object-cover transition-transform duration-10000 scale-110 animate-slow-zoom'
                        priority={idx === 0}
                      />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-800/40'></div>

                    {/* Featured Content */}
                    <div className='absolute inset-0 flex flex-col justify-end p-10 text-white'>
                      <div
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${audience.color} backdrop-blur-xl w-fit mb-4 border border-white/20 shadow-lg`}>
                        <div className='flex items-center space-x-3'>
                          <audience.icon className='w-6 h-6 text-white' />
                          <h3 className='text-2xl font-serif'>
                            {audience.title}
                          </h3>
                        </div>
                      </div>
                      <p className='text-white/90 max-w-md text-lg'>
                        {audience.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigator Controls */}
                <button
                  className='absolute left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md bg-purple-500/20 border border-white/20 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity z-20 hover:bg-purple-500/40'
                  onClick={handlePrev}>
                  <ArrowLeft className='w-5 h-5' />
                </button>
                <button
                  className='absolute right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md bg-purple-500/20 border border-white/20 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity z-20 hover:bg-purple-500/40'
                  onClick={handleNext}>
                  <ArrowRight className='w-5 h-5' />
                </button>
              </div>

              {/* Selection Panel (Right) */}
              <div
                className='w-1/2 backdrop-blur-lg bg-white/60 rounded-r-xl shadow-[0_20px_50px_rgba(124,58,237,0.15)] overflow-hidden border border-white/40 transform-gpu'
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${mousePosition.x * -1}deg) rotateX(${
                    mousePosition.y * 1
                  }deg)`,
                  transition: "transform 0.2s ease-out",
                }}>
                <div className='p-6 border-b border-gray-100/50 bg-white/50'>
                  <h3 className='font-serif text-xl text-purple-800'>
                    Who Should Attend
                  </h3>
                  <p className='text-gray-500 text-sm mt-1'>
                    Select a category to learn more
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-0'>
                  {audienceGroups.map((audience, idx) => (
                    <div
                      key={`selector-${idx}`}
                      className={`flex items-center p-4 cursor-pointer transition-all duration-300 hover:bg-purple-50/50 border-b border-r border-gray-100/50 relative overflow-hidden group ${
                        activeIndex === idx
                          ? "bg-purple-50/80 border-l-2 border-l-purple-500"
                          : ""
                      }`}
                      onClick={() => setActiveIndex(idx)}>
                      {/* Subtle indicator of current selection */}
                      {activeIndex === idx && (
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent'></div>
                      )}

                      {/* Overlay on hover */}
                      <div className='absolute inset-0 bg-gradient-to-r from-purple-200/0 to-purple-200/0 group-hover:from-purple-200/30 group-hover:to-purple-200/0 transition-all duration-500'></div>

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm shadow-inner border border-purple-200/50 transition-all duration-300 ${
                          activeIndex === idx
                            ? "bg-purple-100/80"
                            : "bg-gray-100/80"
                        }`}>
                        <audience.icon
                          className={`w-5 h-5 transition-all duration-300 ${
                            activeIndex === idx
                              ? "text-purple-600"
                              : "text-gray-500 group-hover:text-purple-600"
                          }`}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span
                          className={`transition-all duration-300 ${
                            activeIndex === idx
                              ? "text-purple-700 font-medium"
                              : "text-gray-700"
                          }`}>
                          {audience.title}
                        </span>
                        <span className='text-xs text-gray-400 hidden group-hover:block transition-all duration-300 max-w-[180px] truncate'>
                          {audience.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Audience Cards */}
        <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {audienceGroups.map((group, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 overflow-hidden transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${Math.min(index * 100 + 400, 1200)}ms`,
              }}>
              {/* Card Image */}
              <div className='relative h-44 overflow-hidden'>
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/70 to-indigo-800/20'></div>
                <div className='absolute bottom-0 left-0 p-4'>
                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg backdrop-blur-md bg-gradient-to-r ${group.color} mb-2 border border-white/20 shadow-lg`}>
                    <group.icon className='w-4 h-4 text-white mr-2' />
                    <span className='text-sm font-medium text-white'>
                      {group.title}
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-5'>
                <p className='text-gray-600 text-sm'>{group.description}</p>
                <div className='mt-4 flex items-center text-purple-700 text-sm font-medium'>
                  <BadgeCheck className='w-4 h-4 mr-1' />
                  <span>Tailored exhibitors</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner with Glassmorphism */}
        <div
          className={`mt-16 p-1 rounded-xl bg-gradient-to-r from-purple-400/20 to-indigo-600/20 backdrop-blur-md shadow-[0_20px_50px_rgba(124,58,237,0.1)] transition-all duration-700 delay-[800ms] ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <div className='bg-white/80 backdrop-blur-md rounded-lg p-8 text-center border border-white/50'>
            <h4 className='text-2xl font-serif mb-4 text-purple-800'>
              Are you in the real estate industry?
            </h4>
            <p className='text-gray-600 max-w-2xl mx-auto mb-6'>
              Join hundreds of industry professionals and thousands of potential
              buyers at East Africa's premier property exhibition.
            </p>
            <button className='px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg hover:shadow-[0_10px_20px_rgba(124,58,237,0.2)] transition-all duration-300 transform hover:-translate-y-0.5'>
              Register Your Interest
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphism Bottom Element */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm'></div>
    </section>
  );
};

export default TargetAudience;
