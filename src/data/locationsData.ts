export interface ServiceLocation {
  id: string;
  name: string;
  region: string;
  description: string;
  pickupAvailable: boolean;
  transitEstimate: string;
  coveragePoints: string[];
  isHomeBase?: boolean;
}

export const LOCATIONS_DATA: ServiceLocation[] = [
  {
    id: 'diva',
    name: 'Diva (East & West)',
    region: 'Home Workshop Base',
    description: 'Our primary state-of-the-art service workshop location. Fastest turnaround, walk-ins, and doorstep vehicle pickup & drop.',
    pickupAvailable: true,
    transitEstimate: 'Immediate / 15-30 Mins',
    coveragePoints: ['Khardi Gaon', 'Diva Prabhag Samiti', 'Station Area', 'Agasan Road', 'Sabe Village', 'Bedavade'],
    isHomeBase: true,
  },
  {
    id: 'mumbra',
    name: 'Mumbra & Kausa',
    region: 'Thane District',
    description: 'Daily scheduled pickup and drop facility for periodic car servicing, brake repairs, and computerized diagnostics.',
    pickupAvailable: true,
    transitEstimate: '30-45 Mins',
    coveragePoints: ['Old Mumbai-Pune Road', 'Kausa', 'Amrut Nagar', 'Mumbra Bypass', 'Almas Colony'],
  },
  {
    id: 'thane',
    name: 'Thane City',
    region: 'Thane Urban',
    description: 'Dedicated pickup drivers connecting Thane residential societies and corporate hubs to our expert workshop.',
    pickupAvailable: true,
    transitEstimate: '45-60 Mins',
    coveragePoints: ['Ghodbunder Road', 'Majiwada', 'Vartak Nagar', 'Naupada', 'Panchpakhadi', 'Kopri'],
  },
  {
    id: 'kalwa',
    name: 'Kalwa',
    region: 'Thane District',
    description: 'Reliable doorstep car pickup for routine maintenance, oil changes, engine troubleshooting, and AC service.',
    pickupAvailable: true,
    transitEstimate: '30-45 Mins',
    coveragePoints: ['Manisha Nagar', 'Kalwa Naka', 'Parsik Nagar', 'Kharegaon'],
  },
  {
    id: 'dombivli',
    name: 'Dombivli (East & West)',
    region: 'Kalyan-Dombivli',
    description: 'Convenient vehicle handover with real-time WhatsApp updates, multi-point digital inspection, and on-time drop.',
    pickupAvailable: true,
    transitEstimate: '30-45 Mins',
    coveragePoints: ['MIDC Residential', 'Manpada Road', 'Ghararda Circle', 'Tilak Nagar', 'Kalyan-Shil Road'],
  },
  {
    id: 'kalyan',
    name: 'Kalyan (East & West)',
    region: 'Kalyan-Dombivli',
    description: 'Comprehensive car repair coverage including automatic transmission, suspension, and premium detailing.',
    pickupAvailable: true,
    transitEstimate: '45-60 Mins',
    coveragePoints: ['Khadakpada', 'Birla College Road', 'Chikli', 'Tisgaon', 'Kolsewadi'],
  },
  {
    id: 'navi-mumbai',
    name: 'Navi Mumbai',
    region: 'Navi Mumbai',
    description: 'Selected zones covered via Shilphata-Mahape & Airoli corridors for major repairs and full service packages.',
    pickupAvailable: true,
    transitEstimate: '45-75 Mins',
    coveragePoints: ['Airoli', 'Ghansoli', 'Mahape', 'Kopar Khairane', 'Vashi'],
  },
  {
    id: 'vasai',
    name: 'Vasai',
    region: 'Palghar / Western Corridor',
    description: 'Specialized arrangements for major mechanical overhauls, engine repairs, and pre-scheduled fleet service.',
    pickupAvailable: true,
    transitEstimate: 'Scheduled Advance Booking',
    coveragePoints: ['Vasai East', 'Vasai West', 'Evershine City', 'Gokhivare'],
  },
];

