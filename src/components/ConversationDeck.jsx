import React, { useState } from 'react';
import { CONVERSATION_CARDS } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, RefreshCw, Shuffle } from 'lucide-react';

const CATEGORY_COLORS = {
  Light:  { bg: 'bg-lime-100',   text: 'text-lime-700',   border: 'border-lime-200' },
  Medium: { bg: 'bg-amber-100',  text: 'text-amber-700',  border: 'border-amber-200' },
  Deep:   { bg: 'bg-crimson/10', text: 'text-crimson',    border: 'border-rose-200' },
  Fun:    { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
};

export default function ConversationDeck() {
  const { cardIndex, setCardIndex, cardFlipped, setCardFlipped } = useApp();
  const [filter, setFilter] = useState('All');
  const [order, setOrder] = useState([...Array(CONVERSATION_CARDS.length).keys()]);

  const categories = ['All', 'Light', 'Medium', 'Deep', 'Fun'];

  const sortedFiltered = order
    .map(i => CONVERSATION_CARDS[i])
    .filter(c => c && (filter === 'All' || c.category === filter));

  const safeIndex = cardIndex % Math.max(sortedFiltered.length, 1);
  const currentCard = sortedFiltered[safeIndex] || CONVERSATION_CARDS[0];
  const coloring = CATEGORY_COLORS[currentCard.category] || CATEGORY_COLORS.Light;

  const goNext = () => {
    setCardFlipped(false);
    setCardIndex(i => (i + 1) % sortedFiltered.length);
  };

  const goPrev = () => {
    setCardFlipped(false);
    setCardIndex(i => (i - 1 + sortedFiltered.length) % sortedFiltered.length);
  };

  const shuffle = () => {
    const shuffled = [...Array(CONVERSATION_CARDS.length).keys()].sort(() => Math.random() - 0.5);
    setOrder(shuffled);
    setCardIndex(0);
    setCardFlipped(false);
  };

  const handleFlip = () => setCardFlipped(f => !f);

  return (
    <section id="convo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-200 rounded-full">
          <span className="text-xs font-black text-purple-700 uppercase tracking-widest">Bonus Feature</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Conversation Deck</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          {CONVERSATION_CARDS.length} conversation starters to banish awkward silences — tap a card to reveal the question.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setCardIndex(0); setCardFlipped(false); }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              filter === cat
                ? 'bg-crimson text-white border-crimson shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-crimson/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-lg mx-auto space-y-4">
        {/* Card */}
        <div
          className="relative h-72 cursor-pointer"
          onClick={handleFlip}
          style={{ perspective: '1000px' }}
        >
          <div
            className="w-full h-full transition-all duration-500 relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: cardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-crimson to-rose-400 shadow-xl shadow-crimson/20 text-white p-8"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-6xl mb-4">{currentCard.emoji}</div>
              <div className={`px-3 py-1 rounded-full text-xs font-black border bg-white/20 border-white/30 text-white mb-4`}>
                {currentCard.category} Depth
              </div>
              <p className="text-sm font-semibold opacity-80 text-center">Tap to reveal the question</p>
              <div className="absolute bottom-4 right-5 text-xs text-white/50 font-semibold">
                {safeIndex + 1} / {sortedFiltered.length}
              </div>
            </div>

            {/* Back face */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 ${coloring.border} bg-white shadow-xl p-8`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${coloring.bg} ${coloring.text} mb-4`}>
                {currentCard.category}
              </div>
              <p className="text-base font-black text-gray-900 text-center leading-relaxed">
                {currentCard.question}
              </p>
              <p className="text-xs text-gray-400 mt-4">Tap again to flip back</p>
              <div className="absolute bottom-4 right-5 text-xs text-gray-300 font-semibold">
                #{currentCard.id}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={goPrev}
            disabled={sortedFiltered.length <= 1}
            className="w-11 h-11 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-crimson/40 hover:text-crimson flex items-center justify-center transition-all disabled:opacity-40 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={shuffle}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-lime-400 hover:text-lime-700 transition-all text-xs font-bold shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" />
            Shuffle
          </button>

          <button
            onClick={() => { setCardFlipped(false); setCardIndex(0); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-crimson transition-all text-xs font-bold shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>

          <button
            onClick={goNext}
            disabled={sortedFiltered.length <= 1}
            className="w-11 h-11 rounded-2xl bg-crimson text-white hover:bg-rose-600 flex items-center justify-center transition-all disabled:opacity-40 shadow-md shadow-crimson/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 flex-wrap">
          {sortedFiltered.slice(0, 20).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCardIndex(i); setCardFlipped(false); }}
              className={`w-2 h-2 rounded-full transition-all ${i === safeIndex ? 'bg-crimson w-4' : 'bg-gray-200 hover:bg-pink-300'}`}
            />
          ))}
          {sortedFiltered.length > 20 && (
            <span className="text-xs text-gray-400 self-center ml-1">+{sortedFiltered.length - 20} more</span>
          )}
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100 p-4 text-center">
          <p className="text-xs text-gray-600 leading-relaxed">
            💡 <strong>How to use:</strong> Take turns drawing cards. Answer honestly, listen actively. The best conversations happen when both people feel safe to be real. No phones allowed! 📵
          </p>
        </div>
      </div>
    </section>
  );
}
