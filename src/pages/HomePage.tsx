import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Cpu, 
  Wind, 
  Zap, 
  Cog, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Car, 
  MessageSquare,
  Award,
  ChevronRight,
  Shield,
  Clock,
  Gauge
} from 'lucide-react';
import { COMPANY_DATA, getServiceBookingWhatsAppUrl, createWhatsAppUrl } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';
import { CAR_BRANDS_DATA } from '../data/brandsData';
import { BrandLogo } from '../components/BrandLogo';

export const HomePage: React.FC = () => {
  // Hero Showcase Images for Interactive Selection
  const heroShowcaseImages = [
    {
      id: 'bmw-lift',
      label: 'Workshop Bay',
      title: 'BMW Workshop Bay',
      subtitle: 'Hydraulic Lift & Underbody Mechanical Service',
      src: '/images/hero-bmw-workshop.jpg',
      tag: 'Workshop Bay 01',
    },
    {
      id: 'precision-mechanic',
      label: 'Mechanical Care',
      title: 'Precision Mechanical',
      subtitle: 'Disc Brakes, Suspension & Engine Overhaul',
      src: '/images/workshop-audi-bay.jpg',
      tag: 'Brake & Engine Bay',
    },
    {
      id: 'porsche-diagnostics',
      label: 'Diagnostics',
      title: 'Diagnostics Studio',
      subtitle: 'Computerized ECU Scanning & Electronics',
      src: '/images/workshop-porsche.jpg',
      tag: 'Hi-Tech Scanning',
    },
    {
      id: 'amg-detailing',
      label: 'Detailing',
      title: 'Detailing Studio',
      subtitle: 'Ceramic Coating, Snow Foam & Mirror Polish',
      src: '/images/detailing-amg-gt.jpg',
      tag: 'Showroom Detailing',
    },
  ];

  const [activeHeroImg, setActiveHeroImg] = React.useState(0);

  // Get 8 featured services
  const featuredServices = SERVICES_DATA.filter((s) => s.isFeatured).slice(0, 8);

  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-6 h-6 text-gold" />,
    Cpu: <Cpu className="w-6 h-6 text-gold" />,
    Wind: <Wind className="w-6 h-6 text-gold" />,
    Zap: <Zap className="w-6 h-6 text-gold" />,
    Cog: <Cog className="w-6 h-6 text-gold" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-gold" />,
    Droplets: <Droplets className="w-6 h-6 text-gold" />,
    Sparkles: <Sparkles className="w-6 h-6 text-gold" />,
  };

  const processSteps = [
    {
      step: '01',
      title: 'Contact Us',
      desc: 'Reach out via phone or send an instant WhatsApp message to our team in Diva.',
      icon: <Phone className="w-6 h-6 text-gold" />,
    },
    {
      step: '02',
      title: 'Share Your Car Details',
      desc: 'Provide your vehicle make, model, fuel type, and any issues or symptoms you are experiencing.',
      icon: <Car className="w-6 h-6 text-gold" />,
    },
    {
      step: '03',
      title: 'Confirm Your Service',
      desc: 'Confirm your package, schedule doorstep pickup or visit our workshop opposite Diva Prabhag Samiti.',
      icon: <Calendar className="w-6 h-6 text-gold" />,
    },
    {
      step: '04',
      title: 'Get Your Car Serviced',
      desc: 'Our experienced technicians inspect, service, test, and hand over your refreshed car.',
      icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: 'Experienced Automobile Business',
      desc: 'Founded in 2010 by Keharsingh, delivering over 14 years of hands-on automotive repair expertise.',
      icon: <Award className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Comprehensive Repair Solutions',
      desc: 'From routine oil checks to complex engine overhauls, automatic gearboxes, and computerized scanning.',
      icon: <Wrench className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Multiple Car Brands Supported',
      desc: 'Dedicated technical capability for popular Indian cars as well as German and European luxury marques.',
      icon: <Car className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Professional Detailing & Cleaning',
      desc: 'High-density snow foam baths, interior vacuum sanitization, machine buffing, and clear-coat rejuvenation.',
      icon: <Sparkles className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Pickup & Drop in Selected Areas',
      desc: 'Doorstep pickup and drop facility across Diva, Mumbra, Thane, Kalwa, Dombivli, Kalyan, Navi Mumbai, and Vasai.',
      icon: <MapPin className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Convenient WhatsApp Enquiries',
      desc: 'Fast, transparent communication. Receive direct status updates and estimates without unnecessary delays.',
      icon: <MessageSquare className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO SECTION (FULL-WIDTH CINEMATIC) ===================== */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-12 pb-8">
        {/* Full-width Workshop Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bmw-workshop.jpg"
            alt="Sunrise Motor Work's Premium Automotive Workshop"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-125"
          />
          {/* Subtle gradient vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
          <div className="absolute inset-0 bg-dark-radial opacity-70" />
        </div>

        {/* Overhead Automotive Lighting Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 blur-[1px]" />

        {/* Hero Content (Side-by-Side: Heading & CTAs on Left, Premium Image Showcase on Right) */}
        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column (7 cols): Headline, Subtext, CTAs & Features */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Brand Heritage Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#121212]/90 border border-gold/40 text-xs sm:text-sm font-heading tracking-widest text-gold backdrop-blur-md shadow-gold-sm">
                <img
                  src="/images/sunrise-logo-gold.png"
                  alt="Sunrise Motor's Emblem"
                  className="w-6 h-6 object-contain"
                />
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                <span>SINCE 2010 • PROFESSIONAL AUTOMOTIVE SERVICE</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-6xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.03]">
                YOUR CAR DESERVES <br />
                <span className="text-gold-gradient">THE BEST CARE.</span>
              </h1>

              {/* Supporting Subtext */}
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
                Professional Car Repair, Maintenance & Detailing Services. Experience reliable automobile care with Sunrise Motor Work's in Diva (E).
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getServiceBookingWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading font-black text-sm sm:text-base uppercase tracking-wider rounded shadow-gold-md hover:shadow-gold-lg transition-all flex items-center gap-2.5"
                >
                  <MessageSquare className="w-5 h-5 fill-black text-black" />
                  <span>BOOK YOUR SERVICE</span>
                </a>

                <Link
                  to="/services"
                  className="px-7 py-4 bg-[#141414]/90 hover:bg-[#1E1E1E] text-white border border-zinc-700 hover:border-gold font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all flex items-center gap-2 group backdrop-blur-sm"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  className="px-6 py-4 bg-transparent hover:bg-zinc-900/60 text-zinc-300 hover:text-gold border border-zinc-800 hover:border-gold font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call {COMPANY_DATA.phoneFormatted}</span>
                </a>
              </div>

              {/* 4 Feature Highlights Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {[
                  { title: 'Since 2010', desc: '14+ Years in Diva' },
                  { title: 'Multi-Brand Care', desc: 'Indian & Luxury Cars' },
                  { title: 'Pickup & Drop', desc: 'Selected Service Areas' },
                  { title: '24/7 Support', desc: 'Breakdown & Online' },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#0D0D0D]/85 border border-zinc-800/80 backdrop-blur-md"
                  >
                    <p className="font-heading font-bold text-sm text-gold tracking-wide">{f.title}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Workshop Location Footnote */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Mamacha Dhaba, Opp. Diva Prabhag Samiti, Khardi Gaon, Diva (E) – 400612</span>
              </div>
            </div>

            {/* Right Column (5 cols): High-Impact Automotive Image Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-[0_10px_50px_rgba(245,184,0,0.25)] group bg-[#0A0A0A]">
                
                {/* Active Showcase Image */}
                <div className="relative h-[440px] sm:h-[480px] overflow-hidden">
                  <img
                    src={heroShowcaseImages[activeHeroImg].src}
                    alt={heroShowcaseImages[activeHeroImg].title}
                    className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/40" />
                </div>

                {/* Top Interactive Bay Switcher Tabs */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-20">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 overflow-x-auto no-scrollbar">
                    {heroShowcaseImages.map((imgItem, idx) => (
                      <button
                        key={imgItem.id}
                        onClick={() => setActiveHeroImg(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                          activeHeroImg === idx
                            ? 'bg-gold text-black shadow-sm'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                        }`}
                      >
                        {imgItem.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center Badge Tag */}
                <div className="absolute top-16 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-gold/30 text-[10px] font-heading font-bold uppercase tracking-wider text-gold">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span>{heroShowcaseImages[activeHeroImg].tag}</span>
                  </span>
                </div>

                {/* Bottom Floating Info Card with Vintage Logo */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 p-4 rounded-xl bg-[#0C0C0C]/90 backdrop-blur-md border border-gold/40 shadow-2xl space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#121212] p-1 border border-gold/50 flex-shrink-0 flex items-center justify-center">
                      <img
                        src="/images/sunrise-logo-gold.png"
                        alt="Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-white text-base leading-tight truncate">
                        {heroShowcaseImages[activeHeroImg].title}
                      </p>
                      <p className="text-xs text-gold font-medium truncate">
                        {heroShowcaseImages[activeHeroImg].subtitle}
                      </p>
                      <p className="text-[11px] text-zinc-400 truncate">
                        BMW • Mercedes-Benz • Audi • Maruti • Tata • Hyundai
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
                    <span className="text-zinc-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>Mon - Sun: 9 AM - 9 PM</span>
                    </span>

                    <a
                      href={getServiceBookingWhatsAppUrl(heroShowcaseImages[activeHeroImg].title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 rounded bg-gold text-black font-heading font-bold text-xs uppercase hover:bg-gold-light transition-colors flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3 fill-black text-black" />
                      <span>Book Service</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Horizontal Service Highlights Bar (Inspired by Prime Detailing Reference) */}
        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-12">
          <div className="rounded-2xl bg-[#0C0C0C]/90 border border-zinc-800/80 backdrop-blur-md p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-white uppercase tracking-wide">General Maintenance</p>
                  <p className="text-[11px] text-zinc-400">Oil, filters, fluids & safety</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-white uppercase tracking-wide">Engine & Gearbox</p>
                  <p className="text-[11px] text-zinc-400">Automatic & manual overhauls</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-white uppercase tracking-wide">AC & Diagnostics</p>
                  <p className="text-[11px] text-zinc-400">Gas top-up & ECU scanning</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-white uppercase tracking-wide">Showroom Detailing</p>
                  <p className="text-[11px] text-zinc-400">Snow foam & paint restoration</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST SECTION ===================== */}
      <section className="bg-[#0A0A0A] border-y border-[#1C1C1C] py-10 relative">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0F0F0F] border border-[#222]">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-heading font-bold text-white">ESTD. 2010</p>
                <p className="text-xs text-zinc-400">Established in Diva</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0F0F0F] border border-[#222]">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-heading font-bold text-white">PRO CARE</p>
                <p className="text-xs text-zinc-400">Mechanical & Electrical</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0F0F0F] border border-[#222]">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-heading font-bold text-white">MULTI-BRAND</p>
                <p className="text-xs text-zinc-400">Indian & Luxury Cars</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0F0F0F] border border-[#222]">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-heading font-bold text-white">COMPREHENSIVE</p>
                <p className="text-xs text-zinc-400">End-to-End Solutions</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FEATURED SERVICES SECTION ===================== */}
      <section className="py-20 bg-[#050505] relative">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Precision Engineering</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                FEATURED <span className="text-gold-gradient">AUTOMOTIVE SERVICES</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                From periodic inspections to high-precision automatic transmission and electrical diagnostics.
              </p>
            </div>

            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wider text-gold hover:text-gold-light group"
            >
              <span>View All 20+ Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service Cards Grid (8 Services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-xl bg-[#0D0D0D] border border-[#202020] hover:border-gold/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm"
              >
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
                  
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-zinc-700 text-[10px] uppercase tracking-wider font-semibold text-zinc-300">
                    {service.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#2B2B2B] flex items-center justify-center">
                      {iconMap[service.icon] || <Wrench className="w-5 h-5 text-gold" />}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#1F1F1F] flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-zinc-300 hover:text-gold flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gold" />
                    </Link>

                    <a
                      href={createWhatsAppUrl(`Hello Sunrise Motor Work's, I want to enquire about "${service.name}". Please provide details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-gold/10 hover:bg-gold text-gold hover:text-black border border-gold/30 text-xs font-semibold transition-all flex items-center gap-1"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== BRANDS STRIP SECTION ===================== */}
      <section className="py-14 bg-[#0A0A0A] border-y border-[#1F1F1F] overflow-hidden">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              ENGINEERED FOR MULTIPLE AUTOMOTIVE MARQUES
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              {COMPANY_DATA.taglines.brands}
            </h3>
          </div>

          {/* Grid of Car Brands */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {CAR_BRANDS_DATA.slice(0, 16).map((brand) => (
              <div
                key={brand.id}
                className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222] hover:border-gold/40 text-center transition-all duration-200 group flex flex-col items-center justify-center min-h-[70px]"
              >
                <span className="font-heading font-bold text-sm tracking-wide text-zinc-300 group-hover:text-gold transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  {brand.tier === 'premium' ? 'Luxury' : 'Specialist'}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-gold hover:text-gold-light"
            >
              <span>Explore All Supported Brands & Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW SECTION ===================== */}
      <section className="py-20 bg-[#050505] relative overflow-hidden">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src="/images/detailing-amg-gt.jpg"
                  alt="Specialist Detailing at Sunrise Motor Work's"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0D0D0D]/95 border border-gold/40 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <BrandLogo size="md" showText={false} />
                    <div>
                      <p className="text-xs uppercase text-gold font-bold tracking-wider">Founder: {COMPANY_DATA.founder}</p>
                      <p className="text-sm font-semibold text-white">Sunrise Motor Work's • Established 2010</p>
                      <p className="text-[11px] text-zinc-400">Opp. Diva Prabhag Samiti, Diva (E)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Description (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
                <span>Reliable Automotive Care</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {COMPANY_DATA.taglines.about}
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed">
                Since 2010, Sunrise Motor Work's has been focused on providing professional automobile maintenance and repair services. From routine servicing to complex mechanical and electrical repairs, we aim to keep every vehicle performing at its best.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#0C0C0C] border border-[#222] space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">Direct Craftsmanship</h4>
                  <p className="text-xs text-zinc-400">Hands-on technical supervision on every engine, suspension and electrical job.</p>
                </div>

                <div className="p-4 rounded-lg bg-[#0C0C0C] border border-[#222] space-y-1">
                  <h4 className="font-heading font-bold text-white text-base">Transparent Communication</h4>
                  <p className="text-xs text-zinc-400">Clear WhatsApp estimates and video/photo inspection reports before any part replacements.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/about"
                  className="px-6 py-3.5 bg-gold hover:bg-gold-light text-black font-heading font-bold text-sm uppercase tracking-wider rounded transition-all"
                >
                  About Us & Our Philosophy
                </Link>

                <a
                  href={`tel:${COMPANY_DATA.phone}`}
                  className="px-6 py-3.5 bg-transparent hover:bg-zinc-900 text-white border border-zinc-700 hover:border-gold font-heading font-semibold text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call {COMPANY_DATA.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              UNCOMPROMISED DEDICATION
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-1">
              WHY CHOOSE <span className="text-gold-gradient">SUNRISE MOTOR WORK'S</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Combining 14+ years of local automotive heritage with modern diagnostic accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222] hover:border-gold/40 transition-all duration-300 space-y-3 group hover:shadow-gold-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#171717] border border-[#2A2A2A] group-hover:border-gold/50 flex items-center justify-center transition-colors">
                  {point.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== SERVICE PROCESS SECTION ===================== */}
      <section className="py-20 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              STREAMLINED 4-STEP WORKFLOW
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mt-1">
              HOW WE SERVICE <span className="text-gold-gradient">YOUR VEHICLE</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Simple, transparent, and hassle-free from booking to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-[#0D0D0D] border border-[#222] flex flex-col justify-between space-y-4 group hover:border-gold/50 transition-all"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold text-gold/30 group-hover:text-gold transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center">
                    {stepItem.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800 text-[11px] text-gold font-medium">
                  Step {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== FINAL CTA SECTION ===================== */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#020202] border-t border-gold/20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <BrandLogo size="lg" showText={false} className="justify-center mx-auto" />
          
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            LET'S TAKE CARE <span className="text-gold-gradient">OF YOUR CAR.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Experience reliable automobile maintenance, precision repairs, and professional detailing with Sunrise Motor Work's in Diva (E). Doorstep pickup and drop available.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={getServiceBookingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-black font-heading font-bold text-base uppercase tracking-wider rounded shadow-gold-md hover:shadow-gold-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-black text-black" />
              <span>Book Your Service on WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-white border border-zinc-700 hover:border-gold font-heading font-semibold text-base uppercase tracking-wider rounded transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Contact & Free Quote Form</span>
            </Link>
          </div>

          <p className="text-xs text-zinc-500 pt-2">
            Mamacha Dhaba, Opp. Diva Prabhag Samiti, Khardi Gaon, Diva (E), Maharashtra – 400612.
          </p>
        </div>
      </section>
    </div>
  );
};
