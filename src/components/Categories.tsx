import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Tents",
      description: "Shelter and protection for every adventure",
      image:
        "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
      href: "/products?category=Tents",
    },
    {
      name: "Sleeping Bags & Pads",
      description: "Comfort and warmth for restful nights",
      image: "/images/products/sleeping-bags/sleeping pad with Vortex.jpg",
      href: "/products?category=Sleeping+Bags+%26+Pads",
    },
    {
      name: "Backpacks & Bags",
      description: "Carry your gear with style and function",
      image:
        "/images/products/backpacks/hiking-backpack-mat-during-trek-600nw-2338145795.webp",
      href: "/products?category=Backpacks+%26+Bags",
    },
    {
      name: "Camp Kitchen",
      description: "Cook delicious meals in the wilderness",
      image: "/images/products/camp-kitchen/istockphoto-1254778121-612x612.jpg",
      href: "/products?category=Camp+Kitchen",
    },
    {
      name: "Camp Furniture",
      description: "Relax and unwind in outdoor comfort",
      image: "/images/products/camp-furniture/pSp1b819492d39a47.jpg",
      href: "/products?category=Camp+Furniture",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need for your next outdoor adventure with our
            carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-emerald-400 group-hover:text-white transition-colors duration-300">
                  <span className="font-semibold">Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
