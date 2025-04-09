"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  Building,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  interest: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interest: "visitor",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Registration interest received! We'll be in touch soon.");
  };

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'></div>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-40 right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow'></div>
        <div
          className='absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow'
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
            <span className='relative z-10'>Register Now</span>
          </div>

          <h2
            className={`mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            <span className='relative inline-block px-2'>
              Secure Your Spot
              <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-100'></span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-gray-600 text-lg transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-4"
            }`}>
            Join us at East Africa's premier property exhibition and networking
            event
          </p>
        </div>

        {/* Contact Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Form Card */}
          <div
            className={`backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 p-8 transition-all duration-1000 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "500ms" }}>
            <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-100/10 rounded-full blur-xl'></div>
            <h3 className='text-2xl font-serif mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text relative z-10'>
              Register Your Interest
            </h3>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-sm'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-sm'
                  placeholder='your.email@example.co.ke'
                />
              </div>

              <div>
                <label
                  htmlFor='interest'
                  className='block text-sm font-medium text-gray-700 mb-1'>
                  I am interested as a
                </label>
                <select
                  id='interest'
                  name='interest'
                  value={formData.interest}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm shadow-sm'>
                  <option value='visitor'>Visitor</option>
                  <option value='exhibitor'>Exhibitor</option>
                  <option value='sponsor'>Sponsor</option>
                  <option value='speaker'>Speaker</option>
                </select>
              </div>

              <button
                type='submit'
                className='w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-[0_10px_20px_rgba(124,58,237,0.2)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.3)] mt-4 border border-white/20 hover:border-white/30 backdrop-blur-sm flex items-center justify-center'>
                <span>Register Now</span>
                <ChevronRight className='w-4 h-4 ml-1' />
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "700ms" }}>
            {/* Event Details */}
            <div className='backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 p-8 mb-6 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden'>
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-100/10 rounded-full blur-xl'></div>
              <h3 className='text-2xl font-serif mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text relative z-10'>
                Event Details
              </h3>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <Calendar className='w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0' />
                  <div>
                    <h4 className='font-medium text-gray-900'>Dates</h4>
                    <p className='text-gray-600'>September 12–14, 2025</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <MapPin className='w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0' />
                  <div>
                    <h4 className='font-medium text-gray-900'>Venue</h4>
                    <p className='text-gray-600'>
                      Sarit Expo Centre, Westlands – Nairobi
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <Building className='w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0' />
                  <div>
                    <h4 className='font-medium text-gray-900'>Organizer</h4>
                    <p className='text-gray-600'>Nairobi Property Expo Ltd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className='backdrop-blur-lg bg-white/60 rounded-xl shadow-[0_15px_35px_rgba(124,58,237,0.1)] border border-white/40 p-8 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden'>
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-100/10 rounded-full blur-xl'></div>
              <h3 className='text-2xl font-serif mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text relative z-10'>
                Contact Us
              </h3>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <Phone className='w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0' />
                  <div>
                    <h4 className='font-medium text-gray-900'>Phone</h4>
                    <p className='text-gray-600'>+254 735101001</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <Mail className='w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0' />
                  <div>
                    <h4 className='font-medium text-gray-900'>Email</h4>
                    <p className='text-gray-600'>
                      info@nairobipropertyexpo.co.ke
                    </p>
                  </div>
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

export default Contact;
