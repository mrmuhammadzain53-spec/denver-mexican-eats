import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';

function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FDF5E6] flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌮</div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#2C1A0E] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-[#6B6B6B] text-lg mb-8"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Looks like this page wandered off. Let's get you back to the good stuff.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#B22222] hover:bg-[#8B1A1A] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        {/* Mobile bottom sticky bar - only on mobile */}
        <MobileBottomBar />
        {/* Spacer for mobile bottom bar */}
        <div className="h-14 md:hidden" aria-hidden="true" />
      </div>
    </BrowserRouter>
  );
}
