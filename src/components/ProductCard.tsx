import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group h-full flex flex-col cursor-pointer"
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
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Out of Stock
          </div>
        )}
        {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200"
            disabled={!product.inStock}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div> */}
      </div>

      <div className="p-6 flex flex-col flex-1">
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
          {/* <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount})
          </span> */}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-2">{product.brand}</p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
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
  );
};

export default ProductCard;
