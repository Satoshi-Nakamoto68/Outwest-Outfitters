import React from "react";
import { Users, Target, Award, MapPin } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Outwest Outfitters
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Dedicated to providing premium outdoor gear and inspiring adventures
            since 2025
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              Outwest Outfitters was founded on January 28, 2025, by Hank
              Bunting, a lifelong outdoor enthusiast with decades of experience
              exploring the wilderness of California and beyond. After countless
              adventures in the Sierra Nevada mountains, desert landscapes, and
              coastal regions, Hank recognized a need for reliable, high-quality
              outdoor gear that could withstand the demands of serious
              adventurers while remaining accessible to newcomers.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              What started as a passion project born from campfire conversations
              about gear failures and wish-list items has evolved into a trusted
              source for outdoor equipment. We believe that the right gear
              shouldn't just function—it should enhance your experience, give
              you confidence in challenging conditions, and last for years of
              adventures.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Based in Red Bluff, California, we're strategically positioned in
              the heart of outdoor recreation country. Our team consists of
              passionate outdoor enthusiasts who personally test and use every
              product we sell. We don't just sell gear; we live the lifestyle
              our customers embrace.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing reliable, high-quality outdoor gear
              and inspiring exploration of the natural world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                Every product meets our rigorous standards for durability,
                functionality, and performance in real-world conditions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                We listen to our community of adventurers and continuously
                improve our selection based on real feedback and needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expertise
              </h3>
              <p className="text-gray-600">
                Our team's combined decades of outdoor experience ensure we
                offer products and advice you can trust.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Adventure
              </h3>
              <p className="text-gray-600">
                We inspire exploration and help adventurers discover the beauty
                of nature with confidence and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Company Information
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Legal Information
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Company Name:</strong> Outwest Outfitters, LLC
                  </p>
                  <p>
                    <strong>Founded:</strong> January 28, 2025
                  </p>
                  <p>
                    <strong>State:</strong> California, USA
                  </p>
                  <p>
                    <strong>Founder:</strong> Hank Bunting
                  </p>
                  {/* <p>
                    <strong>EIN:</strong> 39-2141619
                  </p> */}
                  {/* <p><strong>California File No:</strong> 202565518895</p> */}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Office Address:</strong>
                    <br />
                    14220 Andreini Road
                    <br />
                    Red Bluff, CA 96080, USA
                  </p>
                  {/* <p>
                    <strong>Mailing Address:</strong>
                    <br />
                    PO BOX 1035
                    <br />
                    Red Bluff, CA 96080, USA
                  </p>
                  <p>
                    <strong>Email:</strong> contact@outwestoutfitters.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (530) 555-0142
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Founder
            </h2>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 bg-emerald-200 rounded-full flex items-center justify-center">
                <Users className="h-24 w-24 text-emerald-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hank Bunting
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With over 20 years of outdoor experience spanning from
                  technical mountaineering to multi-day backpacking trips, Hank
                  founded Outwest Outfitters to bridge the gap between premium
                  performance and accessible pricing in outdoor gear.
                </p>
                <p className="text-gray-600">
                  "I believe that everyone should have access to gear they can
                  trust, whether they're attempting their first overnight
                  camping trip or embarking on a month-long expedition. Quality
                  outdoor equipment isn't a luxury—it's essential for safe and
                  enjoyable adventures."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
