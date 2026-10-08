import React from 'react';
import { OUTFIT_SUGGESTIONS, VIBES } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { Shirt, Sparkles, ChevronRight } from 'lucide-react';

function OutfitCard({ title, data, gender }) {
  return (
    <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Shirt className={`w-4 h-4 ${gender === 'male' ? 'text-blue-500' : 'text-pink-500'}`} />
        <h4 className="text-sm font-black text-gray-800">{title}</h4>
      </div>

      {/* Outfit description */}
      <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
        <p className="text-xs text-gray-700 leading-relaxed font-medium">{data.outfit}</p>
      </div>

      {/* Color palette */}
      <div>
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Color Palette</div>
        <div className="flex items-center gap-3">
          {data.colors.map((color, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-xl border-2 border-white shadow-md"
                style={{ backgroundColor: color }}
              />
              <span className="text-[10px] font-semibold text-gray-600">{data.colorNames[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div>
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Style Tips</div>
        <div className="space-y-1.5">
          {data.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight className="w-3 h-3 text-lime-500 shrink-0 mt-0.5" />
              <span className="text-xs text-gray-600">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avoid */}
      <div>
        <div className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-2">Avoid</div>
        <div className="flex flex-wrap gap-1.5">
          {data.avoid.map((item, i) => (
            <span key={i} className="text-[10px] font-semibold text-red-500 bg-red-50 border border-red-100 px-2 py-1 rounded-lg">
              ✕ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OutfitCoordinator() {
  const { selectedVibe, selectedVenue } = useApp();
  const vibe = selectedVibe || selectedVenue?.vibe || null;

  const outfits = vibe ? OUTFIT_SUGGESTIONS[vibe] : null;
  const vibeInfo = VIBES.find(v => v.id === vibe);

  return (
    <section id="outfit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-200 rounded-full">
          <span className="text-xs font-black text-purple-700 uppercase tracking-widest">Bonus Feature</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Outfit Coordinator</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Personalized color combinations and style advice based on your chosen venue vibe. Look your absolute best.
        </p>
      </div>

      {!vibe ? (
        <div className="text-center py-16 space-y-4">
          <div className="text-5xl">👗</div>
          <h3 className="text-lg font-black text-gray-700">Select a Vibe First</h3>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Choose a venue vibe in the hero section or venue selector to get personalized outfit suggestions.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {VIBES.map(v => (
              <div key={v.id} className="px-4 py-2 rounded-xl bg-white border border-pink-100 text-sm text-gray-500">
                {v.emoji} {v.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Vibe header */}
          <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100">
            <Sparkles className="w-5 h-5 text-lime-500" />
            <span className="text-sm font-black text-gray-800">
              Outfit ideas for: <span className="text-crimson">{vibeInfo?.emoji} {vibeInfo?.label} Vibe</span>
              {selectedVenue && ` at ${selectedVenue.name}`}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <OutfitCard title="For Him 👔" data={outfits.male} gender="male" />
            <OutfitCard title="For Her 👗" data={outfits.female} gender="female" />
          </div>

          {/* General note */}
          <div className="p-4 bg-lime-50 border border-lime-100 rounded-2xl text-center">
            <p className="text-sm text-lime-800 font-medium">
              <strong>The golden rule:</strong> Wear something that makes <em>you</em> feel confident and comfortable. Confidence is the most attractive thing you can wear. ✨
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
