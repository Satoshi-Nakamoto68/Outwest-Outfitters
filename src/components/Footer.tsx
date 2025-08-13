import React from "react";
import { Link } from "react-router-dom";
import { Mountain, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors duration-200">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Outwest</span>
                <span className="text-xl font-light text-emerald-400 ml-1">
                  Outfitters
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for outdoor adventures since 2025. We provide
              high-quality gear and inspire exploration of the great outdoors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">
                  14220 Andreini Road, Red Bluff, CA 96080, USA
                </span>
              </div>
              {/* <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a
                  href="mailto:contact@outwestoutfitters.com"
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  contact@outwestoutfitters.com
                </a>
              </div> */}
              {/* <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">(530) 555-0142</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">
              Main Menu
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">
              Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} Outwest Outfitters, LLC. All Rights Reserved.
              </p>
              {/* <p className="mt-1">
                Company Name: Outwest Outfitters, LLC | EIN: 39-2141619 |
                California File No: 202565518895
              </p> */}
              <p className="mt-1">Company Name: Outwest Outfitters, LLC</p>
            </div>
            <div className="flex space-x-6">
              <div className="text-xs text-gray-500">
                <p>Founded: January 28, 2025</p>
                <p>California, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
