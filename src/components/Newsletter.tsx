import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-3 rounded-full">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated on Adventure
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Get the latest outdoor gear updates, adventure tips, and exclusive
          offers delivered to your inbox.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-2 border-emerald-500 focus:border-white focus:outline-none text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
            <div className="text-white text-lg font-semibold mb-2">
              🎉 Thank you for subscribing!
            </div>
            <p className="text-emerald-100">
              You'll receive our latest updates and exclusive offers soon.
            </p>
          </div>
        )}

        <p className="text-emerald-200 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
