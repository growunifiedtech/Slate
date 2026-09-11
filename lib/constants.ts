export interface FactoryStage {
  id: string;
  stepNumber: string;
  title: string;
  headline: string;
  subheading: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
  checkpoints?: string[];
  zoneCode: string;
  scrollProgress: [number, number]; // [start, end] from 0 to 1
}

export const FACTORY_STAGES: FactoryStage[] = [
  {
    id: 'entrance',
    stepNumber: 'STAGE 01',
    title: 'ENTER SLATE',
    headline: 'WELCOME TO SLATE',
    subheading: 'WHERE IDEAS BECOME APPAREL.',
    description: 'Enter our high-precision apparel manufacturing facility in New Delhi. Every piece is engineered from thread to finished silhouette.',
    zoneCode: 'ZONE 00 // EXTERIOR ENTRANCE',
    scrollProgress: [0.0, 0.12]
  },
  {
    id: 'raw-material',
    stepNumber: '01 / RAW MATERIAL',
    title: 'RAW MATERIAL',
    headline: 'IT STARTS WITH THE FABRIC.',
    subheading: 'UNCOMPROMISING TEXTILE INTEGRITY',
    description: 'Quality-focused apparel production begins with the right materials and specifications. Tested for shrinkage, color-fastness, and GSM density.',
    zoneCode: 'ZONE 01 // TEXTILE STORAGE',
    scrollProgress: [0.12, 0.24]
  },
  {
    id: 'cutting',
    stepNumber: '02 / CUTTING',
    title: 'CUTTING',
    headline: 'PRECISION BEFORE PRODUCTION.',
    subheading: 'CAD-ALIGNED AUTOMATED FABRIC CUTTING',
    description: 'Fabric is prepared and cut according to product specifications for consistent production across thousands of units.',
    zoneCode: 'ZONE 02 // CAD PATTERN & LASER CUT',
    scrollProgress: [0.24, 0.36]
  },
  {
    id: 'stitching',
    stepNumber: '03 / STITCHING',
    title: 'STITCHING',
    headline: 'BUILT WITH PRECISION.',
    subheading: 'HIGH-TENSILE SEWING & ASSEMBLY',
    description: 'Clean stitching and consistent construction across bulk production with specialized lockstitch and overlock units.',
    metric: {
      value: '50,000',
      label: 'PIECES / MONTH'
    },
    zoneCode: 'ZONE 03 // ASSEMBLY LINE',
    scrollProgress: [0.36, 0.48]
  },
  {
    id: 'quality-control',
    stepNumber: '04 / QUALITY CONTROL',
    title: 'QUALITY CONTROL',
    headline: 'QUALITY IS NOT AN AFTERTHOUGHT.',
    subheading: '4-TIER RIGOROUS QUALITY AUDIT',
    description: 'Every production process is supported by quality-focused inspection before products move forward.',
    checkpoints: ['FABRIC', 'STITCHING', 'FINISHING', 'FINAL CHECK'],
    zoneCode: 'ZONE 04 // INSPECTION STATION',
    scrollProgress: [0.48, 0.60]
  },
  {
    id: 'finishing',
    stepNumber: '05 / FINISHING',
    title: 'FINISHING',
    headline: 'THE DETAILS MATTER.',
    subheading: 'STEAM PRESSING, TRIMMING & LABELS',
    description: 'Garment finishing, folding, label placement and final preparation crafted to client brand standards.',
    zoneCode: 'ZONE 05 // STEAM & LABELS',
    scrollProgress: [0.60, 0.72]
  },
  {
    id: 'packaging',
    stepNumber: '06 / PACKAGING',
    title: 'PACKAGING',
    headline: 'READY FOR YOUR BRAND.',
    subheading: 'CUSTOM PRIVATE-LABEL BRAND PACKAGING',
    description: 'Brand packaging customization and private-label solutions available for retail-ready shelf appeal.',
    zoneCode: 'ZONE 06 // FOLDING & BOXING',
    scrollProgress: [0.72, 0.84]
  },
  {
    id: 'dispatch',
    stepNumber: '07 / DISPATCH',
    title: 'DISPATCH',
    headline: 'INDIA + INTERNATIONAL MARKETS',
    subheading: 'LOGISTICS & SECURE BULK FREIGHT',
    description: 'Manufacturing solutions for businesses across India and abroad with export-grade packaging and documentation.',
    zoneCode: 'ZONE 07 // LOGISTICS HUB',
    scrollProgress: [0.84, 0.96]
  }
];

