export interface Product {
  id: string;
  name: string;
  category: 'HOODIES' | 'JACKETS' | 'T-SHIRTS' | 'POLOS' | 'TRACKSUITS' | 'TRACKPANTS' | 'SWEATERS' | 'BEANIES';
  subcategory: string;
  season: 'Winter' | 'Summer' | 'All Season';
  description: string;
  price: string; // "₹599 – ₹1,999"
  fabric: string;
  colors: string[];
  sizes: string[];
  moq: string;
  images: string[];
  featured?: boolean;
  specifications: {
    gsm?: string;
    composition?: string;
    fit?: string;
    customization?: string[];
  };
}

export const PRODUCTS: Product[] = [
  // 1. T-SHIRTS
  {
    id: 'oversized-t-shirt-drop-shoulder',
    name: 'Oversized T-Shirt (Drop Shoulder)',
    category: 'T-SHIRTS',
    subcategory: 'T-Shirts',
    season: 'All Season',
    description: 'Heavy-density combed cotton with an exaggerated drop-shoulder drape, wide ribbed collar, and relaxed streetwear fit engineered for high-end brand labeling.',
    price: '₹599 – ₹1,999',
    fabric: '220–260 GSM 100% Super Combed Cotton Single Jersey',
    colors: ['Sage Olive', 'Pitch Black', 'Slate Graphite', 'Chalk Off-White', 'Muted Mocha'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/oversized-t-shirt-drop-shoulder-1.jpg',
      '/images/products/oversized-t-shirt-drop-shoulder-2.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '240 GSM Super Combed Cotton',
      composition: '100% Cotton / Lycra Rib Neck',
      fit: 'Relaxed Drop Shoulder / Boxy Cut',
      customization: ['High-Density Screen Printing', 'Puff Print', 'Custom Woven Neck Tag']
    }
  },
  {
    id: 'biowash-t-shirt',
    name: 'Biowash T-Shirt',
    category: 'T-SHIRTS',
    subcategory: 'T-Shirts',
    season: 'Summer',
    description: 'Ultra-soft enzymatic biowash fabric eliminates surface fuzz for an ultra-smooth hand-feel and vibrant color retention across commercial wash cycles.',
    price: '₹599 – ₹1,999',
    fabric: '180–210 GSM 100% Combed Compact Cotton with Biowash Finish',
    colors: ['Jet Black', 'Pure White', 'Slate Smoke', 'Charcoal Melange', 'Forest Green'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/biowash-t-shirt-1.jpg',
      '/images/products/biowash-t-shirt-2.jpg',
      '/images/products/biowash-t-shirt-3.jpg'
    ],
    specifications: {
      gsm: '190 GSM Enzymatic Biowashed Cotton',
      composition: '100% Compact Combed Cotton',
      fit: 'Contemporary Crew Neck Regular Fit',
      customization: ['Water-Based Discharge Print', 'Plastisol Screen Print', 'Satin Brand Tag']
    }
  },

  // 2. POLOS
  {
    id: 'polo-tshirt',
    name: 'Polo Tshirt',
    category: 'POLOS',
    subcategory: 'Polos',
    season: 'All Season',
    description: 'Refined pique polo crafted with durable flat-knit ribbed collar and cuffs, reinforced two-button placket, and side-slit vents for corporate and premium retail brands.',
    price: '₹599 – ₹1,999',
    fabric: '220–260 GSM Honeycomb Cotton Pique Knit',
    colors: ['Deep Teal', 'Black Obsidian', 'Heather Slate', 'Chalk White', 'Royal Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/polo-tshirt-1.jpg',
      '/images/products/polo-tshirt-2.jpg',
      '/images/products/polo-tshirt-3.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '240 GSM Combed Pique',
      composition: '100% Combed Cotton Pique',
      fit: 'Smart Athletic / Regular Fit',
      customization: ['Embroidered Crest Logo', 'Custom Engraved Buttons', 'Tipped Collar Ribbing']
    }
  },

  // 3. HOODIES
  {
    id: 'hoodies-regular-fit',
    name: 'Hoodies (Regular Fit)',
    category: 'HOODIES',
    subcategory: 'Hoodies',
    season: 'Winter',
    description: 'Classic regular-fit hoodie tailored with double-needle construction, matching metal aglet drawcords, kangaroo pouch, and pre-shrunk anti-pilling fleece.',
    price: '₹599 – ₹1,999',
    fabric: '320–360 GSM Cotton-Poly Brushed Fleece / French Terry',
    colors: ['Dusty Lavender', 'Pitch Black', 'Slate Gray', 'Navy Blue', 'Off-White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/hoodies-regular-fit-1.jpg',
      '/images/products/hoodies-regular-fit-2.jpg',
      '/images/products/hoodies-regular-fit-3.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '340 GSM Heavy Fleece',
      composition: '80% Combed Cotton / 20% Polyester',
      fit: 'Classic Tailored Regular Fit',
      customization: ['Embroidery', 'Direct to Film (DTF)', 'Branded Drawcord Aglets']
    }
  },
  {
    id: 'oversized-hoodies',
    name: 'Oversized Hoodies',
    category: 'HOODIES',
    subcategory: 'Hoodies',
    season: 'Winter',
    description: 'Heavyweight drop-shoulder streetwear hoodie with seamless double-layered hood, wide architectural sleeves, and clean kangaroo front pocket.',
    price: '₹599 – ₹1,999',
    fabric: '380–450 GSM Heavy French Terry / Diagonal Loopback Fleece',
    colors: ['Rich Plum', 'Jet Black', 'Slate Graphite', 'Washed Vintage Charcoal', 'Chalk White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/oversized-hoodies-2.jpg',
      '/images/products/oversized-hoodies-1.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '420 GSM Heavy Terry',
      composition: '100% Combed Cotton French Terry',
      fit: 'Exaggerated Drop Shoulder Boxy Cut',
      customization: ['Heavy High-Density Puff Print', 'Distressed Acid Wash Finish', 'Custom Rubber Back Label']
    }
  },
  {
    id: 'sherpa-fleece-hoodies',
    name: 'Sherpa Fleece Hoodies',
    category: 'HOODIES',
    subcategory: 'Hoodies',
    season: 'Winter',
    description: 'Dense teddy-sherpa fleece engineered for extreme cold insulation with plush interior, reinforced kangaroo pocket, and heavy-duty drawcords.',
    price: '₹599 – ₹1,999',
    fabric: '380–420 GSM Double-Face High-Pile Sherpa Lambswool Fleece',
    colors: ['Warm Camel', 'Off-White Ecru', 'Deep Charcoal', 'Slate Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/sherpa-fleece-hoodies-2.jpg',
      '/images/products/sherpa-fleece-hoodies-1.jpg'
    ],
    specifications: {
      gsm: '400 GSM Double-Sided Sherpa',
      composition: '100% Thermal Poly Sherpa Fleece',
      fit: 'Cozy Oversized Silhouette',
      customization: ['Rubberized Logo Patch', 'Debossed Suede Label', 'Metal Toggle Stoppers']
    }
  },
  {
    id: 'polar-fleece-hoodies',
    name: 'Polar Fleece Hoodies',
    category: 'HOODIES',
    subcategory: 'Hoodies',
    season: 'Winter',
    description: 'Breathable, hydrophobic polar fleece with an ultra-lightweight warm profile, elastic binding on hem and cuffs, and wind-blocking collar hood.',
    price: '₹599 – ₹1,999',
    fabric: '280–320 GSM Anti-Pilling Micro Polar Fleece',
    colors: ['Carbon Slate', 'Pitch Black', 'Bone Off-White', 'Muted Forest'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/polar-fleece-hoodies-3.jpg',
      '/images/products/polar-fleece-hoodies-1.jpg',
      '/images/products/polar-fleece-hoodies-2.jpg'
    ],
    specifications: {
      gsm: '300 GSM Anti-Pilling Micro Fleece',
      composition: '100% Thermal Polyester',
      fit: 'Comfort Regular Fit',
      customization: ['Woven Damask Label', 'Contrast Flatlock Stitching', 'Chest Zip Pocket']
    }
  },

  // 4. JACKETS
  {
    id: 'varsity-jackets',
    name: 'Varsity Jackets',
    category: 'JACKETS',
    subcategory: 'Jackets',
    season: 'Winter',
    description: 'Heavyweight heritage varsity silhouette featuring striped ribbed collar and waistband, internal diamond-quilted thermal lining, and heavy-gauge snap buttons.',
    price: '₹599 – ₹1,999',
    fabric: 'Melton Wool Body with Contrast Vegan / PU Leather Sleeves',
    colors: ['Forest Green / Chalk', 'Monochrome Black / Chalk', 'Slate Charcoal / Black', 'Navy / Off-White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/varsity-jackets-2.jpg',
      '/images/products/varsity-jackets-1.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '500+ GSM Melton Wool Body',
      composition: 'Wool Blend Body / Matte PU Sleeves / Polyfill Quilted Interior',
      fit: 'Boxy Retro Bomber Fit',
      customization: ['Chenille Patches', 'Twill Embroidery', 'Custom Branded Snap Buttons']
    }
  },
  {
    id: 'puffer-jackets',
    name: 'Puffer Jackets',
    category: 'JACKETS',
    subcategory: 'Jackets',
    season: 'Winter',
    description: 'Ultralight yet high-loft thermal down jacket with horizontal baffle quilting, storm flap interior zipper, adjustable cinch waist, and storm cuffs.',
    price: '₹599 – ₹1,999',
    fabric: 'Water-Repellent DWR Ripstop Nylon with Micro-Thermal Down Fill',
    colors: ['Slate Gray', 'Matte Obsidian', 'Carbon Graphite', 'Snow White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/puffer-jackets-3.jpg',
      '/images/products/puffer-jackets-1.jpg',
      '/images/products/puffer-jackets-2.jpg'
    ],
    featured: true,
    specifications: {
      gsm: 'Lightweight 380T Nylon Shell + 300g Thermal Down-Alternative Filling',
      composition: '100% DWR Nylon Shell / 100% Polyfill',
      fit: 'Modern Boxy Puffer Profile',
      customization: ['Silicone Molded Chest Badge', 'Custom Branded Zipper Pulls', 'Heat-Welded Seams']
    }
  },
  {
    id: 'polar-fleece-jackets',
    name: 'Polar Fleece Jackets',
    category: 'JACKETS',
    subcategory: 'Jackets',
    season: 'Winter',
    description: 'Full-zip outdoor fleece jacket featuring stand-up wind collar, nylon-reinforced chest utility pocket, and stretch-bound cuffs for thermal retention.',
    price: '₹599 – ₹1,999',
    fabric: '300–340 GSM High-Density Anti-Pill Micro Polar Fleece',
    colors: ['Onyx Black', 'Slate Gray', 'Olive Drab', 'Ivory Off-White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/polar-fleece-jackets-2.jpg',
      '/images/products/polar-fleece-jackets-1.jpg',
      '/images/products/polar-fleece-jackets-3.jpg'
    ],
    specifications: {
      gsm: '320 GSM High-Density Polar Fleece',
      composition: '100% Recycled Thermal Polyester',
      fit: 'Active Outdoor Regular Fit',
      customization: ['Woven Chest Patch', 'YKK Metal Pull Zippers', 'Interior Storm Flap']
    }
  },
  {
    id: 'denim-jackets',
    name: 'Denim Jackets',
    category: 'JACKETS',
    subcategory: 'Jackets',
    season: 'All Season',
    description: 'Classic trucker silhouette built from heavyweight ring-spun cotton denim with shank button closure, twin chest flap pockets, and adjustable waist tabs.',
    price: '₹599 – ₹1,999',
    fabric: '13.5–14.5 oz 100% Rigid / Comfort Stretch Indigo Cotton Denim',
    colors: ['Enzyme Washed Gray', 'Vintage Slate Indigo', 'Washed Black', 'Raw Dark Indigo'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/denim-jackets-4.jpg',
      '/images/products/denim-jackets-1.jpg',
      '/images/products/denim-jackets-2.jpg',
      '/images/products/denim-jackets-3.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '14.0 oz Heavyweight Denim',
      composition: '100% Ring-Spun Cotton / Vintage Enzyme Wash',
      fit: 'Classic Trucker Cut / Tailored Drop',
      customization: ['Embossed Metal Shank Buttons', 'Distressed / Enzyme Washing', 'Genuine Leather Back Patch']
    }
  },

  // 5. TRACKSUITS
  {
    id: 'fleece-tracksuits',
    name: 'Fleece Tracksuits',
    category: 'TRACKSUITS',
    subcategory: 'Tracksuits',
    season: 'Winter',
    description: 'Complete 2-piece fleece co-ord set featuring a pullover hoodie paired with tapered elastic-cuff joggers with deep welt pockets.',
    price: '₹599 – ₹1,999',
    fabric: '340–380 GSM Brushed Interior Heavy Fleece',
    colors: ['Deep Navy', 'Monochrome Slate', 'Jet Black', 'Chalk Heather', 'Smoky Olive'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/fleece-tracksuits-2.jpg',
      '/images/products/fleece-tracksuits-1.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '360 GSM Cotton-Poly Blend',
      composition: '80% Combed Cotton / 20% Polyester Heavy Fleece',
      fit: 'Athletic Relaxed Co-ord Fit',
      customization: ['Matching Screen Print / Embroidery Set', 'Custom Metal Eyelets', 'Branded Jacquard Drawstrings']
    }
  },
  {
    id: 'omniheat-tracksuits',
    name: 'Omniheat Tracksuits',
    category: 'TRACKSUITS',
    subcategory: 'Tracksuits',
    season: 'Winter',
    description: 'High-performance winter sportswear engineered with silver thermal-reflective interior lining to retain body heat in freezing conditions.',
    price: '₹599 – ₹1,999',
    fabric: 'Waterproof DWR Softshell Exterior with Thermal Heat-Reflective Dot Lining',
    colors: ['Obsidian Black', 'Carbon Gray', 'Slate Graphite'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/omniheat-tracksuits-2.jpg',
      '/images/products/omniheat-tracksuits-1.jpg',
      '/images/products/omniheat-tracksuits-3.jpg'
    ],
    specifications: {
      gsm: '320 GSM Bonded Softshell with Metallic Omni-Dot Lining',
      composition: '92% Polyester / 8% Spandex with DWR Coating',
      fit: 'Athletic Kinetic Fit',
      customization: ['Reflective 3M Branding', 'Waterproof Heat-Sealed Zips', 'Custom Branded Pullers']
    }
  },

  // 6. TRACKPANTS
  {
    id: 'balloon-fit-trackpants',
    name: 'Balloon Fit Trackpants',
    category: 'TRACKPANTS',
    subcategory: 'Trackpants',
    season: 'All Season',
    description: 'Voluminous curved outer seam tailored into a structured balloon silhouette, tapering gracefully at the ankle with deep slash pockets and thick drawcord waistband.',
    price: '₹599 – ₹1,999',
    fabric: '280–320 GSM Structured Loopback Terry / Heavy Cotton Twill',
    colors: ['Pitch Black', 'Slate Smoke', 'Off-White Ivory', 'Washed Olive'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/balloon-fit-trackpants-2.jpg',
      '/images/products/balloon-fit-trackpants-1.jpg'
    ],
    specifications: {
      gsm: '320 GSM Structured Cotton Terry',
      composition: '100% Combed Cotton',
      fit: 'Exaggerated Balloon / Wide Barrel Leg Fit',
      customization: ['Tonal Minimalist Embroidery', 'Bungee Ankle Cinchers', 'Custom Back Pocket Tag']
    }
  },
  {
    id: 'trackpants-regular-fit',
    name: 'Trackpants (Regular Fit)',
    category: 'TRACKPANTS',
    subcategory: 'Trackpants',
    season: 'All Season',
    description: 'Straight-leg regular fit track pants with interior brushed comfort, durable elasticated waistband with eyelets, and zippered side pockets.',
    price: '₹599 – ₹1,999',
    fabric: '260–300 GSM Cotton-Poly Interlock / French Terry',
    colors: ['Jet Black', 'Slate Melange', 'Deep Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/trackpants-regular-fit-1.jpg',
      '/images/products/trackpants-regular-fit-2.jpg',
      '/images/products/trackpants-regular-fit-3.jpg'
    ],
    specifications: {
      gsm: '280 GSM Cotton Blend Interlock',
      composition: '70% Cotton / 30% Polyester',
      fit: 'Classic Straight-Leg Regular Fit',
      customization: ['Screen Printed Leg Graphic', 'Concealed Zipper Pockets', 'Custom Metal Cord Tips']
    }
  },
  {
    id: 'fleece-trackpants-jogger-fit',
    name: 'Fleece Trackpants (Jogger Fit)',
    category: 'TRACKPANTS',
    subcategory: 'Trackpants',
    season: 'Winter',
    description: 'Tapered streetwear jogger cut with 2x2 ribbed ankle cuffs, heavy flat drawcords, reinforced seat stitching, and deep slant pockets.',
    price: '₹599 – ₹1,999',
    fabric: '320–360 GSM Brushed Fleece with Elastane Ribbed Cuffs',
    colors: ['Carbon Black', 'Slate Heather', 'Smoky Chalk', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/fleece-trackpants-jogger-fit-1.jpg',
      '/images/products/fleece-trackpants-jogger-fit-2.jpg',
      '/images/products/fleece-trackpants-jogger-fit-3.jpg'
    ],
    specifications: {
      gsm: '340 GSM Heavy Brushed Fleece',
      composition: '80% Combed Cotton / 20% Polyester',
      fit: 'Tapered Slim-to-Relaxed Jogger Fit',
      customization: ['High-Density Thigh Logo', 'Branded Drawcord', 'Back Welt Pocket with Woven Tab']
    }
  },

  // 7. SWEATERS
  {
    id: 'sweaters',
    name: 'Sweaters',
    category: 'SWEATERS',
    subcategory: 'Knitwear',
    season: 'Winter',
    description: 'Artisanal checkerboard knit crewneck sweater with ribbed collar, hem, and cuffs. Superior elasticity, soft drape, and zero irritation against skin.',
    price: '₹599 – ₹1,999',
    fabric: 'Fine-Gauge Combed Cotton-Cashmere Blend / Acrylic Knit',
    colors: ['Forest Green / Ivory Checker', 'Slate Charcoal', 'Obsidian Black', 'Midnight Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/sweaters-1.jpg',
      '/images/products/sweaters-2.jpg'
    ],
    featured: true,
    specifications: {
      gsm: '7-Gauge / 12-Gauge Precision Knit',
      composition: 'Cotton-Acrylic Knit Blend',
      fit: 'Relaxed Tailored Knit Silhouette',
      customization: ['Jacquard Knit Intarsia Pattern', 'Subtle Leather Hem Tag', 'Custom Brand Packaging']
    }
  },

  // 8. BEANIES
  {
    id: 'beanies',
    name: 'Beanies',
    category: 'BEANIES',
    subcategory: 'Headwear',
    season: 'Winter',
    description: 'Double-cuffed and skull-cap ribbed and buffalo fleece beanies engineered with four-point crown closure and ultra-soft thermal stretch retention.',
    price: '₹599 – ₹1,999',
    fabric: 'Heavy Ribbed Acrylic / Buffalo Fleece Knit',
    colors: ['Navy Plaid', 'Deep Green', 'Slate Melange', 'Off-White Cream'],
    sizes: ['One Size (Universal Stretch Fit)'],
    moq: 'MOQ varies by product',
    images: [
      '/images/products/beanies-4.jpg',
      '/images/products/beanies-2.jpg',
      '/images/products/beanies-3.jpg',
      '/images/products/beanies-1.jpg'
    ],
    specifications: {
      gsm: 'Heavyweight Rib / Fleece Knit',
      composition: '100% Soft-Touch Stretch Thermal Poly',
      fit: 'Fold-Over Cuff / Snug Beanie Fit',
      customization: ['Folded Woven Label', 'Embossed Leather Clip', 'Embroidered Front Patch']
    }
  }
];

export const CATEGORIES = [
  'ALL',
  'HOODIES',
  'JACKETS',
  'T-SHIRTS',
  'POLOS',
  'TRACKSUITS',
  'TRACKPANTS',
  'SWEATERS',
  'BEANIES',
] as const;

export type CategoryFilter = typeof CATEGORIES[number];
