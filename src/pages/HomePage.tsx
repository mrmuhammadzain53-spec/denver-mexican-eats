import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const featuredItems = [
  {
    name: 'Smothered Burrito',
    description: 'Our signature burrito loaded with fillings, smothered in our legendary green chile sauce.',
    price: 'From $4.25',
    image: '/images/smothered-burrito.jpg',
    alt: 'Smothered burrito covered in green chile sauce',
  },
  {
    name: 'Chile Relleno',
    description: 'A roasted poblano pepper stuffed and smothered in chile. A true Denver classic.',
    price: 'Ask for price',
    image: '/images/chile-relleno.jpg',
    alt: 'Chile relleno smothered in red sauce with rice and beans',
  },
  {
    name: 'Breakfast Burrito',
    description: 'Egg, potato & your choice of meat — wrapped fresh with cheese.',
    price: 'From $4.39',
    image: '/images/breakfast-burrito.jpg',
    alt: 'Breakfast burrito with egg and potato filling',
  },
  {
    name: 'Chile Cheese Fries',
    description: 'Crispy fries loaded with chile and melted cheese. A crowd favorite.',
    price: '~$7.50',
    image: '/images/chile-cheese-fries.jpg',
    alt: 'Chile cheese fries with melted cheese and green chile',
  },
];

const reviews = [
  {
    text: 'Fair prices, great specials/combos for low prices and fast/friendly service.',
    author: 'Google Reviewer',
    stars: 5,
  },
  {
    text: 'Old school Mexican street food — delicious and $. This is the real deal, Denver.',
    author: 'Google Reviewer',
    stars: 5,
  },
  {
    text: 'I ordered 4 smothered burritos, 2 sodas, and a small rice & beans... amazing value. Can\'t beat it!',
    author: 'Google Reviewer',
    stars: 5,
  },
];

