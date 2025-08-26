import React from "react";

type Testimonial = {
  name: string;
  isVerified: boolean;
  rating: number;
  quote: string;
  avatarUrl?: string;
};

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.42 2.36a.75.75 0 0 0 .423.204l3.35.487a.75.75 0 0 1 .416 1.279l-2.423 2.36a.75.75 0 0 0-.216.664l.572 3.336a.75.75 0 0 1-1.088.791l-3.001-1.578a.75.75 0 0 0-.698 0l-3.001 1.578a.75.75 0 0 1-1.088-.79l.572-3.337a.75.75 0 0 0-.216-.664L4.77 7.83a.75.75 0 0 1 .416-1.278l3.35-.486a.75.75 0 0 0 .423-.205l2.42-2.36Z" />
  </svg>
);

const CheckBadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M11.48 3.499a2.25 2.25 0 0 1 3.04 0l.87.848a2.25 2.25 0 0 0 1.267.61l1.206.175a2.25 2.25 0 0 1 1.904 1.904l.175 1.206a2.25 2.25 0 0 0 .61 1.267l.848.87a2.25 2.25 0 0 1 0 3.04l-.848.87a2.25 2.25 0 0 0-.61 1.267l-.175 1.206a2.25 2.25 0 0 1-1.904 1.904l-1.206.175a2.25 2.25 0 0 0-1.267.61l-.87.848a2.25 2.25 0 0 1-3.04 0l-.87-.848a2.25 2.25 0 0 0-1.267-.61l-1.206-.175a2.25 2.25 0 0 1-1.904-1.904l-.175-1.206a2.25 2.25 0 0 0-.61-1.267l-.848-.87a2.25 2.25 0 0 1 0-3.04l.848-.87a2.25 2.25 0 0 0 .61-1.267l.175-1.206A2.25 2.25 0 0 1 7.04 5.132l1.206-.175a2.25 2.25 0 0 0 1.267-.61l.87-.848Zm3.77 6.53a.75.75 0 1 0-1.06-1.06l-2.72 2.72-.72-.72a.75.75 0 1 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.06 0l3.25-3.25Z" />
  </svg>
);

const testimonialsData: Testimonial[] = [
  {
    name: "Alex Johnson",
    isVerified: true,
    rating: 5,
    quote:
      "The durability of the backpack is incredible. It survived a week-long trek through dense forest without a scratch. Absolutely essential gear!",
    avatarUrl: "/images/avatars/alex-johnson.jpg"
  },
  {
    name: "Maria Garcia",
    isVerified: true,
    rating: 5,
    quote:
      "I'm new to camping, and the starter kit I bought had everything I needed. The quality is fantastic for the price. Made my first experience a breeze.",
    avatarUrl: "/images/avatars/maria-garcia.jpg"
  },
  {
    name: "David Chen",
    isVerified: true,
    rating: 5,
    quote:
      "Great selection of products and fast shipping. The sleeping bag is super warm, though a bit bulkier than I expected. Overall, a great purchase.",
    avatarUrl: "/images/avatars/david-chen.jpg"
  },
];

const getInitials = (name: string): string => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`.toUpperCase();
};

const Testimonials: React.FC = () => {
  return (
    <section
      className="w-full bg-white py-16 md:py-20"
      aria-label="Customer testimonials"
      role="region"
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Adventurers Say
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Real stories from our amazing community of outdoor lovers.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, idx) => (
            <article
              key={`${testimonial.name}-${idx}`}
              className="bg-slate-50 rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 md:p-8 h-full flex flex-col justify-between"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <div>
                <div className="flex items-center" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => {
                    const isFilled = starIndex < testimonial.rating;
                    return (
                      <StarIcon
                        key={starIndex}
                        className={`w-5 h-5 md:w-6 md:h-6 ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>

                <p className="mt-4 text-gray-700 text-base leading-relaxed">{testimonial.quote}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {testimonial.avatarUrl ? (
                  <img
                    src={testimonial.avatarUrl}
                    alt={`${testimonial.name} avatar`}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold"
                    aria-hidden="true"
                  >
                    {getInitials(testimonial.name)}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-semibold text-gray-900">{testimonial.name}</span>
                  {testimonial.isVerified && (
                    <span className="mt-0.5 inline-flex items-center gap-1 text-xs md:text-sm text-gray-600">
                      <CheckBadgeIcon className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


