import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Order Online', to: '/order' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-[#2C1A0E] shadow-2xl'
            : 'bg-[#2C1A0E]/95 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex flex-col leading-none group"
              aria-label="Curtis Park Creamery - Home"
            >
              <span
                className="text-[#D4A017] text-xl lg:text-2xl font-bold tracking-wide"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                Curtis Park
              </span>
              <span
                className="text-white text-xs lg:text-sm tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Creamery
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#D4A017] ${
                    location.pathname === link.to
                      ? 'text-[#D4A017]'
                      : 'text-white/90'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#D4A017] ${
                  location.pathname === '/contact' ? 'text-[#D4A017]' : 'text-white/90'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/order"
                className="hidden sm:flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <ShoppingBag size={16} />
                Order Now
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-[#2C1A0E] border-t border-white/10 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-[#D4A017] bg-white/10'
                    : 'text-white/90 hover:text-[#D4A017] hover:bg-white/5'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="flex items-center justify-center gap-2 bg-[#B22222] text-white px-4 py-3 rounded-lg text-sm font-bold mt-2 hover:bg-[#8B1A1A] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <ShoppingBag size={16} />
              Order Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
