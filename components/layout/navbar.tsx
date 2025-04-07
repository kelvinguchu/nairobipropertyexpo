"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  Award,
  Calendar,
  Mail,
  Building,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Exhibitors", path: "/exhibitors", icon: Users },
    { name: "Sponsors", path: "/sponsors", icon: Award },
    { name: "Schedule", path: "/schedule", icon: Calendar },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white py-4"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/' className='flex-shrink-0 flex items-center'>
              <Building className='h-8 w-8 text-yellow-500' />
              <div className='ml-2'>
                <span className='font-serif text-xl font-bold gold-gradient'>
                  NPE
                </span>
                <span className='ml-1 font-sans text-sm font-medium tracking-wider'>
                  2025
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-300 ${
                  pathname === link.path
                    ? "gold-gradient font-medium"
                    : "text-gray-700 hover:text-yellow-500"
                }`}>
                <link.icon className='w-4 h-4 mr-1' />
                {link.name}
              </Link>
            ))}
            <button className='ml-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-sm transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm'>
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white/95 backdrop-blur-sm shadow-md elegant-shadow`}>
        <div className='pt-2 pb-3 space-y-1'>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center pl-3 pr-4 py-2 text-base font-medium ${
                pathname === link.path
                  ? "border-l-4 border-yellow-500 text-yellow-600 bg-yellow-50"
                  : "border-l-4 border-transparent text-gray-600 hover:text-yellow-500 hover:border-yellow-300"
              }`}
              onClick={() => setIsMenuOpen(false)}>
              <link.icon className='w-5 h-5 mr-2' />
              {link.name}
            </Link>
          ))}
          <div className='px-3 py-3'>
            <button className='w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm'>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
