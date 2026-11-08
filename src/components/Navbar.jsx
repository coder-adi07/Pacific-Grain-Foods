import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <header className="w-full relative z-50">
        <div className="bg-[#1A060B] text-white/80 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-pgf-gold font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Family Owned & Operated Since 1982 &bull; Fresno, California
              </span>
              <span className="text-white/40">|</span>
              <span className="flex items-center gap-1 text-white/70">
                <Clock className="w-3.5 h-3.5 text-pgf-gold" />
                Office: Mon-Fri 8am-4pm PST
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="tel:5592762580" 
                className="flex items-center gap-1.5 hover:text-pgf-gold transition-colors font-medium text-white/90"
              >
                <Phone className="w-3.5 h-3.5 text-pgf-gold" />
                <span>Sales Desk: (559) 276-2580</span>
              </a>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2 text-white/60 text-[11px]">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-white/80">
                  <ShieldCheck className="w-3 h-3 text-pgf-gold" /> Kosher & Organic Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav 
          className={`w-full transition-all duration-300 ${
            isScrolled 
              ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100 z-50' 
              : 'relative bg-white py-4 border-b border-gray-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/images/logo.png" 
                alt="Pacific Grain & Foods, LLC Logo" 
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="hidden lg:block border-l border-gray-200 pl-3">
                <div className="text-[10px] tracking-widest uppercase font-semibold text-pgf-burgundy">
                  Fresno, California
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Bulk Ingredients & Co-Packing
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-pgf-burgundy bg-pgf-burgundy/5 font-bold shadow-xs'
                        : 'text-gray-700 hover:text-pgf-burgundy hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-pgf-burgundy hover:bg-pgf-burgundy-800 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 border border-pgf-burgundy-900"
              >
                <span>Request a Quote</span>
                <ChevronRight className="w-4 h-4 ml-1 text-pgf-gold" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <Link
                to="/contact?type=quote"
                className="px-3 py-1.5 rounded-md text-xs font-bold text-white bg-pgf-burgundy shadow-sm"
              >
                Quote
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-pgf-burgundy hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Pacific Grain & Foods" 
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-pgf-burgundy text-white font-bold'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Contact & CTA footer */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <Link
                to="/contact?type=quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-pgf-burgundy text-white font-bold text-center shadow-md hover:bg-pgf-burgundy-800 transition-colors"
              >
                Request a Custom Quote
              </Link>
              
              <div className="space-y-2 text-xs text-gray-600 bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                <div className="font-bold text-pgf-burgundy uppercase tracking-wider text-[11px]">
                  Pacific Grain & Foods, LLC
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-pgf-burgundy" />
                  <a href="tel:5592762580" className="hover:underline font-medium text-gray-900">
                    (559) 276-2580
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-pgf-burgundy" />
                  <a href="mailto:leep@pacificgrainfoods.com" className="hover:underline">
                    leep@pacificgrainfoods.com
                  </a>
                </div>
                <div className="text-[11px] text-gray-500 pt-1">
                  4067 W. Shaw Ave. #116, Fresno, CA 93722
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

