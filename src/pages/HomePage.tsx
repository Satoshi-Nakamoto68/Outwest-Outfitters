import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const HomePage: React.FC = () => {
  const featuredRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [featuredRef.current, categoriesRef.current, aboutRef.current, newsletterRef.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      
      <section 
        ref={featuredRef}
        className="py-16 bg-gray-50 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
      >
        <FeaturedProducts />
      </section>

      <section 
        ref={categoriesRef}
        className="py-16 bg-white opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
      >
        <Categories />
      </section>

      {/* About Us Snippet */}
      <section 
        ref={aboutRef}
        className="py-16 bg-gray-50 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-200">
            About Outwest Outfitters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
            Founded in 2025 by outdoor enthusiast Hank Bunting, Outwest
            Outfitters was born from a passion for adventure and a commitment to
            providing reliable, high-quality outdoor gear. Based in California,
            we inspire exploration and help adventurers discover the beauty of
            nature with confidence and comfort. Every product we offer is
            carefully selected to meet the demands of serious outdoor
            enthusiasts while remaining accessible to newcomers eager to
            explore.
          </p>
          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl opacity-0 transform translate-y-4 transition-all duration-700 delay-600"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Blog Posts Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Adventures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover tips, guides, and inspiration for your next outdoor
              adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Essential Gear for Your First Backpacking Trip",
                excerpt:
                  "Everything you need to know about choosing the right gear for a successful and comfortable backpacking adventure.",
                author: "Hank Bunting",
                date: "Jan 15, 2025",
                readTime: "5 min read",
                image:
                  "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
              },
              {
                title: "Winter Camping: Staying Warm and Safe",
                excerpt:
                  "Expert tips for camping in cold weather conditions, from choosing the right sleeping bag to campsite selection.",
                author: "Sarah Chen",
                date: "Jan 12, 2025",
                readTime: "7 min read",
                image:
                  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
              },
              {
                title: "Top 10 Hiking Trails in California",
                excerpt:
                  "Discover breathtaking trails from the Sierra Nevada to the Pacific Coast, perfect for adventurers of all levels.",
                author: "Mike Rodriguez",
                date: "Jan 10, 2025",
                readTime: "8 min read",
                image:
                  "https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors duration-200"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section 
        ref={newsletterRef}
        className="py-16 bg-emerald-600 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
      >
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage;
