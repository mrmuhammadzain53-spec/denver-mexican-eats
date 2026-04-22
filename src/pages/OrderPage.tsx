import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, ExternalLink, ChevronRight } from 'lucide-react';

const orderSteps = [
  { step: '1', title: 'Browse the Menu', description: 'Review our full menu of burritos, tacos, enchiladas, and more.', icon: '📋', link: '/menu', linkLabel: 'View Menu' },
  { step: '2', title: 'Place Your Order', description: 'Order online via our ordering portal and customize your meal.', icon: '📱', link: null, linkLabel: null },
  { step: '3', title: 'Pick Up & Enjoy', description: 'Swing by 908 30th St during business hours and grab your fresh food.', icon: '🌮', link: '/contact', linkLabel: 'Get Directions' },
];

export default function OrderPage() {
  return (
    <main id="main-content" className="bg-[#FDF5E6] min-h-screen">
      {/* HEADER */}
      <div className="bg-[#2C1A0E] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Online Ordering
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Order Online
          </h1>
          <p
            className="text-white/70 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Ready when you are. Fresh, fast, and made with love.
          </p>
        </div>
      </div>

      {/* HOURS BANNER */}
      <div className="bg-[#D4A017] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-[#2C1A0E]">
          <div className="flex items-center gap-2">
            <Clock size={18} className="shrink-0" />
            <span className="font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Orders available: Mon–Sat, 9AM–5PM
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#2C1A0E]/30" />
          <div className="flex items-center gap-2">
            <MapPin size={18} className="shrink-0" />
            <span className="font-semibold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Pickup only · 908 30th St, Denver
            </span>
          </div>
        </div>
      </div>

      {/* MAIN ORDER SECTION */}
      <section className="py-16 lg:py-20" aria-label="Order section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Order CTA */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
            <div className="bg-gradient-to-br from-[#B22222] to-[#8B1A1A] p-8 lg:p-12 text-center text-white">
              <div className="text-6xl mb-4">🌮</div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order Online Now
              </h2>
              <p
                className="text-white/80 text-lg mb-6 max-w-md mx-auto"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Click below to place your order through our online ordering system. Your food will be ready for pickup!
              </p>
              <a
                href="https://www.cpcmex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#B8860B] text-[#2C1A0E] px-10 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Start Your Order
                <ExternalLink size={18} />
              </a>
              <p className="text-white/60 text-xs mt-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Opens in a new tab · Powered by cpcmex.com
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="p-6 text-center">
                <Clock size={24} className="text-[#B22222] mx-auto mb-2" />
                <p className="font-bold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hours</p>
                <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>Mon–Sat: 9AM–5PM</p>
                <p className="text-[#B22222] text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Closed Sunday</p>
              </div>
              <div className="p-6 text-center">
                <MapPin size={24} className="text-[#B22222] mx-auto mb-2" />
                <p className="font-bold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Location</p>
                <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>908 30th St</p>
                <p className="text-[#6B6B6B] text-sm">Denver, CO 80205</p>
              </div>
              <div className="p-6 text-center">
                <Phone size={24} className="text-[#B22222] mx-auto mb-2" />
                <p className="font-bold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Call to Order</p>
                <a
                  href="tel:+13032952404"
                  className="text-[#B22222] font-bold text-sm hover:underline"
                >
                  303-295-2404
                </a>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#2C1A0E] text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {orderSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-[#B22222]/20 transition-all duration-200"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="w-8 h-8 bg-[#B22222] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.step}
                </div>
                <h3
                  className="font-bold text-[#2C1A0E] text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed mb-3"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {step.description}
                </p>
                {step.link && (
                  <Link
                    to={step.link}
                    className="inline-flex items-center gap-1 text-[#B22222] text-sm font-bold hover:underline"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.linkLabel}
                    <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Lunch Special Highlight */}
          <div className="bg-[#4A7C59] rounded-3xl p-8 text-white text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              🌮 Lunch Special Deal
            </h3>
            <p
              className="text-xl text-white/90 mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Mix or Match Any 3 for <span className="text-[#D4A017] font-bold text-2xl">$7.87</span>
            </p>
            <p className="text-white/70 text-sm mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Available Mon–Sat · 11AM–3PM Only
            </p>
            <Link
              to="/menu#lunch"
              className="inline-flex items-center gap-2 bg-white text-[#4A7C59] hover:bg-[#FDF5E6] px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See Lunch Menu
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Note */}
          <div className="bg-[#2C1A0E] rounded-2xl p-6 text-center">
            <p
              className="text-white/90 text-base leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              🥡 <strong>Pickup only</strong> — we do not offer delivery directly. For delivery, check DoorDash or Uber Eats for availability. All orders available during business hours: <strong>Mon–Sat, 9AM–5PM.</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
