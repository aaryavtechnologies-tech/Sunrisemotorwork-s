import React, { useState } from 'react';
import { Send, Clock, ShieldCheck, Wrench, Sparkles } from 'lucide-react';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/companyData';

interface QuickQuoteFormProps {
  className?: string;
  defaultService?: string;
  isCompact?: boolean;
}

export const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({
  className = '',
  defaultService = 'Car General Service',
  isCompact = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
    carModel: '',
    fuelType: 'Petrol',
    service: defaultService,
    location: 'Diva',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*NEW SERVICE ENQUIRY — SUNRISE MOTOR WORK'S*

*Customer Name:* ${formData.name || 'Not specified'}
*Phone Number:* ${formData.phone || 'Not specified'}
*Car Brand:* ${formData.carBrand || 'Not specified'}
*Car Model:* ${formData.carModel || 'Not specified'}
*Fuel Type:* ${formData.fuelType}
*Service Required:* ${formData.service}
*Customer Location:* ${formData.location}
${formData.message ? `*Notes / Issue Description:* ${formData.message}` : ''}

_Please provide an estimate and available service booking slot._`;

    const whatsappUrl = createWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`bg-[#0C0C0C]/95 backdrop-blur-md border border-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Decorative top gold rim */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fast Track Booking</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide">
          GET A FREE <span className="text-gold">SERVICE QUOTE</span>
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm mt-1">
          Instant estimation on WhatsApp for your vehicle maintenance & repairs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98200XXXXX"
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Car Brand & Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Car Brand *
            </label>
            <input
              type="text"
              name="carBrand"
              required
              value={formData.carBrand}
              onChange={handleChange}
              placeholder="e.g. BMW, Honda, Hyundai"
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Car Model & Year *
            </label>
            <input
              type="text"
              name="carModel"
              required
              value={formData.carModel}
              onChange={handleChange}
              placeholder="e.g. 320d (2018), Creta (2021)"
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Fuel Type & Required Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Fuel Type
            </label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG / Petrol</option>
              <option value="Electric (EV)">Electric (EV)</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Service Required *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="Car General Service">Car General Service</option>
              <option value="Car Full Service Package">Car Full Service Package</option>
              <option value="Engine Repair & Overhaul">Engine Repair & Overhaul</option>
              <option value="Automatic Transmission Repair">Automatic Transmission Repair</option>
              <option value="Car AC Repair & Gas Top-Up">Car AC Repair & Gas Top-Up</option>
              <option value="Brake Repair & Servicing">Brake Repair & Servicing</option>
              <option value="Suspension & Steering Repair">Suspension & Steering Repair</option>
              <option value="Computerized Scanning & Diagnostics">Computerized Scanning & Diagnostics</option>
              <option value="Electrical & Wiring Repair">Electrical & Wiring Repair</option>
              <option value="Premium Foam Wash & Detailing">Premium Foam Wash & Detailing</option>
              <option value="Doorstep Pickup & Drop Enquiry">Doorstep Pickup & Drop Enquiry</option>
              <option value="Other / Not Listed">Other Specific Issue</option>
            </select>
          </div>
        </div>

        {/* Row 4: Customer Location */}
        <div>
          <label className="block text-xs font-medium text-zinc-300 mb-1">
            Your Location / Area *
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
          >
            {COMPANY_DATA.pickupDropLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc} (Pickup & Drop Available)
              </option>
            ))}
            <option value="Other Location">Other Area (Ask for Confirmation)</option>
          </select>
        </div>

        {/* Message field (optional) */}
        {!isCompact && (
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Additional Details or Symptoms (Optional)
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe any abnormal noises, warning lights, or specific service requests..."
              className="w-full bg-[#161616] border border-zinc-700 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-3.5 py-2 text-sm text-white placeholder-zinc-500 outline-none transition-colors resize-none"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3.5 px-6 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading text-base font-bold uppercase tracking-wider rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4 fill-black text-black" />
          <span>Get Free Quote on WhatsApp</span>
        </button>

        {/* Badges footer (inspired by reference image) */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 text-center">
          <div className="flex flex-col items-center justify-center gap-1 p-1">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>Quick Response</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 p-1 border-x border-zinc-800">
            <Wrench className="w-3.5 h-3.5 text-gold" />
            <span>Expert Consult</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 p-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Since 2010</span>
          </div>
        </div>
      </form>
    </div>
  );
};

