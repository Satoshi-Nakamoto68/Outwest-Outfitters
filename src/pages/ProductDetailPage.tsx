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
import { getProductById, getProductsByCategory } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMainLoaded, setIsMainLoaded] = useState(false);

  const product = getProductById(id || "");

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reset main image loading state when the displayed image changes
  useEffect(() => {
    setIsMainLoaded(false);
  }, [selectedImageIndex, id]);

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || !product) return;

      switch (event.key) {
        case "Escape":
          setIsModalOpen(false);
          break;
        case "ArrowLeft":
          event.preventDefault();
          setSelectedImageIndex((prev) =>
            prev > 0
              ? prev - 1
              : product.images.length > 0
              ? product.images.length
              : 0
          );
          break;
        case "ArrowRight":
          event.preventDefault();
          setSelectedImageIndex((prev) =>
            prev < (product.images.length > 0 ? product.images.length : 0)
              ? prev + 1
              : 0
          );
          break;
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, product]);

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

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 8);

  

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
            <div className="md:flex md:gap-4">
              {/* Vertical Thumbnails (Desktop) */}
              {(product.images.length > 0 || product.image) && (
                <div className="hidden md:flex md:flex-col w-28 space-y-3 overflow-y-auto max-h-[30rem] pr-1">
                  {/* Main image thumbnail */}
                  <button
                    onClick={() => setSelectedImageIndex(0)}
                    className={`w-24 h-24 border-2 rounded-lg overflow-hidden ${
                      selectedImageIndex === 0
                        ? "border-emerald-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} main`}
                      loading="lazy"
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </button>
                  {/* Additional images thumbnails */}
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index + 1)}
                      className={`w-24 h-24 border-2 rounded-lg overflow-hidden ${
                        selectedImageIndex === index + 1
                          ? "border-emerald-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 2}`}
                        loading="lazy"
                        className="w-full h-full object-contain bg-gray-100"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Image */}
              <div className="relative mb-4 md:mb-0 flex-1">
                <div className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-emerald-500/40 via-emerald-300/20 to-transparent">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50 ring-1 ring-black/5 shadow-xl">
                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_55%)] blur-2xl" />
                    {/* Glass sheen highlight */}
                    <div className="pointer-events-none absolute -top-10 -left-12 w-3/4 h-24 bg-white/35 blur-xl rounded-full transform -rotate-6" />
                    {/* Soft vignette */}
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] rounded-2xl" />

                    {/* Loading skeleton */}
                    {!isMainLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-[22rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-shimmer [background-size:200%_100%]" />
                      </div>
                    )}

                    {/* Main image */}
                    <img
                      src={
                        selectedImageIndex === 0
                          ? product.image
                          : product.images[selectedImageIndex - 1]
                      }
                      alt={product.name}
                      loading="lazy"
                      onLoad={() => setIsMainLoaded(true)}
                      className={`w-full h-[22rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] object-contain cursor-zoom-in transition-all duration-500 ease-out ${
                        isMainLoaded ? "opacity-100" : "opacity-0"
                      } group-hover:scale-[1.02]`}
                      onClick={() => setIsModalOpen(true)}
                    />

                    {/* Click hint */}
                    <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-slate-500/80 bg-white/70 px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to zoom
                    </div>

                    {/* Image counter */}
                    {(product.images.length > 0 || product.image) && (
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-xs text-slate-700 shadow-sm ring-1 ring-black/5">
                        {selectedImageIndex + 1} / {product.images.length > 0 ? product.images.length + 1 : 1}
                      </div>
                    )}

                    {/* Status badge */}
                    {!product.inStock && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                        Out of Stock
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation arrows */}
                {(product.images.length > 0 || product.image) && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImageIndex((prev) =>
                          prev > 0
                            ? prev - 1
                            : product.images.length > 0
                            ? product.images.length
                            : 0
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg ring-1 ring-black/5 hover:bg-white transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImageIndex((prev) =>
                          prev <
                          (product.images.length > 0 ? product.images.length : 0)
                            ? prev + 1
                            : 0
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg ring-1 ring-black/5 hover:bg-white transition"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Images (Mobile) */}
            {(product.images.length > 0 || product.image) && (
              <div className="md:hidden flex space-x-3 overflow-x-auto">
                {/* Main image thumbnail */}
                <button
                  onClick={() => setSelectedImageIndex(0)}
                  className={`flex-shrink-0 w-24 h-24 border-2 rounded-lg overflow-hidden ${
                    selectedImageIndex === 0
                      ? "border-emerald-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} main`}
                    loading="lazy"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </button>
                {/* Additional images thumbnails */}
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index + 1)}
                    className={`flex-shrink-0 w-24 h-24 border-2 rounded-lg overflow-hidden ${
                      selectedImageIndex === index + 1
                        ? "border-emerald-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 2}`}
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

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Products
              </h2>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-emerald-600 hover:text-emerald-700 text-sm"
              >
                View all {product.category}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        {/* <div className="mt-16">
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
        </div> */}
      </div>

      {/* Image Modal/Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main image */}
            <img
              src={
                selectedImageIndex === 0
                  ? product.image
                  : product.images[selectedImageIndex - 1]
              }
              alt={product.name}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Navigation arrows */}
            {(product.images.length > 0 || product.image) && (
              <>
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev > 0
                        ? prev - 1
                        : product.images.length > 0
                        ? product.images.length
                        : 0
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev <
                      (product.images.length > 0 ? product.images.length : 0)
                        ? prev + 1
                        : 0
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} /{" "}
              {product.images.length > 0 ? product.images.length + 1 : 1}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
