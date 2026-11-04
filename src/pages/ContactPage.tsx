import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Navigation, 
  Send, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { COMPANY_DATA, createWhatsAppUrl } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InstagramIcon } from '../components/InstagramIcon';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
    carModel: '',
    service: 'Car General Service',
    fuelType: 'Petrol',
    location: 'Diva',
    message: '',
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*NEW CONTACT & SERVICE REQUEST — SUNRISE MOTOR WORK'S*

*Customer Name:* ${formData.name || 'Not provided'}
*Phone Number:* ${formData.phone || 'Not provided'}
*Car Brand:* ${formData.carBrand || 'Not provided'}
*Car Model:* ${formData.carModel || 'Not provided'}
*Fuel Type:* ${formData.fuelType}
*Required Service:* ${formData.service}
*Customer Location:* ${formData.location}
${formData.message ? `*Message / Fault Notes:* ${formData.message}` : ''}

_Sent via Sunrise Motor Work's Website Contact Form._`;

    const whatsappUrl = createWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Do I need an appointment before bringing my car to the workshop?',
      a: 'While walk-ins are welcome at our Diva (E) workshop, booking an appointment in advance via WhatsApp or phone call helps ensure immediate ramp availability and faster turnaround.',
    },
    {
      q: 'How does the Doorstep Pickup & Drop service work?',
      a: 'You can share your address, car model, and preferred pickup slot via WhatsApp. Our driver will collect the vehicle, inspect and document current conditions, bring it to our workshop, and return it once servicing and quality checks are complete.',
    },
    {
      q: 'Do you provide estimates before starting repairs?',
      a: 'Yes, absolutely. After the preliminary digital scan or mechanical inspection, we share a transparent estimate on WhatsApp for your approval before replacing any components.',
    },
    {
      q: 'Can you service German and European luxury vehicles?',
      a: 'Yes, we have specialized scanning equipment and experience working on Mercedes-Benz, BMW, Audi, and other premium European cars, covering engine repairs, transmission care, and air suspension maintenance.',
    },
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="relative py-16 bg-[#0A0A0A] border-b border-[#1C1C1C]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs currentPage="Contact Us" />

          <div className="mt-4 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
              <span>Direct Communication Channel</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              CONTACT <span className="text-gold-gradient">SUNRISE MOTOR WORK'S</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Have questions regarding your vehicle, need an instant estimate, or want to arrange doorstep pickup? Reach out directly via WhatsApp, phone, or submit the form below.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT INFO & FORM SECTION ===================== */}
      <section className="py-16 bg-[#050505]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Business Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  WORKSHOP DETAILS
                </span>
                <h2 className="font-heading text-3xl font-extrabold uppercase text-white mt-1">
                  GET IN TOUCH
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Speak directly with founder <strong>Keharsingh</strong> and our technical team.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                
                {/* Phone Call */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222] hover:border-gold/50 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Phone & WhatsApp</p>
                    <a
                      href={`tel:${COMPANY_DATA.phone}`}
                      className="text-lg font-heading font-bold text-white hover:text-gold transition-colors block"
                    >
                      {COMPANY_DATA.phoneFormatted}
                    </a>
                    <p className="text-xs text-zinc-500">Available for calls and instant WhatsApp messaging</p>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222] hover:border-emerald-500/50 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">WhatsApp Chat</p>
                    <a
                      href={`https://wa.me/${COMPANY_DATA.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block"
                    >
                      +91 9619313180 (Chat Now)
                    </a>
                    <p className="text-xs text-zinc-500">Send photos, videos, or sound recordings of vehicle issues</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222] hover:border-gold/50 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Instagram Channel</p>
                    <a
                      href={COMPANY_DATA.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-zinc-200 hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <span>{COMPANY_DATA.instagramHandle}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                    </a>
                    <p className="text-xs text-zinc-500">Follow for workshop updates, customer projects, and car care tips</p>
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222] hover:border-gold/50 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Workshop Location</p>
                    <p className="text-sm font-semibold text-white">
                      Mamacha Dhaba, Opp. Diva Prabhag Samiti,<br />
                      Khardi Gaon, Diva (E), Maharashtra – 400612.
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DATA.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold hover:underline inline-flex items-center gap-1 pt-1 font-medium"
                    >
                      <span>View in Google Maps</span>
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#222] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Working Hours</p>
                    <p className="text-sm text-zinc-200 font-medium">Monday – Sunday: 9:00 AM – 9:00 PM</p>
                    <p className="text-xs text-amber-400">24/7 Online Service & Home Service Support</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-2xl bg-[#0D0D0D] border border-gold/30 shadow-2xl relative">
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider">
                    WhatsApp Connected Form
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white mt-2">
                    SEND A SERVICE ENQUIRY
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Fill out your vehicle details below. Submitting will format and launch your enquiry directly in WhatsApp for an instant response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1 & 2: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Customer Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Patil"
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98200XXXXX"
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Field 3 & 4: Car Brand & Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Car Brand *
                      </label>
                      <input
                        type="text"
                        name="carBrand"
                        required
                        value={formData.carBrand}
                        onChange={handleChange}
                        placeholder="e.g. Maruti, Hyundai, BMW"
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Car Model & Year *
                      </label>
                      <input
                        type="text"
                        name="carModel"
                        required
                        value={formData.carModel}
                        onChange={handleChange}
                        placeholder="e.g. Swift 2019, 520d 2017"
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Field 5 & 6: Required Service & Fuel Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Required Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                      >
                        <option value="Car General Service">Car General Service</option>
                        <option value="Car Full Service Package">Car Full Service Package</option>
                        <option value="Engine Repair & Overhaul">Engine Repair & Overhaul</option>
                        <option value="Automatic Transmission Repair">Automatic Transmission Repair</option>
                        <option value="Car AC Repair & Gas Top-Up">Car AC Repair & Gas Top-Up</option>
                        <option value="Brake Repair & Servicing">Brake Repair & Servicing</option>
                        <option value="Suspension Repair">Suspension Repair</option>
                        <option value="Computerized Diagnostics & Scanning">Computerized Diagnostics & Scanning</option>
                        <option value="Electrical & Wiring Repair">Electrical & Wiring Repair</option>
                        <option value="Foam Wash & Car Detailing">Foam Wash & Car Detailing</option>
                        <option value="Doorstep Pickup & Drop Enquiry">Doorstep Pickup & Drop Enquiry</option>
                        <option value="Other Repairs / Inspection">Other Repairs / Inspection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Vehicle Fuel Type *
                      </label>
                      <select
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                      >
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol / CNG">Petrol / CNG</option>
                        <option value="Electric (EV)">Electric (EV)</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 7: Customer Location */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Customer Location *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white outline-none"
                    >
                      {COMPANY_DATA.pickupDropLocations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc} (Pickup Available)
                        </option>
                      ))}
                      <option value="Outside Coverage Area">Other Maharashtra / Thane Area</option>
                    </select>
                  </div>

                  {/* Field 8: Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Message / Vehicle Symptoms
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention any warning lights, noises, vibration, or previous service history..."
                      className="w-full bg-[#161616] border border-zinc-700 focus:border-gold rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gold hover:bg-gold-light active:scale-[0.99] text-black font-heading text-base font-bold uppercase tracking-wider rounded-lg shadow-gold-sm hover:shadow-gold-md transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4 fill-black text-black" />
                    <span>Submit & Open in WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center pt-1">
                    Your details are packaged into an instant WhatsApp message. No database storage or spam.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="py-16 bg-[#080808] border-t border-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              COMMON QUESTIONS
            </span>
            <h3 className="font-heading text-3xl font-bold uppercase text-white">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-xs text-zinc-400">Everything you need to know about servicing your car with us.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0D0D0D] border border-[#222] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading text-base font-bold text-white hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-200 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#1A1A1A]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
