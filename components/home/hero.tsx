"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  return (
    <section ref={heroRef} className='relative h-screen overflow-hidden'>
      {/* Decorative Elements */}
      <div className='absolute top-20 left-20 w-40 h-40 rounded-full bg-yellow-500/10 blur-3xl animate-pulse-slow'></div>
      <div className='absolute bottom-20 right-20 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl animate-pulse-slow animation-delay-2000'></div>

      {/* Royal Corner Decorations */}
      <div className='absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-yellow-500/50 transform rotate-0'></div>
      <div className='absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-yellow-500/50 transform rotate-0'></div>
      <div className='absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-yellow-500/50 transform rotate-0'></div>
      <div className='absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-yellow-500/50 transform rotate-0'></div>

      {/* Background Image with Parallax */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 transition-transform duration-1000 ease-out'
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * -15}px, ${
              mousePosition.y * -15
            }px)`,
          }}>
          <Image
            src='/venue1.jpg'
            alt='Sarit Expo Centre'
            fill
            className='object-cover'
            priority
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60' />

        {/* Subtle Gold Particles */}
        <div className='absolute inset-0 z-10 opacity-30'>
          <div className='particleContainer'></div>
        </div>
      </div>

      {/* Content */}
      <div className='relative h-full flex flex-col items-center justify-center text-white px-6 md:px-8 max-w-7xl mx-auto z-10'>
        <div className='space-y-8 text-center md:text-left md:max-w-3xl'>
          <div className='space-y-2'>
            <div
              className='inline-block px-4 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-sm animate-on-scroll opacity-0 transform translate-y-4'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 5
                }deg) rotateY(${mousePosition.x * 5}deg)`,
              }}>
              <p className='text-sm font-medium tracking-widest uppercase text-yellow-400'>
                September 12–14, 2025
              </p>
            </div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight'>
              <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block'>
                Nairobi
              </span>{" "}
              <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block animation-delay-300'>
                Property
              </span>{" "}
              <span className='animate-on-scroll opacity-0 transform translate-y-4 inline-block animation-delay-600 gold-gradient'>
                Expo
              </span>
            </h1>

            <div
              className='h-0.5 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 my-6 mx-auto md:mx-0 animate-on-scroll opacity-0 transform scale-x-0'
              style={{ transformOrigin: "left center" }}></div>

            <p className='text-xl md:text-2xl font-serif italic text-white/90 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-900'>
              Unlocking Property Potential in Kenya & Beyond
            </p>

            <p className='text-base md:text-lg text-white/70 font-light mt-3 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-1200'>
              Sarit Expo Centre, Westlands – Nairobi
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start animate-on-scroll opacity-0 transform translate-y-4 animation-delay-1500'>
            <button
              className='bg-yellow-500 hover:bg-yellow-600 text-black group font-medium px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm elegant-shadow flex items-center justify-center hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 2
                }deg) rotateY(${mousePosition.x * 2}deg)`,
              }}>
              Register Now
              <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1' />
            </button>
            <button
              className='bg-transparent border border-yellow-500/30 hover:border-yellow-500 text-white font-medium px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm hover:bg-yellow-500/10'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 2
                }deg) rotateY(${mousePosition.x * 2}deg)`,
              }}>
              Become an Exhibitor
            </button>
          </div>

          <div className='flex flex-wrap justify-center md:justify-start gap-6 pt-6 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-1800'>
            <div
              className='flex flex-col items-center md:items-start'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) translateZ(${
                  mousePosition.x * 10
                }px)`,
              }}>
              <span className='text-3xl font-serif font-bold gold-gradient'>
                100+
              </span>
              <span className='text-sm text-white/70 uppercase tracking-wider'>
                Exhibitors
              </span>
            </div>
            <div
              className='flex flex-col items-center md:items-start'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) translateZ(${
                  mousePosition.x * 15
                }px)`,
              }}>
              <span className='text-3xl font-serif font-bold gold-gradient'>
                5000+
              </span>
              <span className='text-sm text-white/70 uppercase tracking-wider'>
                Visitors
              </span>
            </div>
            <div
              className='flex flex-col items-center md:items-start'
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) translateZ(${
                  mousePosition.x * 10
                }px)`,
              }}>
              <span className='text-3xl font-serif font-bold gold-gradient'>
                20+
              </span>
              <span className='text-sm text-white/70 uppercase tracking-wider'>
                Speakers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <ChevronDown className='w-6 h-6 text-yellow-500/70' />
      </div>

      {/* Image Credit Badge */}
      <div className='absolute bottom-4 right-4 text-white/50 text-xs'>
        Sarit Expo Centre, Nairobi
      </div>
    </section>
  );
};

export default Hero;
