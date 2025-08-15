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
      "/images/products/tents/Family-Camp-Tent1.jpg",
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
    image: "/images/products/tents/Pine-Ridge-Tent1.jpg",
    images: [
      "/images/products/tents/Pine-Ridge-Tent1.jpg",
      "/images/products/tents/Pine-Ridge-Tent2.jpg",
      "/images/products/tents/Pine-Ridge-Tent3.jpg"
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
    image: "/images/products/tents/Everest-Shield-Tent1.jpg",
    images: [
      "/images/products/tents/Everest-Shield-Tent1.jpg",
      "/images/products/tents/Everest-Shield-Tent2.jpg",
      "/images/products/tents/Everest-Shield-Tent3.jpg",
      "/images/products/tents/Everest-Shield-Tent4.jpg",
      "/images/products/tents/Everest-Shield-Tent5.jpg"
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
    image: "/images/products/tents/Riverbend-Shelter1.jpg",
    images: [
      "/images/products/tents/Riverbend-Shelter1.jpg",
      "/images/products/tents/Riverbend-Shelter2.jpg",
      "/images/products/tents/Riverbend-Shelter3.jpg"
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
    image: "/images/products/tents/Glacier-View-Tent1.jpg",
    images: [
      "/images/products/tents/Glacier-View-Tent1.jpg",
      "/images/products/tents/Glacier-View-Tent2.jpg",
      "/images/products/tents/Glacier-View-Tent3.jpg",
      "/images/products/tents/Glacier-View-Tent4.jpg"
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
    image: "/images/products/tents/Sahara-Shade-Tent1.jpg",
    images: [
      "/images/products/tents/Sahara-Shade-Tent1.jpg",
      "/images/products/tents/Sahara-Shade-Tent2.jpg",
      "/images/products/tents/Sahara-Shade-Tent3.jpg"
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
    image: "/images/products/tents/Forest-Haven-Tent1.jpg",
    images: [
      "/images/products/tents/Forest-Haven-Tent1.jpg",
      "/images/products/tents/Forest-Haven-Tent2.jpg",
      "/images/products/tents/Forest-Haven-Tent3.jpg",
      "/images/products/tents/Forest-Haven-Tent4.jpg"
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
    image: "/images/products/tents/Mountain-Trail-Tent1.jpg",
    images: [
      "/images/products/tents/Mountain-Trail-Tent1.jpg",
      "/images/products/tents/Mountain-Trail-Tent2.jpg",
      "/images/products/tents/Mountain-Trail-Tent3.jpg",
      "/images/products/tents/Mountain-Trail-Tent4.jpg"
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
    image: "/images/products/tents/Lakeside-Retreat-Tent1.jpg",
    images: [
      "/images/products/tents/Lakeside-Retreat-Tent1.jpg",
      "/images/products/tents/Lakeside-Retreat-Tent2.jpg",
      "/images/products/tents/Lakeside-Retreat-Tent3.jpg",
      "/images/products/tents/Lakeside-Retreat-Tent4.jpg",
      "/images/products/tents/Lakeside-Retreat-Tent5.jpg"
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
      "/images/products/backpacks/Summit-Backpack-65L5.jpg",
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
  {
    id: "sleep-005",
    name: "Ultralight Down Sleeping Bag",
    category: "Sleeping Bags & Pads",
    price: 399.99,
    image: "/images/products/sleeping-bags/Ultralight-Sleeping-Bag1.jpg",
    images: [
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag2.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag3.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag4.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag5.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag6.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag7.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag8.jpg",
      "/images/products/sleeping-bags/Ultralight-Sleeping-Bag9.jpg",
    ],
    description: "Premium 800-fill down sleeping bag for extreme lightweight backpacking. Temperature rated to 0°F.",
    specifications: {
      "Temperature Rating": "0°F",
      "Fill Type": "800 Fill Down",
      "Weight": "2.1 lbs",
      "Length": "Regular (6'0\")",
      "Stuff Sack": "6\" x 12\"",
      "Shell Material": "10D Nylon"
    },
    rating: 5,
    reviewCount: 67,
    inStock: true,
    brand: "Outwest Elite"
  },
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