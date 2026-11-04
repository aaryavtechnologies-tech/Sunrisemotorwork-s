import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Clock, 
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { COMPANY_DATA, getServiceBookingWhatsAppUrl } from '../data/companyData';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Track scroll position for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Brands', path: '/brands' },
    { name: 'Service Plans', path: '/service-plans' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full select-none transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#040404] border-b border-[#1A1A1A] text-[11px] text-zinc-400 py-1.5 px-4 sm:px-8 lg:px-12 xl:px-16 hidden md:block">
        <div className="w-full max-w-[1680px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Diva (E), Thane – Maharashtra</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Mon - Sun: 9:00 AM – 9:00 PM</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Doorstep Pickup & Drop in Selected Areas</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DATA.phone}`}
              className="flex items-center gap-1.5 text-zinc-200 hover:text-gold transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>Call: {COMPANY_DATA.phoneFormatted}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={getServiceBookingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222] shadow-2xl py-2.5' 
            : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1C1C1C] py-3'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links (Single Line, Never Wraps) */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs lg:text-sm font-heading uppercase tracking-wider whitespace-nowrap transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-gold font-bold bg-gold/10 shadow-[inset_0_1px_1px_rgba(245,184,0,0.2)]'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80 font-semibold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Navigation for medium laptops (1024px to 1280px) */}
          <div className="hidden lg:flex xl:hidden items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1 text-xs font-heading uppercase tracking-wide whitespace-nowrap transition-all duration-200 rounded ${
                    isActive
                      ? 'text-gold font-bold bg-gold/10'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60 font-semibold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={getServiceBookingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-heading font-extrabold uppercase tracking-wider text-black bg-gold hover:bg-gold-light transition-all duration-200 rounded-full shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Book a Service</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-gold" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#242424] shadow-2xl px-5 py-6">
          <div className="flex flex-col space-y-1.5 mb-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 text-sm font-heading uppercase tracking-wider rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gold/15 text-gold font-bold border-l-4 border-gold'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Quick Contact Card */}
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <a
              href={getServiceBookingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-heading font-bold uppercase tracking-wider text-black bg-gold hover:bg-gold-light rounded-lg shadow-gold-sm"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              <span>Book Service on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_DATA.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {COMPANY_DATA.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
