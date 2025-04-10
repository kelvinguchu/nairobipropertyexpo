"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Diamond,
  Crown,
  TrophyIcon,
  Award,
  CheckCircle2,
  Building,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SponsorCardProps {
  tier: string;
  price: number;
  color: string;
  icon: React.ElementType;
  benefits: string[];
  booth: string;
  isVisible: boolean;
  index: number;
}

const SponsorCard = ({
  tier,
  price,
  color,
  icon: Icon,
  benefits,
  booth,
  isVisible,
  index,
}: SponsorCardProps) => {
  const router = useRouter();
  // Function to navigate to the contact section
  const navigateToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Check if on home page
    if (window.location.pathname === "/") {
      // Smooth scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 80, // Offset for navbar height
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to home page with contact section
      router.push("/#contact");
    }
  };

  return (
    <div
      className={`relative backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 overflow-hidden transition-opacity duration-700 flex flex-col h-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transitionDelay: `${Math.min(index * 150 + 400, 1000)}ms`,
      }}>
      {/* Header */}
      <div
        className={`p-6 text-center border-b border-gray-100/50 relative overflow-hidden bg-gradient-to-br ${color}`}>
        <div className='relative z-10'>
          <div className='mx-auto w-16 h-16 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center mb-4 border border-white/40 shadow-inner'>
            <Icon
              className={`w-8 h-8 ${
                tier === "Diamond"
                  ? "text-blue-50"
                  : tier === "Platinum"
                  ? "text-slate-50"
                  : tier === "Gold"
                  ? "text-yellow-50"
                  : "text-gray-50"
              }`}
            />
          </div>
          <h3 className='text-2xl font-serif font-bold text-white mb-1'>
            {tier}
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
          <p className='text-gray-700'>{booth}</p>
        </div>

        {/* Passes */}
        <div className='mb-4 flex items-center'>
          <Users className='w-5 h-5 text-purple-600 mr-2 flex-shrink-0' />
          <p className='text-gray-700'>
            {benefits.find(
              (b: string) =>
                b.includes("VIP passes") || b.includes("general passes")
            )}
          </p>
        </div>

        {/* Benefits */}
        <div className='mb-auto'>
          <ul className='space-y-2'>
            {benefits
              .filter(
                (b: string) =>
                  !b.includes("VIP passes") && !b.includes("general passes")
              )
              .map((benefit: string, index: number) => (
                <li key={index} className='flex'>
                  <CheckCircle2 className='w-5 h-5 text-purple-500 flex-shrink-0 mr-2' />
                  <span className='text-gray-600 text-sm'>{benefit}</span>
                </li>
              ))}
          </ul>
        </div>

        <button
          onClick={navigateToContact}
          className={`w-full py-3 mt-6 rounded-lg backdrop-blur-sm text-white font-medium transition-shadow duration-300 hover:shadow-lg border border-white/20 ${
            tier === "Diamond"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600"
              : tier === "Platinum"
              ? "bg-gradient-to-r from-purple-500 to-indigo-600"
              : tier === "Gold"
              ? "bg-gradient-to-r from-yellow-500 to-amber-600"
              : "bg-gradient-to-r from-gray-500 to-gray-700"
          }`}>
          Inquire
        </button>
      </div>
    </div>
  );
};

const Sponsors = () => {
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

  const sponsorTiers = [
    {
      tier: "Diamond",
      price: 1500000,
      color: "from-blue-500/90 to-indigo-600/90",
      icon: Diamond,
      booth: "Prime branding & 6x6m premium booth",
      benefits: [
        "Keynote speaking opportunity",
        "VIP lounge naming rights",
        "Full-page advert in event catalogue",
        "Exclusive media mentions & PR features",
        "Dedicated email blast to attendees",
        "6 VIP passes + 10 general access passes",
      ],
    },
    {
      tier: "Platinum",
      price: 1000000,
      color: "from-purple-500/90 to-indigo-600/90",
      icon: Crown,
      booth: "Prime booth (6x6m)",
      benefits: [
        "Conference panel slot",
        "Logo on stage backdrops, website, and catalogue",
        "Social media feature posts",
        "4 VIP passes + 6 general passes",
        "Full-page advert in catalogue",
      ],
    },
    {
      tier: "Gold",
      price: 700000,
      color: "from-yellow-500/90 to-amber-600/90",
      icon: TrophyIcon,
      booth: "Premium booth (6x3m)",
      benefits: [
        "Logo on catalogue and media screens",
        "Half-page advert",
        "3 VIP passes + 4 general passes",
      ],
    },
    {
      tier: "Silver",
      price: 500000,
      color: "from-gray-500/90 to-gray-600/90",
      icon: Award,
      booth: "Standard booth (3x3m)",
      benefits: [
        "Logo listing in event materials",
        "Quarter-page advert",
        "2 VIP passes + 2 general passes",
      ],
    },
  ];

  return (
    <section
      id='sponsors'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden'>
      {/* Simplified Background - Single gradient */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-500/10'></div>

      {/* Section Content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-block px-3 py-1 bg-purple-500/10 text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase backdrop-blur-sm border border-purple-200/20 shadow-[0_4px_10px_rgba(139,92,246,0.1)] transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className='relative z-10'>Opportunities</span>
          </div>

          <h2
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-purple-800 transition-opacity duration-500 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className='relative inline-block px-2'>
              Sponsorship Packages
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-gray-600 text-lg transition-opacity duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
            Showcase your brand to Kenya's most influential real estate
            professionals and potential buyers with our premium sponsorship
            packages.
          </p>
        </div>

        {/* Sponsor Cards - Updated to 2x2 Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {sponsorTiers.map((tier, index) => (
            <SponsorCard
              key={index}
              {...tier}
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

export default Sponsors;