export default function HomePage() {
  const statsRef = useInView(0.3);
  const reviews1Count = useCounter(1389, 2000, statsRef.inView);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          role="img"
          aria-label="Authentic Mexican food spread from Curtis Park Creamery"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1A0E]/80 via-[#2C1A0E]/60 to-[#2C1A0E]/90" />

        {/* Content */}
        <div
          className={`relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 ${
            heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-4">
            <span
              className="inline-block bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ⭐ Family Owned Since 1969
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Denver's Favorite
            <span className="block text-[#D4A017]">Mexican Food</span>
            Since 1969
          </h1>
          <p
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Family owned. Affordable. Delicious. Ready for you
            <span className="text-[#D4A017] font-semibold"> Monday through Saturday.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cpcmex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 shadow-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              🌮 Order Online
              <ExternalLink size={16} />
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See Our Menu
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section
        className="bg-[#2C1A0E] border-t border-b border-[#D4A017]/20"
        aria-label="Quick information"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <a
              href="https://maps.google.com/?q=908+30th+St,+Denver,+CO+80205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#B22222]/20 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Address</p>
                <p className="text-white text-sm font-medium group-hover:text-[#D4A017] transition-colors">908 30th St, Denver</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B22222]/20 rounded-full flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hours</p>
                <p className="text-white text-sm font-medium">Mon–Sat: 9AM–5PM</p>
              </div>
            </div>

            <a href="tel:+13032952404" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#B22222]/20 rounded-full flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#D4A017]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</p>
                <p className="text-white text-sm font-medium group-hover:text-[#D4A017] transition-colors">303-295-2404</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/Curtis+Park+Creamery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#B22222]/20 rounded-full flex items-center justify-center shrink-0">
                <Star size={18} className="text-[#D4A017] fill-[#D4A017]" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Google Rating</p>
                <p className="text-white text-sm font-medium group-hover:text-[#D4A017] transition-colors">⭐ 4.4 (1,389 Reviews)</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-16 lg:py-24 bg-[#FDF5E6]" aria-label="About us snippet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-[#B22222] text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Story
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1A0E] mt-2 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Denver Landmark
                <span className="text-[#B22222]"> Since 1969</span>
              </h2>
              <p className="text-[#6B6B6B] text-base lg:text-lg leading-relaxed mb-4">
                The one-story stucco building on the corner of 30th Street has housed many tenants — a meat processor, taxidermist, auto garage, and ice cream store.
              </p>
              <p className="text-[#6B6B6B] text-base lg:text-lg leading-relaxed mb-8">
                But none has had the lasting success of Curtis Park Creamery. Since 1969, the Rodriguez family has been serving Denver mouthwatering, affordable Mexican food that keeps people coming back for over 50 years.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#2C1A0E] hover:bg-[#3D2517] text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Full Story
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-building.jpg"
                  alt="Curtis Park Creamery building exterior at 908 30th Street, Denver"
                  className="w-full h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#B22222] text-white px-6 py-4 rounded-xl shadow-xl">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  55+
                </p>
                <p
                  className="text-xs uppercase tracking-wide font-semibold text-white/80"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Years Serving Denver
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div ref={statsRef.ref}>
        <section
          className="bg-[#B22222] py-10"
          aria-label="Restaurant statistics"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  55+
                </p>
                <p
                  className="text-white/80 text-sm font-semibold uppercase tracking-wide mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Years in Denver
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {statsRef.inView ? reviews1Count.toLocaleString() : '0'}
                </p>
                <p
                  className="text-white/80 text-sm font-semibold uppercase tracking-wide mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Google Reviews
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  4.4⭐
                </p>
                <p
                  className="text-white/80 text-sm font-semibold uppercase tracking-wide mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Google Rating
                </p>
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  $
                </p>
                <p
                  className="text-white/80 text-sm font-semibold uppercase tracking-wide mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Always Affordable
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FEATURED MENU HIGHLIGHTS */}
      <section className="py-16 lg:py-24 bg-[#FDF5E6]" aria-label="Customer favorites">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-[#B22222] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Must Try
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1A0E] mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Customer Favorites
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#B22222] text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Popular ⭐
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-bold text-[#2C1A0E] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-3">{item.description}</p>
                  <p
                    className="text-[#B22222] font-bold text-base"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-[#2C1A0E] hover:bg-[#3D2517] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View Full Menu
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LUNCH SPECIAL BANNER */}
      <section
        className="bg-[#4A7C59] py-12 lg:py-16 relative overflow-hidden"
        aria-label="Lunch specials"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 text-8xl">🌮</div>
          <div className="absolute bottom-4 right-8 text-8xl">🌯</div>
          <div className="absolute top-1/2 left-1/4 text-6xl -translate-y-1/2">🌶️</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span
            className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Daily Deal
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            🌮 Lunch Specials
          </h2>
          <p
            className="text-xl sm:text-2xl text-white/90 font-semibold mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Mix or Match Any 3 for <span className="text-[#D4A017] text-3xl font-bold">$7.87</span>
          </p>
          <p className="text-white/80 mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Available Monday – Saturday | 11AM – 3PM Only
          </p>
          <Link
            to="/menu#lunch"
            className="inline-flex items-center gap-2 bg-white text-[#4A7C59] hover:bg-[#FDF5E6] px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 shadow-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            See Lunch Specials
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-16 lg:py-24 bg-[#2C1A0E]" aria-label="Customer reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Testimonials
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Denver Says About Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.map((review, i) => (
              <article
                key={i}
                className="bg-[#3D2517] rounded-2xl p-6 border border-white/10 hover:border-[#D4A017]/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, s) => (
                    <Star key={s} size={16} className="text-[#D4A017] fill-[#D4A017]" />
                  ))}
                </div>
                <blockquote
                  className="text-white/80 text-base leading-relaxed mb-4 italic"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  "{review.text}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#B22222] rounded-full flex items-center justify-center text-white text-sm font-bold">G</div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{review.author}</p>
                    <p className="text-white/50 text-xs">Google Review</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Curtis+Park+Creamery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D4A017]/50 hover:border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017]/10 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See All Reviews on Google
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="py-16 lg:py-20 bg-[#FDF5E6]" aria-label="Social media">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tag Us{' '}
              <span
                className="text-[#B22222]"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                #CurtisParkCreamery
              </span>
            </h2>
            <p className="text-[#6B6B6B]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Share your meal and connect with us on social media
            </p>
          </div>

          {/* Instagram grid placeholder */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#B22222]/20 to-[#D4A017]/20 border-2 border-[#B22222]/10 flex items-center justify-center group hover:scale-105 transition-transform duration-200 cursor-pointer"
                aria-label={`Instagram photo ${i + 1}`}
              >
                <div className="text-3xl sm:text-4xl opacity-50 group-hover:opacity-80 transition-opacity">
                  {['🌮', '🌯', '🌶️', '🍟', '🥙', '🫔'][i]}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <FacebookIcon size={18} />
              Follow on Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <InstagramIcon size={18} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #B22222 0%, #8B1A1A 50%, #2C1A0E 100%)',
        }}
        aria-label="Call to action"
      >
        <div className="absolute inset-0 opacity-5 text-9xl flex items-center justify-center overflow-hidden pointer-events-none select-none">
          🌮🌯🌶️
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Order?
          </h2>
          <p
            className="text-white/80 text-lg mb-8"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Pickup only — fresh, fast, and ready when you are. Available Monday–Saturday, 9AM–5PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cpcmex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#B8860B] text-[#2C1A0E] px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 shadow-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              🌮 Order Online Now
            </a>
            <a
              href="tel:+13032952404"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              📞 Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
