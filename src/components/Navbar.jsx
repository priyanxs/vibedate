import React from 'react';
import { Heart, Sparkles, Menu, X, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

const NAV_ITEMS = [
  { id: 'hero',        label: 'Home' },
  { id: 'venues',      label: 'Venues' },
  { id: 'gifts',       label: 'Gifts' },
  { id: 'messages',    label: 'Messages' },
  { id: 'itinerary',   label: 'Itinerary' },
  { id: 'outfit',      label: 'Outfit' },
  { id: 'convo',       label: 'Convo Deck' },
];

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const { total, overBudget, cartItems, selectedGifts } = useApp();
  const itemCount = cartItems.length + selectedGifts.length;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-crimson to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-crimson">Vibe</span>
              <span className="text-gray-800">Date</span>
            </span>
            <Sparkles className="w-4 h-4 text-lime-500" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-crimson hover:bg-pink-50 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {itemCount > 0 && (
              <button
                onClick={() => scrollTo('calculator')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  overBudget
                    ? 'bg-red-50 border-red-300 text-red-600'
                    : 'bg-lime-50 border-lime-300 text-lime-700'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>₹{total.toLocaleString('en-IN')}</span>
                {itemCount > 0 && (
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-black ${overBudget ? 'bg-red-500' : 'bg-lime-500'}`}>
                    {itemCount}
                  </span>
                )}
              </button>
            )}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-pink-50"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-pink-100 px-4 py-3 space-y-1 shadow-lg">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-crimson hover:bg-pink-50 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
