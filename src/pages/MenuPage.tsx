import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, ExternalLink, AlertCircle } from 'lucide-react';
import { menuData } from '../data/menu';

const categoryIcons: Record<string, string> = {
  breakfast: '🍳',
  burritos: '🌯',
  lunch: '🌮',
  tacos: '🌶️',
  combos: '🍽️',
  enchiladas: '🫔',
  quesadillas: '🧀',
  'carne-asada': '🥩',
  sides: '🍚',
};

const badgeColors: Record<string, string> = {
  Popular: 'bg-[#B22222] text-white',
  'Breakfast Only': 'bg-[#D4A017] text-[#2C1A0E]',
  'Lunch Special': 'bg-[#4A7C59] text-white',
  Side: 'bg-[#6B6B6B] text-white',
  Extra: 'bg-[#3D2517] text-white',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash === '#lunch') {
      setActiveCategory('lunch');
      setTimeout(() => {
        const el = document.getElementById('category-lunch');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const cat of menuData) {
        const el = document.getElementById(`category-${cat.id}`);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`category-${id}`);
    if (el) {
      const offset = 140; // account for sticky navs
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-[#FDF5E6]">
      {/* PAGE HEADER */}
      <div
        className="bg-[#2C1A0E] pt-24 pb-12"
        role="banner"
        aria-label="Menu page header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Full Menu
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Family recipes perfected over 55+ years. Made fresh, served with love.
          </p>

          {/* Time badges */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <div className="flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] px-4 py-2 rounded-full text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Clock size={14} />
              🍳 Breakfast: 9AM–11AM Only
            </div>
            <div className="flex items-center gap-2 bg-[#4A7C59]/20 border border-[#4A7C59]/30 text-[#4A7C59] px-4 py-2 rounded-full text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Clock size={14} />
              🌮 Lunch Specials: 11AM–3PM Only
            </div>
          </div>
        </div>
      </div>

      {/* STICKY CATEGORY NAV */}
      <div
        className="sticky top-16 z-40 bg-[#2C1A0E]/95 backdrop-blur-sm border-b border-white/10 shadow-lg"
        role="navigation"
        aria-label="Menu categories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#B22222] text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                aria-pressed={activeCategory === cat.id}
              >
                <span>{categoryIcons[cat.id] || '🍽️'}</span>
                <span>{cat.title.length > 20 ? cat.title.slice(0, 18) + '…' : cat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MENU CATEGORIES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {menuData.map((category) => (
          <section
            key={category.id}
            id={`category-${category.id}`}
            ref={(el) => { categoryRefs.current[category.id] = el; }}
            aria-label={`${category.title} menu section`}
          >
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-3xl">{categoryIcons[category.id] || '🍽️'}</span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#2C1A0E]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {category.title}
                </h2>
              </div>

              {category.timeRestriction && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mt-2 ${
                  category.id === 'breakfast'
                    ? 'bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#B8860B]'
                    : 'bg-[#4A7C59]/20 border border-[#4A7C59]/40 text-[#4A7C59]'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Clock size={12} />
                  {category.timeRestriction}
                </div>
              )}

              {category.note && (
                <div className="flex items-start gap-2 mt-3 bg-[#2C1A0E]/5 border-l-4 border-[#B22222] rounded-r-lg px-4 py-3 max-w-2xl">
                  <AlertCircle size={15} className="text-[#B22222] shrink-0 mt-0.5" />
                  <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {category.note}
                  </p>
                </div>
              )}

              {/* Lunch special deal highlight */}
              {category.id === 'lunch' && (
                <div className="mt-4 inline-flex items-center gap-3 bg-[#4A7C59] text-white px-6 py-3 rounded-xl shadow-lg">
                  <span className="text-2xl">🌮</span>
                  <div>
                    <p className="font-bold text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Mix or Match Any 3 for $7.87
                    </p>
                    <p className="text-white/80 text-xs" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      Add $2.15 to smother any item
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Items Grid */}
            {category.id === 'breakfast' ? (
              // Breakfast has two types: burritos (with smothered) and tacos (price only)
              <div>
                {/* Burritos */}
                <h3
                  className="text-lg font-semibold text-[#2C1A0E] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Breakfast Burritos
                </h3>
                <div className="overflow-x-auto rounded-2xl shadow-sm mb-8">
                  <table className="w-full bg-white min-w-[480px]">
                    <thead>
                      <tr className="bg-[#2C1A0E]">
                        <th className="text-left text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Item</th>
                        <th className="text-right text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Regular</th>
                        <th className="text-right text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Smothered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.slice(0, 4).map((item, i) => (
                        <tr key={item.id} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FDF5E6]/50'}`}>
                          <td className="px-5 py-4">
                            <p className="font-semibold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.name}</p>
                            {item.description && <p className="text-[#6B6B6B] text-xs mt-0.5">{item.description}</p>}
                          </td>
                          <td className="px-5 py-4 text-right">
                            <span className="font-bold text-[#B22222]" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.regularPrice}</span>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <span className="font-bold text-[#B22222]" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.smotheredPrice || '—'}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tacos */}
                <h3
                  className="text-lg font-semibold text-[#2C1A0E] mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Breakfast Tacos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.slice(4).map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : category.id === 'sides' ? (
              // Sides - two column layout
              <div>
                <h3 className="text-base font-bold text-[#2C1A0E] mb-4 uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>Sides</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {category.items.filter(i => i.badges?.includes('Side')).map(item => (
                    <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                      <p className="font-semibold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.name}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-base font-bold text-[#2C1A0E] mb-4 uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>Extra Items</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {category.items.filter(i => i.badges?.includes('Extra')).map(item => (
                    <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                      <p className="font-semibold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : category.id === 'lunch' ? (
              // Lunch specials - card grid
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-[#4A7C59]/20 hover:border-[#4A7C59]/50 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-[#2C1A0E] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</p>
                        {item.description && <p className="text-[#6B6B6B] text-sm mt-1">{item.description}</p>}
                      </div>
                      <span className="bg-[#4A7C59] text-white text-xs font-bold px-3 py-1 rounded-full shrink-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Lunch
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-[#4A7C59] font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>Mix & Match: $7.87 / 3</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (category.id === 'burritos' || category.id === 'combos') ? (
              // Numbered items with table
              <div className="overflow-x-auto rounded-2xl shadow-sm">
                <table className="w-full bg-white min-w-[480px]">
                  <thead>
                    <tr className="bg-[#2C1A0E]">
                      <th className="text-left text-white text-xs font-bold uppercase tracking-wide px-5 py-3 w-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>#</th>
                      <th className="text-left text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Item</th>
                      <th className="text-right text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Regular</th>
                      {category.id === 'burritos' && (
                        <th className="text-right text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Smothered</th>
                      )}
                      {category.id === 'combos' && (
                        <th className="text-right text-white text-xs font-bold uppercase tracking-wide px-5 py-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Smothered</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr key={item.id} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FDF5E6]/50'} hover:bg-[#FDF5E6] transition-colors`}>
                        <td className="px-5 py-4">
                          {item.number && (
                            <span
                              className="text-[#B22222] font-bold text-sm"
                              style={{ fontFamily: "'Oswald', sans-serif" }}
                            >
                              {item.number}
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold text-[#2C1A0E] text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item.name}</p>
                            {item.badges?.map((badge) => (
                              <span key={badge} className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[badge] || 'bg-gray-200 text-gray-700'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                {badge}
                              </span>
                            ))}
                          </div>
                          {item.description && <p className="text-[#6B6B6B] text-xs mt-0.5">{item.description}</p>}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <span className="font-bold text-[#B22222]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            {item.regularPrice || item.price || '—'}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <span className="font-bold text-[#B22222]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            {item.smotheredPrice || '—'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // Default card grid
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Disclaimer */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-[#B22222] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#2C1A0E] text-sm mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Please Check Your Order
              </p>
              <p className="text-[#6B6B6B] text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                From time to time, mistakes may occur with your order. Please help us by checking your order before leaving the restaurant. <strong>No refunds or returns without a receipt.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4 pb-16">
          <a
            href="https://www.cpcmex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 shadow-xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            🌮 Order Online Now
            <ExternalLink size={18} />
          </a>
          <p className="text-[#6B6B6B] text-sm mt-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Pickup only · Mon–Sat 9AM–5PM · 908 30th St, Denver
          </p>
        </div>
      </div>
    </main>
  );
}

// Reusable menu item card
function MenuItemCard({ item }: { item: { id: string; name: string; description?: string; regularPrice?: string; smotheredPrice?: string; price?: string; badges?: string[]; note?: string; number?: string } }) {
  return (
    <article className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-[#B22222]/20 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-[#2C1A0E] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
          {item.number && (
            <span className="text-[#B22222] mr-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.number}</span>
          )}
          {item.name}
        </h3>
        {item.badges && item.badges.length > 0 && (
          <div className="flex flex-wrap gap-1 shrink-0">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[badge] || 'bg-gray-200 text-gray-700'}`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      {item.description && (
        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          {item.description}
        </p>
      )}
      {item.note && (
        <p className="text-[#6B6B6B] text-xs italic mb-3">{item.note}</p>
      )}
      <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
        {item.price ? (
          <span className="font-bold text-[#B22222] text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.price}</span>
        ) : (
          <>
            {item.regularPrice && (
              <div>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>Regular</p>
                <p className="font-bold text-[#B22222] text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.regularPrice}</p>
              </div>
            )}
            {item.smotheredPrice && (
              <div>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>Smothered</p>
                <p className="font-bold text-[#B22222] text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.smotheredPrice}</p>
              </div>
            )}
            {!item.regularPrice && !item.smotheredPrice && !item.price && (
              <span className="text-[#6B6B6B] text-sm italic">Ask for price</span>
            )}
          </>
        )}
      </div>
    </article>
  );
}
