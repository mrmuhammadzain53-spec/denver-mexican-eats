import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

const timeline = [
  {
    year: '1969',
    title: 'Curtis Park Creamery Opens',
    description: 'The Rodriguez family opens their beloved Mexican restaurant at 908 30th Street in Denver\'s Curtis Park neighborhood.',
    icon: '🏠',
  },
  {
    year: '1970s–80s',
    title: 'A Denver Institution is Born',
    description: 'Word spreads across Denver. The creamery becomes a neighborhood staple, feeding generations of Denver families with affordable, delicious Mexican food.',
    icon: '🌮',
  },
  {
    year: '1990s',
    title: 'Westword Feature',
    description: 'Westword Magazine calls the menu "a dizzying array of mouthwatering options" — cementing Curtis Park Creamery\'s place in Denver food culture.',
    icon: '📰',
  },
  {
    year: '2000s',
    title: 'Still Going Strong',
    description: 'While other restaurants come and go, the Rodriguez family continues their mission: serve great food at honest prices, day after day.',
    icon: '💪',
  },
  {
    year: '2024',
    title: '4.4 Stars · 1,389 Reviews',
    description: 'In the age of online reviews, Denver speaks: Curtis Park Creamery maintains a 4.4-star Google rating with nearly 1,400 reviews.',
    icon: '⭐',
  },
];

const values = [
  {
    icon: '🏡',
    title: 'Family Owned Since 1969',
    description: 'The Rodriguez family has been at the heart of Curtis Park Creamery for over 55 years. Every meal is made with family pride.',
  },
  {
    icon: '💲',
    title: 'Affordable & Delicious',
    description: 'We believe great food shouldn\'t break the bank. Our prices reflect our commitment to the community we serve.',
  },
  {
    icon: '⚡',
    title: 'Fast, Fresh & Ready-to-Go',
    description: 'Whether you\'re grabbing lunch on a break or picking up dinner for the family, we get your food out hot and fast.',
  },
  {
    icon: '📍',
    title: 'A True Denver Landmark',
    description: 'We\'ve outlasted restaurants, businesses, and trends. Curtis Park Creamery is woven into the fabric of Denver.',
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-[#FDF5E6]">
      {/* HERO */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        aria-label="About page hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-building.jpg')" }}
          role="img"
          aria-label="Curtis Park Creamery building exterior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1A0E]/70 to-[#2C1A0E]/90" />
        <div className="relative z-10 text-center px-4 pt-20 pb-12">
          <span
            className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Story
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Than a Restaurant
          </h1>
          <p
            className="text-white/70 text-lg mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            We're a 55-year love letter to Denver
          </p>
        </div>
      </section>

      {/* FULL STORY */}
      <section className="py-16 lg:py-24" aria-label="Our full story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-[#B22222] text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Since 1969
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mt-2 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Family Owned & Operated Since 1969
              </h2>
              <div className="space-y-5 text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                <p>
                  The one-story stucco building on the corner of 30th Street in Downtown Denver has had many inhabitants — a meat processing facility, taxidermist, auto garage, ice cream store, and grocery store.
                </p>
                <p>
                  None of these tenants, however, has had the same longstanding success as the Curtis Park Creamery.
                </p>
                <p>
                  The family-owned and operated Mexican food restaurant has been serving delicious and affordable meals-on-the-go since 1969. The Rodriguez family continues to offer what <em className="text-[#2C1A0E] font-semibold">Westword Magazine</em> has called a "dizzying array" of mouthwatering options, Monday through Saturday.
                </p>
                <p>
                  We invite you to come experience this long-time Denver staple, say hello to our family — or order online for pickup.
                </p>
              </div>

              {/* Westword quote */}
              <div className="mt-8 bg-[#2C1A0E] rounded-2xl p-6 relative">
                <div className="text-[#D4A017] text-5xl font-serif leading-none mb-2">"</div>
                <blockquote
                  className="text-white text-lg italic leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  A dizzying array of mouthwatering options
                </blockquote>
                <p
                  className="text-[#D4A017] text-sm font-bold mt-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  — Westword Magazine
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-building.jpg"
                  alt="The Curtis Park Creamery building at 908 30th Street, Denver, Colorado"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#B22222] rounded-2xl p-5 text-white text-center">
                  <p
                    className="text-4xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    55+
                  </p>
                  <p className="text-white/80 text-sm font-semibold mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years Serving Denver</p>
                </div>
                <div className="bg-[#D4A017] rounded-2xl p-5 text-[#2C1A0E] text-center">
                  <p
                    className="text-4xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    4.4⭐
                  </p>
                  <p className="text-[#2C1A0E]/80 text-sm font-semibold mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>1,389 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-[#2C1A0E]" aria-label="Our history timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Journey
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              55 Years in the Making
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-[#D4A017]/30" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 sm:max-w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="bg-[#3D2517] rounded-2xl p-5 border border-white/10 hover:border-[#D4A017]/30 transition-colors">
                      <span
                        className="text-[#D4A017] font-bold text-sm"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-white font-bold text-lg mt-1 mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon bubble */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-11 h-11 bg-[#B22222] rounded-full flex items-center justify-center shadow-lg text-lg border-2 border-[#D4A017]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 lg:py-24 bg-[#FDF5E6]" aria-label="Our values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-[#B22222] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Why We're Different
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#B22222]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3
                  className="text-lg font-bold text-[#2C1A0E] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-16 lg:py-20 bg-[#B22222]" aria-label="Press and recognition">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="text-white/70 text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            As Seen In
          </span>
          <div className="mt-6 bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={24} className="text-[#D4A017] fill-[#D4A017]" />
              ))}
            </div>
            <blockquote
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold italic leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "A dizzying array of mouthwatering options"
            </blockquote>
            <p
              className="text-white/80 font-bold mt-4 text-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              — Westword Magazine
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#FDF5E6]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Experience It For Yourself
          </h2>
          <p
            className="text-[#6B6B6B] text-lg mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Stop by Monday through Saturday, 9AM–5PM. We're at 908 30th St in Denver's Curtis Park neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              🌮 See Our Menu
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#2C1A0E] hover:bg-[#3D2517] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              📍 Get Directions
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
