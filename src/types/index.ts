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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  readTime: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}