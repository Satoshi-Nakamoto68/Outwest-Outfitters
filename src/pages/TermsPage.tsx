import React from "react";
import {
  FileText,
  Package,
  Truck,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Landmark,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const TermsPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative py-20 md:py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Please read these terms carefully. By using our site, you agree to
            the following terms and conditions.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company & Scope */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Company & Scope
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the website
                and services provided by Outwest Outfitters, LLC, based in
                California, USA.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-emerald-50 rounded-lg p-2">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Office Address</div>
                    <div className="font-medium text-gray-900">
                      14220 Andreini Road, Red Bluff, CA 96080, USA
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-emerald-50 rounded-lg p-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Founded</div>
                    <div className="font-medium text-gray-900">
                      January 28, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-600 rounded-2xl p-6 text-white">
              <div className="text-sm uppercase tracking-wide text-emerald-100">
                Agreement
              </div>
              <div className="text-xl font-semibold mt-1">Using Our Site</div>
              <p className="text-emerald-100 mt-2">
                By accessing or purchasing from our website, you confirm that
                you are at least 18 years old or have parental consent.
              </p>
            </div>
          </div>

          {/* Orders & Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <Package className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Products & Orders
              </div>
              <p className="text-gray-700">
                Product availability may vary. We may limit quantities and
                refuse or cancel orders at our discretion.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <Landmark className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Pricing & Taxes
              </div>
              <p className="text-gray-700">
                Prices are shown in USD and may change without notice.
                Applicable taxes are calculated at checkout according to your
                location.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <Truck className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">
                Shipping & Delivery
              </div>
              <p className="text-gray-700">
                Delivery times are estimates and may vary due to carrier delays
                or circumstances beyond our control.
              </p>
            </div>
          </div>

          {/* Returns & Warranty */}
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
                If a return policy applies, items must be in new condition and
                accompanied by proof of purchase. Some items may be final sale.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">Warranty</div>
              </div>
              <p className="text-gray-700">
                Manufacturer warranties, if any, are provided by the respective
                brands. We will assist with reasonable warranty support.
              </p>
            </div>
          </div>

          {/* Liability & Conduct */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">
                  Limitation of Liability
                </div>
              </div>
              <p className="text-gray-700">
                To the fullest extent permitted by law, Outwest Outfitters, LLC
                is not liable for indirect, incidental, or consequential damages
                arising from your use of the site or products.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Scale className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">User Conduct</div>
              </div>
              <p className="text-gray-700">
                You agree not to misuse the site, interfere with operations, or
                violate applicable laws.
              </p>
            </div>
          </div>

          {/* IP, Law, Changes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="font-medium text-gray-900 mb-1">
                Intellectual Property
              </div>
              <p className="text-gray-700">
                All content on this site, including text, graphics, and logos,
                is owned by Outwest Outfitters, LLC or its licensors.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Landmark className="h-5 w-5 text-emerald-600" />
                <div className="font-medium text-gray-900">Governing Law</div>
              </div>
              <p className="text-gray-700">
                These Terms are governed by the laws of the State of California,
                USA, without regard to conflict of law principles.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="font-medium text-gray-900 mb-1">
                Changes to Terms
              </div>
              <p className="text-gray-700">
                We may update these Terms from time to time. We will post the
                updated version on this page with a new effective date.
              </p>
            </div>
          </div>

          {/* Contact */}
          {/* <div className="rounded-2xl border border-gray-200 p-6 bg-white mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default TermsPage;
