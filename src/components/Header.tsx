import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { products } from "../data/products";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Filter products for suggestions
  const filteredProducts = products
    .filter((p) => {
      const q = searchTerm.trim().toLowerCase();
      const haystack =
        `${p.name} ${p.brand} ${p.category} ${p.description}`.toLowerCase();
      return haystack.includes(q);
    })
    .slice(0, 6);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || filteredProducts.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredProducts.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredProducts.length) {
          navigate(`/product/${filteredProducts[selectedIndex].id}`);
          setSearchTerm("");
          setShowDropdown(false);
          setSelectedIndex(-1);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Highlight matching text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-outwest-outfitters.png"
                alt="Outwest Outfitters"
                className="h-10 w-auto"
              />
              <span className="sr-only">Outwest Outfitters</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-all duration-200 hover:text-emerald-600 relative ${
                  isActive(item.href)
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div ref={searchRef} className="hidden md:flex relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = searchTerm.trim();
                  const url = q
                    ? `/products?q=${encodeURIComponent(q)}`
                    : "/products";
                  navigate(url);
                  setSearchTerm("");
                  setShowDropdown(false);
                  setSelectedIndex(-1);
                  setIsMenuOpen(false);
                }}
                className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
                role="search"
              >
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(e.target.value.trim().length > 0);
                    setSelectedIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search products..."
                  className="px-3 py-2 outline-none text-sm w-48"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>

              {showDropdown && filteredProducts.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="max-h-80 overflow-auto py-1">
                    {filteredProducts.map((p, index) => (
                      <li key={p.id}>
                        <Link
                          to={`/product/${p.id}`}
                          onClick={() => {
                            setSearchTerm("");
                            setShowDropdown(false);
                            setSelectedIndex(-1);
                          }}
                          className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-50 ${
                            index === selectedIndex ? "bg-emerald-50" : ""
                          }`}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-8 w-8 rounded object-cover flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {highlightText(p.name, searchTerm.trim())}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {highlightText(p.brand, searchTerm.trim())} •{" "}
                              {highlightText(p.category, searchTerm.trim())}
                            </div>
                          </div>
                          {/* <div className="ml-auto text-sm font-semibold text-gray-900">
                            ${p.price.toFixed(2)}
                          </div> */}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-gray-100">
                      <Link
                        to={`/products?q=${encodeURIComponent(
                          searchTerm.trim()
                        )}`}
                        onClick={() => {
                          setSearchTerm("");
                          setShowDropdown(false);
                          setSelectedIndex(-1);
                        }}
                        className="block px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50 font-medium"
                      >
                        View all results
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-orange-500 text-white rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </button> */}

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 animate-fadeIn">
              {/* Mobile search */}
              <div
                ref={searchRef}
                className="relative flex items-center gap-2 mb-2"
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const q = searchTerm.trim();
                    const url = q
                      ? `/products?q=${encodeURIComponent(q)}`
                      : "/products";
                    navigate(url);
                    setIsMenuOpen(false);
                    setSearchTerm("");
                    setShowDropdown(false);
                    setSelectedIndex(-1);
                  }}
                  className="flex items-center gap-2"
                  role="search"
                >
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowDropdown(e.target.value.trim().length > 0);
                      setSelectedIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Search products..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-emerald-600 text-white rounded-md"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>

                {showDropdown && filteredProducts.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <ul className="max-h-80 overflow-auto py-1">
                      {filteredProducts.map((p, index) => (
                        <li key={p.id}>
                          <Link
                            to={`/product/${p.id}`}
                            onClick={() => {
                              setSearchTerm("");
                              setShowDropdown(false);
                              setSelectedIndex(-1);
                              setIsMenuOpen(false);
                            }}
                            className={`flex items-center gap-3 px-3 py-2 hover:bg-gray-50 ${
                              index === selectedIndex ? "bg-emerald-50" : ""
                            }`}
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              className="h-8 w-8 rounded object-cover flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-gray-900 truncate">
                                {highlightText(p.name, searchTerm.trim())}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {highlightText(p.brand, searchTerm.trim())} •{" "}
                                {highlightText(p.category, searchTerm.trim())}
                              </div>
                            </div>
                            <div className="ml-auto text-sm font-semibold text-gray-900">
                              ${p.price.toFixed(2)}
                            </div>
                          </Link>
                        </li>
                      ))}
                      <li className="border-t border-gray-100">
                        <Link
                          to={`/products?q=${encodeURIComponent(
                            searchTerm.trim()
                          )}`}
                          onClick={() => {
                            setSearchTerm("");
                            setShowDropdown(false);
                            setSelectedIndex(-1);
                            setIsMenuOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50 font-medium"
                        >
                          View all results
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
