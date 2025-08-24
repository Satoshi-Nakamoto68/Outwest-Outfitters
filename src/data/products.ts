export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specifications: { [key: string]: string };
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  brand: string;
}

export const products: Product[] = [
  // TENTS
  {
    id: "tent-001",
    name: "Alpine Peak 4-Person Dome Tent fgsd",
    category: "Tents",
    price: 299.99,
    originalPrice: 349.99,
    image: "/images/products/tents/Alpine-Dome-Tent5.jpg",
    images: [
      "/images/products/tents/Alpine-Dome-Tent1.jpg",
      "/images/products/tents/Alpine-Dome-Tent2.jpg",
      "/images/products/tents/Alpine-Dome-Tent3.jpg",
      "/images/products/tents/Alpine-Dome-Tent4.jpg",
      "/images/products/tents/Alpine-Dome-Tent5.jpg",
      "/images/products/tents/Alpine-Dome-Tent6.jpg",
    ],
    description: "Built for serious outdoor enthusiasts, the Alpine Peak offers exceptional weather protection and spacious interior design. Features dual vestibules for gear storage and advanced ventilation system to prevent condensation.",
    specifications: {
      "Capacity": "4 People",
      "Weight": "8.2 lbs",
      "Floor Area": "55 sq ft",
      "Peak Height": "5'4\"",
      "Waterproof Rating": "3000mm",
      "Season": "3-Season",
      "Setup Time": "15 minutes"
    },
    rating: 5,
    reviewCount: 127,
    inStock: true,
    featured: true,
    brand: "Outwest Pro"
  },
  {
    id: "tent-002",
    name: "Wilderness Backpacking Tent 2P",
    category: "Tents",
    price: 199.99,
    image: "/images/products/tents/Wilderness-Backpacking-Tent2.webp",
    images: [
      "/images/products/tents/Wilderness-Backpacking-Tent1.jpg",
      "/images/products/tents/Wilderness-Backpacking-Tent2.webp",
      "/images/products/tents/Wilderness-Backpacking-Tent3.jpg",
      "/images/products/tents/Wilderness-Backpacking-Tent4.jpg",
      "/images/products/tents/Wilderness-Backpacking-Tent5.jpg",
      "/images/products/tents/Wilderness-Backpacking-Tent6.jpg",
      "/images/products/tents/Wilderness-Backpacking-Tent7.webp",
      "/images/products/tents/Wilderness-Backpacking-Tent8.webp",
    ],
    description: "Ultra-lightweight backpacking tent designed for minimalist adventures. Perfect balance of weight, durability, and weather protection for serious backpackers.",
    specifications: {
      "Capacity": "2 People",
      "Weight": "3.1 lbs",
      "Floor Area": "28 sq ft",
      "Peak Height": "3'8\"",
      "Waterproof Rating": "2000mm",
      "Season": "3-Season",
      "Setup Time": "8 minutes"
    },
    rating: 5,
    reviewCount: 89,
    inStock: true,
    brand: "Outwest Lite"
  },
  {
    id: "tent-003",
    name: "Family Base Camp 8-Person Tent",
    category: "Tents",
    price: 449.99,
    image: "/images/products/tents/Family-Camp-Tent1.jpg",
    images: [
      "/images/products/tents/Family-Camp-Tent2.jpg",
      "/images/products/tents/Family-Camp-Tent3.jpg",
      "/images/products/tents/Family-Camp-Tent4.jpg",
      "/images/products/tents/Family-Camp-Tent5.jpg",
      "/images/products/tents/Family-Camp-Tent6.jpg",
    ],
    description: "Spacious family tent with room dividers and multiple entrances. Perfect for car camping and extended stays with premium comfort features.",
    specifications: {
      "Capacity": "8 People",
      "Weight": "18.5 lbs",
      "Floor Area": "140 sq ft",
      "Peak Height": "6'6\"",
      "Waterproof Rating": "5000mm",
      "Season": "3-Season",
      "Setup Time": "25 minutes"
    },
    rating: 5,
    reviewCount: 156,
    inStock: true,
    brand: "Outwest Family"
  },
  {
    id: "tent-004",
    name: "Storm Shield 2-Person 4-Season Tent",
    category: "Tents",
    price: 599.99,
    image: "/images/products/tents/Storm-Shield-2Tent1.jpg",
    images: [
      "/images/products/tents/Storm-Shield-2Tent1.jpg",
      "/images/products/tents/Storm-Shield-2Tent2.jpg",
      "/images/products/tents/Storm-Shield-2Tent3.jpg",
      "/images/products/tents/Storm-Shield-2Tent4.jpg",
      "/images/products/tents/Storm-Shield-2Tent5.jpg",
      "/images/products/tents/Storm-Shield-2Tent6.jpg",
    ],
    description: "Expedition-grade 4-season tent built to withstand harsh alpine conditions. Features reinforced fabric and geodesic design for maximum stability.",
    specifications: {
      "Capacity": "2 People",
      "Weight": "6.8 lbs",
      "Floor Area": "30 sq ft",
      "Peak Height": "3'10\"",
      "Waterproof Rating": "8000mm",
      "Season": "4-Season",
      "Setup Time": "12 minutes"
    },
    rating: 5,
    reviewCount: 73,
    inStock: true,
    featured: true,
    brand: "Outwest Extreme"
  },
  {
    id: "tent-006",
    name: "Summit Breeze 2-Person Backpacking Tent",
    category: "Tents",
    price: 189.99,
    originalPrice: 229.99,
    image: "/images/products/tents/Summit-Breeze-7.jpg",
    images: [
      "/images/products/tents/Summit-Breeze-1.jpg",
      "/images/products/tents/Summit-Breeze-2.jpg",
      "/images/products/tents/Summit-Breeze-3.jpg",
      "/images/products/tents/Summit-Breeze-4.jpg",
      "/images/products/tents/Summit-Breeze-5.jpg",
      "/images/products/tents/Summit-Breeze-6.jpg",
    ],
    description: "Lightweight and compact, the Summit Breeze is perfect for solo or duo backpacking trips. Features quick-setup poles and weather-resistant materials.",
    specifications: {
      "Capacity": "2 People",
      "Weight": "4.5 lbs",
      "Floor Area": "30 sq ft",
      "Peak Height": "3'8\"",
      "Waterproof Rating": "2500mm",
      "Season": "3-Season",
      "Setup Time": "8 minutes"
    },
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    featured: false,
    brand: "TrailBound"
  },
  {
    id: "tent-007",
    name: "Canyon Explorer 6-Person Family Tent",
    category: "Tents",
    price: 429.99,
    originalPrice: 499.99,
    image: "/images/products/tents/Canyon-Explorer-Tent2.jpg",
    images: [
      "/images/products/tents/Canyon-Explorer-Tent1.jpg",
      "/images/products/tents/Canyon-Explorer-Tent3.jpg",
      "/images/products/tents/Canyon-Explorer-Tent4.jpg",
      "/images/products/tents/Canyon-Explorer-Tent5.jpg",
    ],
    description: "Spacious 6-person tent with two separate rooms and large mesh windows for ventilation. Ideal for family camping trips.",
    specifications: {
      "Capacity": "6 People",
      "Weight": "16 lbs",
      "Floor Area": "90 sq ft",
      "Peak Height": "6'5\"",
      "Waterproof Rating": "3000mm",
      "Season": "3-Season",
      "Setup Time": "20 minutes"
    },
    rating: 4.8,
    reviewCount: 58,
    inStock: true,
    featured: true,
    brand: "CampVista"
  },
  {
    id: "tent-008",
    name: "Pine Ridge Ultralight 1-Person Tent",
    category: "Tents",
    price: 149.99,
    originalPrice: 179.99,
    image: "/images/products/tents/Ridge-Ultralight-Tent1.webp",
    images: [
      "/images/products/tents/Ridge-Ultralight-Tent2.webp",
      "/images/products/tents/Ridge-Ultralight-Tent3.webp",
      "/images/products/tents/Ridge-Ultralight-Tent4.webp",
      "/images/products/tents/Ridge-Ultralight-Tent5.webp",
      "/images/products/tents/Ridge-Ultralight-Tent6.webp",
      "/images/products/tents/Ridge-Ultralight-Tent7.webp",
      "/images/products/tents/Ridge-Ultralight-Tent8.webp",
      "/images/products/tents/Ridge-Ultralight-Tent9.webp",
      "/images/products/tents/Ridge-Ultralight-Tent10.webp",
    ],
    description: "An ultralight solo tent designed for minimalists. Packs down small and sets up in minutes, offering excellent rain protection.",
    specifications: {
      "Capacity": "1 Person",
      "Weight": "2.8 lbs",
      "Floor Area": "20 sq ft",
      "Peak Height": "3'2\"",
      "Waterproof Rating": "2000mm",
      "Season": "3-Season",
      "Setup Time": "5 minutes"
    },
    rating: 4.5,
    reviewCount: 41,
    inStock: true,
    featured: false,
    brand: "LightPath Gear"
  },
  {
    id: "tent-009",
    name: "Everest Shield 4-Season Expedition Tent",
    category: "Tents",
    price: 699.99,
    originalPrice: 799.99,
    image: "/images/products/tents/Expedition-Tent5.jpg",
    images: [
      "/images/products/tents/Expedition-Tent1.jpg",
      "/images/products/tents/Expedition-Tent2.jpg",
      "/images/products/tents/Expedition-Tent3.jpg",
      "/images/products/tents/Expedition-Tent4.jpg",
    ],
    description: "Built for extreme conditions, this 4-season tent offers unbeatable wind and snow protection for serious mountaineers.",
    specifications: {
      "Capacity": "3 People",
      "Weight": "10.5 lbs",
      "Floor Area": "48 sq ft",
      "Peak Height": "4'8\"",
      "Waterproof Rating": "5000mm",
      "Season": "4-Season",
      "Setup Time": "15 minutes"
    },
    rating: 5,
    reviewCount: 77,
    inStock: true,
    featured: true,
    brand: "SummitPro"
  },
  {
    id: "tent-010",
    name: "Riverbend Screen House Shelter",
    category: "Tents",
    price: 159.99,
    originalPrice: 199.99,
    image: "/images/products/tents/Screen-House-Shelter5.jpg",
    images: [
      "/images/products/tents/Screen-House-Shelter1.jpg",
      "/images/products/tents/Screen-House-Shelter2.jpg",
      "/images/products/tents/Screen-House-Shelter3.jpg",
      "/images/products/tents/Screen-House-Shelter4.jpg",
      "/images/products/tents/Screen-House-Shelter6.jpg",
    ],
    description: "A spacious screen shelter perfect for picnics and bug-free lounging at the campsite.",
    specifications: {
      "Capacity": "Up to 8 People",
      "Weight": "12 lbs",
      "Floor Area": "120 sq ft",
      "Peak Height": "7'0\"",
      "Waterproof Rating": "1500mm",
      "Season": "3-Season",
      "Setup Time": "12 minutes"
    },
    rating: 4.6,
    reviewCount: 35,
    inStock: true,
    featured: false,
    brand: "NatureNest"
  },
  {
    id: "tent-011",
    name: "Glacier View Dome Tent",
    category: "Tents",
    price: 249.99,
    originalPrice: 299.99,
    image: "/images/products/tents/View-Dome-Tent1.jpg",
    images: [
      "/images/products/tents/View-Dome-Tent2.jpg",
      "/images/products/tents/View-Dome-Tent3.jpg",
      "/images/products/tents/View-Dome-Tent4.jpg",
      "/images/products/tents/View-Dome-Tent5.jpg",
      "/images/products/tents/View-Dome-Tent6.jpg",
    ],
    description: "A durable dome tent with extra headroom and large vestibules, ideal for weekend camping trips.",
    specifications: {
      "Capacity": "4 People",
      "Weight": "9 lbs",
      "Floor Area": "60 sq ft",
      "Peak Height": "5'0\"",
      "Waterproof Rating": "3000mm",
      "Season": "3-Season",
      "Setup Time": "10 minutes"
    },
    rating: 4.7,
    reviewCount: 83,
    inStock: true,
    featured: false,
    brand: "PeakTrail"
  },
  {
    id: "tent-012",
    name: "Sahara Shade Desert Tent",
    category: "Tents",
    price: 319.99,
    originalPrice: 379.99,
    image: "/images/products/tents/Shade-Deser-Tent1.jpg",
    images: [
      "/images/products/tents/Shade-Deser-Tent2.jpg",
      "/images/products/tents/Shade-Deser-Tent3.jpg",
      "/images/products/tents/Shade-Deser-Tent4.jpg",
      "/images/products/tents/Shade-Deser-Tent5.jpg",
    ],
    description: "Specially designed for hot climates, this tent features reflective fabric and extra ventilation panels.",
    specifications: {
      "Capacity": "3 People",
      "Weight": "7.8 lbs",
      "Floor Area": "50 sq ft",
      "Peak Height": "4'6\"",
      "Waterproof Rating": "2000mm",
      "Season": "3-Season",
      "Setup Time": "12 minutes"
    },
    rating: 4.4,
    reviewCount: 49,
    inStock: true,
    featured: false,
    brand: "SunTrek"
  },
  {
    id: "tent-013",
    name: "Forest Haven Canvas Tent",
    category: "Tents",
    price: 549.99,
    originalPrice: 629.99,
    image: "/images/products/tents/Haven-Canvas-Tent2.jpg",
    images: [
      "/images/products/tents/Haven-Canvas-Tent1.jpg",
      "/images/products/tents/Haven-Canvas-Tent3.jpg",
      "/images/products/tents/Haven-Canvas-Tent5.jpg",
      "/images/products/tents/Haven-Canvas-Tent6.jpg",
    ],
    description: "Classic canvas tent offering excellent insulation and a cozy feel for extended camping trips.",
    specifications: {
      "Capacity": "5 People",
      "Weight": "28 lbs",
      "Floor Area": "80 sq ft",
      "Peak Height": "7'2\"",
      "Waterproof Rating": "3500mm",
      "Season": "4-Season",
      "Setup Time": "25 minutes"
    },
    rating: 4.9,
    reviewCount: 64,
    inStock: true,
    featured: true,
    brand: "Heritage Camp"
  },
  {
    id: "tent-014",
    name: "Mountain Trail Tunnel Tent",
    category: "Tents",
    price: 379.99,
    originalPrice: 449.99,
    image: "/images/products/tents/Trail-Tunnel-Tent8.jpg",
    images: [
      "/images/products/tents/Trail-Tunnel-Tent1.jpg",
      "/images/products/tents/Trail-Tunnel-Tent3.jpg",
      "/images/products/tents/Trail-Tunnel-Tent4.jpg",
      "/images/products/tents/Trail-Tunnel-Tent5.jpg",
      "/images/products/tents/Trail-Tunnel-Tent6.jpg",
      "/images/products/tents/Trail-Tunnel-Tent7.jpg",
      "/images/products/tents/Trail-Tunnel-Tent2.jpg",
    ],
    description: "Tunnel-shaped tent offering excellent wind stability and multiple entrances for easy access.",
    specifications: {
      "Capacity": "4 People",
      "Weight": "11 lbs",
      "Floor Area": "65 sq ft",
      "Peak Height": "5'8\"",
      "Waterproof Rating": "4000mm",
      "Season": "4-Season",
      "Setup Time": "18 minutes"
    },
    rating: 4.6,
    reviewCount: 52,
    inStock: true,
    featured: false,
    brand: "WindPeak"
  },
  {
    id: "tent-015",
    name: "Lakeside Retreat Cabin Tent",
    category: "Tents",
    price: 499.99,
    originalPrice: 579.99,
    image: "/images/products/tents/Lakesid-Retreat-Tent2.jpg",
    images: [
      "/images/products/tents/Lakesid-Retreat-Tent1.jpg",
      "/images/products/tents/Lakesid-Retreat-Tent3.jpg",
      "/images/products/tents/Lakesid-Retreat-Tent4.jpg",
      "/images/products/tents/Lakesid-Retreat-Tent5.jpg",
    ],
    description: "Spacious cabin-style tent with tall ceilings and large windows for a comfortable glamping experience.",
    specifications: {
      "Capacity": "8 People",
      "Weight": "22 lbs",
      "Floor Area": "140 sq ft",
      "Peak Height": "7'8\"",
      "Waterproof Rating": "3000mm",
      "Season": "3-Season",
      "Setup Time": "25 minutes"
    },
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    featured: true,
    brand: "ComfortCamp"
  },
  {
    id: "tent-016",
    name: "Explorer 2-Person Dome Tent",
    category: "Tents",
    price: 159.99,
    originalPrice: 189.99,
    image: "/images/products/tents/Explorer-2P-1.jpg",
    images: [
      "/images/products/tents/Explorer-2P-2.jpg",
      "/images/products/tents/Explorer-2P-3.jpg",
      "/images/products/tents/Explorer-2P-4.jpg",
      "/images/products/tents/Explorer-2P-5.jpg"
    ],
    description: "Lightweight 2-person dome tent with quick setup system, ideal for backpacking and weekend trips.",
    specifications: {
      "Capacity": "2 Persons",
      "Weight": "5.8 lbs",
      "Dimensions": "84\" x 50\" x 42\"",
      "Material": "210T Polyester",
      "Waterproof Rating": "3000mm",
      "Frame": "Fiberglass Poles"
    },
    rating: 5,
    reviewCount: 134,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "tent-017",
    name: "Summit 4-Person Family Tent",
    category: "Tents",
    price: 229.99,
    originalPrice: 269.99,
    image: "/images/products/tents/Summit-4P-1.jpg",
    images: [
      "/images/products/tents/Summit-4P-2.jpg",
      "/images/products/tents/Summit-4P-3.jpg",
      "/images/products/tents/Summit-4P-4.jpg",
      "/images/products/tents/Summit-4P-5.jpg"
    ],
    description: "Spacious 4-person family tent with large vestibule, mesh windows, and rainfly for all-weather camping.",
    specifications: {
      "Capacity": "4 Persons",
      "Weight": "11.2 lbs",
      "Dimensions": "108\" x 84\" x 60\"",
      "Material": "Polyester 68D",
      "Waterproof Rating": "4000mm",
      "Frame": "Aluminum Poles"
    },
    rating: 5,
    reviewCount: 98,
    inStock: true,
    featured: true,
    brand: "HighTrail"
  },
  {
    id: "tent-018",
    name: "Backpacker Ultralight Tent 1P",
    category: "Tents",
    price: 189.99,
    image: "/images/products/tents/Backpacker-1P-1.jpg",
    images: [
      "/images/products/tents/Backpacker-1P-2.jpg",
      "/images/products/tents/Backpacker-1P-3.jpg",
      "/images/products/tents/Backpacker-1P-4.jpg",
      "/images/products/tents/Backpacker-1P-5.jpg",
      "/images/products/tents/Backpacker-1P-6.jpg"
    ],
    description: "Solo backpacking tent with ultralight design and compact storage. Quick pitch setup for long treks.",
    specifications: {
      "Capacity": "1 Person",
      "Weight": "2.9 lbs",
      "Dimensions": "84\" x 36\" x 38\"",
      "Material": "20D Ripstop Nylon",
      "Waterproof Rating": "5000mm",
      "Frame": "Aluminum Alloy"
    },
    rating: 4,
    reviewCount: 73,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "tent-019",
    name: "Desert Shield 6-Person Tent",
    category: "Tents",
    price: 349.99,
    image: "/images/products/tents/Desert-6P-1.jpg",
    images: [
      "/images/products/tents/Desert-6P-2.jpg",
      "/images/products/tents/Desert-6P-3.jpg",
      "/images/products/tents/Desert-6P-4.jpg",
      "/images/products/tents/Desert-6P-5.jpg",
      "/images/products/tents/Desert-6P-6.jpg",
      "/images/products/tents/Desert-6P-7.jpg",
      "/images/products/tents/Desert-6P-8.jpg"
    ],
    description: "Durable 6-person tent with dual entrances, excellent ventilation, and heavy-duty waterproof fabric.",
    specifications: {
      "Capacity": "6 Persons",
      "Weight": "18 lbs",
      "Dimensions": "120\" x 108\" x 78\"",
      "Material": "210D Oxford",
      "Waterproof Rating": "5000mm",
      "Frame": "Fiberglass & Steel"
    },
    rating: 5,
    reviewCount: 102,
    inStock: true,
    brand: "Summit Gear"
  },
  {
    id: "tent-020",
    name: "Luxury Glamping Bell Tent",
    category: "Tents",
    price: 799.99,
    originalPrice: 899.99,
    image: "/images/products/tents/Bell-Glamping-1.jpg",
    images: [
      "/images/products/tents/Bell-Glamping-2.jpg",
      "/images/products/tents/Bell-Glamping-3.jpg",
      "/images/products/tents/Bell-Glamping-4.jpg",
      "/images/products/tents/Bell-Glamping-5.jpg",
      "/images/products/tents/Bell-Glamping-6.jpg"
    ],
    description: "Spacious canvas bell tent for luxury glamping. Breathable cotton fabric with stove jack and multiple windows.",
    specifications: {
      "Capacity": "8 Persons",
      "Weight": "56 lbs",
      "Dimensions": "196\" diameter x 118\" height",
      "Material": "100% Cotton Canvas",
      "Waterproof Rating": "3000mm",
      "Frame": "Steel Poles"
    },
    rating: 5,
    reviewCount: 44,
    inStock: true,
    featured: true,
    brand: "Outwest Comfort"
  },
  {
    id: "tent-021",
    name: "Pop-Up Instant Tent 3P",
    category: "Tents",
    price: 149.99,
    image: "/images/products/tents/Popup-3P-1.jpg",
    images: [
      "/images/products/tents/Popup-3P-2.jpg",
      "/images/products/tents/Popup-3P-3.jpg",
      "/images/products/tents/Popup-3P-4.jpg",
      "/images/products/tents/Popup-3P-5.jpg",
      "/images/products/tents/Popup-3P-6.jpg"
    ],
    description: "Easy pop-up 3-person tent with automatic spring frame. Perfect for festivals, beach trips, or quick getaways.",
    specifications: {
      "Capacity": "3 Persons",
      "Weight": "7.1 lbs",
      "Dimensions": "86\" x 72\" x 50\"",
      "Material": "190T Polyester",
      "Waterproof Rating": "2000mm",
      "Frame": "Spring Steel"
    },
    rating: 4,
    reviewCount: 87,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "tent-022",
    name: "Extreme Weather Mountaineering Tent",
    category: "Tents",
    price: 599.99,
    image: "/images/products/tents/Mountaineering-1.jpg",
    images: [
      "/images/products/tents/Mountaineering-2.jpg",
      "/images/products/tents/Mountaineering-3.jpg",
      "/images/products/tents/Mountaineering-4.jpg",
      "/images/products/tents/Mountaineering-5.jpg",
      "/images/products/tents/Mountaineering-6.jpg"
    ],
    description: "Professional-grade mountaineering tent with geodesic structure, snow skirt, and extreme weather protection.",
    specifications: {
      "Capacity": "2 Persons",
      "Weight": "9.6 lbs",
      "Dimensions": "88\" x 54\" x 45\"",
      "Material": "40D Ripstop Nylon",
      "Waterproof Rating": "6000mm",
      "Frame": "Aluminum DAC Poles"
    },
    rating: 5,
    reviewCount: 65,
    inStock: true,
    featured: true,
    brand: "HighTrail"
  },
  {
    id: "tent-023",
    name: "Cabin Style 10-Person Tent",
    category: "Tents",
    price: 499.99,
    originalPrice: 559.99,
    image: "/images/products/tents/Cabin-10P-1.jpg",
    images: [
      "/images/products/tents/Cabin-10P-2.jpg",
      "/images/products/tents/Cabin-10P-3.jpg",
      "/images/products/tents/Cabin-10P-4.jpg",
      "/images/products/tents/Cabin-10P-5.jpg",
      "/images/products/tents/Cabin-10P-6.jpg"
    ],
    description: "Massive 10-person cabin tent with tall ceilings, room dividers, and large windows for family camping.",
    specifications: {
      "Capacity": "10 Persons",
      "Weight": "32 lbs",
      "Dimensions": "240\" x 120\" x 84\"",
      "Material": "Polyester Oxford",
      "Waterproof Rating": "4000mm",
      "Frame": "Steel & Fiberglass"
    },
    rating: 5,
    reviewCount: 89,
    inStock: true,
    brand: "Outwest Comfort"
  },
  {
    id: "tent-024",
    name: "Ultralight Bivy Tent",
    category: "Tents",
    price: 129.99,
    image: "/images/products/tents/Bivy-1.jpg",
    images: [
      "/images/products/tents/Bivy-2.jpg",
      "/images/products/tents/Bivy-3.jpg",
      "/images/products/tents/Bivy-4.jpg",
      "/images/products/tents/Bivy-5.jpg",
      "/images/products/tents/Bivy-6.jpg"
    ],
    description: "Compact bivy tent for solo adventurers. Waterproof, windproof, and packs down ultra-small.",
    specifications: {
      "Capacity": "1 Person",
      "Weight": "2.1 lbs",
      "Dimensions": "82\" x 30\" x 28\"",
      "Material": "15D Nylon",
      "Waterproof Rating": "5000mm",
      "Frame": "Aluminum"
    },
    rating: 4,
    reviewCount: 52,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "tent-025",
    name: "Family Tunnel Tent 8P",
    category: "Tents",
    price: 549.99,
    image: "/images/products/tents/Tunnel-8P-1.jpg",
    images: [
      "/images/products/tents/Tunnel-8P-2.jpg",
      "/images/products/tents/Tunnel-8P-3.jpg",
      "/images/products/tents/Tunnel-8P-4.jpg",
      "/images/products/tents/Tunnel-8P-5.jpg",
      "/images/products/tents/Tunnel-8P-6.jpg"
    ],
    description: "Large tunnel tent with multiple rooms and storage areas. Perfect for extended family camping trips.",
    specifications: {
      "Capacity": "8 Persons",
      "Weight": "28 lbs",
      "Dimensions": "216\" x 110\" x 78\"",
      "Material": "210T Polyester",
      "Waterproof Rating": "5000mm",
      "Frame": "Fiberglass Poles"
    },
    rating: 5,
    reviewCount: 74,
    inStock: true,
    featured: true,
    brand: "Summit Gear"
  },
  


  // SLEEPING BAGS & PADS
  {
    id: "sleep-001",
    name: "Arctic Comfort Down Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 249.99,
    originalPrice: 299.99,
    image: "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag1.png",
    images: [
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag2.png",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag1.png",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag3.png",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag4.jpg",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag5.jpg",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag6.jpg",
      "/images/products/sleeping-bags/Arctic-Comfort-Sleeping-Bag7.jpg",
    ],
    description: "Premium 650-fill down sleeping bag rated for temperatures down to 20°F. Features water-resistant shell and anti-snag zipper system.",
    specifications: {
      "Temperature Rating": "20°F",
      "Fill Type": "650 Fill Down",
      "Weight": "2.8 lbs",
      "Length": "Regular (6'0\")",
      "Stuff Sack": "8\" x 16\"",
      "Shell Material": "Ripstop Nylon"
    },
    rating: 5,
    reviewCount: 203,
    inStock: true,
    featured: true,
    brand: "Outwest Pro"
  },
  {
    id: "sleep-002",
    name: "Trail Lightweight Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 89.99,
    image: "/images/products/sleeping-bags/Trail-Lightweight-Pad2.jpg",
    images: [
      "/images/products/sleeping-bags/Trail-Lightweight-Pad1.jpg",
      "/images/products/sleeping-bags/Trail-Lightweight-Pad3.jpg",
      "/images/products/sleeping-bags/Trail-Lightweight-Pad4.jpg",
      "/images/products/sleeping-bags/Trail-Lightweight-Pad5.jpg",
    ],
    description: "Self-inflating sleeping pad with superior insulation and comfort. Perfect for backpacking with minimal weight penalty.",
    specifications: {
      "R-Value": "4.2",
      "Weight": "1.2 lbs",
      "Dimensions": "72\" x 20\" x 2.5\"",
      "Packed Size": "4\" x 9\"",
      "Material": "75D Polyester"
    },
    rating: 5,
    reviewCount: 145,
    inStock: true,
    brand: "Outwest Lite"
  },
  {
    id: "sleep-003",
    name: "Summer Breeze Synthetic Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 129.99,
    image: "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping6.jpg",
    images: [
      "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping1.jpg",
      "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping2.jpg",
      "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping3.jpg",
      "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping4.jpg",
      "/images/products/sleeping-bags/Breeze-Synthetic-Sleeping5.jpg",
    ],
    description: "Versatile synthetic sleeping bag perfect for warm weather camping. Quick-drying and machine washable for easy maintenance.",
    specifications: {
      "Temperature Rating": "40°F",
      "Fill Type": "Synthetic",
      "Weight": "3.2 lbs",
      "Length": "Regular (6'0\")",
      "Stuff Sack": "10\" x 18\"",
      "Shell Material": "Polyester Taffeta"
    },
    rating: 5,
    reviewCount: 87,
    inStock: true,
    brand: "Outwest Classic"
  },
  {
    id: "sleep-004",
    name: "Deluxe Self-Inflating Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 159.99,
    image: "/images/products/sleeping-bags/Self-Inflating-Sleeping1.jpg",
    images: [
      "/images/products/sleeping-bags/Self-Inflating-Sleeping2.jpg",
      "/images/products/sleeping-bags/Self-Inflating-Sleeping3.jpg",
      "/images/products/sleeping-bags/Self-Inflating-Sleeping4.jpg",
      "/images/products/sleeping-bags/Self-Inflating-Sleeping5.jpg",
      "/images/products/sleeping-bags/Self-Inflating-Sleeping6.jpg",
    ],
    description: "Premium self-inflating pad with extra thickness for ultimate comfort. Features built-in pillow and repair kit included.",
    specifications: {
      "R-Value": "6.5",
      "Weight": "2.8 lbs",
      "Dimensions": "72\" x 25\" x 4\"",
      "Packed Size": "6\" x 12\"",
      "Material": "75D Brushed Polyester"
    },
    rating: 5,
    reviewCount: 112,
    inStock: true,
    brand: "Outwest Pro"
  },
  {
    id: "sleep-005",
    name: "EverRest Mummy Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 179.99,
    originalPrice: 219.99,
    image: "/images/products/sleeping-bags/EverRest-Mummy-sleep1.jpg",
    images: [
      "/images/products/sleeping-bags/EverRest-Mummy-sleep2.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy-sleep3.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy-sleep4.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy-sleep5.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy-sleep6.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy-sleep7.jpg",
    ],
    description: "Lightweight mummy-style sleeping bag rated for 25°F with draft collar and ergonomic hood for maximum warmth.",
    specifications: {
      "Temperature Rating": "25°F",
      "Fill Type": "Synthetic Hollow Fiber",
      "Weight": "3.2 lbs",
      "Length": "Regular (6'0\")",
      "Stuff Sack": "9\" x 15\"",
      "Shell Material": "Ripstop Polyester"
    },
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    featured: false,
    brand: "TrailBound"
  },
  {
    id: "sleep-006",
    name: "Summit UltraLight Down Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 329.99,
    originalPrice: 389.99,
    image: "/images/products/sleeping-bags/Summit-UltraLight-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Summit-UltraLight-Bag2.jpg",
      "/images/products/sleeping-bags/Summit-UltraLight-Bag3.jpg",
      "/images/products/sleeping-bags/Summit-UltraLight-Bag4.jpg",
      "/images/products/sleeping-bags/Summit-UltraLight-Bag5.jpg",
      "/images/products/sleeping-bags/Summit-UltraLight-Bag6.jpg",
      "/images/products/sleeping-bags/Summit-UltraLight-Bag7.jpg",
    ],
    description: "Ultralight 850-fill down sleeping bag rated to 15°F. Perfect for backpackers needing warmth without weight.",
    specifications: {
      "Temperature Rating": "15°F",
      "Fill Type": "850 Fill Goose Down",
      "Weight": "1.9 lbs",
      "Length": "Long (6'6\")",
      "Stuff Sack": "7\" x 14\"",
      "Shell Material": "20D Nylon"
    },
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    featured: true,
    brand: "SummitPro"
  },
  {
    id: "sleep-007",
    name: "Canyon Comfort Double Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 199.99,
    originalPrice: 249.99,
    image: "/images/products/sleeping-bags/Canyon-Double-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Canyon-Double-Bag2.jpg",
      "/images/products/sleeping-bags/Canyon-Double-Bag3.jpg",
      "/images/products/sleeping-bags/Canyon-Double-Bag4.jpg",
      "/images/products/sleeping-bags/Canyon-Double-Bag5.jpg",
      "/images/products/sleeping-bags/Canyon-Double-Bag6.jpg"
    ],
    description: "Spacious double sleeping bag for couples, rated to 30°F with quilted interior for comfort.",
    specifications: {
      "Temperature Rating": "30°F",
      "Fill Type": "Synthetic Insulation",
      "Weight": "7.5 lbs",
      "Length": "Queen Size",
      "Stuff Sack": "15\" x 25\"",
      "Shell Material": "Polyester Taffeta"
    },
    rating: 4.6,
    reviewCount: 88,
    inStock: true,
    featured: false,
    brand: "CampVista"
  },
  {
    id: "sleep-008",
    name: "Alpine Shield 4-Season Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 449.99,
    originalPrice: 529.99,
    image: "/images/products/sleeping-bags/Season-Sleeping-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Season-Sleeping-Bag2.jpg",
      "/images/products/sleeping-bags/Season-Sleeping-Bag3.jpg",
      "/images/products/sleeping-bags/Season-Sleeping-Bag4.jpg",
    ],
    description: "Expedition-grade 4-season sleeping bag rated to -10°F. Ideal for mountaineering and extreme cold adventures.",
    specifications: {
      "Temperature Rating": "-10°F",
      "Fill Type": "800 Fill Hydrophobic Down",
      "Weight": "4.5 lbs",
      "Length": "Long (6'6\")",
      "Stuff Sack": "10\" x 18\"",
      "Shell Material": "30D Ripstop Nylon"
    },
    rating: 5,
    reviewCount: 54,
    inStock: true,
    featured: true,
    brand: "SummitPro"
  },
  {
    id: "sleep-009",
    name: "TrailLite Self-Inflating Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 89.99,
    originalPrice: 119.99,
    image: "/images/products/sleeping-bags/TrailLite-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/TrailLite-Pad2.jpg",
      "/images/products/sleeping-bags/TrailLite-Pad3.jpg",
      "/images/products/sleeping-bags/TrailLite-Pad4.jpg",
      "/images/products/sleeping-bags/TrailLite-Pad5.jpg",
      "/images/products/sleeping-bags/TrailLite-Pad6.jpg"
    ],
    description: "Durable self-inflating sleeping pad with 1.5-inch foam core for comfort and insulation.",
    specifications: {
      "R-Value": "3.2",
      "Weight": "2.1 lbs",
      "Dimensions": "72\" x 20\"",
      "Packed Size": "6\" x 20\"",
      "Material": "Polyurethane Foam"
    },
    rating: 4.5,
    reviewCount: 123,
    inStock: true,
    featured: false,
    brand: "PeakTrail"
  },
  {
    id: "sleep-010",
    name: "Evergreen Foam Roll Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/products/sleeping-bags/Evergreen-Foam-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/Evergreen-Foam-Pad2.png",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad3.jpg",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad4.jpg",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad5.jpg",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad6.jpg",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad7.jpg",
      "/images/products/sleeping-bags/Evergreen-Foam-Pad8.png",
    ],
    description: "Lightweight closed-cell foam sleeping pad offering insulation and durability at an affordable price.",
    specifications: {
      "R-Value": "2.0",
      "Weight": "1.3 lbs",
      "Dimensions": "72\" x 22\"",
      "Packed Size": "22\" x 7\" (rolled)",
      "Material": "Closed-cell Foam"
    },
    rating: 4.3,
    reviewCount: 76,
    inStock: true,
    featured: false,
    brand: "NatureNest"
  },
  {
    id: "sleep-011",
    name: "Glacier Rest Insulated Air Pad",
    category: "Sleeping Bags & Pads",
    price: 139.99,
    originalPrice: 169.99,
    image: "/images/products/sleeping-bags/Rest-Insulated-Air1.jpg",
    images: [
      "/images/products/sleeping-bags/Rest-Insulated-Air2.jpg",
      "/images/products/sleeping-bags/Rest-Insulated-Air3.jpg",
      "/images/products/sleeping-bags/Rest-Insulated-Air4.jpg",
      "/images/products/sleeping-bags/Rest-Insulated-Air5.jpg",
    ],
    description: "Inflatable sleeping pad with synthetic insulation for cold-weather camping. Compact and lightweight for backpacking.",
    specifications: {
      "R-Value": "4.0",
      "Weight": "1.8 lbs",
      "Dimensions": "72\" x 21\"",
      "Packed Size": "5\" x 10\"",
      "Material": "Nylon/Polyester"
    },
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    featured: true,
    brand: "SunTrek"
  },
  {
    id: "sleep-012",
    name: "Riverbend Kids Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 69.99,
    originalPrice: 89.99,
    image: "/images/products/sleeping-bags/Riverbend-Kids-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Riverbend-Kids-Bag2.jpg",
      "/images/products/sleeping-bags/Riverbend-Kids-Bag3.jpg",
      "/images/products/sleeping-bags/Riverbend-Kids-Bag4.jpg",
      "/images/products/sleeping-bags/Riverbend-Kids-Bag5.jpg",
      "/images/products/sleeping-bags/Riverbend-Kids-Bag6.jpg",
      "/images/products/sleeping-bags/Riverbend-Kids-Bag7.jpg"
    ],
    description: "Child-friendly sleeping bag with fun design, rated for 40°F. Machine washable and durable.",
    specifications: {
      "Temperature Rating": "40°F",
      "Fill Type": "Synthetic",
      "Weight": "2.0 lbs",
      "Length": "5'0\"",
      "Stuff Sack": "8\" x 14\"",
      "Shell Material": "Polyester"
    },
    rating: 4.8,
    reviewCount: 51,
    inStock: true,
    featured: false,
    brand: "CampVista"
  },
  {
    id: "sleep-013",
    name: "CozyNest Rectangular Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 119.99,
    originalPrice: 149.99,
    image: "/images/products/sleeping-bags/CozyNest-Rectangular-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag2.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag3.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag4.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag5.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag6.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag7.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag8.jpg",
      "/images/products/sleeping-bags/CozyNest-Rectangular-Bag9.jpg",
    ],
    description: "Spacious rectangular sleeping bag for comfort and ventilation. Rated for 35°F.",
    specifications: {
      "Temperature Rating": "35°F",
      "Fill Type": "Synthetic",
      "Weight": "3.6 lbs",
      "Length": "6'4\"",
      "Stuff Sack": "10\" x 17\"",
      "Shell Material": "Polyester"
    },
    rating: 4.4,
    reviewCount: 73,
    inStock: true,
    featured: false,
    brand: "Heritage Camp"
  },
  {
    id: "sleep-014",
    name: "Nomad Expedition Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 189.99,
    originalPrice: 229.99,
    image: "/images/products/sleeping-bags/Expedition-Sleeping-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/Expedition-Sleeping-Pad2.jpg",
      "/images/products/sleeping-bags/Expedition-Sleeping-Pad3.jpg",
      "/images/products/sleeping-bags/Expedition-Sleeping-Pad4.jpg",
      "/images/products/sleeping-bags/Expedition-Sleeping-Pad5.jpg",
      "/images/products/sleeping-bags/Expedition-Sleeping-Pad6.jpg",
    ],
    description: "Heavy-duty inflatable pad designed for long expeditions. Features reinforced fabric and high R-value for cold climates.",
    specifications: {
      "R-Value": "5.8",
      "Weight": "2.9 lbs",
      "Dimensions": "78\" x 25\"",
      "Packed Size": "7\" x 12\"",
      "Material": "TPU-Coated Nylon"
    },
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    featured: true,
    brand: "WindPeak"
  },
  {
    id: "sleep-015",
    name: "EverRest Mummy Sleeping Bag -15°C",
    category: "Sleeping Bags & Pads",
    price: 189.99,
    originalPrice: 229.99,
    image: "/images/products/sleeping-bags/EverRest-Mummy1.jpg",
    images: [
      "/images/products/sleeping-bags/EverRest-Mummy2.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy3.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy4.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy5.jpg",
      "/images/products/sleeping-bags/EverRest-Mummy6.jpg"
    ],
    description: "Warm mummy-style sleeping bag rated to -15°C, ideal for alpine camping and cold-weather expeditions.",
    specifications: {
      "Temperature Rating": "-15°C",
      "Weight": "3.4 lbs",
      "Dimensions": "84\" x 32\"",
      "Insulation": "Down 700FP",
      "Shell": "20D Ripstop Nylon"
    },
    rating: 5,
    reviewCount: 112,
    inStock: true,
    featured: true,
    brand: "Summit Gear"
  },
  {
    id: "sleep-016",
    name: "TrailMate Ultralight Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 89.99,
    image: "/images/products/sleeping-bags/TrailMate-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/TrailMate-Pad2.jpg",
      "/images/products/sleeping-bags/TrailMate-Pad3.jpg",
      "/images/products/sleeping-bags/TrailMate-Pad4.jpg",
      "/images/products/sleeping-bags/TrailMate-Pad5.jpg",
      "/images/products/sleeping-bags/TrailMate-Pad6.jpg",
      "/images/products/sleeping-bags/TrailMate-Pad7.jpg"
    ],
    description: "Compact and ultralight inflatable sleeping pad for backpacking comfort on any terrain.",
    specifications: {
      "R-Value": "3.2",
      "Weight": "1.1 lbs",
      "Dimensions": "72\" x 22\" x 2.5\"",
      "Material": "30D Nylon TPU",
      "Packed Size": "9\" x 3.5\""
    },
    rating: 4,
    reviewCount: 89,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "sleep-017",
    name: "ZenCamp Double Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 149.99,
    image: "/images/products/sleeping-bags/ZenCamp-Double1.jpg",
    images: [
      "/images/products/sleeping-bags/ZenCamp-Double2.jpg",
      "/images/products/sleeping-bags/ZenCamp-Double3.jpg",
      "/images/products/sleeping-bags/ZenCamp-Double4.jpg",
      "/images/products/sleeping-bags/ZenCamp-Double5.jpg"
    ],
    description: "Spacious double sleeping bag for two people, with detachable design to use as singles.",
    specifications: {
      "Temperature Rating": "0°C",
      "Weight": "7.6 lbs",
      "Dimensions": "90\" x 65\"",
      "Insulation": "Synthetic Hollow Fiber",
      "Shell": "190T Polyester"
    },
    rating: 5,
    reviewCount: 64,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "sleep-018",
    name: "Luxury Self-Inflating Camping Pad",
    category: "Sleeping Bags & Pads",
    price: 129.99,
    image: "/images/products/sleeping-bags/Luxury-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/Luxury-Pad2.jpg",
      "/images/products/sleeping-bags/Luxury-Pad3.jpg",
      "/images/products/sleeping-bags/Luxury-Pad4.jpg",
      "/images/products/sleeping-bags/Luxury-Pad5.jpg",
      "/images/products/sleeping-bags/Luxury-Pad6.jpg"
    ],
    description: "Extra-thick self-inflating pad for maximum comfort during car camping or glamping trips.",
    specifications: {
      "R-Value": "5.0",
      "Weight": "6.2 lbs",
      "Dimensions": "78\" x 30\" x 3\"",
      "Material": "75D Polyester",
      "Packed Size": "30\" x 10\""
    },
    rating: 5,
    reviewCount: 48,
    inStock: true,
    featured: true,
    brand: "Outwest Comfort"
  },
  {
    id: "sleep-019",
    name: "Kids Adventure Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 69.99,
    image: "/images/products/sleeping-bags/Kids-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Kids-Bag2.jpg",
      "/images/products/sleeping-bags/Kids-Bag3.jpg",
      "/images/products/sleeping-bags/Kids-Bag4.jpg",
      "/images/products/sleeping-bags/Kids-Bag5.jpg",
      "/images/products/sleeping-bags/Kids-Bag6.jpg"
    ],
    description: "Fun, lightweight sleeping bag for kids with colorful prints and cozy insulation.",
    specifications: {
      "Temperature Rating": "10°C",
      "Weight": "2.5 lbs",
      "Dimensions": "64\" x 28\"",
      "Insulation": "Synthetic Polyester",
      "Shell": "Polyester 190T"
    },
    rating: 4,
    reviewCount: 37,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "sleep-020",
    name: "Expedition Extreme Down Sleeping Bag -30°C",
    category: "Sleeping Bags & Pads",
    price: 399.99,
    originalPrice: 459.99,
    image: "/images/products/sleeping-bags/Expedition-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Expedition-Bag2.jpg",
      "/images/products/sleeping-bags/Expedition-Bag3.jpg",
      "/images/products/sleeping-bags/Expedition-Bag4.jpg",
      "/images/products/sleeping-bags/Expedition-Bag5.jpg",
      "/images/products/sleeping-bags/Expedition-Bag6.jpg",
      "/images/products/sleeping-bags/Expedition-Bag7.jpg"
    ],
    description: "Professional expedition sleeping bag with 900FP goose down, rated for extreme cold -30°C.",
    specifications: {
      "Temperature Rating": "-30°C",
      "Weight": "4.9 lbs",
      "Dimensions": "86\" x 34\"",
      "Insulation": "900FP Goose Down",
      "Shell": "15D Pertex Quantum"
    },
    rating: 5,
    reviewCount: 55,
    inStock: true,
    featured: true,
    brand: "HighTrail"
  },
  {
    id: "sleep-021",
    name: "Compact Foam Sleeping Pad",
    category: "Sleeping Bags & Pads",
    price: 49.99,
    image: "/images/products/sleeping-bags/Foam-Pad1.jpg",
    images: [
      "/images/products/sleeping-bags/Foam-Pad2.jpg",
      "/images/products/sleeping-bags/Foam-Pad3.jpg",
      "/images/products/sleeping-bags/Foam-Pad4.jpg",
      "/images/products/sleeping-bags/Foam-Pad5.jpg",
      "/images/products/sleeping-bags/Foam-Pad6.jpg",
      "/images/products/sleeping-bags/Foam-Pad7.jpg"
    ],
    description: "Durable closed-cell foam pad for lightweight insulation and reliable comfort.",
    specifications: {
      "R-Value": "2.0",
      "Weight": "14 oz",
      "Dimensions": "72\" x 20\" x 0.75\"",
      "Material": "Crosslinked PE Foam",
      "Packed Size": "20\" x 6\" x 5\""
    },
    rating: 4,
    reviewCount: 102,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "sleep-022",
    name: "Hybrid Sleeping Bag Quilt",
    category: "Sleeping Bags & Pads",
    price: 159.99,
    image: "/images/products/sleeping-bags/Hybrid-Quilt1.jpg",
    images: [
      "/images/products/sleeping-bags/Hybrid-Quilt2.jpg",
      "/images/products/sleeping-bags/Hybrid-Quilt3.jpg",
      "/images/products/sleeping-bags/Hybrid-Quilt4.jpg",
      "/images/products/sleeping-bags/Hybrid-Quilt5.jpg",
      "/images/products/sleeping-bags/Hybrid-Quilt6.jpg"
    ],
    description: "Versatile quilt sleeping bag that converts between blanket and mummy style for 3-season camping.",
    specifications: {
      "Temperature Rating": "5°C",
      "Weight": "2.8 lbs",
      "Dimensions": "82\" x 55\"",
      "Insulation": "650FP Duck Down",
      "Shell": "20D Nylon"
    },
    rating: 5,
    reviewCount: 41,
    inStock: true,
    brand: "Summit Gear"
  },
  {
    id: "sleep-023",
    name: "Luxury Air Mattress with Pump",
    category: "Sleeping Bags & Pads",
    price: 199.99,
    image: "/images/products/sleeping-bags/Air-Mattress1.jpg",
    images: [
      "/images/products/sleeping-bags/Air-Mattress2.jpg",
      "/images/products/sleeping-bags/Air-Mattress3.jpg",
      "/images/products/sleeping-bags/Air-Mattress4.jpg",
      "/images/products/sleeping-bags/Air-Mattress5.jpg",
      "/images/products/sleeping-bags/Air-Mattress6.jpg"
    ],
    description: "Queen-size camping air mattress with built-in electric pump for quick setup and premium comfort.",
    specifications: {
      "Dimensions": "80\" x 60\" x 8\"",
      "Weight": "15 lbs",
      "Material": "PVC with Flocked Top",
      "Pump": "Built-in Electric",
      "Packed Size": "25\" x 12\" x 10\""
    },
    rating: 4,
    reviewCount: 63,
    inStock: true,
    brand: "Outwest Comfort"
  },
  {
    id: "sleep-024",
    name: "Summer Lightweight Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 59.99,
    image: "/images/products/sleeping-bags/Summer-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Summer-Bag2.jpg",
      "/images/products/sleeping-bags/Summer-Bag3.jpg",
      "/images/products/sleeping-bags/Summer-Bag4.jpg",
      "/images/products/sleeping-bags/Summer-Bag5.jpg",
      "/images/products/sleeping-bags/Summer-Bag6.jpg"
    ],
    description: "Breathable and compact sleeping bag for summer camping, festivals, and travel.",
    specifications: {
      "Temperature Rating": "15°C",
      "Weight": "1.8 lbs",
      "Dimensions": "78\" x 30\"",
      "Insulation": "Synthetic Hollow Fiber",
      "Shell": "190T Polyester"
    },
    rating: 4,
    reviewCount: 58,
    inStock: true,
    brand: "TrailMate"
  },
  


  // BACKPACKS & BAGS
  {
    id: "pack-001",
    name: "Summit Explorer 65L Backpack",
    category: "Backpacks & Bags",
    price: 199.99,
    originalPrice: 249.99,
    image: "/images/products/backpacks/Summit-Backpack-65L5.jpg",
    images: [
      "/images/products/backpacks/Summit-Backpack-65L1.jpg",
      "/images/products/backpacks/Summit-Backpack-65L2.jpg",
      "/images/products/backpacks/Summit-Backpack-65L3.jpg",
      "/images/products/backpacks/Summit-Backpack-65L4.jpg",
      "/images/products/backpacks/Summit-Backpack-65L6.jpg",
    ],
    description: "Professional-grade 65L backpack designed for multi-day adventures. Features adjustable torso length, multiple access points, and integrated rain cover.",
    specifications: {
      "Capacity": "65L",
      "Weight": "4.2 lbs",
      "Torso Range": "16\"-21\"",
      "Dimensions": "30\" x 14\" x 12\"",
      "Material": "420D Ripstop Nylon",
      "Hydration Compatible": "Yes"
    },
    rating: 5,
    reviewCount: 234,
    inStock: true,
    featured: true,
    brand: "Outwest Pro"
  },
  {
    id: "pack-002",
    name: "Day Hiker 30L Backpack",
    category: "Backpacks & Bags",
    price: 89.99,
    image: "/images/products/backpacks/Hiker-30L-Backpack1.jpg",
    images: [
      "/images/products/backpacks/Hiker-30L-Backpack2.jpg",
      "/images/products/backpacks/Hiker-30L-Backpack3.jpg",
      "/images/products/backpacks/Hiker-30L-Backpack4.jpg",
      "/images/products/backpacks/Hiker-30L-Backpack5.jpg",
      "/images/products/backpacks/Hiker-30L-Backpack6.jpg",
    ],
    description: "Lightweight day pack perfect for hiking and daily adventures. Features external gear loops and side water bottle pockets.",
    specifications: {
      "Capacity": "30L",
      "Weight": "2.1 lbs",
      "Dimensions": "20\" x 12\" x 8\"",
      "Material": "210D Nylon",
      "Hydration Compatible": "Yes",
      "Pockets": "7 Total"
    },
    rating: 5,
    reviewCount: 156,
    inStock: true,
    brand: "Outwest Lite"
  },
  {
    id: "pack-003",
    name: "Ultralight 40L Trekking Pack",
    category: "Backpacks & Bags",
    price: 149.99,
    image: "/images/products/backpacks/Ultralight-Trekking-Pack1.jpg",
    images: [
      "/images/products/backpacks/Ultralight-Trekking-Pack2.jpg",
      "/images/products/backpacks/Ultralight-Trekking-Pack3.jpg",
      "/images/products/backpacks/Ultralight-Trekking-Pack4.jpg",
      "/images/products/backpacks/Ultralight-Trekking-Pack5.jpg",
      "/images/products/backpacks/Ultralight-Trekking-Pack6.jpg",
    ],
    description: "Minimalist backpack for weight-conscious hikers. Streamlined design without sacrificing essential features.",
    specifications: {
      "Capacity": "40L",
      "Weight": "1.8 lbs",
      "Torso Range": "15\"-20\"",
      "Dimensions": "26\" x 12\" x 10\"",
      "Material": "70D Ripstop Nylon",
      "Frame": "Removable"
    },
    rating: 5,
    reviewCount: 98,
    inStock: true,
    brand: "Outwest Lite"
  },
  {
    id: "pack-004",
    name: "Adventure Duffel Bag 90L",
    category: "Backpacks & Bags",
    price: 119.99,
    image: "/images/products/backpacks/Duffel-Bag-90L1.jpg",
    images: [
      "/images/products/backpacks/Duffel-Bag-90L2.jpg",
      "/images/products/backpacks/Duffel-Bag-90L3.jpg",
      "/images/products/backpacks/Duffel-Bag-90L4.jpg",
      "/images/products/backpacks/Duffel-Bag-90L5.jpg",
      "/images/products/backpacks/Duffel-Bag-90L6.jpg",
    ],
    description: "Rugged duffel bag perfect for base camp storage and travel. Converts to backpack with removable shoulder straps.",
    specifications: {
      "Capacity": "90L",
      "Weight": "3.5 lbs",
      "Dimensions": "30\" x 15\" x 15\"",
      "Material": "840D Ballistic Nylon",
      "Waterproof": "Yes",
      "Handles": "4 Carry Options"
    },
    rating: 5,
    reviewCount: 67,
    inStock: true,
    brand: "Outwest Pro"
  },
  {
    id: "pack-006",
    name: "Summit Trail 45L Backpack",
    category: "Backpacks & Bags",
    price: 159.99,
    image: "/images/products/backpacks/Summit-Trail-45L1.jpg",
    images: [
      "/images/products/backpacks/Summit-Trail-45L2.jpg",
      "/images/products/backpacks/Summit-Trail-45L3.jpg",
      "/images/products/backpacks/Summit-Trail-45L4.jpg",
      "/images/products/backpacks/Summit-Trail-45L5.jpg",
      "/images/products/backpacks/Summit-Trail-45L6.jpg"
    ],
    description: "Durable 45L hiking backpack with internal frame support and rain cover. Great for multi-day treks.",
    specifications: {
      "Capacity": "45L",
      "Weight": "3.2 lbs",
      "Frame": "Internal Aluminum Support",
      "Dimensions": "26\" x 13\" x 9\"",
      "Material": "600D Ripstop Polyester",
      "Extras": "Integrated Rain Cover"
    },
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    brand: "SummitPro"
  },
  {
    id: "pack-007",
    name: "Urban Explorer Daypack 25L",
    category: "Backpacks & Bags",
    price: 89.99,
    image: "/images/products/backpacks/Urban-Explorer-25L1.jpg",
    images: [
      "/images/products/backpacks/Urban-Explorer-25L2.jpg",
      "/images/products/backpacks/Urban-Explorer-25L3.jpg",
      "/images/products/backpacks/Urban-Explorer-25L4.jpg",
      "/images/products/backpacks/Urban-Explorer-25L5.jpg",
      "/images/products/backpacks/Urban-Explorer-25L6.jpg"
    ],
    description: "Stylish daypack with laptop sleeve and water-resistant finish. Perfect for commuting and short hikes.",
    specifications: {
      "Capacity": "25L",
      "Weight": "2.1 lbs",
      "Laptop Sleeve": "Up to 15\"",
      "Dimensions": "20\" x 12\" x 8\"",
      "Material": "Water-Resistant Canvas",
      "Ventilation": "Padded Mesh Back Panel"
    },
    rating: 4.6,
    reviewCount: 76,
    inStock: true,
    brand: "TrailBound"
  },
  {
    id: "pack-008",
    name: "Alpine Expedition 65L Backpack",
    category: "Backpacks & Bags",
    price: 239.99,
    image: "/images/products/backpacks/Alpine-Expedition-65L1.jpg",
    images: [
      "/images/products/backpacks/Alpine-Expedition-65L2.jpg",
      "/images/products/backpacks/Alpine-Expedition-65L3.jpg",
      "/images/products/backpacks/Alpine-Expedition-65L4.jpg",
      "/images/products/backpacks/Alpine-Expedition-65L5.jpg",
      "/images/products/backpacks/Alpine-Expedition-65L6.jpg"
    ],
    description: "High-capacity 65L pack built for expeditions. Features adjustable suspension system and multiple gear loops.",
    specifications: {
      "Capacity": "65L",
      "Weight": "4.5 lbs",
      "Frame": "Adjustable Internal Frame",
      "Dimensions": "32\" x 15\" x 12\"",
      "Material": "500D Cordura Nylon",
      "Extras": "Ice Axe Loops, Rain Cover"
    },
    rating: 4.9,
    reviewCount: 84,
    inStock: true,
    brand: "PeakTrail"
  },
  {
    id: "pack-009",
    name: "Compact Ultralight Pack 20L",
    category: "Backpacks & Bags",
    price: 49.99,
    image: "/images/products/backpacks/Compact-Ultralight-20L1.jpg",
    images: [
      "/images/products/backpacks/Compact-Ultralight-20L2.jpg",
      "/images/products/backpacks/Compact-Ultralight-20L3.jpg",
      "/images/products/backpacks/Compact-Ultralight-20L4.jpg",
      "/images/products/backpacks/Compact-Ultralight-20L5.jpg",
    ],
    description: "Ultralight and packable 20L backpack that folds into its own pocket. Ideal for travel and light day trips.",
    specifications: {
      "Capacity": "20L",
      "Weight": "0.7 lbs",
      "Packable": "Yes (Fits into 6\" Pouch)",
      "Dimensions": "18\" x 10\" x 7\"",
      "Material": "30D Ripstop Nylon",
      "Water Resistance": "Yes"
    },
    rating: 4.5,
    reviewCount: 132,
    inStock: true,
    brand: "NatureNest"
  },
  {
    id: "pack-010",
    name: "Canyon Tactical Backpack 40L",
    category: "Backpacks & Bags",
    price: 129.99,
    image: "/images/products/backpacks/Canyon-Tactical-40L1.jpg",
    images: [
      "/images/products/backpacks/Canyon-Tactical-40L2.jpg",
      "/images/products/backpacks/Canyon-Tactical-40L3.jpg",
      "/images/products/backpacks/Canyon-Tactical-40L4.jpg",
      "/images/products/backpacks/Canyon-Tactical-40L5.jpg",
    ],
    description: "Rugged 40L tactical pack with MOLLE webbing, hydration compatibility, and heavy-duty zippers.",
    specifications: {
      "Capacity": "40L",
      "Weight": "3.6 lbs",
      "Hydration": "Compatible (Not Included)",
      "Dimensions": "24\" x 14\" x 10\"",
      "Material": "900D Oxford Nylon",
      "Extras": "MOLLE Webbing, Sternum Strap"
    },
    rating: 4.7,
    reviewCount: 91,
    inStock: true,
    brand: "CampVista"
  },
  {
    id: "pack-011",
    name: "Lakeside Dry Bag 30L",
    category: "Backpacks & Bags",
    price: 59.99,
    image: "/images/products/backpacks/Lakeside-DryBag-30L1.jpg",
    images: [
      "/images/products/backpacks/Lakeside-DryBag-30L2.jpg",
      "/images/products/backpacks/Lakeside-DryBag-30L3.jpg",
      "/images/products/backpacks/Lakeside-DryBag-30L4.jpg",
      "/images/products/backpacks/Lakeside-DryBag-30L5.jpg",
      "/images/products/backpacks/Lakeside-DryBag-30L6.jpg"
    ],
    description: "Waterproof roll-top dry bag with backpack straps. Ideal for kayaking, canoeing, and rainy adventures.",
    specifications: {
      "Capacity": "30L",
      "Weight": "2.0 lbs",
      "Closure": "Roll-Top with Buckle",
      "Dimensions": "24\" x 12\" x 9\"",
      "Material": "PVC Tarpaulin",
      "Waterproof": "100%"
    },
    rating: 4.6,
    reviewCount: 58,
    inStock: true,
    brand: "SunTrek"
  },
  {
    id: "pack-012",
    name: "Forest Trekking Backpack 55L",
    category: "Backpacks & Bags",
    price: 199.99,
    image: "/images/products/backpacks/Forest-Trekking-55L1.jpg",
    images: [
      "/images/products/backpacks/Forest-Trekking-55L2.jpg",
      "/images/products/backpacks/Forest-Trekking-55L3.jpg",
      "/images/products/backpacks/Forest-Trekking-55L4.jpg",
      "/images/products/backpacks/Forest-Trekking-55L5.jpg",
      "/images/products/backpacks/Forest-Trekking-55L6.jpg",
      "/images/products/backpacks/Forest-Trekking-55L7.jpg",
    ],
    description: "Spacious trekking pack with 55L capacity, load lifters, and ventilated back system for comfort on long trails.",
    specifications: {
      "Capacity": "55L",
      "Weight": "4.2 lbs",
      "Frame": "Internal Support",
      "Dimensions": "30\" x 14\" x 11\"",
      "Material": "Ripstop Polyester",
      "Extras": "Trekking Pole Attachments"
    },
    rating: 4.8,
    reviewCount: 66,
    inStock: true,
    brand: "Heritage Camp"
  },
  {
    id: "pack-013",
    name: "Nomad Convertible Travel Pack 35L",
    category: "Backpacks & Bags",
    price: 139.99,
    image: "/images/products/backpacks/Nomad-Convertible-35L1.jpg",
    images: [
      "/images/products/backpacks/Nomad-Convertible-35L2.jpg",
      "/images/products/backpacks/Nomad-Convertible-35L3.jpg",
      "/images/products/backpacks/Nomad-Convertible-35L4.jpg",
      "/images/products/backpacks/Nomad-Convertible-35L5.jpg"
    ],
    description: "Convertible backpack/duffel hybrid with stowable straps. Perfect for both city travel and adventure trips.",
    specifications: {
      "Capacity": "35L",
      "Weight": "3.0 lbs",
      "Laptop Sleeve": "Up to 17\"",
      "Dimensions": "22\" x 14\" x 9\"",
      "Material": "500D Polyester",
      "Extras": "Hideaway Straps"
    },
    rating: 4.7,
    reviewCount: 72,
    inStock: true,
    brand: "Outwest Active"
  },
  {
    id: "pack-014",
    name: "Glacier Mountaineering Pack 70L",
    category: "Backpacks & Bags",
    price: 279.99,
    image: "/images/products/backpacks/Glacier-Mountaineering-70L1.jpg",
    images: [
      "/images/products/backpacks/Glacier-Mountaineering-70L2.jpg",
      "/images/products/backpacks/Glacier-Mountaineering-70L3.jpg",
      "/images/products/backpacks/Glacier-Mountaineering-70L4.jpg",
      "/images/products/backpacks/Glacier-Mountaineering-70L5.jpg",
    ],
    description: "Technical 70L mountaineering pack with reinforced haul points, rope strap, and crampon pocket.",
    specifications: {
      "Capacity": "70L",
      "Weight": "5.2 lbs",
      "Frame": "Aluminum Support Frame",
      "Dimensions": "34\" x 16\" x 12\"",
      "Material": "1000D Nylon",
      "Extras": "Rope Strap, Ice Tool Attachments"
    },
    rating: 5,
    reviewCount: 44,
    inStock: true,
    brand: "SummitPro"
  },
  {
    id: "pack-015",
    name: "Trailblazer 70L Expedition Pack",
    category: "Backpacks & Bags",
    price: 239.99,
    originalPrice: 279.99,
    image: "/images/products/backpacks/Trailblazer-70L1.jpg",
    images: [
      "/images/products/backpacks/Trailblazer-70L2.jpg",
      "/images/products/backpacks/Trailblazer-70L3.jpg",
      "/images/products/backpacks/Trailblazer-70L4.jpg",
      "/images/products/backpacks/Trailblazer-70L5.jpg",
      "/images/products/backpacks/Trailblazer-70L6.jpg",
      "/images/products/backpacks/Trailblazer-70L7.jpg",
      "/images/products/backpacks/Trailblazer-70L8.jpg",
      "/images/products/backpacks/Trailblazer-70L9.jpg",
      "/images/products/backpacks/Trailblazer-70L10.jpg"
    ],
    description: "Large capacity expedition pack designed for multi-day trekking and mountaineering. Features adjustable suspension system and rugged weather-resistant materials.",
    specifications: {
      "Capacity": "70L",
      "Weight": "5.1 lbs",
      "Dimensions": "32\" x 15\" x 12\"",
      "Material": "Ripstop Nylon with PU Coating",
      "Frame": "Internal Aluminum Frame",
      "Hip Belt": "Padded with Gear Loops",
      "Hydration": "Compatible with 3L Reservoir"
    },
    rating: 5,
    reviewCount: 87,
    inStock: true,
    featured: true,
    brand: "Summit Gear"
  },
  {
    id: "pack-016",
    name: "TrailMate 40L Hiking Backpack",
    category: "Backpacks & Bags",
    price: 139.99,
    image: "/images/products/backpacks/TrailMate-40L-1.webp",
    images: [
      "/images/products/backpacks/TrailMate-40L-2.webp",
      "/images/products/backpacks/TrailMate-40L-3.webp",
      "/images/products/backpacks/TrailMate-40L-4.webp",
      "/images/products/backpacks/TrailMate-40L-5.webp",
      "/images/products/backpacks/TrailMate-40L-6.webp"
    ],
    description: "Lightweight and durable 40L pack, perfect for weekend trips or overnight adventures.",
    specifications: {
      "Capacity": "40L",
      "Weight": "2.8 lbs",
      "Dimensions": "26\" x 12\" x 10\"",
      "Material": "600D Polyester",
      "Frame": "Frameless"
    },
    rating: 4,
    reviewCount: 97,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "pack-017",
    name: "Urban Explorer Daypack 25L",
    category: "Backpacks & Bags",
    price: 89.99,
    image: "/images/products/backpacks/Urban-Explorer-25L-1.jpg",
    images: [
      "/images/products/backpacks/Urban-Explorer-25L-2.jpg",
      "/images/products/backpacks/Urban-Explorer-25L-3.jpg",
      "/images/products/backpacks/Urban-Explorer-25L-4.jpg",
      "/images/products/backpacks/Urban-Explorer-25L-5.jpg",
      "/images/products/backpacks/Urban-Explorer-25L-6.jpg"
    ],
    description: "Versatile daypack with laptop sleeve, hydration port, and sleek urban styling.",
    specifications: {
      "Capacity": "25L",
      "Weight": "1.9 lbs",
      "Dimensions": "20\" x 11\" x 8\"",
      "Material": "500D Polyester",
      "Laptop Sleeve": "Up to 15\""
    },
    rating: 4,
    reviewCount: 88,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "pack-018",
    name: "Outwest Expedition Duffel 90L",
    category: "Backpacks & Bags",
    price: 159.99,
    image: "/images/products/backpacks/Outwest-90L-1.png",
    images: [
      "/images/products/backpacks/Outwest-90L-2.jpeg",
      "/images/products/backpacks/Outwest-90L-3.jpeg",
      "/images/products/backpacks/Outwest-90L-4.jpeg",
      "/images/products/backpacks/Outwest-90L-5.jpeg",
      "/images/products/backpacks/Outwest-90L-6.jpeg",
      "/images/products/backpacks/Outwest-90L-7.jpeg",
    ],
    description: "Heavy-duty expedition duffel bag with reinforced base and detachable backpack straps.",
    specifications: {
      "Capacity": "90L",
      "Weight": "5.1 lbs",
      "Dimensions": "34\" x 16\" x 15\"",
      "Material": "900D TPU Laminated",
      "Water Resistance": "Yes"
    },
    rating: 5,
    reviewCount: 74,
    inStock: true,
    brand: "Outwest Comfort"
  },
  {
    id: "pack-019",
    name: "Compact Hydration Pack 12L",
    category: "Backpacks & Bags",
    price: 69.99,
    image: "/images/products/backpacks/Hydration-12L-1.jpg",
    images: [
      "/images/products/backpacks/Hydration-12L-2.jpg",
      "/images/products/backpacks/Hydration-12L-3.jpg",
      "/images/products/backpacks/Hydration-12L-4.jpg",
      "/images/products/backpacks/Hydration-12L-5.jpg",
      "/images/products/backpacks/Hydration-12L-6.jpg",
    ],
    description: "Minimalist hydration backpack with 2L bladder included, designed for biking and trail running.",
    specifications: {
      "Capacity": "12L",
      "Weight": "1.3 lbs",
      "Dimensions": "18\" x 9\" x 5\"",
      "Material": "Ripstop Nylon",
      "Hydration Bladder": "2L Included"
    },
    rating: 4,
    reviewCount: 61,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "pack-020",
    name: "Weekend Travel Backpack 50L",
    category: "Backpacks & Bags",
    price: 179.99,
    image: "/images/products/backpacks/Weekend-Travel-50L-1.jpg",
    images: [
      "/images/products/backpacks/Weekend-Travel-50L-2.jpg",
      "/images/products/backpacks/Weekend-Travel-50L-3.jpg",
      "/images/products/backpacks/Weekend-Travel-50L-4.jpg",
      "/images/products/backpacks/Weekend-Travel-50L-5.jpg"
    ],
    description: "Smart travel backpack with front-loading design, multiple compartments, and carry-on friendly size.",
    specifications: {
      "Capacity": "50L",
      "Weight": "3.6 lbs",
      "Dimensions": "28\" x 14\" x 11\"",
      "Material": "Polyester Oxford",
      "Features": "Front Loading, TSA Size"
    },
    rating: 5,
    reviewCount: 102,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "pack-021",
    name: "Climber Pro Alpine Pack 55L",
    category: "Backpacks & Bags",
    price: 249.99,
    originalPrice: 299.99,
    image: "/images/products/backpacks/Climber-Pro-55L-1.jpg",
    images: [
      "/images/products/backpacks/Climber-Pro-55L-2.jpg",
      "/images/products/backpacks/Climber-Pro-55L-3.jpg",
      "/images/products/backpacks/Climber-Pro-55L-4.jpg",
      "/images/products/backpacks/Climber-Pro-55L-5.jpg",
    ],
    description: "Technical alpine climbing pack with gear loops, rope holder, and reinforced crampon patch.",
    specifications: {
      "Capacity": "55L",
      "Weight": "3.9 lbs",
      "Dimensions": "30\" x 13\" x 11\"",
      "Material": "Dyneema Ripstop",
      "Frame": "Internal Frame"
    },
    rating: 5,
    reviewCount: 47,
    inStock: true,
    featured: true,
    brand: "HighTrail"
  },
  {
    id: "pack-022",
    name: "Compact Foldable Daypack 20L",
    category: "Backpacks & Bags",
    price: 39.99,
    image: "/images/products/backpacks/Foldable-20L-1.jpg",
    images: [
      "/images/products/backpacks/Foldable-20L-2.jpg",
      "/images/products/backpacks/Foldable-20L-3.jpg",
      "/images/products/backpacks/Foldable-20L-4.jpg",
      "/images/products/backpacks/Foldable-20L-5.jpg",
      "/images/products/backpacks/Foldable-20L-6.jpg"
    ],
    description: "Ultra-light packable daypack that folds into its own pocket for easy carrying.",
    specifications: {
      "Capacity": "20L",
      "Weight": "0.8 lbs",
      "Dimensions": "18\" x 10\" x 7\"",
      "Material": "210D Nylon",
      "Folded Size": "7\" x 6\""
    },
    rating: 4,
    reviewCount: 59,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "pack-023",
    name: "NRS Bill’s Dry Bag 30L",
    category: "Backpacks & Bags",
    price: 74.99,
    image: "/images/products/backpacks/NRS-Bills-DryBag-30L1.jpg",
    images: [
      "/images/products/backpacks/NRS-Bills-DryBag-30L2.jpg",
      "/images/products/backpacks/NRS-Bills-DryBag-30L3.jpg",
      "/images/products/backpacks/NRS-Bills-DryBag-30L4.jpg",
      "/images/products/backpacks/NRS-Bills-DryBag-30L5.jpg",
      "/images/products/backpacks/NRS-Bills-DryBag-30L6.jpg"
    ],
    description: "Trusted by adventurers since 1977, this heavy-duty 30 L dry bag features welded seams, PVC TobaTex fabric, and a removable backpack harness—engineered for ultimate waterproof protection and ease of carry.",
    specifications: {
      "Capacity": "30L",
      "Weight": "2.0 lbs",
      "Material": "21-oz PVC TobaTex",
      "Closure": "Roll-top with Buckle",
      "Extras": "Removable Backpack Harness"
    },
    rating: 5,
    reviewCount: 142,
    inStock: true,
    brand: "NRS"
  },
  {
    id: "pack-024",
    name: "Laptop & Travel Backpack 30L",
    category: "Backpacks & Bags",
    price: 119.99,
    image: "/images/products/backpacks/Laptop-Travel-30L-1.jpg",
    images: [
      "/images/products/backpacks/Laptop-Travel-30L-2.jpg",
      "/images/products/backpacks/Laptop-Travel-30L-3.jpg",
      "/images/products/backpacks/Laptop-Travel-30L-4.jpg",
      "/images/products/backpacks/Laptop-Travel-30L-5.jpg",
      "/images/products/backpacks/Laptop-Travel-30L-6.jpg"
    ],
    description: "Multi-purpose backpack for commuting and travel, with padded laptop sleeve and USB charging port.",
    specifications: {
      "Capacity": "30L",
      "Weight": "2.4 lbs",
      "Dimensions": "19\" x 12\" x 9\"",
      "Material": "Oxford Polyester",
      "Laptop Sleeve": "Up to 17\""
    },
    rating: 4,
    reviewCount: 84,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "pack-025",
    name: "Adventure Pro Trekking Pack 70L",
    category: "Backpacks & Bags",
    price: 269.99,
    originalPrice: 319.99,
    image: "/images/products/backpacks/Adventure-Pro-70L-6.jpg",
    images: [
      "/images/products/backpacks/Adventure-Pro-70L-1.webp",
      "/images/products/backpacks/Adventure-Pro-70L-2.webp",
      "/images/products/backpacks/Adventure-Pro-70L-3.webp",
      "/images/products/backpacks/Adventure-Pro-70L-4.webp",
      "/images/products/backpacks/Adventure-Pro-70L-5.webp"
    ],
    description: "Spacious 70L trekking backpack with load-lifter straps, ventilated suspension, and rain cover included.",
    specifications: {
      "Capacity": "70L",
      "Weight": "4.5 lbs",
      "Dimensions": "33\" x 15\" x 13\"",
      "Material": "Ripstop Nylon",
      "Extras": "Integrated Rain Cover"
    },
    rating: 5,
    reviewCount: 112,
    inStock: true,
    featured: true,
    brand: "Summit Gear"
  },
  
  


  // CAMP KITCHEN
  {
    id: "kitchen-001",
    name: "Alpine Chef Camping Stove System",
    category: "Camp Kitchen",
    price: 149.99,
    image: "/images/products/camp-kitchen/Alpine-Chef2.jpg",
    images: [
      "/images/products/camp-kitchen/Alpine-Chef1.jpg",
      "/images/products/camp-kitchen/Alpine-Chef2.jpg",
      "/images/products/camp-kitchen/Alpine-Chef3.jpg",
      "/images/products/camp-kitchen/Alpine-Chef4.jpg",
      "/images/products/camp-kitchen/Alpine-Chef5.jpg",
      "/images/products/camp-kitchen/Alpine-Chef6.jpg",
    ],
    description: "Complete cooking system with integrated pot, efficient burner, and piezo ignition. Boils water in under 3 minutes.",
    specifications: {
      "Fuel Type": "Isobutane",
      "Boil Time": "2:45 (1L water)",
      "Weight": "1.1 lbs",
      "BTU": "11,000",
      "Pot Capacity": "1.7L",
      "Ignition": "Piezo"
    },
    rating: 5,
    reviewCount: 189,
    inStock: true,
    featured: true,
    brand: "Outwest Pro"
  },
  {
    id: "kitchen-002",
    name: "Compact Titanium Cookset",
    category: "Camp Kitchen",
    price: 89.99,
    image: "/images/products/camp-kitchen/Titanium-Cookset1.jpg",
    images: [
      "/images/products/camp-kitchen/Titanium-Cookset2.jpg",
      "/images/products/camp-kitchen/Titanium-Cookset3.jpg",
      "/images/products/camp-kitchen/Titanium-Cookset4.jpg",
      "/images/products/camp-kitchen/Titanium-Cookset5.jpg",
    ],
    description: "Ultra-lightweight titanium cookset perfect for backpacking. Includes pot, pan, and collapsible utensils.",
    specifications: {
      "Material": "Titanium",
      "Weight": "8.2 oz",
      "Pot Capacity": "1.3L",
      "Pan Diameter": "7.5\"",
      "Pieces": "5 Total",
      "Non-stick": "Yes"
    },
    rating: 5,
    reviewCount: 123,
    inStock: true,
    brand: "Outwest Lite"
  },
  {
    id: "kitchen-003",
    name: "Portable Water Filter System",
    category: "Camp Kitchen",
    price: 79.99,
    image: "/images/products/camp-kitchen/Water-Filter-System1.jpg",
    images: [
      "/images/products/camp-kitchen/Water-Filter-System2.jpg",
      "/images/products/camp-kitchen/Water-Filter-System3.jpg",
      "/images/products/camp-kitchen/Water-Filter-System4.jpg",
      "/images/products/camp-kitchen/Water-Filter-System5.jpg",
    ],
    description: "Advanced water filtration system removes 99.9% of bacteria and protozoa. Lightweight and easy to use in the field.",
    specifications: {
      "Filter Type": "Hollow Fiber",
      "Flow Rate": "1.75L/min",
      "Weight": "5 oz",
      "Capacity": "4000L lifetime",
      "Removes": "Bacteria, Protozoa, Particles",
      "Backflushable": "Yes"
    },
    rating: 5,
    reviewCount: 267,
    inStock: true,
    brand: "Outwest Pure"
  },
  {
    id: "kitchen-004",
    name: "Insulated Food Storage Container Set",
    category: "Camp Kitchen",
    price: 59.99,
    image: "/images/products/camp-kitchen/Storage-Container-Set1.jpg",
    images: [
      "/images/products/camp-kitchen/Storage-Container-Set2.jpg",
      "/images/products/camp-kitchen/Storage-Container-Set3.jpg",
      "/images/products/camp-kitchen/Storage-Container-Set4.jpg",
      "/images/products/camp-kitchen/Storage-Container-Set5.jpg",
    ],
    description: "Set of 3 vacuum-insulated containers keeps food hot or cold for hours. Leak-proof design perfect for outdoor dining.",
    specifications: {
      "Insulation": "Double-wall Vacuum",
      "Capacity": "16oz, 24oz, 32oz",
      "Material": "Stainless Steel",
      "Hot Retention": "12+ hours",
      "Cold Retention": "24+ hours",
      "Leak Proof": "Yes"
    },
    rating: 5,
    reviewCount: 98,
    inStock: true,
    brand: "Outwest Classic"
  },
  {
    id: "kitchen-006",
    name: "TrailMate Portable Coffee Press",
    category: "Camp Kitchen",
    price: 39.99,
    image: "/images/products/camp-kitchen/TrailMate-CoffeePress2.jpg",
    images: [
      "/images/products/camp-kitchen/TrailMate-CoffeePress1.jpg",
      "/images/products/camp-kitchen/TrailMate-CoffeePress3.jpg",
      "/images/products/camp-kitchen/TrailMate-CoffeePress4.jpg",
      "/images/products/camp-kitchen/TrailMate-CoffeePress5.jpg",
      "/images/products/camp-kitchen/TrailMate-CoffeePress6.jpg"
    ],
    description: "Durable, lightweight coffee press perfect for brewing fresh coffee outdoors. BPA-free construction and easy clean-up.",
    specifications: {
      "Capacity": "20 oz",
      "Weight": "0.9 lbs",
      "Material": "BPA-Free Plastic",
      "Dimensions": "7\" x 4\"",
      "Dishwasher Safe": "Yes"
    },
    rating: 5,
    reviewCount: 112,
    inStock: true,
    brand: "Summit Gear"
  },
  {
    id: "kitchen-007",
    name: "Summit Chef 2-Burner Stove",
    category: "Camp Kitchen",
    price: 129.99,
    originalPrice: 159.99,
    image: "/images/products/camp-kitchen/Summit-Chef-2Burner1.jpg",
    images: [
      "/images/products/camp-kitchen/Summit-Chef-2Burner2.jpg",
      "/images/products/camp-kitchen/Summit-Chef-2Burner3.jpg",
      "/images/products/camp-kitchen/Summit-Chef-2Burner4.jpg",
      "/images/products/camp-kitchen/Summit-Chef-2Burner5.jpg",
      "/images/products/camp-kitchen/Summit-Chef-2Burner6.jpg"
    ],
    description: "Powerful 2-burner propane stove with adjustable flame control. Perfect for group camping meals.",
    specifications: {
      "Fuel Type": "Propane",
      "Weight": "10.5 lbs",
      "BTU": "20,000 (10,000 each burner)",
      "Dimensions": "21\" x 12\" x 4\"",
      "Ignition": "Manual",
      "Wind Screen": "Yes"
    },
    rating: 4,
    reviewCount: 89,
    inStock: true,
    featured: true,
    brand: "CampMaster"
  },
  {
    id: "kitchen-008",
    name: "Titanium Compact Cookset",
    category: "Camp Kitchen",
    price: 79.99,
    image: "/images/products/camp-kitchen/Titanium-Cookset1.jpg",
    images: [
      "/images/products/camp-kitchen/Titanium-Cookset1.jpg",
      "/images/products/camp-kitchen/Titanium-Cookset2.jpg",
      "/images/products/camp-kitchen/Titanium-Cookset3.jpg"
    ],
    description: "Ultralight titanium pot and pan set with foldable handles. Ideal for backpacking and minimalists.",
    specifications: {
      "Material": "Titanium",
      "Weight": "0.85 lbs",
      "Pot Capacity": "900 ml",
      "Pan Capacity": "500 ml",
      "Nesting": "Yes",
      "Handles": "Foldable"
    },
    rating: 5,
    reviewCount: 76,
    inStock: true,
    brand: "TrailLite"
  },
  {
    id: "kitchen-009",
    name: "EcoBrew Biodegradable Utensil Set",
    category: "Camp Kitchen",
    price: 24.99,
    image: "/images/products/camp-kitchen/EcoBrew-Utensils1.jpg",
    images: [
      "/images/products/camp-kitchen/EcoBrew-Utensils2.jpg",
      "/images/products/camp-kitchen/EcoBrew-Utensils3.jpg",
      "/images/products/camp-kitchen/EcoBrew-Utensils4.jpg",
      "/images/products/camp-kitchen/EcoBrew-Utensils5.jpg",
      "/images/products/camp-kitchen/EcoBrew-Utensils7.jpg",
      "/images/products/camp-kitchen/EcoBrew-Utensils8.jpg"
    ],
    description: "Eco-friendly utensil set made from biodegradable materials. Includes fork, knife, spoon, and chopsticks.",
    specifications: {
      "Material": "Biodegradable Polymer",
      "Weight": "0.3 lbs",
      "Set": "4 Pieces",
      "Dishwasher Safe": "Yes",
      "Case": "Included"
    },
    rating: 4,
    reviewCount: 54,
    inStock: true,
    brand: "EcoCamp"
  },
  {
    id: "kitchen-010",
    name: "Adventure Cook Station",
    category: "Camp Kitchen",
    price: 199.99,
    image: "/images/products/camp-kitchen/Adventure-Cook-Station2.jpg",
    images: [
      "/images/products/camp-kitchen/Adventure-Cook-Station1.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station3.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station4.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station5.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station6.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station7.jpg",
      "/images/products/camp-kitchen/Adventure-Cook-Station8.jpg"
    ],
    description: "Foldable camp kitchen station with counter space, storage racks, and lantern hook.",
    specifications: {
      "Weight": "13 lbs",
      "Dimensions": "56\" x 18\" x 32\"",
      "Material": "Aluminum + Fabric",
      "Storage": "3 Shelves + Counter",
      "Foldable": "Yes"
    },
    rating: 5,
    reviewCount: 68,
    inStock: true,
    featured: true,
    brand: "CampMaster"
  },
  {
    id: "kitchen-011",
    name: "Insulated Cooler Box 45QT",
    category: "Camp Kitchen",
    price: 159.99,
    image: "/images/products/camp-kitchen/Cooler-45QT1.jpg",
    images: [
      "/images/products/camp-kitchen/Cooler-45QT2.jpg",
      "/images/products/camp-kitchen/Cooler-45QT3.jpg",
      "/images/products/camp-kitchen/Cooler-45QT4.jpg",
      "/images/products/camp-kitchen/Cooler-45QT5.jpg"
    ],
    description: "Heavy-duty cooler with 4-day ice retention and rugged wheels for easy transport.",
    specifications: {
      "Capacity": "45 Quarts",
      "Weight": "18 lbs",
      "Dimensions": "24\" x 16\" x 15\"",
      "Insulation": "Thick Polyurethane",
      "Ice Retention": "Up to 4 Days"
    },
    rating: 5,
    reviewCount: 134,
    inStock: true,
    brand: "ChillPro"
  },
  {
    id: "kitchen-012",
    name: "Portable Camp Grill",
    category: "Camp Kitchen",
    price: 99.99,
    image: "/images/products/camp-kitchen/Portable-Grill1.jpg",
    images: [
      "/images/products/camp-kitchen/Portable-Grill2.jpg",
      "/images/products/camp-kitchen/Portable-Grill3.jpg",
      "/images/products/camp-kitchen/Portable-Grill4.jpg",
      "/images/products/camp-kitchen/Portable-Grill5.jpg"
    ],
    description: "Compact charcoal grill with foldable legs and carry case. Perfect for campfire cooking.",
    specifications: {
      "Fuel Type": "Charcoal",
      "Weight": "7.5 lbs",
      "Dimensions": "16\" x 12\" x 10\"",
      "Cooking Surface": "150 sq in",
      "Foldable": "Yes"
    },
    rating: 4,
    reviewCount: 92,
    inStock: true,
    brand: "GrillMate"
  },
  {
    id: "kitchen-013",
    name: "Collapsible Sink Basin",
    category: "Camp Kitchen",
    price: 29.99,
    image: "/images/products/camp-kitchen/Collapsible-Sink1.jpg",
    images: [
      "/images/products/camp-kitchen/Collapsible-Sink2.jpg",
      "/images/products/camp-kitchen/Collapsible-Sink3.jpg",
      "/images/products/camp-kitchen/Collapsible-Sink4.jpg",
      "/images/products/camp-kitchen/Collapsible-Sink5.jpg",
      "/images/products/camp-kitchen/Collapsible-Sink6.jpg"
    ],
    description: "Durable collapsible sink for washing dishes or carrying water. Folds flat for easy packing.",
    specifications: {
      "Capacity": "15L",
      "Weight": "0.6 lbs",
      "Material": "Silicone + Plastic",
      "Dimensions": "14\" x 12\" x 8\"",
      "Collapsible": "Yes"
    },
    rating: 5,
    reviewCount: 45,
    inStock: true,
    brand: "TrailLite"
  },
  {
    id: "kitchen-014",
    name: "Camp Mess Kit 4-Person",
    category: "Camp Kitchen",
    price: 49.99,
    image: "/images/products/camp-kitchen/Mess-Kit1.jpg",
    images: [
      "/images/products/camp-kitchen/Mess-Kit2.jpg",
      "/images/products/camp-kitchen/Mess-Kit3.jpg",
      "/images/products/camp-kitchen/Mess-Kit4.jpg",
      "/images/products/camp-kitchen/Mess-Kit5.jpg",
      "/images/products/camp-kitchen/Mess-Kit6.jpg",
    ],
    description: "Complete mess kit for 4 people including plates, bowls, cups, and utensils. Comes with a compact carry bag.",
    specifications: {
      "Set": "16 Pieces",
      "Weight": "3.2 lbs",
      "Material": "Polypropylene (BPA-Free)",
      "Dishwasher Safe": "Yes",
      "Carry Case": "Included"
    },
    rating: 5,
    reviewCount: 101,
    inStock: true,
    brand: "Summit Gear"
  },
  {
    id: "kitchen-015",
    name: "Thermal Insulated Food Container",
    category: "Camp Kitchen",
    price: 34.99,
    image: "/images/products/camp-kitchen/Food-Container1.jpg",
    images: [
      "/images/products/camp-kitchen/Food-Container2.jpg",
      "/images/products/camp-kitchen/Food-Container3.jpg",
      "/images/products/camp-kitchen/Food-Container4.jpg",
      "/images/products/camp-kitchen/Food-Container5.jpg",
      "/images/products/camp-kitchen/Food-Container6.jpg"
    ],
    description: "Keeps food hot for up to 6 hours or cold for 12 hours. Stainless steel interior with leak-proof lid.",
    specifications: {
      "Capacity": "1.2L",
      "Weight": "1.3 lbs",
      "Material": "Stainless Steel + Plastic",
      "Insulation": "Double-Wall Vacuum",
      "Leak-Proof": "Yes"
    },
    rating: 5,
    reviewCount: 73,
    inStock: true,
    brand: "Outwest Pro"
  },
  

  // CAMP FURNITURE
  {
    id: "furniture-001",
    name: "Comfort Plus Foldable Camping Chair",
    category: "Camp Furniture",
    price: 79.99,
    originalPrice: 99.99,
    image: "/images/products/camp-furniture/Plus-Camping-Chair1.jpg",
    images: [
      "/images/products/camp-furniture/Plus-Camping-Chair2.jpg",
      "/images/products/camp-furniture/Plus-Camping-Chair3.jpg",
      "/images/products/camp-furniture/Plus-Camping-Chair4.jpg",
      "/images/products/camp-furniture/Plus-Camping-Chair5.jpg",
      "/images/products/camp-furniture/Plus-Camping-Chair6.jpg",
      "/images/products/camp-furniture/Plus-Camping-Chair7.jpg",
    ],
    description: "The Comfort Plus foldable camping chair offers a sturdy steel frame and padded seating for enhanced comfort. Easy to carry and quick to set up, it’s ideal for camping trips, outdoor events, fishing, or relaxing in your backyard.",
    specifications: {
      "Weight Capacity": "300 lbs",
      "Weight": "5.2 lbs",
      "Dimensions": "24\" x 24\" x 36\"",
      "Seat Height": "17\"",
      "Material": "600D Oxford Fabric",
      "Frame": "Steel"
    },
    rating: 5,
    reviewCount: 178,
    inStock: true,
    featured: true,
    brand: "Outwest Comfort"
  },
  {
    id: "furniture-002",
    name: "Lightweight Folding Table",
    category: "Camp Furniture",
    price: 89.99,
    image: "/images/products/camp-furniture/Folding-Table1.jpg",
    images: [
      "/images/products/camp-furniture/Folding-Table2.jpg",
      "/images/products/camp-furniture/Folding-Table3.jpg",
      "/images/products/camp-furniture/Folding-Table4.jpg",
    ],
    description: "Compact aluminum folding table perfect for cooking and dining. Weather-resistant surface with adjustable height legs.",
    specifications: {
      "Weight Capacity": "70 lbs",
      "Weight": "4.8 lbs",
      "Dimensions": "24\" x 16\" x 26\"",
      "Folded Size": "24\" x 16\" x 3\"",
      "Material": "Aluminum",
      "Height Adjustable": "Yes"
    },
    rating: 5,
    reviewCount: 134,
    inStock: true,
    brand: "Outwest Pro"
  },
  {
    id: "furniture-003",
    name: "Portable Hammock with Stand",
    category: "Camp Furniture",
    price: 129.99,
    image: "/images/products/camp-furniture/Hammock-with-Stand1.jpg",
    images: [
      "/images/products/camp-furniture/Hammock-with-Stand2.jpg",
      "/images/products/camp-furniture/Hammock-with-Stand3.jpg",
      "/images/products/camp-furniture/Hammock-with-Stand4.jpg",
      "/images/products/camp-furniture/Hammock-with-Stand5.jpg",
      "/images/products/camp-furniture/Hammock-with-Stand6.jpg",
      "/images/products/camp-furniture/Hammock-with-Stand7.jpg",
    ],
    description: "Complete hammock system with portable steel stand. Perfect for relaxation anywhere without trees.",
    specifications: {
      "Weight Capacity": "400 lbs",
      "Weight": "22 lbs",
      "Hammock Size": "9' x 4'",
      "Stand Dimensions": "12' x 4' x 4'",
      "Material": "Polyester with Steel Frame",
      "Setup Time": "5 minutes"
    },
    rating: 5,
    reviewCount: 89,
    inStock: true,
    brand: "Outwest Comfort"
  },
  {
    id: "furniture-004",
    name: "Compact Camping Cot",
    category: "Camp Furniture",
    price: 149.99,
    image: "/images/products/camp-furniture/Camping-Cot1.jpg",
    images: [
      "/images/products/camp-furniture/Camping-Cot2.jpg",
      "/images/products/camp-furniture/Camping-Cot3.jpg",
      "/images/products/camp-furniture/Camping-Cot4.jpg",
      "/images/products/camp-furniture/Camping-Cot5.jpg",
    ],
    description: "Elevated camping cot keeps you off the ground for better sleep. Quick setup with no assembly required.",
    specifications: {
      "Weight Capacity": "350 lbs",
      "Weight": "8.5 lbs",
      "Dimensions": "75\" x 28\" x 16\"",
      "Folded Size": "38\" x 6\" x 6\"",
      "Material": "Ripstop Fabric with Aluminum Frame",
      "Setup Time": "30 seconds"
    },
    rating: 5,
    reviewCount: 156,
    inStock: true,
    brand: "Outwest Pro"
  },
  {
    id: "furniture-006",
    name: "Lightweight Folding Camping Table",
    category: "Camp Furniture",
    price: 89.99,
    originalPrice: 109.99,
    image: "/images/products/camp-furniture/Folding-Table1.jpg",
    images: [
      "/images/products/camp-furniture/Folding-Table2.jpg",
      "/images/products/camp-furniture/Folding-Table3.jpg",
      "/images/products/camp-furniture/Folding-Table4.jpg",
    ],
    description: "Compact aluminum folding table with adjustable height. Perfect for meals, card games, or camp cooking prep.",
    specifications: {
      "Weight Capacity": "80 lbs",
      "Weight": "7.4 lbs",
      "Dimensions": "35\" x 24\" x 27\"",
      "Material": "Aluminum Alloy",
      "Height": "Adjustable (18\"–27\")"
    },
    rating: 5,
    reviewCount: 112,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "furniture-007",
    name: "Deluxe Reclining Camp Chair",
    category: "Camp Furniture",
    price: 139.99,
    originalPrice: 169.99,
    image: "/images/products/camp-furniture/Reclining-Chair1.jpg",
    images: [
      "/images/products/camp-furniture/Reclining-Chair2.jpg",
      "/images/products/camp-furniture/Reclining-Chair3.jpg",
      "/images/products/camp-furniture/Reclining-Chair4.jpg",
      "/images/products/camp-furniture/Reclining-Chair5.jpg",
      "/images/products/camp-furniture/Reclining-Chair6.jpg"
    ],
    description: "Premium reclining camp chair with adjustable backrest, head pillow, and breathable mesh fabric for ultimate relaxation.",
    specifications: {
      "Weight Capacity": "350 lbs",
      "Weight": "12.5 lbs",
      "Dimensions": "28\" x 26\" x 42\"",
      "Seat Height": "18\"",
      "Material": "Polyester Mesh",
      "Frame": "Powder-coated Steel"
    },
    rating: 5,
    reviewCount: 95,
    inStock: true,
    featured: true,
    brand: "Summit Gear"
  },
  {
    id: "furniture-008",
    name: "Collapsible Camp Storage Organizer",
    category: "Camp Furniture",
    price: 119.99,
    image: "/images/products/camp-furniture/Camp-Organizer1.jpeg",
    images: [
      "/images/products/camp-furniture/Camp-Organizer2.webp",
      "/images/products/camp-furniture/Camp-Organizer3.webp",
      "/images/products/camp-furniture/Camp-Organizer4.webp",
      "/images/products/camp-furniture/Camp-Organizer5.webp",
      "/images/products/camp-furniture/Camp-Organizer6.webp",
      "/images/products/camp-furniture/Camp-Organizer7.webp",
    ],
    description: "Portable camp organizer with multiple shelves and side pockets. Keeps your food, gear, and utensils neatly stored.",
    specifications: {
      "Weight": "14 lbs",
      "Dimensions": "24\" x 19\" x 32\"",
      "Material": "600D Oxford Fabric",
      "Frame": "Aluminum",
      "Shelves": "3-Tier"
    },
    rating: 4,
    reviewCount: 67,
    inStock: true,
    brand: "Outwest Comfort"
  },
  {
    id: "furniture-009",
    name: "Folding Camp Cot XL",
    category: "Camp Furniture",
    price: 159.99,
    originalPrice: 189.99,
    image: "/images/products/camp-furniture/Folding-Cot1.jpg",
    images: [
      "/images/products/camp-furniture/Folding-Cot2.jpg",
      "/images/products/camp-furniture/Folding-Cot3.jpg",
      "/images/products/camp-furniture/Folding-Cot4.jpg",
      "/images/products/camp-furniture/Folding-Cot5.jpg",
      "/images/products/camp-furniture/Folding-Cot6.jpg"
    ],
    description: "Extra-large folding camp cot with heavy-duty frame and breathable fabric. Provides off-the-ground comfort for camping trips.",
    specifications: {
      "Weight Capacity": "400 lbs",
      "Weight": "16 lbs",
      "Dimensions": "82\" x 30\" x 20\"",
      "Material": "600D Polyester",
      "Frame": "Steel"
    },
    rating: 5,
    reviewCount: 154,
    inStock: true,
    featured: true,
    brand: "HighTrail"
  },
  {
    id: "furniture-010",
    name: "Portable Hammock with Stand",
    category: "Camp Furniture",
    price: 129.99,
    image: "/images/products/camp-furniture/Hammock-Stand1.jpg",
    images: [
      "/images/products/camp-furniture/Hammock-Stand2.jpg",
      "/images/products/camp-furniture/Hammock-Stand3.jpg",
      "/images/products/camp-furniture/Hammock-Stand4.jpg",
      "/images/products/camp-furniture/Hammock-Stand5.jpg",
    ],
    description: "Relax anywhere with this portable hammock and foldable stand. Strong, lightweight, and easy to carry with included bag.",
    specifications: {
      "Weight Capacity": "350 lbs",
      "Weight": "11.2 lbs",
      "Dimensions": "108\" x 55\"",
      "Material": "Cotton Blend Fabric",
      "Frame": "Steel Tubing"
    },
    rating: 5,
    reviewCount: 122,
    inStock: true,
    brand: "ZenCamp"
  },
  {
    id: "furniture-011",
    name: "Compact Folding Camp Stool",
    category: "Camp Furniture",
    price: 34.99,
    image: "/images/products/camp-furniture/Camp-Stool1.jpg",
    images: [
      "/images/products/camp-furniture/Camp-Stool2.jpg",
      "/images/products/camp-furniture/Camp-Stool3.jpg",
      "/images/products/camp-furniture/Camp-Stool4.jpg",
      "/images/products/camp-furniture/Camp-Stool5.jpg",
      "/images/products/camp-furniture/Camp-Stool6.jpg"
    ],
    description: "Ultralight folding stool for quick seating around the campfire, fishing trips, or hiking breaks.",
    specifications: {
      "Weight Capacity": "220 lbs",
      "Weight": "1.6 lbs",
      "Dimensions": "13\" x 13\" x 15\"",
      "Material": "Oxford Cloth",
      "Frame": "Aluminum Alloy"
    },
    rating: 4,
    reviewCount: 88,
    inStock: true,
    brand: "TrailMate"
  },
  {
    id: "furniture-012",
    name: "Double Folding Camping Chair",
    category: "Camp Furniture",
    price: 149.99,
    originalPrice: 179.99,
    image: "/images/products/camp-furniture/Double-Chair1.jpg",
    images: [
      "/images/products/camp-furniture/Double-Chair2.jpg",
      "/images/products/camp-furniture/Double-Chair3.jpg",
      "/images/products/camp-furniture/Double-Chair4.jpg",
      "/images/products/camp-furniture/Double-Chair5.jpg",
      "/images/products/camp-furniture/Double-Chair6.jpg",
      "/images/products/camp-furniture/Double-Chair7.jpg"
    ],
    description: "Two-person folding camping chair with padded seats and cup holders. Perfect for couples and family camping trips.",
    specifications: {
      "Weight Capacity": "500 lbs",
      "Weight": "14 lbs",
      "Dimensions": "48\" x 22\" x 36\"",
      "Seat Height": "18\"",
      "Material": "600D Polyester",
      "Frame": "Steel"
    },
    rating: 5,
    reviewCount: 76,
    inStock: true,
    featured: true,
    brand: "Outwest Comfort"
  },
  {
    id: "furniture-013",
    name: "Folding Camp Rocking Chair",
    category: "Camp Furniture",
    price: 119.99,
    image: "/images/products/camp-furniture/Rocking-Chair1.jpg",
    images: [
      "/images/products/camp-furniture/Rocking-Chair2.jpg",
      "/images/products/camp-furniture/Rocking-Chair3.jpg",
      "/images/products/camp-furniture/Rocking-Chair4.jpg",
      "/images/products/camp-furniture/Rocking-Chair5.jpg",
      "/images/products/camp-furniture/Rocking-Chair6.jpg",
    ],
    description: "Smooth rocking motion with this sturdy folding camp chair. Includes padded armrests and cup holder.",
    specifications: {
      "Weight Capacity": "300 lbs",
      "Weight": "12 lbs",
      "Dimensions": "25\" x 24\" x 38\"",
      "Material": "Polyester",
      "Frame": "Powder-coated Steel"
    },
    rating: 5,
    reviewCount: 131,
    inStock: true,
    brand: "RelaxOut"
  },
  {
    id: "furniture-014",
    name: "Adjustable Folding Camp Table with Storage",
    category: "Camp Furniture",
    price: 139.99,
    image: "/images/products/camp-furniture/Table-Storage1.jpg",
    images: [
      "/images/products/camp-furniture/Table-Storage2.jpg",
      "/images/products/camp-furniture/Table-Storage3.jpg",
      "/images/products/camp-furniture/Table-Storage4.jpg",
      "/images/products/camp-furniture/Table-Storage5.jpg",
      "/images/products/camp-furniture/Table-Storage6.jpg"
    ],
    description: "Convenient camp table with fold-out storage compartments. Great for cooking prep or gear organization.",
    specifications: {
      "Weight Capacity": "60 lbs",
      "Weight": "10.3 lbs",
      "Dimensions": "40\" x 20\" x 28\"",
      "Material": "Aluminum & Polyester",
      "Storage": "2 Compartments"
    },
    rating: 4,
    reviewCount: 54,
    inStock: true,
    brand: "Summit Gear"
  },
  {
    id: "furniture-015",
    name: "Luxury Inflatable Camping Sofa",
    category: "Camp Furniture",
    price: 179.99,
    originalPrice: 219.99,
    image: "/images/products/camp-furniture/Camping-Sofa1.jpg",
    images: [
      "/images/products/camp-furniture/Camping-Sofa2.jpg",
      "/images/products/camp-furniture/Camping-Sofa3.jpg",
      "/images/products/camp-furniture/Camping-Sofa4.jpg",
      "/images/products/camp-furniture/Camping-Sofa5.jpg",
      "/images/products/camp-furniture/Camping-Sofa6.jpg",
      "/images/products/camp-furniture/Camping-Sofa7.jpg"
    ],
    description: "Spacious inflatable sofa made with durable TPU material. Comfortable, stylish, and easy to set up at the campsite.",
    specifications: {
      "Weight Capacity": "500 lbs",
      "Weight": "8.5 lbs",
      "Dimensions": "75\" x 35\" x 28\"",
      "Material": "TPU & Polyester",
      "Inflation": "Air Pump (Included)"
    },
    rating: 5,
    reviewCount: 61,
    inStock: true,
    featured: true,
    brand: "ZenCamp"
  },
  


  // Additional products to reach 40+
  {
    id: "tent-005",
    name: "Quick Setup Pop-Up Tent 3P",
    category: "Tents",
    price: 179.99,
    image: "/images/products/tents/Pop-Up-Tent-3P1.jpg",
    images: [
      "/images/products/tents/Pop-Up-Tent-3P2.jpg",
      "/images/products/tents/Pop-Up-Tent-3P3.jpg",
      "/images/products/tents/Pop-Up-Tent-3P4.jpg",
      "/images/products/tents/Pop-Up-Tent-3P5.jpg",
      "/images/products/tents/Pop-Up-Tent-3P6.jpg",
    ],
    description: "Instant setup tent that pops up in seconds. Perfect for festivals and quick camping trips.",
    specifications: {
      "Capacity": "3 People",
      "Weight": "6.5 lbs",
      "Floor Area": "45 sq ft",
      "Peak Height": "4'2\"",
      "Waterproof Rating": "2500mm",
      "Season": "3-Season",
      "Setup Time": "30 seconds"
    },
    rating: 5,
    reviewCount: 92,
    inStock: true,
    brand: "Outwest Quick"
  },
  // {
  //   id: "sleep-005",
  //   name: "Ultralight Down Sleeping Bag",
  //   category: "Sleeping Bags & Pads",
  //   price: 399.99,
  //   image: "/images/products/sleeping-bags/Ultralight-Sleeping-Bag1.jpg",
  //   images: [
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag2.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag3.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag4.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag5.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag6.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag7.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag8.jpg",
  //     "/images/products/sleeping-bags/Ultralight-Sleeping-Bag9.jpg",
  //   ],
  //   description: "Premium 800-fill down sleeping bag for extreme lightweight backpacking. Temperature rated to 0°F.",
  //   specifications: {
  //     "Temperature Rating": "0°F",
  //     "Fill Type": "800 Fill Down",
  //     "Weight": "2.1 lbs",
  //     "Length": "Regular (6'0\")",
  //     "Stuff Sack": "6\" x 12\"",
  //     "Shell Material": "10D Nylon"
  //   },
  //   rating: 5,
  //   reviewCount: 67,
  //   inStock: true,
  //   brand: "Outwest Elite"
  // },
  {
    id: "pack-005",
    name: "Hydration Pack 15L",
    category: "Backpacks & Bags",
    price: 69.99,
    image: "/images/products/backpacks/Hydration-Pack-15L1.jpg",
    images: [
      "/images/products/backpacks/Hydration-Pack-15L2.jpg",
      "/images/products/backpacks/Hydration-Pack-15L3.jpg",
      "/images/products/backpacks/Hydration-Pack-15L4.jpg",
      "/images/products/backpacks/Hydration-Pack-15L5.jpg",
      "/images/products/backpacks/Hydration-Pack-15L6.jpg",
    ],
    description: "Lightweight hydration pack with 2L reservoir. Perfect for day hikes and mountain biking.",
    specifications: {
      "Capacity": "15L",
      "Weight": "1.8 lbs",
      "Hydration": "2L Reservoir Included",
      "Dimensions": "18\" x 10\" x 7\"",
      "Material": "210D Ripstop Nylon",
      "Ventilation": "Air Mesh Back Panel"
    },
    rating: 5,
    reviewCount: 143,
    inStock: true,
    brand: "Outwest Active"
  },
  {
    id: "kitchen-005",
    name: "Multi-Tool Camping Utensil Set",
    category: "Camp Kitchen",
    price: 29.99,
    image: "/images/products/camp-kitchen/Camping-Utensil-Set1.jpg",
    images: [
      "/images/products/camp-kitchen/Camping-Utensil-Set2.jpg",
      "/images/products/camp-kitchen/Camping-Utensil-Set3.jpg",
      "/images/products/camp-kitchen/Camping-Utensil-Set4.jpg",
      "/images/products/camp-kitchen/Camping-Utensil-Set5.png",
    ],
    description: "Compact utensil set with fork, knife, spoon, bottle opener, and can opener. Made from durable titanium.",
    specifications: {
      "Material": "Titanium",
      "Weight": "2.1 oz",
      "Pieces": "5 Tools",
      "Length": "6.5\"",
      "Dishwasher Safe": "Yes",
      "Carabiner": "Included"
    },
    rating: 5,
    reviewCount: 234,
    inStock: true,
    brand: "Outwest Gear"
  },
  {
    id: "furniture-005",
    name: "Inflatable Pillow Deluxe",
    category: "Camp Furniture",
    price: 24.99,
    image: "/images/products/camp-furniture/Pillow-Deluxe4.jpg",
    images: [
      "/images/products/camp-furniture/Pillow-Deluxe2.jpg",
      "/images/products/camp-furniture/Pillow-Deluxe3.jpg",
      "/images/products/camp-furniture/Pillow-Deluxe1.jpg",
      "/images/products/camp-furniture/Pillow-Deluxe5.jpg",
    ],
    description: "Ergonomic inflatable pillow with soft-touch fabric. Packs down to size of smartphone.",
    specifications: {
      "Weight": "2.8 oz",
      "Inflated Size": "16\" x 12\" x 4\"",
      "Packed Size": "4\" x 2\" x 1\"",
      "Material": "50D Polyester with TPU",
      "Inflation": "8-10 breaths",
      "Washable": "Yes"
    },
    rating: 5,
    reviewCount: 187,
    inStock: true,
    brand: "Outwest Comfort"
  }
];

export const categories = [
  "Tents",
  "Sleeping Bags & Pads", 
  "Backpacks & Bags",
  "Camp Kitchen",
  "Camp Furniture"
];

export const brands = [
  "Outwest Pro",
  "Outwest Lite", 
  "Outwest Elite",
  "Outwest Family",
  "Outwest Extreme",
  "Outwest Classic",
  "Outwest Comfort",
  "Outwest Pure",
  "Outwest Quick",
  "Outwest Active",
  "Outwest Gear"
];

export const featuredProducts = products.filter(p => p.featured);

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};