"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Diamond,
  TrophyIcon,
  Award,
  CheckCircle2,
  Users,
  Building,
} from "lucide-react";

interface PackageCardProps {
  title: string;
  size: string;
  price: number;
  features: string[];
  color: string;
  icon: React.ElementType;
  isVisible: boolean;
  index: number;
}

const PackageCard = ({
  title,
  size,
  price,
  features,
  color,
  icon: Icon,
  isVisible,
  index,
}: PackageCardProps) => {
  return (
    <div
      className={`relative backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 overflow-hidden transition-opacity duration-700 flex flex-col h-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 150 + 400, 1000)}ms` }}>
      {/* Header */}
      <div
        className={`p-6 text-center border-b border-gray-100/50 relative overflow-hidden bg-gradient-to-br ${color}`}>
        <div className='relative z-10'>
          <div className='mx-auto w-16 h-16 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center mb-4 border border-white/40 shadow-inner'>
            <Icon className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-2xl font-serif font-bold text-white mb-1'>
            {title}
          </h3>
          <div className='text-3xl font-bold text-white/90 mb-2'>
            KES {price.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='p-6 flex flex-col flex-grow bg-white/30 backdrop-blur-sm'>
        {/* Booth */}
        <div className='mb-3 flex items-center'>
          <Building className='w-5 h-5 text-purple-600 mr-2 flex-shrink-0' />
          <p className='text-gray-700'>{size}</p>
        </div>

        {/* Benefits */}
        <div className='mb-auto'>
          <ul className='space-y-2'>
            {features.map((feature: string, i: number) => (
              <li key={i} className='flex'>
                <CheckCircle2 className='w-5 h-5 text-purple-500 flex-shrink-0 mr-2' />
                <span className='text-gray-600 text-sm'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className='w-full py-3 mt-6 rounded-lg backdrop-blur-sm text-white font-medium transition-shadow duration-300 hover:shadow-lg border border-white/20 bg-gradient-to-r from-purple-500 to-indigo-600'>
          Book
        </button>
      </div>
    </div>
  );
};

const ExhibitorPackages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simplified intersection observer for entire section
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

  const exhibitorPackages = [
    {
      title: "Diamond",
      size: "Premium Booth (6×6m)",
      price: 1000000,
      color: "from-blue-500/90 to-indigo-600/90",
      icon: Diamond,
      features: [
        "Prime location with maximum visibility",
        "Premium branding opportunities",
        "6 VIP + 6 general passes",
        "Full page advertisement in catalogue",
        "Priority listing on event website",
      ],
    },
    {
      title: "Gold",
      size: "Standard Booth (6×3m)",
      price: 700000,
      color: "from-yellow-500/90 to-amber-600/90",
      icon: TrophyIcon,
      features: [
        "High-traffic area placement",
        "Enhanced branding package",
        "4 event passes",
        "Half-page advertisement inclusion",
        "Listing on event website",
      ],
    },
    {
      title: "Silver",
      size: "Standard Booth (3×3m)",
      price: 500000,
      color: "from-gray-500/90 to-gray-600/90",
      icon: Award,
      features: [
        "Standard booth in exhibition hall",
        "Basic branding package",
        "2 event passes",
        "Quarter-page advertisement",
        "Catalogue listing",
      ],
    },
  ];

  return (
    <section
      id='exhibitor-packages'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
      {/* Simplified Background - Single gradient */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/10'></div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-block px-3 py-1 bg-purple-500/10 text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase backdrop-blur-sm border border-purple-200/20 shadow-[0_4px_10px_rgba(139,92,246,0.1)] transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className='relative z-10'>Exhibit with Us</span>
          </div>

          <h2
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-purple-800 transition-opacity duration-500 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className='relative inline-block px-2'>
              Exhibitor Packages
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-gray-600 text-lg transition-opacity duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            Showcase your properties and services to thousands of potential
            buyers and investors with our premium exhibition packages.
          </p>
        </div>

        {/* Packages Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {exhibitorPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism Bottom Element */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm'></div>
    </section>
  );
};

export default ExhibitorPackages;
