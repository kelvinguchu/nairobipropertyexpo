"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#objectives" },
    { name: "Features", path: "/#key-features" },
    { name: "Audience", path: "/#target-audience" },
    { name: "Sponsors", path: "/#sponsors" },
    { name: "Exhibitors", path: "/#exhibitor-packages" },
    { name: "Timeline", path: "/#timeline" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigateToPath(path);
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    path: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigateToPath(path);
  };

  const navigateToPath = (path: string) => {
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
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className={`font-serif text-xl font-medium ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-purple-500`}>
              NPE 2025
            </Link>
          </div>

          {/* Desktop menu and Register button together on right */}
          <div className='hidden md:flex items-center space-x-6'>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`font-serif text-base transition-colors duration-300 ${
                  pathname === link.path ||
                  (pathname === "/" && link.path.includes("/#"))
                    ? scrolled
                      ? "text-black font-medium"
                      : "text-white font-medium"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                } hover:text-purple-500`}>
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => handleButtonClick(e, "/#contact")}
              className='bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium px-6 py-2 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm shadow-md'>
              REGISTER
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? "text-gray-800" : "text-white"
              }`}>
              <span className='sr-only'>Open main menu</span>
              <div className='w-6 flex items-center justify-center relative'>
                <span
                  className={`block absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                    isMenuOpen
                      ? "rotate-45 bg-gray-800"
                      : scrolled
                      ? "bg-gray-800"
                      : "bg-white"
                  }`}></span>
                <span
                  className={`block absolute h-0.5 transform transition duration-300 ease-in-out ${
                    isMenuOpen
                      ? "w-0 bg-gray-800"
                      : scrolled
                      ? "w-5 bg-gray-800"
                      : "w-5 bg-white"
                  }`}></span>
                <span
                  className={`block absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                    isMenuOpen
                      ? "-rotate-45 bg-gray-800"
                      : scrolled
                      ? "bg-gray-800"
                      : "bg-white"
                  }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md`}>
        <div className='px-6 pt-4 pb-6 space-y-1'>
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`block py-2 font-serif text-base ${
                pathname === link.path ||
                (pathname === "/" && link.path.includes("/#"))
                  ? "text-black font-medium"
                  : "text-gray-800"
              } hover:text-purple-500`}>
              {link.name}
            </a>
          ))}
          <div className='pt-4'>
            <button
              onClick={(e) => handleButtonClick(e, "/#contact")}
              className='w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium px-4 py-2 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm shadow-md'>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
