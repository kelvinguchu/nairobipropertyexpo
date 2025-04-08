"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();

    // Handle regular page navigation
    if (!path.includes("#")) {
      router.push(path);
      return;
    }

    // For same page section navigation
    if (pathname === "/" && path.startsWith("/#")) {
      const sectionId = path.split("#")[1];
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for navbar height
          behavior: "smooth",
        });
      }
      return;
    }

    // For section navigation from other pages
    router.push(path);
  };

  return (
    <footer className='relative bg-gray-900 text-white overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden opacity-30'>
        <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl animate-pulse-slow'></div>
      </div>

      {/* Top Section */}
      <div className='relative border-b border-white/10 backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* Column 1: About */}
            <div>
              <h3 className='text-xl font-serif font-bold mb-4 text-purple-400'>
                Nairobi Property Expo
              </h3>
              <p className='text-gray-300 text-sm mb-6'>
                Kenya's premier real estate exhibition connecting developers,
                buyers, and industry professionals.
              </p>

              <div className='flex items-center space-x-4'>
                <Link
                  href='#'
                  className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500/80 transition-colors duration-300'>
                  <Facebook className='w-4 h-4' />
                </Link>
                <Link
                  href='#'
                  className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500/80 transition-colors duration-300'>
                  <Twitter className='w-4 h-4' />
                </Link>
                <Link
                  href='#'
                  className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500/80 transition-colors duration-300'>
                  <Instagram className='w-4 h-4' />
                </Link>
                <Link
                  href='#'
                  className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500/80 transition-colors duration-300'>
                  <Linkedin className='w-4 h-4' />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className='text-lg font-medium mb-4'>Quick Links</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='/#objectives'
                    onClick={(e) => handleNavClick(e, "/#objectives")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>About</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#key-features'
                    onClick={(e) => handleNavClick(e, "/#key-features")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Features</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#target-audience'
                    onClick={(e) => handleNavClick(e, "/#target-audience")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Audience</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#sponsors'
                    onClick={(e) => handleNavClick(e, "/#sponsors")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Sponsors</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#exhibitor-packages'
                    onClick={(e) => handleNavClick(e, "/#exhibitor-packages")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Exhibitors</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#timeline'
                    onClick={(e) => handleNavClick(e, "/#timeline")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Timeline</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
                <li>
                  <a
                    href='/#contact'
                    onClick={(e) => handleNavClick(e, "/#contact")}
                    className='text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group'>
                    <span className='mr-1 text-sm'>Contact</span>
                    <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300' />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className='text-lg font-medium mb-4'>Contact Us</h3>
              <ul className='space-y-4'>
                <li className='flex items-start'>
                  <Mail className='w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0' />
                  <p className='mt-1 text-gray-300'>
                    <a
                      href='mailto:info@nairobipropertyexpo.co.ke'
                      className='text-gray-300 hover:text-purple-300 transition-colors duration-300'>
                      info@nairobipropertyexpo.co.ke
                    </a>
                  </p>
                </li>
                <li className='flex items-start'>
                  <Phone className='w-5 h-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0' />
                  <span className='text-gray-300 text-sm'>
                    +254 XXX XXX XXX
                  </span>
                </li>
              </ul>

              <div className='mt-6'>
                <h4 className='text-sm font-medium text-white mb-3'>
                  Event Dates
                </h4>
                <p className='text-purple-400 font-medium'>
                  September 12–14, 2025
                </p>
                <p className='text-gray-400 text-sm'>
                  Sarit Expo Centre, Westlands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='relative backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 text-sm'>
              © {currentYear} Nairobi Property Expo. All rights reserved.
            </div>

            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='/privacy-policy'
                className='text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300'>
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300'>
                Terms & Conditions
              </a>
              <a
                href='/#contact'
                onClick={(e) => handleNavClick(e, "/#contact")}
                className='text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300'>
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
