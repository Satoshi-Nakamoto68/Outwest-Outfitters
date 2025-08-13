import React from "react";
import {
  Truck,
  Package,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Mail,
  MapPin,
  Clock,
  CreditCard,
} from "lucide-react";

const ShippingPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative py-20 md:py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shipping & Returns
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Learn about order processing, delivery times, returns, and warranty
            support.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Shipping overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Order Processing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Orders are processed during business hours. We strive to
                dispatch orders as quickly as possible.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-emerald-50 rounded-lg p-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Business Hours</div>
                    <div className="font-medium text-gray-900">
                      Mon–Fri: 8:00 AM – 6:00 PM PST · Sat: 9:00 AM – 4:00 PM ·
                      Sun: Closed
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-emerald-50 rounded-lg p-2">
                    <Package className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Packaging</div>
                    <div className="font-medium text-gray-900">
                      Securely packed to protect your gear during transit
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-600 rounded-2xl p-6 text-white">
              <div className="text-sm uppercase tracking-wide text-emerald-100">
                Heads up
              </div>
              <div className="text-xl font-semibold mt-1">
                Delivery Estimates
              </div>
              <p className="text-emerald-100 mt-2">
                Delivery times are estimates and may vary due to carrier delays
                or circumstances beyond our control.
              </p>
            </div>
          </div>

          {/* Shipping details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <Truck className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Shipping Methods
              </div>
              <p className="text-gray-700">
                Standard and expedited options may be available at checkout.
                Rates are calculated based on destination and order size.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <CreditCard className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Taxes & Duties
              </div>
              <p className="text-gray-700">
                Prices are in USD. Applicable taxes are calculated at checkout
                according to your location.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Shipping Locations
              </div>
              <p className="text-gray-700">
                We ship to many regions. Availability may vary by product and
                destination.
              </p>
            </div>
          </div>

          {/* Returns & Exchanges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <RotateCcw className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">
                  Returns & Exchanges
                </div>
              </div>
              <p className="text-gray-700">
                Items must be in new, unused condition with original packaging
                and proof of purchase. Some items may be final sale.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">
                  Warranty Support
                </div>
              </div>
              <p className="text-gray-700">
                Manufacturer warranties, if any, are provided by the brands. We
                assist with reasonable warranty support.
              </p>
            </div>
          </div>

          {/* How to return */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-white mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to start a return
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                Contact our team with your order number and reason for return.
              </li>
              <li>
                We will provide return instructions and, if applicable, a return
                authorization.
              </li>
              <li>
                Pack your item securely and ship according to the provided
                instructions.
              </li>
              <li>
                Once received and inspected, eligible refunds are processed to
                your original payment method.
              </li>
            </ol>
            <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <AlertTriangle className="h-4 w-4" />
              <span>
                Return shipping costs may apply unless otherwise stated.
              </span>
            </div>
          </div>

          {/* Contact & Effective date */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href="mailto:contact@outwestoutfitters.com"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    contact@outwestoutfitters.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Mailing address</div>
                  <div className="font-medium text-gray-900">
                    14220 Andreini Road, Red Bluff, CA 96080, USA
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Effective date: {currentYear}-01-28</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
