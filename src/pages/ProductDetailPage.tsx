import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { getProductById } from "../data/products";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const sampleReviews = [
    {
      id: "1",
      author: "Sarah M.",
      rating: 5,
      comment:
        "Absolutely love this product! Exceeded my expectations in every way. The quality is outstanding and it performs exactly as described.",
      date: "Jan 15, 2025",
      verified: true,
    },
    {
      id: "2",
      author: "Mike R.",
      rating: 4,
      comment:
        "Great value for the price. Very satisfied with the purchase. Only minor issue was the delivery took a bit longer than expected.",
      date: "Jan 10, 2025",
      verified: true,
    },
    {
      id: "3",
      author: "Emily K.",
      rating: 5,
      comment:
        "Perfect for my needs! The build quality is impressive and it has held up well during multiple camping trips. Highly recommended.",
      date: "Jan 8, 2025",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-gray-700">
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to={`/products?category=${encodeURIComponent(product.category)}`}
            className="text-gray-500 hover:text-gray-700"
          >
            {product.category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                loading="lazy"
                className="w-full h-96 object-contain bg-gray-100 rounded-lg"
              />
              {/* {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-md font-semibold">
                  Sale
                </div>
              )} */}
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md font-semibold">
                  Out of Stock
                </div>
              )}

              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev > 0 ? prev - 1 : product.images.length - 1
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev < product.images.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                      selectedImageIndex === index
                        ? "border-emerald-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-4">{product.brand}</p>

            <div className="flex items-center space-x-4 mb-6">
              {/* <span className="text-3xl font-bold text-emerald-600">
                ${product.price}
              </span> */}
              {/* {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )} */}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Purchase Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                {/* <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    disabled={!product.inStock}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* <div className="flex-1">
                  <button
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      product.inStock
                        ? "bg-emerald-600 text-white hover:bg-emerald-700 transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div> */}
              </div>

              {/* <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 mr-2" />
                  Save for Later
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
              </div> */}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-emerald-600" />
                <span>Free Shipping Over $100</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-emerald-600" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Specifications
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {sampleReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
