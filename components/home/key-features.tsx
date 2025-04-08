"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Layers,
  Mic,
  Users,
  Building,
  Presentation,
  Lightbulb,
  SquareCheck,
} from "lucide-react";
import Image from "next/image";

const KeyFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"exhibition" | "conference">(
    "exhibition"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

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

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const conferenceTopics = [
    {
      icon: Presentation,
      title: "Real Estate Market Insights",
      items: [
        "Kenya's real estate trends and future outlook",
        "Investment opportunities in Nairobi and upcoming towns",
        "Urban development, zoning, and affordable housing policies",
        "Market data analysis: pricing, demand, and growth segments",
        "Diaspora investment behavior and cross-border buying patterns",
      ],
    },
    {
      icon: Building,
      title: "Construction & Development",
      items: [
        "Innovations in construction materials and technology",
        "Building regulations and approval processes",
        "Green construction, sustainability, and climate-resilient design",
        "Supply chain challenges and opportunities",
        "Project financing and budgeting best practices",
      ],
    },
  ];

  const exhibitionHighlights = [
    {
      title: "Residential Developers",
      description: "Featuring luxury apartments, townhouses, and family homes",
    },
    {
      title: "Commercial Properties",
      description: "Office spaces, retail outlets, and mixed-use developments",
    },
    {
      title: "Financial Institutions",
      description:
        "Banks, SACCOs, and mortgage providers with financing solutions",
    },
    {
      title: "Legal Services",
      description:
        "Property law experts, conveyancing, and due diligence specialists",
    },
    {
      title: "Interior Design",
      description: "Modern interior solutions and smart home technology",
    },
    {
      title: "Solar & Green Solutions",
      description: "Sustainable energy and eco-friendly building options",
    },
  ];

  return (
    <section
      id='key-features'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden'>
      {/* Accent Lines */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>

      {/* Glass Background Elements */}
      <div className='absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl'></div>

      {/* Large Gradient Orb for Background */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl'></div>

      {/* Animated particles */}
      {isClient && (
        <div className='absolute inset-0 opacity-[0.02]'>
          {Array.from({ length: 8 }).map((_, i) => (
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

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-block px-3 py-1 bg-purple-500/10 text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase animate-on-scroll opacity-0 transform translate-y-4 relative overflow-hidden group backdrop-blur-sm border border-purple-200/20 shadow-[0_4px_10px_rgba(139,92,246,0.1)]'>
            <span className='relative z-10'>What to Expect</span>
            <span className='absolute inset-0 w-full h-full bg-purple-400/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500'></span>
          </div>

          <h2 className='mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold animate-on-scroll opacity-0 transform translate-y-4 animation-delay-200 text-purple-800'>
            <span className='relative inline-block px-2'>
              Key Features
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p className='mt-6 max-w-2xl mx-auto text-gray-600 text-lg animate-on-scroll opacity-0 transform translate-y-4 animation-delay-400'>
            The Nairobi Property Expo 2025 offers a comprehensive experience
            with key attractions designed to connect, educate, and inspire all
            participants.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-12 animate-on-scroll opacity-0 transform translate-y-4 animation-delay-500'>
          <div className='inline-flex backdrop-blur-md bg-white/60 rounded-xl shadow-lg p-1.5 border border-white/40 max-w-[95%]'>
            <button
              className={`flex items-center justify-center px-2 xs:px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 ${
                activeTab === "exhibition"
                  ? "bg-white/80 text-purple-700 shadow-md backdrop-blur-sm border-b-2 border-purple-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
              onClick={() => setActiveTab("exhibition")}>
              <Layers className='w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5' />
              <span className='font-medium text-xs sm:text-base whitespace-nowrap'>
                Exhibition Hall
              </span>
            </button>

            <button
              className={`flex items-center justify-center px-2 xs:px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 ${
                activeTab === "conference"
                  ? "bg-white/80 text-purple-700 shadow-md backdrop-blur-sm border-b-2 border-purple-500"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
              onClick={() => setActiveTab("conference")}>
              <Mic className='w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5' />
              <span className='font-medium text-xs sm:text-base whitespace-nowrap'>
                Conference Stage
              </span>
            </button>
          </div>
        </div>

        {/* Exhibition Hall Content */}
        <div
          className={`${
            activeTab === "exhibition" ? "block" : "hidden"
          } animate-on-scroll opacity-0 transform translate-y-4 animation-delay-600`}>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            {/* Main Image - 7 cols */}
            <div className='lg:col-span-7'>
              <div className='relative rounded-xl shadow-[0_20px_50px_rgba(124,58,237,0.15)] overflow-hidden h-full min-h-[300px] border border-white/30 group'>
                <Image
                  src='/saritcentre.jpg'
                  alt='Exhibition Hall'
                  fill
                  sizes='(max-width: 1024px) 100vw, 58vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/80 via-indigo-800/40 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white'>
                  <div className='inline-flex items-center bg-purple-500/30 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-2 sm:mb-3 border border-purple-400/30'>
                    <Users className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                    <span className='text-xs sm:text-sm font-medium'>
                      Over 100 Exhibitors
                    </span>
                  </div>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-3'>
                    Exhibition Hall
                  </h3>
                  <p className='text-white/90 max-w-lg text-sm sm:text-base'>
                    Experience a diverse showcase of residential, commercial,
                    luxury, and affordable housing options from leading
                    developers, banks, legal firms, and technology providers.
                  </p>
                </div>
              </div>
            </div>

            {/* Exhibition Highlights - 5 cols */}
            <div className='lg:col-span-5'>
              <div className='backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] overflow-hidden h-full border border-white/40'>
                <div className='bg-purple-50/80 backdrop-blur-md p-4 border-b border-purple-100/80'>
                  <h3 className='text-xl font-serif text-purple-800 flex items-center'>
                    <SquareCheck className='w-5 h-5 mr-2 text-purple-600' />
                    Exhibition Highlights
                  </h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0 h-[calc(100%-60px)] divide-y divide-gray-100/50'>
                  {exhibitionHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className='p-4 hover:bg-white/80 transition-all duration-300 flex backdrop-blur-sm hover:shadow-inner'>
                      <div className='w-1 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full self-stretch mr-3 opacity-70'></div>
                      <div>
                        <h4 className='font-medium text-gray-900'>
                          {highlight.title}
                        </h4>
                        <p className='text-gray-600 text-sm mt-1'>
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Stage Content */}
        <div
          className={`${
            activeTab === "conference" ? "block" : "hidden"
          } animate-on-scroll opacity-0 transform translate-y-4 animation-delay-600`}>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            {/* Main Image - 7 cols */}
            <div className='lg:col-span-7'>
              <div className='relative rounded-xl shadow-[0_20px_50px_rgba(124,58,237,0.15)] overflow-hidden h-full min-h-[300px] border border-white/30 group'>
                <Image
                  src='/saritcentre2.jpg'
                  alt='Conference Stage'
                  fill
                  sizes='(max-width: 1024px) 100vw, 58vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/80 via-indigo-800/40 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white'>
                  <div className='inline-flex items-center bg-purple-500/30 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-2 sm:mb-3 border border-purple-400/30'>
                    <Lightbulb className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                    <span className='text-xs sm:text-sm font-medium'>
                      Industry Insights
                    </span>
                  </div>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-3'>
                    Main Conference Stage
                  </h3>
                  <p className='text-white/90 max-w-lg text-sm sm:text-base'>
                    Engage with thought leaders and experts through informative
                    sessions on real estate market trends, construction
                    innovation, and investment strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Topics - 5 cols */}
            <div className='lg:col-span-5'>
              <div className='backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] overflow-hidden h-full border border-white/40'>
                <div className='bg-purple-50/80 backdrop-blur-md p-4 border-b border-purple-100/80'>
                  <h3 className='text-xl font-serif text-purple-800 flex items-center'>
                    <Mic className='w-5 h-5 mr-2 text-purple-600' />
                    Conference Topics
                  </h3>
                </div>

                <div className='divide-y divide-gray-100/50'>
                  {conferenceTopics.map((topic, index) => (
                    <div
                      key={index}
                      className='p-4 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm hover:shadow-inner'>
                      <div className='flex items-center mb-3'>
                        <div className='w-9 h-9 rounded-full bg-purple-100/80 backdrop-blur-sm flex items-center justify-center mr-3 shadow-inner border border-purple-200/80'>
                          <topic.icon className='w-4 h-4 text-purple-700' />
                        </div>
                        <h4 className='font-serif text-gray-900'>
                          {topic.title}
                        </h4>
                      </div>
                      <ul className='space-y-2 pl-4'>
                        {topic.items.map((item, idx) => (
                          <li key={idx} className='flex items-start'>
                            <div className='h-5 flex items-center mr-2 text-purple-500'>
                              •
                            </div>
                            <span className='text-gray-600 text-sm'>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism Bottom Element */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm'></div>
    </section>
  );
};

export default KeyFeatures;
