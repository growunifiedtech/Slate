export interface Product {
  id: string;
  name: string;
  category: 'WINTERS' | 'SUMMERS' | 'TOP WEAR' | 'BOTTOM WEAR';
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
  // WINTER PRODUCTS
  {
    id: 'winter-oversized-hoodie',
    name: 'Oversized Hoodies & Sweatshirts',
    category: 'WINTERS',
    subcategory: 'Hoodies',
    season: 'Winter',
    description: 'Heavyweight loopback fleece engineered with dropped shoulders, double-layered hood, and ribbed cuffs. Designed for luxury streetwear brands and bulk private labeling.',
    price: '₹599 – ₹1,999',
    fabric: 'Heavyweight Cotton Terry / Brushed Fleece (380-450 GSM)',
    colors: ['Jet Black', 'Slate Graphite', 'Charcoal Heather', 'Chalk Off-White', 'Monochrome Ash'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=650&q=75&fm=webp',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=650&q=75&fm=webp',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    featured: true,
    specifications: {
      gsm: '380 - 450 GSM',
      composition: '100% Combed Cotton / 80-20 Cotton Poly',
      fit: 'Relaxed Drop Shoulder / Boxy Streetwear Cut',
      customization: ['Screen Printing', 'High-Density Puff Print', 'Embroidery', 'Custom Metal Aglets']
    }
  },
  {
    id: 'winter-varsity-jacket',
    name: 'Varsity Jackets',
    category: 'WINTERS',
    subcategory: 'Jackets',
    season: 'Winter',
    description: 'Heritage wool blend torso with premium vegan or genuine leather sleeves. Features heavy striped ribbing, custom snap buttons, and diamond quilted lining.',
    price: '₹599 – ₹1,999',
    fabric: 'Melton Wool Blend & Premium Matte Leather/Polyurethane',
    colors: ['Obsidian Black / Pure White', 'Slate Gray / Black', 'Monochrome Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=650&q=75&fm=webp',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    featured: true,
    specifications: {
      gsm: '520 GSM Wool Body',
      composition: 'Wool / Leather Sleeves / Polyfill Quilted Lining',
      fit: 'Tailored Bomber / Boxy Fit',
      customization: ['Chenille Embroidery', 'Twill Applique Patches', 'Embossed Metal Snaps']
    }
  },
  {
    id: 'winter-puffer-jacket',
    name: 'Puffer Jackets',
    category: 'WINTERS',
    subcategory: 'Outerwear',
    season: 'Winter',
    description: 'High-density micro ripstop nylon shell insulated with thermal faux down or duck feather fill. Engineered for extreme thermal insulation with water-resistant coating.',
    price: '₹599 – ₹1,999',
    fabric: 'Matte Water-Resistant Ripstop Nylon + Thermal Insulation Fill',
    colors: ['Matte Black', 'Slate Smoke', 'Silver Cloud', 'Graphite'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=650&q=75&fm=webp',
      'https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    featured: true,
    specifications: {
      composition: '100% Water-Repellent Nylon Shell with Polyfill / Duck Down Fill',
      fit: 'Oversized Boxy Puffer Profile',
      customization: ['Matte Rubber Patch', 'Waterproof Heat-Sealed Zippers', 'Custom Bungee Cords']
    }
  },
  {
    id: 'winter-leather-jacket',
    name: 'Leather Jackets',
    category: 'WINTERS',
    subcategory: 'Leather',
    season: 'Winter',
    description: 'Crafted from premium full-grain or top-grade synthetic leather with asymmetric industrial zippers, snap lapels, and silk-touch viscose inner lining.',
    price: '₹599 – ₹1,999',
    fabric: 'Full-Grain Lambskin / Premium Matte PU Leather',
    colors: ['Pitch Black', 'Distressed Slate', 'Charcoal Burnished'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      composition: 'Genuine Leather / Viscose Lining',
      fit: 'Classic Biker / Modern Minimalist Rider',
      customization: ['Custom Metal Hardware', 'Laser Engraved Branding', 'Inner Woven Labels']
    }
  },
  {
    id: 'winter-polar-fleece',
    name: 'Polar Fleece Hoodies',
    category: 'WINTERS',
    subcategory: 'Fleece',
    season: 'Winter',
    description: 'Ultra-plush anti-pilling polar fleece providing lightweight insulation and moisture resistance with toggle hem and kangaroo utility pockets.',
    price: '₹599 – ₹1,999',
    fabric: 'Anti-Pilling Micro Polar Fleece (300-360 GSM)',
    colors: ['Deep Slate', 'Onyx Black', 'Off-White Ivory', 'Frost Silver'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '320 GSM',
      composition: '100% Polyester Thermal Microfleece',
      fit: 'Comfort Regular / Streetwear Relaxed',
      customization: ['Subtle Chest Embroidery', 'Silicone Pullers', 'Branded Binding Tapes']
    }
  },
  {
    id: 'winter-sherpa-jacket',
    name: 'Sherpa Fleece Jackets',
    category: 'WINTERS',
    subcategory: 'Sherpa',
    season: 'Winter',
    description: 'High-loft teddy sherpa fleece jacket with contrast tactile nylon chest pocket, funnel neck collar, and mesh breathable interior lining.',
    price: '₹599 – ₹1,999',
    fabric: 'High-Loft Sherpa Fleece + Cordura / Nylon Accents',
    colors: ['Monochrome Black', 'Ecru Cream', 'Slate Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '420 GSM Sherpa',
      composition: '100% Poly Sherpa Exterior / Poly Taffeta Lining',
      fit: 'Boxy Casual',
      customization: ['Rubberized Logo Tags', 'Nylon Pocket Accents', 'Contrast Flatlock Stitches']
    }
  },
  {
    id: 'winter-omniheat-tracksuit',
    name: 'Omniheat Tracksuits',
    category: 'WINTERS',
    subcategory: 'Tracksuits',
    season: 'Winter',
    description: 'Technical thermal tracksuit lined with metallic thermal-reflective dot lining that reflects body warmth while maintaining breathability.',
    price: '₹599 – ₹1,999',
    fabric: 'Hydrophobic Poly-Elastane Shell + Metallic Omni-Thermal Lining',
    colors: ['Slate Black', 'Carbon Gray', 'Steel Silver'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1483721074574-e866a1a44e54?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      composition: 'Technical Weatherproof Shell with Reflective Lining',
      fit: 'Athletic Ergonomic Fit',
      customization: ['Reflective 3M Branding', 'Welded Seam Zips', 'Elasticated Ankle Cuffs']
    }
  },
  {
    id: 'winter-beanies',
    name: 'Beanies',
    category: 'WINTERS',
    subcategory: 'Headwear',
    season: 'Winter',
    description: 'Heavy ribbed knit acrylic/wool fisherman beanies with snug turn-up cuff and stretch retention.',
    price: '₹599 – ₹1,999',
    fabric: '100% Cashmere-Feel Soft Acrylic / Merino Wool Blend',
    colors: ['Jet Black', 'Heather Gray', 'Slate Blue-Black', 'Bone White'],
    sizes: ['One Size Fits All'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      composition: 'High-Gauge Rib Knit',
      fit: 'Classic Fisherman / Cuffed Beanie',
      customization: ['Woven Clamp Labels', 'Embroidered Front Crest', 'Leather Patch']
    }
  },
  {
    id: 'winter-fleece-tracksuit',
    name: 'Fleece Tracksuits',
    category: 'WINTERS',
    subcategory: 'Tracksuits',
    season: 'Winter',
    description: 'Coordinated two-piece heavyweight fleece sweatshirt and jogger pant ensemble with tonal drawstrings and concealed zipper pockets.',
    price: '₹599 – ₹1,999',
    fabric: 'Organic Cotton Brushed Fleece (360 GSM)',
    colors: ['Solid Black', 'Slate Graphite', 'Cool Grey'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '360 GSM',
      composition: '80% Cotton / 20% Recycled Polyester',
      fit: 'Relaxed Tapered Silhouette',
      customization: ['Embroidery', 'Direct to Film (DTF)', 'Custom Branded Aglets']
    }
  },

  // SUMMER PRODUCTS
  {
    id: 'summer-oversized-tshirt',
    name: 'Oversized T-Shirts / Drop Shoulder',
    category: 'SUMMERS',
    subcategory: 'T-Shirts',
    season: 'Summer',
    description: 'Luxury streetwear heavyweight 240-280 GSM combed cotton tee featuring thick 1.25" seamless collar, dropped shoulders, and wide sleeves for boxy drape.',
    price: '₹599 – ₹1,999',
    fabric: '100% Super-Combed Compact Cotton (240-280 GSM)',
    colors: ['Pitch Black', 'Chalk Off-White', 'Slate Charcoal', 'Steel Heather'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=650&q=75&fm=webp',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    featured: true,
    specifications: {
      gsm: '240 - 280 GSM',
      composition: '100% Bio-Washed Ring Spun Cotton',
      fit: 'Drop Shoulder Boxy Street Fit',
      customization: ['Screen Printing', 'High Density Puff', 'Acid Wash / Vintage Mineral Wash', 'DTG']
    }
  },
  {
    id: 'summer-round-neck',
    name: 'Round Neck T-Shirts',
    category: 'SUMMERS',
    subcategory: 'T-Shirts',
    season: 'Summer',
    description: 'Everyday premium essential crewneck t-shirts in soft bio-washed jersey with lycra ribbed neckband and twin-needle reinforced hem.',
    price: '₹599 – ₹1,999',
    fabric: '100% Bio-Washed Combed Cotton (180-200 GSM)',
    colors: ['True Black', 'Pure White', 'Slate Gray', 'Heather Smoke'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '180 - 200 GSM',
      composition: '100% Ringspun Cotton Single Jersey',
      fit: 'Regular Tailored Fit',
      customization: ['Plastisol Printing', 'Water-based Discharge', 'Inner Neck Heat Transfer Print']
    }
  },
  {
    id: 'summer-polo-tshirt',
    name: 'Polo T-Shirts',
    category: 'SUMMERS',
    subcategory: 'Polos',
    season: 'Summer',
    description: 'Refined honeycomb pique cotton polo with structured knit collar, two-button placket with mother-of-pearl finish buttons, and split side vents.',
    price: '₹599 – ₹1,999',
    fabric: 'Honeycomb Pique Cotton (220-250 GSM)',
    colors: ['Jet Black', 'Monochrome Silver Gray', 'Slate Graphite', 'Crisp White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1625910513413-7422be1a90f1?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '230 GSM',
      composition: '100% Combed Cotton Matty Pique',
      fit: 'Smart Casual Regular Fit',
      customization: ['Micro-Embroidery', 'Jacquard Knitted Collar', 'Engraved Buttons']
    }
  },

  // TOP WEAR
  {
    id: 'topwear-oversized-hoodie',
    name: 'Oversized Hoodies',
    category: 'TOP WEAR',
    subcategory: 'Hoodies',
    season: 'All Season',
    description: 'Signature drop-shoulder silhouettes with seamless double hood, reinforced bar-tack kangaroo pockets, and anti-shrinkage pre-shrunk cotton fleece.',
    price: '₹599 – ₹1,999',
    fabric: '100% Cotton French Terry / Brushed Fleece',
    colors: ['Onyx Black', 'Slate Ash', 'Bone Off-White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '400 GSM',
      composition: '100% Super-Combed Cotton',
      fit: 'Ultra Drop Shoulder Boxy Fit',
      customization: ['Screen / Puff / DTG / Emboss']
    }
  },
  {
    id: 'topwear-sweatshirts',
    name: 'Sweatshirts',
    category: 'TOP WEAR',
    subcategory: 'Sweatshirts',
    season: 'Winter',
    description: 'Clean crewneck pullovers in luxury fleece with ribbed side panel inserts and double-stitched flatlock construction.',
    price: '₹599 – ₹1,999',
    fabric: 'Brushed Cotton Loopback Fleece (350 GSM)',
    colors: ['Slate Heather', 'Jet Black', 'Chalk White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '350 GSM',
      composition: 'Cotton Poly Blend for Shape Retention',
      fit: 'Relaxed Fit',
      customization: ['Direct to Garment', 'Minimalist High-Density Print']
    }
  },
  {
    id: 'topwear-oversized-tee',
    name: 'Oversized T-Shirts',
    category: 'TOP WEAR',
    subcategory: 'T-Shirts',
    season: 'Summer',
    description: 'Heavyweight street tees built with 240+ GSM dense jersey for crisp drape and structure that maintains shape after repeated washing.',
    price: '₹599 – ₹1,999',
    fabric: 'Heavyweight Combed Cotton (240 GSM)',
    colors: ['Jet Black', 'Slate Graphite', 'Off-White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '240 GSM',
      composition: '100% Bio-Polished Cotton',
      fit: 'Boxy Drop Shoulder Cut',
      customization: ['Vintage Washes', 'All-Over Screen Print', 'Puff Print']
    }
  },
  {
    id: 'topwear-round-neck',
    name: 'Round Neck T-Shirts',
    category: 'TOP WEAR',
    subcategory: 'T-Shirts',
    season: 'All Season',
    description: 'Bulk staple crewnecks with silicone-softened finish, zero-side-seam tubular body option, and rib neckband.',
    price: '₹599 – ₹1,999',
    fabric: '100% Combed Cotton Single Jersey (180 GSM)',
    colors: ['Solid Black', 'Pure White', 'Slate Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '180 GSM',
      composition: '100% Cotton',
      fit: 'Regular Standard Fit',
      customization: ['Direct Embroidery', 'Plastisol Screen Print']
    }
  },
  {
    id: 'topwear-polo-tshirt',
    name: 'Polo T-Shirts',
    category: 'TOP WEAR',
    subcategory: 'Polos',
    season: 'All Season',
    description: 'Classic corporate & retail pique polos featuring engineered non-curling knit collars and taped neck seams.',
    price: '₹599 – ₹1,999',
    fabric: 'Combed Cotton Pique Knit (240 GSM)',
    colors: ['Jet Black', 'Monochrome Steel', 'Pure White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1625910513413-7422be1a90f1?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '240 GSM',
      composition: '100% Cotton or Cotton-Poly Blend',
      fit: 'Classic Tailored Fit',
      customization: ['Chest Logo Embroidery', 'Custom Tipping on Rib']
    }
  },
  {
    id: 'topwear-jackets',
    name: 'Jackets',
    category: 'TOP WEAR',
    subcategory: 'Jackets',
    season: 'Winter',
    description: 'Versatile outerwear collection encompassing coach jackets, varsity silhouettes, and lined windbreakers.',
    price: '₹599 – ₹1,999',
    fabric: 'Poly-Nylon Taslan / Bonded Fleece / Melton Wool',
    colors: ['Pitch Black', 'Slate Graphite', 'Dark Smoke'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      composition: 'Water Resistant Micro Poly Shell',
      fit: 'Modern Outerwear Fit',
      customization: ['Matte Snaps', 'Waterproof Heat Transfer', 'Sublimated Linings']
    }
  },

  // BOTTOM WEAR
  {
    id: 'bottomwear-trackpants',
    name: 'Trackpants',
    category: 'BOTTOM WEAR',
    subcategory: 'Pants',
    season: 'All Season',
    description: 'Ergonomic performance and lifestyle trackpants with zippered slash pockets, elastic waistband, and internal drawcords.',
    price: '₹599 – ₹1,999',
    fabric: 'Poly-Cotton French Terry / Technical 4-Way Stretch (280-320 GSM)',
    colors: ['Jet Black', 'Slate Smoke', 'Dark Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '300 GSM',
      composition: 'Cotton / Poly / Elastane',
      fit: 'Slim Tapered Cuffed Fit',
      customization: ['Zipper Pockets', 'Reflective Calf Strips', 'Custom Aglet Ties']
    }
  },
  {
    id: 'bottomwear-balloon-fit-tracks',
    name: 'Balloon Fit Tracks',
    category: 'BOTTOM WEAR',
    subcategory: 'Streetwear Pants',
    season: 'All Season',
    description: 'Trend-defining voluminous streetwear silhouette with deep pleats, wide thigh taper, and cinched adjustable ankle toggles.',
    price: '₹599 – ₹1,999',
    fabric: 'Heavyweight Loopback Terry / Cotton Twill (340 GSM)',
    colors: ['Monochrome Black', 'Slate Washed Gray', 'Off-White Concrete'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    featured: true,
    specifications: {
      gsm: '340 GSM',
      composition: '100% Combed Cotton Heavy Terry',
      fit: 'Exaggerated Balloon Wide Fit with Ankle Cinch',
      customization: ['Deep Cargo Pockets', 'Bungee Hem Closures', 'Distressed Mineral Wash']
    }
  },
  {
    id: 'bottomwear-fleece-tracksuit',
    name: 'Fleece Tracksuits',
    category: 'BOTTOM WEAR',
    subcategory: 'Joggers',
    season: 'Winter',
    description: 'Heavyweight thermal fleece joggers featuring deep fleece-lined pockets, heavy ribbed ankle cuffs, and reinforced crotch gusset.',
    price: '₹599 – ₹1,999',
    fabric: 'Premium 380 GSM Brushed Cotton Fleece',
    colors: ['Pitch Black', 'Slate Graphite', 'Heather Smoke'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      gsm: '380 GSM',
      composition: '80% Cotton / 20% Polyester',
      fit: 'Relaxed Streetwear Jogger Fit',
      customization: ['Embroidered Thigh Logo', 'Concealed Zipper Stash Pocket']
    }
  },
  {
    id: 'bottomwear-omniheat-tracksuit',
    name: 'Omniheat Tracksuits',
    category: 'BOTTOM WEAR',
    subcategory: 'Performance Pants',
    season: 'Winter',
    description: 'Cold-weather thermal track pants with interior thermal reflective lining and weather-resistant matte exterior shell.',
    price: '₹599 – ₹1,999',
    fabric: 'DWR Weatherproof Shell + Thermal Reflective Lining',
    colors: ['Black Obsidian', 'Slate Carbon'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    moq: 'MOQ varies by product',
    images: [
      'https://images.unsplash.com/photo-1483721074574-e866a1a44e54?auto=format&fit=crop&w=650&q=75&fm=webp'
    ],
    specifications: {
      composition: 'Bonded Softshell Polyester & Heat-Reflective Dots',
      fit: 'Ergonomic Kinetic Fit',
      customization: ['3M Heat Transfers', 'Waterproof Pocket Welds']
    }
  }
];

export const CATEGORIES = ['ALL', 'WINTERS', 'SUMMERS', 'TOP WEAR', 'BOTTOM WEAR'] as const;
export type CategoryFilter = typeof CATEGORIES[number];
