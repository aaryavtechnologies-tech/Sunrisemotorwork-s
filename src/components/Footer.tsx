import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';
import { COMPANY_DATA, getServiceBookingWhatsAppUrl } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-zinc-400 border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Decorative Gold Ambient Glow at the Top Edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      {/* Main Footer Content */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <BrandLogo size="lg" />
            </Link>
            
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Sunrise Motor Work's provides professional car maintenance, mechanical repairs, computerized diagnostics, electrical repairs, and luxury car detailing in Diva (E), Thane. Serving Indian and premium automobile owners since 2010.
            </p>

            <div className="p-3.5 rounded-lg bg-[#0E0E0E] border border-[#222] max-w-sm space-y-1">
              <p className="text-xs uppercase tracking-wider text-gold font-semibold">Founder & Head Technician</p>
              <p className="text-sm text-white font-medium">{COMPANY_DATA.founder}</p>
              <p className="text-xs text-zinc-400">14+ Years of Automotive Repair & Service Leadership</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#2A2A2A] flex items-center justify-center text-zinc-300 hover:text-gold hover:border-gold transition-all duration-200"
                aria-label="Instagram @sunrisemotorwork"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={getServiceBookingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#2A2A2A] flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-200"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="w-10 h-10 rounded-full bg-[#121212] border border-[#2A2A2A] flex items-center justify-center text-zinc-300 hover:text-gold hover:border-gold transition-all duration-200"
                aria-label="Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white border-l-2 border-gold pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Car Brands', path: '/brands' },
                { name: 'Service Plans', path: '/service-plans' },
                { name: 'Service Locations', path: '/locations' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-gold transition-colors duration-150 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-gold transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white border-l-2 border-gold pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Car General Service',
                'Engine Repair & Overhaul',
                'Automatic Transmission Repair',
                'Computerized Diagnostics & Scanning',
                'Car AC Repair & Gas Recharge',
                'Suspension & Steering Overhaul',
                'Foam Wash & Interior Cleaning',
                'Showroom Car Detailing & Polishing',
              ].map((serviceName) => (
                <li key={serviceName}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-gold transition-colors duration-150 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-gold transition-colors" />
                    <span className="truncate">{serviceName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Workshop Info & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white border-l-2 border-gold pl-2.5">
              Workshop Location
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">SUNRISE MOTOR WORK'S</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Mamacha Dhaba, Opp. Diva Prabhag Samiti,<br />
                    Khardi Gaon, Diva (E),<br />
                    Maharashtra – 400612.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_DATA.phone}`} 
                  className="text-zinc-300 hover:text-gold transition-colors font-medium text-sm"
                >
                  {COMPANY_DATA.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-gold flex-shrink-0" />
                <a 
                  href={COMPANY_DATA.instagramUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-gold transition-colors text-sm flex items-center gap-1"
                >
                  <span>{COMPANY_DATA.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-400">
                  Mon – Sun: 9:00 AM – 9:00 PM<br />
                  <span className="text-amber-400">24/7 Breakdown & Home Enquiries</span>
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getServiceBookingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider text-black bg-gold hover:bg-gold-light rounded transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Coverage Badge Banner */}
        <div className="mt-12 pt-8 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-zinc-300 font-medium">Pickup & Drop Coverage:</span>
            <span>Diva, Mumbra, Thane, Kalwa, Dombivli, Kalyan, Navi Mumbai, Vasai.</span>
          </div>
          <div className="text-zinc-500">
            Certified Multi-Brand Technical Standards
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#161616] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="font-heading tracking-widest text-gold font-bold text-sm">
            {COMPANY_DATA.taglines.footer}
          </p>
          <p>
            © 2026 SUNRISE MOTOR WORK'S. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
