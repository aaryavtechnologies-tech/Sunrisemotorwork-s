import React from 'react';
import { 
  MapPin, 
  Car, 
  Clock, 
  ShieldCheck, 
  Navigation, 
  MessageSquare, 
  Phone, 
  CheckCircle2,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';
import { LOCATIONS_DATA, ServiceLocation } from '../data/locationsData';
import { COMPANY_DATA, getLocationPickupWhatsAppUrl, createWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const LocationsPage: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] border-b border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs currentPage="Service Locations" />

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Doorstep Convenience & Workshop Base</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              {COMPANY_DATA.taglines.locations}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Enjoy doorstep vehicle pickup and return delivery across verified service corridors. Contact our team to confirm driver availability for your society or landmark.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== COVERAGE POLICY NOTICE ===================== */}
      <section className="bg-[#0C0C0C] py-4 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-zinc-200">Pickup & Drop Policy:</strong> Doorstep pickup and drop facility is available in selected service areas and subject to driver schedule and vehicle condition. Pickup terms and schedule are confirmed individually prior to dispatch.
          </p>
        </div>
      </section>

      {/* ===================== WORKSHOP HEADQUARTERS HIGHLIGHT ===================== */}
      <section className="py-12 bg-[#080808] border-b border-zinc-800">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#0E0E0E] border border-gold/40 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider">
                Workshop Headquarters
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                SUNRISE MOTOR WORK'S — DIVA (E)
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Visit our fully equipped repair and diagnostic workshop directly. Located conveniently opposite Diva Prabhag Samiti near Mamacha Dhaba with ample vehicle access and dedicated service bays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{COMPANY_DATA.address.full}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>9:00 AM – 9:00 PM (Everyday)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DATA.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-gold hover:bg-gold-light text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-gold-sm transition-all"
              >
                <Navigation className="w-4 h-4 fill-black text-black" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={createWhatsAppUrl(`Hello Sunrise Motor Work's, I am planning to visit your workshop at ${COMPANY_DATA.address.full}. Please share exact pin location.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-gold text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Share Live Location</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROMOTIONAL SERVICE AREAS GRID ===================== */}
      <section className="py-16 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              DOORSTEP COVERAGE CORRIDORS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
              PICKUP & DROP <span className="text-gold-gradient">AREAS</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Select your location below to request vehicle pickup and schedule service on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS_DATA.map((loc) => {
              const whatsappUrl = getLocationPickupWhatsAppUrl(loc.name);

              return (
                <div
                  key={loc.id}
                  className={`rounded-2xl bg-[#0D0D0D] border ${
                    loc.isHomeBase ? 'border-gold shadow-gold-sm' : 'border-[#222]'
                  } p-6 flex flex-col justify-between transition-all duration-300 hover:border-gold/50 group`}
                >
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                        {loc.region}
                      </span>
                      {loc.isHomeBase && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold text-black">
                          Main Base
                        </span>
                      )}
                    </div>

                    {/* Area Name */}
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white group-hover:text-gold transition-colors">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {loc.description}
                      </p>
                    </div>

                    {/* Transit estimate */}
                    <div className="flex items-center gap-2 text-xs text-zinc-300 p-2.5 rounded bg-[#141414] border border-[#242424]">
                      <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>Transit: {loc.transitEstimate}</span>
                    </div>

                    {/* Coverage Points */}
                    <div>
                      <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">
                        Key Localities Served:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {loc.coveragePoints.map((pt, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-zinc-300"
                          >
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-6 mt-4 border-t border-zinc-800">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-gold-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Request Pickup in {loc.name.split(' ')[0]}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================== EMBEDDED GOOGLE MAP SECTION ===================== */}
      <section className="py-16 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                VERIFIED WORKSHOP ADDRESS
              </span>
              <h3 className="font-heading text-3xl font-bold text-white mt-1">
                FIND US ON THE MAP
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Opposite Diva Prabhag Samiti, Khardi Gaon, Diva (E), Thane – 400612.
              </p>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DATA.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-gold text-white hover:text-black border border-zinc-700 hover:border-gold font-heading font-bold text-xs uppercase tracking-wider rounded transition-all"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame Container */}
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl relative bg-[#141414]">
            <iframe
              title="Sunrise Motor Work's Verified Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                'Mamacha Dhaba, Opp. Diva Prabhag Samiti, Khardi Gaon, Diva East, Thane, Maharashtra 400612'
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

