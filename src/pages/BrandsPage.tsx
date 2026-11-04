import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  ShieldCheck, 
  Check, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';
import { CAR_BRANDS_DATA, CarBrand } from '../data/brandsData';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const BrandsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'premium' | 'standard'>('all');

  const premiumBrands = CAR_BRANDS_DATA.filter((b) => b.tier === 'premium');
  const standardBrands = CAR_BRANDS_DATA.filter((b) => b.tier === 'standard');

  const displayedBrands =
    filter === 'all'
      ? CAR_BRANDS_DATA
      : CAR_BRANDS_DATA.filter((b) => b.tier === filter);

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO HEADER ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] border-b border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs currentPage="Car Brands" />

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Multi-Brand Engineering Capability</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              {COMPANY_DATA.taglines.brands}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              We provide expert diagnostic, mechanical, electrical, and maintenance solutions tailored to Indian and international automobile manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MANDATORY DISCLAIMER ===================== */}
      <section className="bg-[#0C0C0C] py-4 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-gold flex-shrink-0" />
          <p>
            <strong className="text-zinc-200">Independent Workshop Notice:</strong> Sunrise Motor Work's is an independent multi-brand automobile service workshop. We do not claim official dealership, authorized franchise, or manufacturer partnerships. All brand names and trademarks belong to their respective holders.
          </p>
        </div>
      </section>

      {/* ===================== FILTER TABS ===================== */}
      <section className="py-8 bg-[#070707] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-gold text-black shadow-gold-sm'
                  : 'bg-[#121212] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All Brands ({CAR_BRANDS_DATA.length})
            </button>

            <button
              onClick={() => setFilter('premium')}
              className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                filter === 'premium'
                  ? 'bg-gold text-black shadow-gold-sm'
                  : 'bg-[#121212] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Premium & Luxury ({premiumBrands.length})
            </button>

            <button
              onClick={() => setFilter('standard')}
              className={`px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                filter === 'standard'
                  ? 'bg-gold text-black shadow-gold-sm'
                  : 'bg-[#121212] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Indian & Japanese/Korean ({standardBrands.length})
            </button>
          </div>

          <p className="text-xs text-zinc-400">
            Showing {displayedBrands.length} Supported Marques
          </p>
        </div>
      </section>

      {/* ===================== BRANDS SHOWCASE ===================== */}
      <section className="py-16 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedBrands.map((brand) => {
              const whatsappMsg = `Hello Sunrise Motor Work's, I have a ${brand.name}. Can you service or diagnose my vehicle?\n\nName: \nExact Model & Year: \nFuel Type: \nIssue / Service Needed: \nLocation: \n\nPlease confirm availability.`;
              const whatsappUrl = createWhatsAppUrl(whatsappMsg);

              return (
                <div
                  key={brand.id}
                  className="rounded-2xl bg-[#0D0D0D] border border-[#222] hover:border-gold/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm group"
                >
                  <div className="space-y-4">
                    {/* Header badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gold/10 border border-gold/30 flex items-center justify-center">
                          <Car className="w-4 h-4 text-gold" />
                        </div>
                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                          {brand.origin}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded tracking-wider ${
                          brand.tier === 'premium'
                            ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                            : 'bg-zinc-800 text-zinc-300'
                        }`}
                      >
                        {brand.tier === 'premium' ? 'Premium European' : 'Popular Segment'}
                      </span>
                    </div>

                    {/* Brand Name Typography */}
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-gold transition-colors tracking-wide">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {brand.description}
                      </p>
                    </div>

                    {/* Technical Specialization */}
                    <div className="p-3 rounded-lg bg-[#141414] border border-[#242424] space-y-1">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-gold">Workshop Specialization</p>
                      <p className="text-xs text-zinc-300">{brand.specialization}</p>
                    </div>

                    {/* Popular models serviced */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1.5">Commonly Serviced Models</p>
                      <div className="flex flex-wrap gap-1.5">
                        {brand.popularModels.map((model, mIdx) => (
                          <span
                            key={mIdx}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-zinc-300"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enquiry Action */}
                  <div className="pt-6 mt-4 border-t border-[#1C1C1C]">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-[#141414] hover:bg-gold text-zinc-200 hover:text-black border border-zinc-700 hover:border-gold font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-black"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book Service for {brand.name}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== NOT SURE IF WE SERVICE YOUR CAR? CTA ===================== */}
      <section className="py-16 bg-[#080808] border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto">
            <HelpCircle className="w-7 h-7 text-gold" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white">
            NOT SURE IF WE SERVICE YOUR CAR?
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Don't see your brand or model listed above? We service numerous vintage, imported, commercial, and specialty automobiles. Reach out with your car details to check availability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-gold hover:bg-gold-light text-black font-heading font-bold text-sm uppercase tracking-wider rounded shadow-gold-sm transition-all"
            >
              Contact Us
            </Link>

            <a
              href={createWhatsAppUrl("Hello Sunrise Motor Work's, I want to check if you service my car make and model.\n\nMy Car: \nModel & Year: \nService Needed: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-transparent hover:bg-zinc-900 border border-zinc-700 hover:border-gold text-white font-heading font-semibold text-sm uppercase tracking-wider rounded transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

