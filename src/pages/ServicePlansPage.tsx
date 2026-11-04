import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles, 
  Phone, 
  Info,
  RefreshCw,
  Eye,
  Droplet,
  Trash2
} from 'lucide-react';
import { SERVICE_PLANS_DATA, SERVICE_PLAN_DISCLAIMER, ServicePlan } from '../data/plansData';
import { getPlanBookingWhatsAppUrl, createWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ServicePlansPage: React.FC = () => {
  const [selectedFuel, setSelectedFuel] = useState<string>('all');

  const fuels = ['all', 'Petrol', 'Diesel', 'Petrol / CNG'] as const;

  const filteredPlans = selectedFuel === 'all'
    ? SERVICE_PLANS_DATA
    : SERVICE_PLANS_DATA.filter((p) => p.fuelType === selectedFuel);

  const getInclusionBadge = (type: string) => {
    switch (type) {
      case 'replacement':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            Replacement
          </span>
        );
      case 'cleaning':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
            Cleaning
          </span>
        );
      case 'topup':
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
            Top-Up
          </span>
        );
      case 'inspection':
      default:
        return (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
            Inspection
          </span>
        );
    }
  };

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] border-b border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs currentPage="Service Plans" />

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Transparent Package Inclusions</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              CAR SERVICE <span className="text-gold-gradient">PLANS & PACKAGES</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Comprehensive maintenance plans designed for Petrol, Diesel, and CNG vehicles. Every package clearly itemizes exact replacements, inspections, cleaning procedures, and fluid top-ups.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MANDATORY PRICING DISCLAIMER ===================== */}
      <section className="bg-[#0C0C0C] py-4 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-zinc-200">Official Disclaimer:</strong> {SERVICE_PLAN_DISCLAIMER}
          </p>
        </div>
      </section>

      {/* ===================== FUEL TYPE FILTER ===================== */}
      <section className="py-8 bg-[#070707] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            {fuels.map((fuel) => (
              <button
                key={fuel}
                onClick={() => setSelectedFuel(fuel)}
                className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  selectedFuel === fuel
                    ? 'bg-gold text-black shadow-gold-sm'
                    : 'bg-[#121212] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {fuel === 'all' ? 'All Packages' : fuel}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Replacement</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 ml-2"></span>
            <span>Cleaning</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 ml-2"></span>
            <span>Top-Up</span>
            <span className="w-2 h-2 rounded-full bg-zinc-400 ml-2"></span>
            <span>Inspection</span>
          </div>
        </div>
      </section>

      {/* ===================== PACKAGES GRID ===================== */}
      <section className="py-16 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPlans.map((plan) => {
              const whatsappUrl = getPlanBookingWhatsAppUrl(plan.title, plan.fuelType);

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl bg-[#0D0D0D] border ${
                    plan.isPopular ? 'border-gold shadow-gold-md' : 'border-[#222]'
                  } p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-gold/60 relative overflow-hidden`}
                >
                  {/* Popular ribbon */}
                  {plan.badge && (
                    <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-heading font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow-sm">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-[11px] font-semibold uppercase text-zinc-300">
                          {plan.fuelType}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-gold/15 text-[11px] font-semibold uppercase text-gold">
                          {plan.serviceType}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {plan.title}
                      </h3>

                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                        {plan.recommendedFor}
                      </p>
                    </div>

                    {/* Price Banner */}
                    <div className="p-4 rounded-xl bg-[#141414] border border-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Pricing Status</p>
                        <p className="text-sm font-heading font-bold text-gold tracking-wide">
                          {plan.priceNote}
                        </p>
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gold hover:bg-gold-light text-black text-xs font-heading font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
                        <span>Get Quote</span>
                      </a>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs uppercase font-bold tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                        Included Services & Checks ({plan.inclusions.length} items):
                      </p>

                      <div className="space-y-2.5">
                        {plan.inclusions.map((inc, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-start justify-between gap-3 text-xs leading-relaxed group"
                          >
                            <div className="flex items-start gap-2 text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                              <span>{inc.item}</span>
                            </div>
                            <div className="flex-shrink-0">
                              {getInclusionBadge(inc.type)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-800">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-gold-sm transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-black text-black" />
                      <span>Enquire & Book {plan.title}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== COMPARISON SUMMARY ===================== */}
      <section className="py-16 bg-[#080808] border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
            NEED A CUSTOMIZED VEHICLE SERVICE PLAN?
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
            Have a commercial car, a vintage model, or special requirements like automatic gearbox fluid flush, brake pad skimming, or clutch overhaul? Send us your vehicle details for a custom plan.
          </p>
          <div className="pt-2">
            <a
              href={createWhatsAppUrl("Hello Sunrise Motor Work's, I need a custom service plan quotation for my car.\n\nCar Brand & Model: \nYear: \nCurrent Odometer: \nSpecific Requests: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-gold text-white hover:text-black border border-zinc-700 hover:border-gold font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Custom Package on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

