import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';

const contactInfo = [
  {
    icon: <MapPin size={22} className="text-[#D4A017]" />,
    label: 'Address',
    value: '908 30th St, Denver, CO 80205',
    href: 'https://maps.google.com/?q=908+30th+St,+Denver,+CO+80205',
    external: true,
  },
  {
    icon: <Phone size={22} className="text-[#D4A017]" />,
    label: 'Phone',
    value: '303-295-2404',
    href: 'tel:+13032952404',
    external: false,
  },
  {
    icon: <Mail size={22} className="text-[#D4A017]" />,
    label: 'Email',
    value: 'thecreamery908@gmail.com',
    href: 'mailto:thecreamery908@gmail.com',
    external: false,
  },
  {
    icon: <Clock size={22} className="text-[#D4A017]" />,
    label: 'Hours',
    value: 'Mon–Fri: 9AM–5PM | Sat: 9AM–5PM | Sun: Closed',
    href: null,
    external: false,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = 'Valid email is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate form submission (in production, use EmailJS or Formspree)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <main id="main-content" className="bg-[#FDF5E6] min-h-screen">
      {/* HEADER */}
      <div className="bg-[#2C1A0E] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-[#D4A017] text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
          <p
            className="text-white/70 text-lg"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            We'd love to hear from you. Stop by, call, or send us a message.
          </p>
        </div>
      </div>

      {/* CONTACT INFO + FORM */}
      <section className="py-16 lg:py-20" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT: Contact Info */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#2C1A0E] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Find Us
              </h2>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-[#B22222]/20 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#2C1A0E] rounded-full flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <p
                        className="text-[#6B6B6B] text-xs font-bold uppercase tracking-wide"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.label}
                      </p>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-[#2C1A0E] font-semibold text-sm hover:text-[#B22222] transition-colors leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-[#2C1A0E] font-semibold text-sm leading-relaxed"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours detail */}
              <div className="bg-[#2C1A0E] rounded-2xl p-6 mb-8">
                <h3
                  className="text-[#D4A017] font-bold text-sm uppercase tracking-wide mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Tuesday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Wednesday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Thursday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Friday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Saturday', hours: '9:00 AM – 5:00 PM', open: true },
                    { day: 'Sunday', hours: 'CLOSED', open: false },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                      <span
                        className="text-white/80 text-sm font-medium"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {item.day}
                      </span>
                      <span
                        className={`text-sm font-bold ${item.open ? 'text-[#4A7C59]' : 'text-[#B22222]'}`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[#D4A017] text-xs font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    🌮 Lunch Specials: 11AM–3PM · 🍳 Breakfast: 9AM–11AM
                  </p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3
                  className="text-[#2C1A0E] font-bold text-sm uppercase tracking-wide mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    aria-label="Visit our Facebook page"
                  >
                    <FacebookIcon size={16} />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    aria-label="Visit our Instagram page"
                  >
                    <InstagramIcon size={16} />
                    Instagram
                  </a>
                </div>
                <p className="text-[#6B6B6B] text-sm mt-3" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Tag us <span className="font-bold text-[#B22222]">#CurtisParkCreamery</span>
                </p>
              </div>
            </div>

            {/* RIGHT: Map + Form */}
            <div>
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-64 lg:h-72">
                <iframe
                  title="Curtis Park Creamery location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.4!2d-104.977483!3d39.759739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7eb3e0e5b14d%3A0xf4a56dd6c5b8a5d7!2s908+30th+St%2C+Denver%2C+CO+80205!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps showing Curtis Park Creamery at 908 30th St, Denver, CO"
                />
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#2C1A0E] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle size={56} className="text-[#4A7C59] mx-auto mb-4" />
                    <h3
                      className="text-xl font-bold text-[#2C1A0E] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="text-[#6B6B6B] text-sm leading-relaxed"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      Thank you for reaching out. We'll get back to you as soon as possible. In the meantime, feel free to call us at{' '}
                      <a href="tel:+13032952404" className="text-[#B22222] font-bold hover:underline">
                        303-295-2404
                      </a>
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', message: '' }); }}
                      className="mt-6 text-[#B22222] text-sm font-bold hover:underline"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-[#2C1A0E] mb-1"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Name <span className="text-[#B22222]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B22222] transition-colors ${errors.name ? 'border-[#B22222] bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-[#B22222] text-xs mt-1" role="alert">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-[#2C1A0E] mb-1"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Email <span className="text-[#B22222]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B22222] transition-colors ${errors.email ? 'border-[#B22222] bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-[#B22222] text-xs mt-1" role="alert">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone (optional) */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-[#2C1A0E] mb-1"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Phone <span className="text-[#6B6B6B] font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(720) 555-0000"
                          className="w-full px-4 py-3 border border-gray-200 bg-gray-50 hover:border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B22222] transition-colors"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-[#2C1A0E] mb-1"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          Message <span className="text-[#B22222]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B22222] transition-colors resize-none ${errors.message ? 'border-[#B22222] bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="text-[#B22222] text-xs mt-1" role="alert">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#B22222] hover:bg-[#8B1A1A] disabled:bg-[#B22222]/50 text-white py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        aria-label="Send contact message"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>

                      <p className="text-[#6B6B6B] text-xs text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        We'll respond within 1–2 business days. For faster response, call{' '}
                        <a href="tel:+13032952404" className="text-[#B22222] font-bold hover:underline">303-295-2404</a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
