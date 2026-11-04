import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wrench, 
  Award, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DATA, getServiceBookingWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BrandLogo } from '../components/BrandLogo';

export const AboutPage: React.FC = () => {
  const approachPillars = [
    {
      title: 'Timely Diagnosis & Root-Cause Inspection',
      desc: 'Modern automobiles require systematic diagnosis before any parts are replaced. We utilize advanced electronic scanners and mechanical gauges to identify root causes, preventing recurring faults.',
      icon: <Eye className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Quality Spare Parts & Fluids',
      desc: 'Vehicle reliability depends on using OEM-standard components, clean lubricants, and correct viscosity oils. We ensure parts match or exceed factory standards for long-lasting performance.',
      icon: <CheckCircle className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Precision Mechanical Craftsmanship',
      desc: 'Every torque specification, caliper pin lubrication, and timing belt calibration is carried out with meticulous care under experienced technical supervision.',
      icon: <Wrench className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Transparent Customer Relationship',
      desc: 'We respect your vehicle and time. Before commencing work, we provide clear estimates and explain what is needed now versus what can be monitored for future service.',
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="relative py-16 sm:py-24 bg-[#0A0A0A] border-b border-[#1C1C1C] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs currentPage="About Us" />

          <div className="mt-4 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Established in 2010 • Diva (E)</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              ABOUT <span className="text-gold-gradient">SUNRISE MOTOR WORK'S</span>
            </h1>

            <p className="text-xl sm:text-2xl font-heading text-zinc-300 font-medium tracking-wide">
              Your Trusted Automobile Service Partner Since 2010.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              Delivering dependable mechanical repairs, electrical diagnostics, periodic maintenance, and detailing for multiple automobile brands across the Thane-Dombivli region.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BUSINESS INTRODUCTION & FOUNDER ===================== */}
      <section className="py-20 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Workshop Visuals */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src="/images/hero-bmw-workshop.jpg"
                  alt="Sunrise Motor Work's Automotive Workshop"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-700">
                  <div className="flex items-center gap-3">
                    <BrandLogo size="sm" showText={false} />
                    <div>
                      <p className="font-heading font-bold text-white text-base">Mamacha Dhaba, Opp. Diva Prabhag Samiti</p>
                      <p className="text-xs text-gold">Khardi Gaon, Diva (E), Maharashtra – 400612</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary photo row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-zinc-800 h-36">
                  <img
                    src="/images/detailing-amg-gt.jpg"
                    alt="Detailing Bay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl bg-[#0F0F0F] border border-zinc-800 p-4 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold">Doorstep Convenience</p>
                  <p className="text-sm font-bold text-white mt-1">Pickup & Drop Service</p>
                  <p className="text-xs text-zinc-400 mt-1">Available in Diva, Mumbra, Thane, Kalwa, Dombivli, Kalyan & beyond.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Business Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
                <span>14+ Years in Automotive Care</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
                DEVOTION TO AUTOMOTIVE <span className="text-gold-gradient">EXCELLENCE</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  Established in 2010 by <strong>Keharsingh</strong>, <strong>Sunrise Motor Work's</strong> was created to deliver honest, dependable, and high-quality automobile repair and maintenance services to car owners in Diva, Thane, and neighboring cities.
                </p>
                <p>
                  From routine engine oil and filter replacements to complex internal combustion engine repairs, automatic transmission servicing, and high-precision computerized vehicle scanning, our workshop has grown to service a wide variety of popular Indian and international vehicle marques.
                </p>
                <p>
                  Located opposite the Diva Prabhag Samiti near Mamacha Dhaba, we provide a complete one-stop solution covering mechanical troubleshooting, electrical wiring repairs, air conditioning overhaul, foam washing, and showroom detailing.
                </p>
              </div>

              {/* Founder Profile & Heritage Badge Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#0E0E0E] border border-gold/30 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold font-bold">Founder & Technical Lead</p>
                    <p className="text-lg font-heading font-bold text-white">Keharsingh</p>
                    <p className="text-xs text-zinc-400">Guiding automobile repairs at Sunrise Motor Work's since 2010.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0E0E0E] border border-gold/30 flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/sunrise-logo-gold.png"
                      alt="Sunrise Motor's Vintage Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold font-bold">Brand Heritage</p>
                    <p className="text-lg font-heading font-bold text-white">Sunrise Motor's</p>
                    <p className="text-xs text-zinc-400">Original circular vintage emblem representing mechanical precision.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getServiceBookingWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gold hover:bg-gold-light text-black font-heading font-bold text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black text-black" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-gold font-heading font-semibold text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call {COMPANY_DATA.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== OUR APPROACH SECTION ===================== */}
      <section className="py-20 bg-[#0A0A0A] border-y border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              OUR <span className="text-gold-gradient">APPROACH</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We believe proper vehicle maintenance, timely diagnosis, and quality repair work are essential to vehicle longevity, passenger safety, and optimal fuel economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0F0F0F] border border-[#222] hover:border-gold/40 transition-all duration-300 space-y-4 group hover:shadow-gold-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#171717] border border-[#2B2B2B] flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== SERVICES WE COVER ===================== */}
      <section className="py-20 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0D0D0D] border border-gold/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase tracking-wider text-gold font-bold">
                Comprehensive Workshop Capabilities
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white">
                LOOKING FOR COMPLETE AUTOMOBILE CARE?
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Explore our full spectrum of automotive solutions, including Engine Repairs, Automatic Transmissions, Computerized Diagnostics, AC Service, and Detailing Packages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                to="/services"
                className="px-8 py-4 bg-gold hover:bg-gold-light text-black font-heading font-bold text-sm uppercase tracking-wider rounded text-center transition-all shadow-gold-sm"
              >
                Explore Services
              </Link>
              <Link
                to="/brands"
                className="px-8 py-4 bg-transparent hover:bg-zinc-900 border border-zinc-700 hover:border-gold text-white font-heading font-semibold text-sm uppercase tracking-wider rounded text-center transition-all"
              >
                Supported Brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

