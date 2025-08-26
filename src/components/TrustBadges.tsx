import React from "react";

type TrustBadge = {
  id: string;
  title: string;
  subtitle: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V7h2.879c.398 0 .78.158 1.061.439l2.621 2.621c.281.281.439.663.439 1.061V15a1.5 1.5 0 0 1-1.5 1.5h-.318a2.751 2.751 0 0 1-5.364 0H9.002a2.751 2.751 0 0 1-5.364 0H3A1.5 1.5 0 0 1 1.5 15V6A1.5 1.5 0 0 1 3 4.5ZM15 12h6v-1.379L18.379 9H15v3ZM6.75 18a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm10.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
  </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2.25a.75.75 0 0 1 .39.107l6.75 3.938a.75.75 0 0 1 .36.64V12c0 5.126-3.4 8.708-6.74 9.64a2.8 2.8 0 0 1-1.82 0C7.61 20.708 4.21 17.126 4.21 12V6.935a.75.75 0 0 1 .36-.64l6.75-3.938A.75.75 0 0 1 12 2.25Zm3.28 7.47a.75.75 0 0 0-1.06-1.06L11 11.88l-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.25-4.25Z" />
  </svg>
);

const ArrowPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M3.75 12a8.25 8.25 0 0 1 14.03-5.834l1.22-1.219a.75.75 0 0 1 1.28.53V8.5a.75.75 0 0 1-.75.75h-3.023a.75.75 0 0 1-.53-1.28l.95-.95A6.75 6.75 0 1 0 18.75 12a.75.75 0 0 1 1.5 0A8.25 8.25 0 1 1 3.75 12Z" />
  </svg>
);

const HeadsetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 3.75a7.5 7.5 0 0 1 7.5 7.5V18a2.25 2.25 0 0 1-2.25 2.25H16.5a.75.75 0 0 1 0-1.5h.75A.75.75 0 0 0 18 18v-1.5h-2.25A2.25 2.25 0 0 1 13.5 14.25v-3A2.25 2.25 0 0 1 15.75 9h2.25v-.75a6 6 0 1 0-12 0V9h2.25A2.25 2.25 0 0 1 10.5 11.25v3A2.25 2.25 0 0 1 8.25 16.5H6V18c0 .414.336.75.75.75h.75a.75.75 0 0 1 0 1.5H6.75A2.25 2.25 0 0 1 4.5 18v-6.75A7.5 7.5 0 0 1 12 3.75Z" />
  </svg>
);

const badges: TrustBadge[] = [
  {
    id: "shipping",
    title: "Nationwide Shipping",
    subtitle: "On orders over $50",
    Icon: TruckIcon,
  },
  {
    id: "secure",
    title: "Secure Payments",
    subtitle: "100% Protected Transaction",
    Icon: ShieldCheckIcon,
  },
  {
    id: "returns",
    title: "Easy Returns",
    subtitle: "30-Day Return Policy",
    Icon: ArrowPathIcon,
  },
  {
    id: "support",
    title: "24/7 Support",
    subtitle: "We're always here to help",
    Icon: HeadsetIcon,
  },
];

const TrustBadges: React.FC = () => {
  return (
    <section
      className="w-full bg-gray-50 py-16 md:py-20"
      aria-label="Trust and assurance badges"
      role="region"
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shop with confidence
          </h2>
          <p className="mt-2 md:mt-3 text-gray-600 text-sm md:text-base">
            Reliable delivery, secure checkout, easy returns, and friendly support.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {badges.map(({ id, title, subtitle, Icon }) => (
            <div
              key={id}
              className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow duration-200"
              role="group"
              aria-label={`${title} - ${subtitle}`}
              tabIndex={0}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  {title}
                </span>
                <span className="text-sm md:text-base text-gray-600">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;


