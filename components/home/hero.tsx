"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Generate particles data on client-side only - limited quantity for performance
  const generateParticles = () => {
    if (!isClient) return [];
    return Array.from({ length: 10 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5,
      animation: `ping-slow ${2 + Math.random() * 4}s infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  };

  // Generate star field data on client-side only - limited quantity for performance
  const generateStars = () => {
    if (!isClient) return [];
    return Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.max(1, Math.random() * 2)}px`,
      height: `${Math.max(1, Math.random() * 2)}px`,
      animation: `twinkle ${3 + Math.random() * 7}s infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  };

  // Generate the data only after component mounts
  const particles = generateParticles();
  const stars = generateStars();

  return (
    <section ref={heroRef} className='relative min-h-screen overflow-hidden'>
      {/* Abstract Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-800 to-indigo-900'>
        {/* Animated gradient orbs */}
        <div className='absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/30 blur-3xl animate-pulse-slow'></div>
        <div className='absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-700/20 blur-3xl animate-pulse-slow animation-delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl animate-pulse-slow animation-delay-2000'></div>
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Floating geometric shapes with autonomous movement */}
        <div className='absolute top-[15%] right-[20%] w-16 h-16 border border-purple-300/20 rotate-45 animate-float-bounce'>
          <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-indigo-500/5'></div>
        </div>

        <div className='absolute top-[45%] left-[15%] w-24 h-24 border border-purple-300/20 rounded-full animate-float-diagonal-slow'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/5 to-indigo-500/5'></div>
        </div>

        <div className='absolute bottom-[25%] right-[25%] w-20 h-20 border border-purple-300/20 rounded-md rotate-12 animate-float-zigzag animation-delay-1000'>
          <div className='absolute inset-0 rounded-md bg-gradient-to-br from-purple-500/5 to-indigo-500/5'></div>
        </div>

        {/* Floating dots */}
        <div className='absolute top-[30%] left-[30%] w-2 h-2 rounded-full bg-purple-400/30 animate-ping-slow-move'></div>
        <div className='absolute top-[50%] right-[10%] w-3 h-3 rounded-full bg-indigo-400/30 animate-ping-slow-move animation-delay-700'></div>
        <div className='absolute bottom-[20%] left-[40%] w-2 h-2 rounded-full bg-purple-300/30 animate-ping-slow-move animation-delay-1500'></div>

        {/* Floating lines with simple animations */}
        <div className='absolute top-[10%] left-[50%] w-[150px] h-[1px] bg-gradient-to-r from-purple-300/0 via-purple-300/20 to-purple-300/0 rotate-[30deg] animate-float-horizontal-slow'></div>
        <div className='absolute top-[60%] right-[30%] w-[100px] h-[1px] bg-gradient-to-r from-indigo-300/0 via-indigo-300/20 to-indigo-300/0 rotate-[-20deg] animate-float-horizontal animation-delay-500'></div>

        {/* Abstract floating blobs with simple animations */}
        <div className='absolute top-[20%] right-[40%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/5 to-indigo-400/5 filter blur-xl animate-float-vertical-slow animation-delay-1200'></div>
        <div className='absolute bottom-[30%] left-[20%] w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-600/5 to-purple-400/5 filter blur-xl animate-float-vertical animation-delay-700'></div>

        {/* Glowing particles effect - Client-side only rendering with reduced count for performance */}
        <div className='absolute inset-0'>
          {isClient &&
            particles.map((particle, i) => (
              <div
                key={i}
                className='absolute w-1 h-1 rounded-full bg-white/50'
                style={{
                  top: particle.top,
                  left: particle.left,
                  opacity: particle.opacity,
                  animation: particle.animation,
                  animationDelay: particle.animationDelay,
                }}></div>
            ))}
        </div>
      </div>

      {/* Geometric pattern overlay */}
      <div className='absolute inset-0 opacity-10'>
        {/* Grid pattern */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}></div>

        {/* Random geometric shapes with simple animations */}
        <div className='absolute top-[15%] left-[10%] w-20 h-20 border-2 border-white/20 rounded-md transform rotate-45 animate-pulse-slow'></div>
        <div className='absolute top-[70%] left-[80%] w-32 h-32 border-2 border-white/10 rounded-full animate-pulse-slow animation-delay-1000'></div>
        <div className='absolute top-[40%] left-[75%] w-24 h-24 border-2 border-white/20 transform rotate-12 animate-pulse-slow animation-delay-500'></div>
        <div className='absolute top-[25%] left-[60%] w-12 h-12 bg-white/5 rounded-full animate-pulse-slow animation-delay-750'></div>
        <div className='absolute top-[60%] left-[20%] w-16 h-16 bg-white/5 transform rotate-45 animate-pulse-slow animation-delay-1250'></div>
      </div>

      {/* Star field effect - Client-side only rendering with reduced count for performance */}
      <div className='absolute inset-0'>
        {isClient &&
          stars.map((star, i) => (
            <div
              key={i}
              className='absolute rounded-full'
              style={{
                top: star.top,
                left: star.left,
                width: star.width,
                height: star.height,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                animation: star.animation,
                animationDelay: star.animationDelay,
              }}></div>
          ))}
      </div>

      {/* Decorative corner accents with simple animations */}
      <div className='absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-purple-400/30 transform animate-pulse-slow'></div>
      <div className='absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-purple-400/30 transform animate-pulse-slow animation-delay-500'></div>
      <div className='absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-purple-400/30 transform animate-pulse-slow animation-delay-1000'></div>
      <div className='absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-purple-400/30 transform animate-pulse-slow animation-delay-1500'></div>

      {/* Content container */}
      <div className='relative h-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center z-10 py-12 md:py-0'>
        {/* Text content - centered */}
        <div className='w-full md:max-w-3xl text-center space-y-8 md:space-y-10'>
          <div className='space-y-6'>
            <div className='inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full animate-on-scroll opacity-0 transform translate-y-4 mx-auto animate-float-gentle'>
              <div className='w-2 h-2 rounded-full bg-purple-400 animate-pulse'></div>
              <p className='text-sm font-medium tracking-widest uppercase text-white'>
                September 12–14, 2025
              </p>
            </div>

            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-none text-white'>
              <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block'>
                Nairobi
              </span>{" "}
              <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block animation-delay-300'>
                Property
              </span>{" "}
              <div className='mt-2 md:mt-3'>
                <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block animation-delay-600 bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-300 text-transparent bg-clip-text relative'>
                  Expo
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 transform scale-x-100'></span>
                </span>
              </div>
            </h1>

            <p className='text-xl md:text-2xl font-serif italic text-purple-200 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-900 max-w-2xl mx-auto'>
              Unlocking Property Potential in Kenya & Beyond
            </p>

            {/* Event details with icons */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-6 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-1000'>
              <div className='flex items-center'>
                <Calendar className='w-5 h-5 text-purple-300 mr-2' />
                <span className='text-sm text-purple-100'>
                  September 12–14, 2025
                </span>
              </div>
              <div className='flex items-center'>
                <MapPin className='w-5 h-5 text-purple-300 mr-2' />
                <span className='text-sm text-purple-100'>
                  Sarit Expo Centre, Nairobi
                </span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 mt-6 justify-center animate-on-scroll opacity-0 transform translate-y-4 animation-delay-1200'>
              <button className='bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium px-8 py-3 rounded-sm shadow-lg transition-all duration-300 uppercase tracking-wider text-sm flex items-center justify-center group'>
                Register Now
                <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
              </button>
              <button className='bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm'>
                Become an Exhibitor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <ChevronDown className='w-6 h-6 text-purple-300' />
      </div>

      {/* Decorative accent lines */}
      <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600/0 via-purple-600/40 to-purple-600/0'></div>
    </section>
  );
};

export default Hero;
