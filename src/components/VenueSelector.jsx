import React, { useState } from 'react';
import { VENUES, VIBES } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { MapPin, Star, ChevronDown, ChevronUp, Plus, Check, Info, X } from 'lucide-react';

const VIBE_COLORS = {
  romantic: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', btn: 'text-rose-600' },
  cozy:     { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', btn: 'text-amber-600' },
  vibrant:  { bg: 'bg-lime-50', border: 'border-lime-200', badge: 'bg-lime-100 text-lime-700', btn: 'text-lime-600' },
  casual:   { bg: 'bg-pink-50', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700', btn: 'text-pink-600' },
};

function MenuSection({ title, items, section }) {
  const { addToCart, removeFromCart, isInCart, remaining } = useApp();
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 pb-1 border-b border-gray-100">{title}</h4>
      {items.map(item => {
        const inCart = isInCart(item.id);
        const canAfford = remaining + (inCart ? item.price : 0) >= item.price;
        return (
          <div
            key={item.id}
            className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
              inCart
                ? 'bg-lime-50 border-lime-200'
                : canAfford
                ? 'bg-white border-gray-100 hover:border-pink-200'
                : 'bg-gray-50 border-gray-100 opacity-60'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                {!canAfford && !inCart && (
                  <span className="text-[10px] bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full font-semibold">Over budget</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-sm font-black text-crimson">₹{item.price}</span>
              <button
                onClick={() => inCart ? removeFromCart(item.id) : addToCart(item, section)}
                disabled={!inCart && !canAfford}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed ${
                  inCart ? 'bg-lime-500 hover:bg-red-400' : 'bg-crimson hover:bg-rose-600'
                }`}
                title={inCart ? 'Remove from plan' : !canAfford ? 'Exceeds remaining budget' : 'Add to plan'}
              >
                {inCart ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function VenueCard({ venue }) {
  const { selectedVenue, setSelectedVenue, setCartItems } = useApp();
  const [expanded, setExpanded] = useState(false);
  const isSelected = selectedVenue?.id === venue.id;
  const colors = VIBE_COLORS[venue.vibe];

  const handleSelect = () => {
    if (isSelected) {
      setSelectedVenue(null);
      setExpanded(false);
      setCartItems([]);
    } else {
      setSelectedVenue(venue);
      setCartItems([]);
      setExpanded(true);
      setTimeout(() => {
        document.getElementById(`venue-${venue.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const menuSections = Object.entries(venue.menu).map(([key, items]) => ({
    key,
    title: key.charAt(0).toUpperCase() + key.slice(1),
    items,
  }));

  return (
    <div
      id={`venue-${venue.id}`}
      className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
        isSelected ? 'border-crimson shadow-xl shadow-crimson/10' : `border-transparent ${colors.border} hover:border-opacity-60`
      } ${colors.bg}`}
    >
      {/* Card header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="text-3xl">{venue.image}</div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-black text-gray-900">{venue.name}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                  {VIBES.find(v => v.id === venue.vibe)?.emoji} {venue.vibe}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-600">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{venue.rating}</span>
                </div>
                <span className="text-xs font-bold text-gray-500">{venue.priceRange}</span>
              </div>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed max-w-sm">{venue.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <button
              onClick={handleSelect}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-lime-500 text-white shadow-md'
                  : 'bg-crimson text-white hover:bg-rose-600 shadow-md shadow-crimson/20'
              }`}
            >
              {isSelected ? '✓ Selected' : 'Select Venue'}
            </button>
            {isSelected && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:border-pink-300"
              >
                {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                {expanded ? 'Hide Menu' : 'View Menu'}
              </button>
            )}
          </div>
        </div>

        {/* Tags & info */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {venue.tags.map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-gray-500 bg-white/70 px-2 py-0.5 rounded-full border border-gray-100">
              #{tag}
            </span>
          ))}
          {venue.coverCharge > 0 && (
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 flex items-center gap-1">
              <Info className="w-2.5 h-2.5" /> ₹{venue.coverCharge} cover charge
            </span>
          )}
          <span className="text-[10px] text-gray-400 ml-auto">{venue.dresscode}</span>
        </div>
      </div>

      {/* Expanded Menu */}
      {isSelected && expanded && (
        <div className="border-t border-gray-200/80 bg-white/60 p-5 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-gray-800">Menu — Add to Your Date Plan</h3>
            <button onClick={() => setExpanded(false)} className="text-gray-400 hover:text-gray-700">
              <X className="w-4 h-4" />
            </button>
          </div>
          {menuSections.map(({ key, title, items }) => (
            <MenuSection key={key} title={title} items={items} section={key} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function VenueSelector() {
  const { selectedVibe, setSelectedVibe } = useApp();
  const [activeFilter, setActiveFilter] = useState(selectedVibe || 'all');

  React.useEffect(() => {
    if (selectedVibe) {
      setActiveFilter(selectedVibe);
    }
  }, [selectedVibe]);

  const filteredVenues = VENUES.filter(v => {
    if (activeFilter !== 'all' && v.vibe !== activeFilter) return false;
    return true;
  });

  return (
    <section id="venues" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-crimson/5 border border-crimson/20 rounded-full">
          <span className="text-xs font-black text-crimson uppercase tracking-widest">Step 1</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
          Choose Your Venue
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Handpicked Bhopal restaurants and cafés, each with full menus and real prices. Select items to add them to your date plan.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => { setActiveFilter('all'); setSelectedVibe(null); }}
          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
            activeFilter === 'all'
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
          }`}
        >
          All Vibes
        </button>
        {VIBES.map(vibe => (
          <button
            key={vibe.id}
            onClick={() => { setActiveFilter(vibe.id); setSelectedVibe(vibe.id); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              activeFilter === vibe.id
                ? 'bg-crimson text-white border-crimson shadow-md shadow-crimson/20'
                : 'bg-white text-gray-600 border-gray-200 hover:border-crimson/40'
            }`}
          >
            <span>{vibe.emoji}</span>
            <span>{vibe.label}</span>
          </button>
        ))}
      </div>

      {/* Venue list */}
      <div className="space-y-4">
        {filteredVenues.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
        {filteredVenues.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="font-semibold">No venues match this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
