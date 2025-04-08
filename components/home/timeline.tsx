"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MegaphoneIcon,
  HandshakeIcon,
  Users,
  LineChart,
  CalendarDays,
} from "lucide-react";

interface TimelineItemProps {
  month: string;
  title: string;
  description: string;
  icon: React.ElementType;
  isVisible: boolean;
  index: number;
}

const TimelineItem = ({
  month,
  title,
  description,
  icon: Icon,
  isVisible,
  index,
}: TimelineItemProps) => {
  return (
    <div
      className={`relative backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 transition-all duration-1000 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150 + 500}ms` }}>
      <div className='flex items-start p-5 relative overflow-hidden'>
        <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-indigo-100/10 rounded-full blur-xl'></div>
        <div className='w-14 h-14 rounded-full bg-gradient-to-br from-purple-100/90 to-indigo-100/80 backdrop-blur-sm flex items-center justify-center mr-4 shadow-inner border border-purple-200/80 flex-shrink-0'>
          <Icon className='w-6 h-6 text-purple-700' />
        </div>

        <div className='relative z-10'>
          <div className='font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text text-sm mb-1'>
            {month}
          </div>
          <h3 className='text-xl font-medium text-gray-900 mb-2'>{title}</h3>
          <p className='text-gray-600 text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to create calendar event
  const addToCalendar = () => {
    // Format dates for calendar event
    const startDate = "20250912T090000";
    const endDate = "20250914T180000";

    // Create iCalendar file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nairobi Property Expo//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Nairobi Property Expo 2025
DESCRIPTION:East Africa's premier property exhibition and networking event
LOCATION:Sarit Expo Centre, Westlands, Nairobi, Kenya
DTSTART:${startDate}
DTEND:${endDate}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    // Create data URI for the file
    const dataUri =
      "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent);

    // Create and click a temporary link to download the file
    const link = document.createElement("a");
    link.href = dataUri;
    link.setAttribute("download", "nairobi-property-expo-2025.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timelineEvents = [
    {
      month: "May 2025",
      title: "Launch & PR",
      description:
        "Official announcement and launch of the Nairobi Property Expo 2025 to the public and media.",
      icon: MegaphoneIcon,
    },
    {
      month: "May – June 2025",
      title: "Sponsorship Outreach",
      description:
        "Engagement with potential sponsors and strategic partners for the expo.",
      icon: HandshakeIcon,
    },
    {
      month: "June – August 2025",
      title: "Exhibitor Onboarding",
      description:
        "Registration and confirmation of exhibition participants and booth allocations.",
      icon: Users,
    },
    {
      month: "July – September 2025",
      title: "Marketing Campaign",
      description:
        "Comprehensive marketing across digital, print, and outdoor media to drive attendance.",
      icon: LineChart,
    },
    {
      month: "September 12–14, 2025",
      title: "Event Dates",
      description:
        "The main expo at Sarit Expo Centre featuring exhibitions, presentations, and networking.",
      icon: CalendarDays,
    },
  ];

  return (
    <section
      id='timeline'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-40 left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow'></div>
        <div
          className='absolute bottom-40 right-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow'
          style={{ animationDelay: "2s" }}></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl animate-pulse-slow'></div>
      </div>

      {/* Animated particles for a subtle background effect */}
      {isClient && (
        <>
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
          <div className='absolute inset-0 opacity-[0.02]'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className='absolute w-1 h-1 bg-indigo-600/50 rounded-full animate-pulse-slow'
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}></div>
            ))}
          </div>
        </>
      )}

      {/* Content */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div
            className={`inline-block px-3 py-1 bg-purple-500/10 text-purple-700 rounded-sm text-sm font-medium tracking-wider uppercase backdrop-blur-sm border border-purple-500/20 shadow-[0_4px_10px_rgba(139,92,246,0.1)] transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            <span className='relative z-10'>Schedule</span>
          </div>

          <h2
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-purple-800 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            <span className='relative inline-block px-2'>
              Event Timeline
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-gray-600 text-lg transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            Key dates and milestones for the Nairobi Property Expo 2025
          </p>
        </div>

        {/* Timeline Desktop View (visible on md and up) */}
        <div className='hidden md:block relative'>
          {/* Center Line */}
          <div className='absolute left-1/2 top-0 bottom-0 w-px bg-purple-200/50'></div>

          <div className='space-y-16 relative'>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                <div
                  className={`w-[45%] z-10 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}>
                  <div className='backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 p-6 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden'>
                    <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-100/10 rounded-full blur-xl'></div>
                    <div className='relative z-10'>
                      <div className='font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text text-sm mb-1'>
                        {event.month}
                      </div>
                      <h3 className='text-xl font-medium text-gray-900 mb-2'>
                        {event.title}
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-100/90 to-indigo-100/80 backdrop-blur-sm flex items-center justify-center shadow-inner border border-purple-200/80 shadow-[0_4px_10px_rgba(139,92,246,0.15)]'>
                    <event.icon className='w-5 h-5 text-purple-700' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile View (visible on small screens) */}
        <div className='md:hidden space-y-4'>
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              {...event}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-[900ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <button
            onClick={addToCalendar}
            className='px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-[0_10px_20px_rgba(124,58,237,0.2)] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.3)] border border-white/20 hover:border-white/30 flex items-center justify-center mx-auto'>
            <Calendar className='w-5 h-5 mr-2' />
            Save the Dates
          </button>
        </div>
      </div>

      {/* Glassmorphism Bottom Element */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm'></div>
    </section>
  );
};

export default Timeline;
