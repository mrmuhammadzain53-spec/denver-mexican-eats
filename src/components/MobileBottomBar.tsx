import { Phone, ShoppingBag } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl"
      role="complementary"
      aria-label="Quick actions"
    >
      <a
        href="tel:+13032952404"
        className="flex-1 flex items-center justify-center gap-2 bg-[#2C1A0E] text-white py-4 text-sm font-bold hover:bg-[#3D2517] active:bg-[#4D3527] transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        aria-label="Call Curtis Park Creamery at 303-295-2404"
      >
        <Phone size={18} />
        <span>📞 Call</span>
      </a>
      <div className="w-px bg-white/20" />
      <a
        href="https://www.cpcmex.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#B22222] text-white py-4 text-sm font-bold hover:bg-[#8B1A1A] active:bg-[#6B1010] transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        aria-label="Order online at Curtis Park Creamery"
      >
        <ShoppingBag size={18} />
        <span>🌮 Order Now</span>
      </a>
    </div>
  );
}
