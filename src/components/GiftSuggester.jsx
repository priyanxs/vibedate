import React, { useState } from 'react';
import { GIFTS } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { Check, Plus, Sparkles, Lock } from 'lucide-react';

const GIFT_CATEGORIES = [
  { id: 'all',          label: 'All Gifts',      emoji: '🎁' },
  { id: 'flowers',      label: 'Flowers',         emoji: '🌹' },
  { id: 'chocolates',   label: 'Chocolates',      emoji: '🍫' },
  { id: 'personalized', label: 'Personalized',    emoji: '✍️'  },
  { id: 'jewelry',      label: 'Jewelry',         emoji: '💎' },
  { id: 'fun',          label: 'Fun & Unique',    emoji: '🎉' },
];

export default function GiftSuggester() {
  const { selectedVibe, remaining, toggleGift, isGiftSelected, overBudget } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showSuggested, setShowSuggested] = useState(false);

  const suggestedGifts = GIFTS.filter(g =>
    (!selectedVibe || g.vibes.includes(selectedVibe)) &&
    g.price <= Math.max(remaining, 200)  // always show if affordable
  );

  const filteredGifts = GIFTS.filter(g => {
    if (activeCategory !== 'all' && g.category !== activeCategory) return false;
    if (showSuggested && (!selectedVibe || !g.vibes.includes(selectedVibe))) return false;
    return true;
  }).sort((a, b) => a.price - b.price);

  return (
    <section id="gifts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 border border-pink-200 rounded-full">
          <span className="text-xs font-black text-pink-700 uppercase tracking-widest">Step 2</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Gift Suggester</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Browse gifts matched to your vibe and remaining budget. Add them to your plan with one click.
        </p>
      </div>

      {/* Budget-matched suggestion banner */}
      {selectedVibe && (
        <div className="mb-6 p-4 bg-gradient-to-r from-lime-50 to-emerald-50 border border-lime-200 rounded-2xl flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-black text-lime-800">
                {suggestedGifts.length} gifts recommended for your {selectedVibe} vibe
              </div>
              <div className="text-xs text-lime-700 mt-0.5">
                Remaining budget: <span className="font-bold">₹{Math.max(remaining, 0).toLocaleString('en-IN')}</span>
                {overBudget && ' (over budget — clear some items first)'}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowSuggested(!showSuggested)}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              showSuggested
                ? 'bg-lime-600 text-white border-lime-600'
                : 'bg-white text-lime-700 border-lime-300 hover:bg-lime-50'
            }`}
          >
            {showSuggested ? '✓ Showing suggested' : 'Show suggested only'}
          </button>
        </div>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {GIFT_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              activeCategory === cat.id
                ? 'bg-crimson text-white border-crimson shadow-md shadow-crimson/20'
                : 'bg-white text-gray-600 border-gray-200 hover:border-pink-200'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Gifts grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGifts.map(gift => {
          const selected = isGiftSelected(gift.id);
          const canAfford = remaining + (selected ? gift.price : 0) >= gift.price;
          const vibeMatch = selectedVibe && gift.vibes.includes(selectedVibe);

          return (
            <div
              key={gift.id}
              className={`relative rounded-2xl border-2 p-4 transition-all duration-200 ${
                selected
                  ? 'border-lime-400 bg-lime-50 shadow-lg shadow-lime-100'
                  : canAfford
                  ? 'border-pink-100 bg-white hover:border-pink-300 hover:shadow-md'
                  : 'border-gray-100 bg-gray-50 opacity-60'
              }`}
            >
              {/* Vibe match badge */}
              {vibeMatch && (
                <div className="absolute -top-2 -right-2 bg-lime-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                  ✦ Vibe Match
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className="text-2xl">{gift.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-black text-gray-900">{gift.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{gift.desc}</div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-base font-black text-crimson">₹{gift.price}</span>
                    <button
                      onClick={() => canAfford || selected ? toggleGift(gift) : null}
                      disabled={!canAfford && !selected}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                        selected
                          ? 'bg-lime-500 text-white hover:bg-red-400'
                          : 'bg-crimson text-white hover:bg-rose-600'
                      }`}
                    >
                      {selected ? (
                        <><Check className="w-3 h-3" /> Added</>
                      ) : !canAfford ? (
                        <><Lock className="w-3 h-3" /> Over budget</>
                      ) : (
                        <><Plus className="w-3 h-3" /> Add Gift</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredGifts.length === 0 && (
        <div className="text-center py-16 text-gray-400 space-y-2">
          <div className="text-4xl">🎁</div>
          <p className="font-semibold">No gifts match these filters</p>
          <p className="text-xs">Try a different category or toggle off the suggested-only filter</p>
        </div>
      )}
    </section>
  );
}