export const BRAND_INFO = {
  name: 'SLATE APPARELS',
  tagline: 'WHERE IDEAS BECOME APPAREL',
  businessType: 'Manufacturer • Wholesaler • Supplier • Exporter',
  address: 'Plot No. 27, Basement, Street No. 19, Zakir Nagar, Okhla, New Delhi - 110025',
  phoneDisplay: '+91 9599084873',
  whatsappRaw: '9599084873',
  whatsappUrl: 'https://wa.me/919599084873?text=Hello%20Slate%20Apparels%2C%20I%20am%20interested%20in%20placing%20a%20bulk%20apparel%20order.%20I%20would%20like%20to%20discuss%20products%2C%20MOQ%20and%20pricing.',
  email: 'slateapparels@gmail.com',
  capacity: '50,000 PIECES / MONTH',
  credentials: [
    { title: 'GST REGISTERED', subtitle: 'Goods & Services Tax Compliant Entity' },
    { title: 'IMPORT EXPORT CODE (IEC)', subtitle: 'DGFT Authorized Exporter' },
    { title: 'UDYAM REGISTERED', subtitle: 'Ministry of MSME Recognized Manufacturer' }
  ]
};

export const WHY_SLATE_ITEMS = [
  {
    number: '01',
    title: 'HIGH QUALITY',
    desc: 'Quality-focused manufacturing with stringent dimensional stability.'
  },
  {
    number: '02',
    title: 'CLEAN STITCHING',
    desc: 'Consistent garment construction using high-tensile industrial threads.'
  },
  {
    number: '03',
    title: 'HIGH-QUALITY FABRICS',
    desc: 'Fabric options meticulously sourced based on custom product requirements.'
  },
  {
    number: '04',
    title: 'BULK PRODUCTION',
    desc: 'Built to handle business-scale orders with scalable line capacity.'
  },
  {
    number: '05',
    title: 'COMPETITIVE PRICING',
    desc: 'Efficient bulk manufacturing models delivering maximum value to brands.'
  },
  {
    number: '06',
    title: 'FAST DELIVERY',
    desc: 'Efficient production workflows optimized for timely seasonal dispatches.'
  },
  {
    number: '07',
    title: 'CUSTOM DESIGNS',
    desc: 'Complete manufacturing for custom apparel cuts, silhouettes & tech packs.'
  },
  {
    number: '08',
    title: 'EXPORT EXPERIENCE',
    desc: 'Serving India and international markets with certified compliance.'
  }
];

export const BUSINESS_TYPES = [
  { label: 'FASHION BRANDS', detail: 'End-to-end bespoke manufacturing for growing labels.' },
  { label: 'STARTUPS', detail: 'Low barrier sampling and scalable production runs.' },
  { label: 'RETAILERS', detail: 'High-volume repeat supply with consistent standard sizing.' },
  { label: 'WHOLESALERS', detail: 'Direct manufacturer pricing on staple and seasonal apparel.' },
  { label: 'RESELLERS', detail: 'Reliable blank and finished inventories ready for dispatch.' },
  { label: 'E-COMMERCE BRANDS', detail: 'Quick turnaround cycles suited for fast-fashion drops.' },
  { label: 'PRIVATE LABELS', detail: 'Full custom branding, neck labels, wash tags, and packaging.' },
  { label: 'BULK BUYERS', detail: 'Dedicated manufacturing capacity for heavy volume demands.' }
];

export const ORDER_STEPS = [
  { step: '01', title: 'SHARE REQUIREMENTS', desc: 'Send your tech packs, reference garments, required fabrics, and estimated quantities.' },
  { step: '02', title: 'GET A QUOTE', desc: 'Receive transparent B2B pricing, MOQ breakdown, and estimated production timelines.' },
  { step: '03', title: 'SAMPLE / APPROVAL', desc: 'We fabricate pre-production samples for fit, fabric hand-feel, and construction sign-off.' },
  { step: '04', title: 'BULK PRODUCTION', desc: 'Fabric cutting, high-precision stitching, and private-label integration.' },
  { step: '05', title: 'QUALITY CHECK + DISPATCH', desc: '100% inspection, custom packaging, and secure freight delivery to your destination.' }
];
