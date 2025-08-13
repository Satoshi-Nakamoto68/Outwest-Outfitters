import React from "react";
import {
  Shield,
  MapPin,
  Mail,
  Inbox,
  Reply,
  Megaphone,
  BarChart3,
  Cookie,
  Database,
  Clock,
  CheckCircle2,
  Edit3,
  Trash2,
  Ban,
} from "lucide-react";

const PrivacyPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative py-20 md:py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Your privacy matters to Outwest Outfitters, LLC. Learn what we
            collect, how we use it, and your choices.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who we are */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Who we are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Outwest Outfitters, LLC (founded January 28, 2025) is based in
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
                Commitment
              </div>
              <div className="text-xl font-semibold mt-1">
                Your data, respected
              </div>
              <p className="text-emerald-100 mt-2">
                We collect only what we need to provide our services and never
                sell your personal information.
              </p>
            </div>
          </div>

          {/* Information we collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information we collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-50 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="font-medium text-gray-900">Contact form</div>
                </div>
                <p className="text-gray-700">
                  Name, email, subject, and message to respond to inquiries.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-50 p-2 rounded-lg">
                    <Inbox className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="font-medium text-gray-900">
                    Newsletter signup
                  </div>
                </div>
                <p className="text-gray-700">
                  Email address to send updates, tips, and offers.
                </p>
              </div>
            </div>
          </div>

          {/* How we use your information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How we use your information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <Reply className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  Respond to requests
                </div>
                <p className="text-gray-700">
                  Provide support and respond to your inquiries.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <Megaphone className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  Send newsletters
                </div>
                <p className="text-gray-700">
                  Only if you subscribe, with easy opt-out anytime.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  Improve our site
                </div>
                <p className="text-gray-700">
                  Enhance features and content based on feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies and analytics + Data retention */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Cookie className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">
                  Cookies and analytics
                </div>
              </div>
              <p className="text-gray-700">
                We do not use third-party analytics or tracking cookies. The
                framework may use standard browser storage for essential
                functionality such as routing.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-50 p-2 rounded-lg">
                  <Database className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-medium text-gray-900">Data retention</div>
              </div>
              <p className="text-gray-700">
                We keep personal information only as long as needed for the
                purposes described or as required by law. You can request
                deletion at any time.
              </p>
            </div>
          </div>

          {/* Your choices */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your choices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-50 p-2 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="font-medium text-gray-900">
                    Unsubscribe anytime
                  </div>
                </div>
                <p className="text-gray-700">
                  Use the unsubscribe link in our emails or contact us to stop
                  receiving newsletters.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-50 p-2 rounded-lg">
                    <Edit3 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="font-medium text-gray-900">
                    Access, correct, or delete
                  </div>
                </div>
                <p className="text-gray-700">
                  Request a copy, correction, or deletion of your data by
                  contacting us.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <Trash2 className="h-4 w-4" />
                  <span>Deletion requests honored promptly.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Children's privacy */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 mb-12">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Ban className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <div className="font-semibold text-amber-800 mb-1">
                  Children's privacy
                </div>
                <p className="text-amber-800/90">
                  Our website is not intended for children under 13, and we do
                  not knowingly collect personal information from them. If you
                  believe a child has provided information to us, please contact
                  us.
                </p>
              </div>
            </div>
          </div>

          {/* Contact us */}
          {/* <div className="rounded-2xl border border-gray-200 p-6 bg-white mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact us
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

export default PrivacyPage;
