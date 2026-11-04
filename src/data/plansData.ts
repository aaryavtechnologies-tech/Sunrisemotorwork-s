export type InclusionsType = 'replacement' | 'inspection' | 'cleaning' | 'topup';

export interface PlanInclusion {
  item: string;
  type: InclusionsType;
}

export interface ServicePlan {
  id: string;
  title: string;
  fuelType: 'Petrol' | 'Diesel' | 'Petrol / CNG';
  serviceType: 'General Service' | 'Full Service';
  badge?: string;
  isPopular?: boolean;
  recommendedFor: string;
  priceNote: string;
  inclusions: PlanInclusion[];
}

export const SERVICE_PLANS_DATA: ServicePlan[] = [
  {
    id: 'petrol-general-service',
    title: 'Petrol Car General Service',
    fuelType: 'Petrol',
    serviceType: 'General Service',
    recommendedFor: 'Recommended every 5,000 km or 6 months for routine maintenance and city driving.',
    priceNote: 'CONTACT US FOR THE LATEST SERVICE PLAN PRICES',
    inclusions: [
      { item: 'Engine oil replacement (Grade matching engine specs)', type: 'replacement' },
      { item: 'Oil filter replacement (OEM filter)', type: 'replacement' },
      { item: 'Air filter thorough cleaning & dust extraction', type: 'cleaning' },
      { item: 'AC cabin filter cleaning & duct dusting', type: 'cleaning' },
      { item: 'Spark plug cleaning & electrode gap inspection', type: 'cleaning' },
      { item: 'Coolant level & specific gravity checking', type: 'inspection' },
      { item: 'Brake fluid level & moisture checking', type: 'inspection' },
      { item: 'Front & rear brake servicing & pad cleaning', type: 'inspection' },
      { item: 'Door hinges, latches greasing & lubrication', type: 'inspection' },
      { item: 'Exterior foam wash, glass wiping & interior vacuum cleaning', type: 'cleaning' },
    ],
  },
  {
    id: 'petrol-full-service',
    title: 'Petrol Car Full Service',
    fuelType: 'Petrol',
    serviceType: 'Full Service',
    badge: 'MOST POPULAR',
    isPopular: true,
    recommendedFor: 'Recommended every 10,000 km or 12 months for complete comprehensive vehicle rejuvenation.',
    priceNote: 'CONTACT US FOR THE LATEST SERVICE PLAN PRICES',
    inclusions: [
      { item: 'Engine oil replacement (High-performance synthetic/semi-synthetic)', type: 'replacement' },
      { item: 'Oil filter replacement (Genuine OEM/OES)', type: 'replacement' },
      { item: 'Air filter replacement (Brand new intake element)', type: 'replacement' },
      { item: 'AC cabin filter replacement (Fresh micro-carbon filter)', type: 'replacement' },
      { item: 'Fuel filter replacement (Protects fuel rail & injectors)', type: 'replacement' },
      { item: 'Gear oil replacement (Manual / transaxle lubricant flush)', type: 'replacement' },
      { item: 'Coolant complete drain & fresh replacement', type: 'replacement' },
      { item: 'Spark plug full replacement (Iridium/standard set)', type: 'replacement' },
      { item: 'Brake oil top-up to optimum master cylinder mark', type: 'topup' },
      { item: 'Complete 4-wheel brake servicing & pad deglazing', type: 'inspection' },
      { item: 'Brake caliper pin greasing with high-temp synthetic lube', type: 'inspection' },
      { item: 'Suspension, ball joint, tie rod & bush comprehensive inspection', type: 'inspection' },
      { item: 'Complete exterior & interior lighting / bulb check', type: 'inspection' },
      { item: 'Alternator & auxiliary fan belt tension checking', type: 'inspection' },
      { item: 'AC refrigerant gas pressure check & top-up', type: 'topup' },
      { item: 'Full chassis lubrication, hinges & latches greasing', type: 'inspection' },
      { item: 'Snow foam wash, deep interior extraction cleaning & dashboard dress', type: 'cleaning' },
    ],
  },
  {
    id: 'diesel-general-service',
    title: 'Diesel Car General Service',
    fuelType: 'Diesel',
    serviceType: 'General Service',
    recommendedFor: 'Recommended every 5,000 km or 6 months to preserve heavy-duty turbo diesel performance.',
    priceNote: 'CONTACT US FOR THE LATEST SERVICE PLAN PRICES',
    inclusions: [
      { item: 'Diesel engine oil replacement (High-shear detergent oil CI-4/CK-4)', type: 'replacement' },
      { item: 'Diesel oil filter replacement', type: 'replacement' },
      { item: 'Air filter cleaning & intake tract vacuuming', type: 'cleaning' },
      { item: 'AC cabin filter cleaning', type: 'cleaning' },
      { item: 'Glow plug circuit & electrical continuity check', type: 'inspection' },
      { item: 'Coolant level & radiator inspection', type: 'inspection' },
      { item: 'Brake oil checking', type: 'inspection' },
      { item: 'Brake servicing & caliper pin checking', type: 'inspection' },
      { item: 'Suspension & underbody visual inspection', type: 'inspection' },
      { item: 'Greasing and lubrication of pivot points', type: 'inspection' },
      { item: 'Exterior foam wash & deep interior cabin cleaning', type: 'cleaning' },
    ],
  },
  {
    id: 'cng-general-service',
    title: 'Petrol / CNG General Service',
    fuelType: 'Petrol / CNG',
    serviceType: 'General Service',
    recommendedFor: 'Specialized maintenance for factory-fitted or aftermarket CNG bi-fuel vehicles.',
    priceNote: 'CONTACT US FOR THE LATEST SERVICE PLAN PRICES',
    inclusions: [
      { item: 'Engine oil replacement (Specialized bi-fuel thermal grade)', type: 'replacement' },
      { item: 'Oil filter replacement', type: 'replacement' },
      { item: 'Air filter thorough cleaning (Crucial for proper CNG combustion)', type: 'cleaning' },
      { item: 'AC cabin filter cleaning', type: 'cleaning' },
      { item: 'Spark plug cleaning & electrode gap optimization for CNG', type: 'cleaning' },
      { item: 'CNG low-pressure filter inspection', type: 'inspection' },
      { item: 'Coolant level checking & leak inspection', type: 'inspection' },
      { item: 'Brake oil checking & brake servicing', type: 'inspection' },
      { item: 'Greasing and lubrication', type: 'inspection' },
      { item: 'Foam wash and complete interior vacuum cleaning', type: 'cleaning' },
    ],
  },
  {
    id: 'cng-full-service',
    title: 'Petrol / CNG Full Service',
    fuelType: 'Petrol / CNG',
    serviceType: 'Full Service',
    badge: 'BEST VALUE FOR BI-FUEL',
    recommendedFor: 'Full yearly overhaul addressing both Petrol and CNG systems, spark plugs, filters and cooling.',
    priceNote: 'CONTACT US FOR THE LATEST SERVICE PLAN PRICES',
    inclusions: [
      { item: 'Engine oil replacement (Premium thermal endurance oil)', type: 'replacement' },
      { item: 'Oil filter replacement (Genuine OEM)', type: 'replacement' },
      { item: 'Air filter replacement (Brand new high-flow element)', type: 'replacement' },
      { item: 'AC filter replacement (Anti-dust cabin filter)', type: 'replacement' },
      { item: 'Fuel filter replacement (Petrol side)', type: 'replacement' },
      { item: 'Gear oil replacement', type: 'replacement' },
      { item: 'Coolant complete drain & flush replacement', type: 'replacement' },
      { item: 'Spark plug full replacement (High-performance gapped set for CNG)', type: 'replacement' },
      { item: 'Brake oil top-up', type: 'topup' },
      { item: '4-wheel brake servicing & caliper greasing', type: 'inspection' },
      { item: 'Suspension, steering & underbody inspection', type: 'inspection' },
      { item: 'Light checking & battery terminal health check', type: 'inspection' },
      { item: 'Fan belt checking', type: 'inspection' },
      { item: 'AC gas top-up & cooling performance test', type: 'topup' },
      { item: 'Comprehensive greasing & lubrication', type: 'inspection' },
      { item: 'Snow foam wash & showroom interior cleaning', type: 'cleaning' },
    ],
  },
];

export const SERVICE_PLAN_DISCLAIMER = "Service inclusions, consumables, vehicle eligibility and pricing are subject to vehicle inspection and confirmation by Sunrise Motor Work's.";

