export interface CompanyInfo {
  name: string;
  founder: string;
  established: number;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  taglines: {
    hero: string;
    heroSubtitle: string;
    footer: string;
    about: string;
    brands: string;
    locations: string;
  };
  pickupDropLocations: string[];
  serviceHours: string;
}

export const COMPANY_DATA: CompanyInfo = {
  name: "SUNRISE MOTOR WORK'S",
  founder: "Keharsingh",
  established: 2010,
  phone: "+919619313180",
  phoneFormatted: "+91 9619313180",
  whatsappNumber: "919619313180",
  instagramHandle: "@sunrisemotorwork",
  instagramUrl: "https://www.instagram.com/sunrisemotorwork/",
  address: {
    line1: "Mamacha Dhaba",
    line2: "Opp. Diva Prabhag Samiti",
    area: "Khardi Gaon, Diva (E)",
    city: "Diva, Thane",
    state: "Maharashtra",
    pincode: "400612",
    full: "Mamacha Dhaba, Opp. Diva Prabhag Samiti, Khardi Gaon, Diva (E), Maharashtra – 400612",
  },
  taglines: {
    hero: "YOUR CAR DESERVES THE BEST CARE.",
    heroSubtitle: "Professional Car Repair, Maintenance & Detailing Services. Experience reliable automobile care with Sunrise Motor Work's.",
    footer: "YOUR CAR. OUR PRIORITY.",
    about: "EXPERT CARE. RELIABLE PERFORMANCE.",
    brands: "WE SERVICE MULTIPLE CAR BRANDS.",
    locations: "CAR SERVICE WITH CONVENIENT PICKUP & DROP.",
  },
  pickupDropLocations: [
    "Diva",
    "Mumbra",
    "Thane",
    "Kalwa",
    "Dombivli",
    "Kalyan",
    "Navi Mumbai",
    "Vasai",
  ],
  serviceHours: "Open Monday – Sunday: 9:00 AM – 9:00 PM | 24/7 Online & WhatsApp Support",
};

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
};

export const getServiceBookingWhatsAppUrl = (serviceName?: string): string => {
  const text = serviceName
    ? `Hello Sunrise Motor Work's, I would like to enquire about your "${serviceName}" service.\n\nName: \nCar Brand: \nCar Model: \nFuel Type (Petrol/Diesel/CNG/EV): \nLocation: \n\nPlease share availability and quote.`
    : `Hello Sunrise Motor Work's, I would like to book a car service.\n\nName: \nCar Brand: \nCar Model: \nRequired Service: \nLocation: \n\nPlease share the details.`;
  return createWhatsAppUrl(text);
};

export const getPlanBookingWhatsAppUrl = (planName: string, fuelType?: string): string => {
  const text = `Hello Sunrise Motor Work's, I am interested in the "${planName}"${fuelType ? ` (${fuelType})` : ''} package.\n\nName: \nCar Brand & Model: \nRegistration Year: \nLocation: \n\nPlease confirm inclusions and the latest price quote for my vehicle.`;
  return createWhatsAppUrl(text);
};

export const getLocationPickupWhatsAppUrl = (locationName: string): string => {
  const text = `Hello Sunrise Motor Work's, I would like to request Pickup & Drop car service in ${locationName}.\n\nName: \nCar Model: \nService Required: \nExact Address / Landmark in ${locationName}: \n\nPlease check pickup availability.`;
  return createWhatsAppUrl(text);
};

