import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span
                className="block text-[#D4A017] text-2xl font-bold"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                Curtis Park
              </span>
              <span
                className="text-white/80 text-xs tracking-[0.25em] uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Creamery
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Denver's beloved family-owned Mexican restaurant, serving the community with love since 1969.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#B22222] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#B22222] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'Menu', to: '/menu' },
                { label: 'About Us', to: '/about' },
                { label: 'Order Online', to: '/order' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-[#D4A017] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4A017] mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=908+30th+St,+Denver,+CO+80205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  908 30th St<br />Denver, CO 80205
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4A017] shrink-0" />
                <a
                  href="tel:+13032952404"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  303-295-2404
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4A017] shrink-0" />
                <a
                  href="mailto:thecreamery908@gmail.com"
                  className="text-white/70 hover:text-white text-sm transition-colors break-all"
                >
                  thecreamery908@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#D4A017] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-white/90 font-semibold">Mon – Fri</p>
                  <p className="text-white/70">9:00 AM – 5:00 PM</p>
                  <p className="text-white/90 font-semibold mt-2">Saturday</p>
                  <p className="text-white/70">9:00 AM – 5:00 PM</p>
                  <p className="text-white/90 font-semibold mt-2">Sunday</p>
                  <p className="text-[#B22222] font-semibold">CLOSED</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 bg-[#D4A017]/20 border border-[#D4A017]/30 rounded-lg p-3">
              <p className="text-[#D4A017] text-xs font-semibold">🌮 Lunch Specials</p>
              <p className="text-white/70 text-xs mt-1">Mon–Sat: 11AM–3PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © 2025 Curtis Park Creamery. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs">
            #CurtisParkCreamery
          </p>
        </div>
      </div>
    </footer>
  );
}
