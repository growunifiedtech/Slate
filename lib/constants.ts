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
    id: 'raw-material',
    stepNumber: '01 / RAW MATERIAL',
    title: 'RAW MATERIAL',
    headline: 'IT STARTS WITH THE FABRIC.',
    subheading: 'UNCOMPROMISING TEXTILE INTEGRITY',
    description: 'Quality-focused apparel production begins with the right materials, yarn density, and shrinkage specifications. Curated knits, terry, and technical fleece.',
    zoneCode: 'ZONE 01 // TEXTILE STORAGE',
    scrollProgress: [0.0, 0.35]
  },
  {
    id: 'stitching',
    stepNumber: '02 / STITCHING',
    title: 'STITCHING',
    headline: 'BUILT WITH PRECISION.',
    subheading: 'HIGH-TENSILE SEWING & ASSEMBLY',
    description: 'Clean stitching and consistent construction across bulk production with specialized lockstitch and overlock units.',
    metric: {
      value: '50,000',
      label: 'PIECES / MONTH'
    },
    zoneCode: 'ZONE 02 // ASSEMBLY LINE',
    scrollProgress: [0.35, 0.70]
  },
  {
    id: 'quality-packaging',
    stepNumber: '03 / QUALITY & PACKAGING',
    title: 'QUALITY & PACKAGING',
    headline: 'READY FOR YOUR BRAND.',
    subheading: '4-TIER RIGOROUS QUALITY AUDIT & PACKAGING',
    description: 'Every production run passes 4-tier inspection before custom private-label folding, tagging, and packing for India & international dispatch.',
    checkpoints: ['FABRIC AUDIT', 'STITCH INTEGRITY', 'FINISHING & LABELS', 'FINAL DISPATCH CHECK'],
    zoneCode: 'ZONE 03 // QC & PACKAGING',
    scrollProgress: [0.70, 0.98]
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
