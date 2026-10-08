import React from 'react';
import { BUDGET_MIN, BUDGET_MAX, VIBES } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { Heart, Sparkles, TrendingUp, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { budget, setBudget, selectedVibe, setSelectedVibe, setSelectedVenue, setCartItems, setSelectedGifts } = useApp();

  const handleVibeSelect = (vibe) => {
    setSelectedVibe(vibe.id === selectedVibe ? null : vibe.id);
    setSelectedVenue(null);
    setCartItems([]);
    setSelectedGifts([]);
  };

  const scrollToVenues = () => {
    document.getElementById('venues')?.scrollIntoView({ behavior: 'smooth' });
  };

  const budgetPercent = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-crimson/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0abfc08_1px,transparent_1px),linear-gradient(to_bottom,#f0abfc08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full shadow-sm">
          <Sparkles className="w-4 h-4 text-lime-500" />
          <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Bhopal's Premium Date Planner</span>
          <Sparkles className="w-4 h-4 text-lime-500" />
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
            Plan the{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-rose-500 to-pink-500">
                Perfect
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-crimson to-pink-400 rounded-full opacity-40" />
            </span>
            {' '}Date
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Curated Bhopal venues, real-time budgeting, personalized messages, and your very own AI Wingman — all in one place.
          </p>
        </div>

        {/* Budget Scroller */}
        <div className="bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-crimson" />
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">Your Date Budget</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-crimson">₹{budget.toLocaleString('en-IN')}</div>
              <div className="text-xs text-gray-400">adjustable anytime</div>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min={BUDGET_MIN}
              max={BUDGET_MAX}
              step={100}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="vibe-slider w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #dc143c ${budgetPercent}%, #fce7f3 ${budgetPercent}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>₹{BUDGET_MIN.toLocaleString('en-IN')}</span>
              <span className="text-lime-600 font-semibold">Everything within your budget auto-adjusts ✓</span>
              <span>₹{BUDGET_MAX.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Budget tier labels */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Casual Hangout', range: '₹500–₹1,500', active: budget <= 1500 },
              { label: 'Nice Date Night', range: '₹1,500–₹5,000', active: budget > 1500 && budget <= 5000 },
              { label: 'Premium Experience', range: '₹5,000+', active: budget > 5000 },
            ].map(tier => (
              <div
                key={tier.label}
                className={`rounded-xl p-2 text-center border transition-all ${
                  tier.active
                    ? 'bg-crimson/5 border-crimson/30 text-crimson'
                    : 'bg-gray-50 border-gray-100 text-gray-400'
                }`}
              >
                <div className="text-xs font-bold">{tier.label}</div>
                <div className="text-[10px] mt-0.5 opacity-70">{tier.range}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vibe selector */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Choose your vibe</p>
          <div className="flex flex-wrap justify-center gap-3">
            {VIBES.map(vibe => (
              <button
                key={vibe.id}
                onClick={() => handleVibeSelect(vibe)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all duration-200 ${
                  selectedVibe === vibe.id
                    ? 'bg-crimson text-white border-crimson shadow-lg shadow-crimson/20 scale-105'
                    : 'bg-white text-gray-600 border-pink-100 hover:border-crimson/40 hover:text-crimson'
                }`}
              >
                <span className="text-base">{vibe.emoji}</span>
                <span>{vibe.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={scrollToVenues}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-crimson to-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-crimson/25 hover:shadow-crimson/40 hover:scale-105 transition-all duration-200 text-sm"
          >
            <Heart className="w-4 h-4 fill-white" />
            Start Planning My Date
          </button>
          <button
            onClick={() => document.getElementById('wingman-trigger')?.click()}
            className="flex items-center gap-2 px-6 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-pink-100 hover:border-crimson/30 hover:text-crimson transition-all text-sm shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-lime-500" />
            Ask AI Wingman
          </button>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-1 text-gray-400 animate-bounce">
          <ArrowDown className="w-4 h-4" />
          <span className="text-xs">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
