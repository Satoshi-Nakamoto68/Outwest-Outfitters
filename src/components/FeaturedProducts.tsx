import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { featuredProducts } from "../data/products";

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated outdoor gear, chosen by
            adventure enthusiasts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                                 <img
                   src={product.image}
                   alt={product.name}
                   loading="lazy"
                   className="w-full h-64 object-contain bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                 />
                {/* {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    Sale
                  </div>
                )} */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div> */}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* <span className="ml-2 text-sm text-gray-600">({product.reviewCount})</span> */}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <span className="text-2xl font-bold text-emerald-600">
                      ${product.price}
                    </span> */}
                    {/* {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )} */}
                  </div>
                  <span className="text-emerald-600 font-medium text-sm">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
