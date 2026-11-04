import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_DATA, getServiceBookingWhatsAppUrl } from '../data/companyData';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-[#111111] border border-gold/40 text-white px-4 py-2.5 rounded-xl shadow-2xl animate-bounce duration-1000">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <div className="text-xs">
            <p className="font-semibold text-gold">Need Car Service or Pickup?</p>
            <p className="text-zinc-300">Chat with Keharsingh on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white p-0.5 rounded ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Buttons Group */}
      <div className="flex items-center gap-3">
        {/* Floating Phone Call Button (Mobile/Desktop) */}
        <a
          href={`tel:${COMPANY_DATA.phone}`}
          className="w-12 h-12 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-gold/60 text-gold flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          aria-label={`Call Sunrise Motor Works at ${COMPANY_DATA.phoneFormatted}`}
          title="Instant Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={getServiceBookingWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-gold-md hover:shadow-gold-lg transition-transform hover:scale-110 active:scale-95 group relative"
          aria-label="Chat with Sunrise Motor Work's on WhatsApp"
          title="WhatsApp Service Booking"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black"></span>
          </span>
          <MessageSquare className="w-7 h-7 fill-white" />
        </a>
      </div>
    </div>
  );
};

