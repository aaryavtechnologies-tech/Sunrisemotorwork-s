import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Cpu, 
  Wind, 
  Zap, 
  Cog, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  Gauge, 
  Filter, 
  Thermometer, 
  AlertCircle, 
  Layers, 
  BatteryCharging, 
  Disc, 
  Activity, 
  Sun, 
  Sliders, 
  FileText, 
  CheckCircle, 
  MessageSquare,
  Search,
  Check,
  ShieldAlert
} from 'lucide-react';
import { SERVICES_DATA, CATEGORIES, ServiceItem } from '../data/servicesData';
import { createWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-5 h-5 text-gold" />,
    Cpu: <Cpu className="w-5 h-5 text-gold" />,
    Wind: <Wind className="w-5 h-5 text-gold" />,
    Zap: <Zap className="w-5 h-5 text-gold" />,
    Cog: <Cog className="w-5 h-5 text-gold" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-gold" />,
    Droplets: <Droplets className="w-5 h-5 text-gold" />,
    Sparkles: <Sparkles className="w-5 h-5 text-gold" />,
    Gauge: <Gauge className="w-5 h-5 text-gold" />,
    Filter: <Filter className="w-5 h-5 text-gold" />,
    Thermometer: <Thermometer className="w-5 h-5 text-gold" />,
    AlertCircle: <AlertCircle className="w-5 h-5 text-gold" />,
    Layers: <Layers className="w-5 h-5 text-gold" />,
    BatteryCharging: <BatteryCharging className="w-5 h-5 text-gold" />,
    Disc: <Disc className="w-5 h-5 text-gold" />,
    Activity: <Activity className="w-5 h-5 text-gold" />,
    Sun: <Sun className="w-5 h-5 text-gold" />,
    Sliders: <Sliders className="w-5 h-5 text-gold" />,
    FileText: <FileText className="w-5 h-5 text-gold" />,
    CheckCircle: <CheckCircle className="w-5 h-5 text-gold" />,
    Shield: <ShieldCheck className="w-5 h-5 text-gold" />,
  };

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HEADER ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] border-b border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs currentPage="Our Services" />

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Full-Spectrum Automotive Solutions</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              OUR <span className="text-gold-gradient">SERVICES</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              From periodic maintenance to specialized mechanical overhauls, high-precision electronic diagnostics, and showroom detailing. Every service can be booked instantly with transparent WhatsApp consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FILTER & SEARCH BAR ===================== */}
      <section className="sticky top-[69px] z-30 bg-[#080808]/95 backdrop-blur-md border-b border-[#222] py-4 shadow-lg">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills (Scrollable on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-gold text-black shadow-gold-sm'
                      : 'bg-[#121212] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services (e.g. AC, oil, brakes)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#141414] border border-zinc-800 focus:border-gold rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 outline-none transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ===================== VEHICLE COMPATIBILITY NOTICE ===================== */}
      <section className="bg-[#0C0C0C] py-4 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5">
          <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0" />
          <p>
            <strong className="text-zinc-200">Vehicle Compatibility Note:</strong> Repair capabilities and parts availability may vary based on vehicle model, engine displacement, and variant. Our team will verify your vehicle's specific requirements prior to booking.
          </p>
        </div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="py-16 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <p className="text-xl text-zinc-400 font-heading">No services matched your query.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 bg-gold text-black rounded text-xs uppercase font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const whatsappMsg = `Hello Sunrise Motor Work's, I would like to enquire about your "${service.name}".\n\nName: \nCar Brand: \nCar Model: \nFuel Type: \nLocation: \n\nPlease confirm availability and share a quote.`;
                const whatsappUrl = createWhatsAppUrl(whatsappMsg);

                return (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-[#0D0D0D] border border-[#222] hover:border-gold/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm group"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] uppercase tracking-wider font-semibold text-gold">
                          {service.categoryLabel}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                            {iconMap[service.icon] || <Wrench className="w-5 h-5 text-gold" />}
                          </div>
                          <h3 className="font-heading text-xl font-bold text-white group-hover:text-gold transition-colors leading-snug">
                            {service.name}
                          </h3>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {service.fullDesc}
                        </p>

                        {/* Feature bullets */}
                        <div className="space-y-1.5 pt-2 border-t border-[#1C1C1C]">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-6 pt-0">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-gold-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 fill-black text-black" />
                        <span>Enquire About {service.name}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

