import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VenueSelector from './components/VenueSelector';
import BudgetCalculator from './components/BudgetCalculator';
import GiftSuggester from './components/GiftSuggester';
import MessageWriter from './components/MessageWriter';
import ItineraryBuilder from './components/ItineraryBuilder';
import OutfitCoordinator from './components/OutfitCoordinator';
import ConversationDeck from './components/ConversationDeck';
import Wingman from './components/Wingman';
import { Heart, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-pink-100 py-8 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
          <Heart className="w-4 h-4 text-crimson fill-crimson" />
          <span>VibeDate — Bhopal's Premium Date Planner</span>
          <Sparkles className="w-4 h-4 text-lime-500" />
        </div>
        <p className="text-xs text-gray-400">
          Made with love for romantics in Bhopal 💕 · All prices approximate
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40 text-gray-900">
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        <main className="pt-16">
          <Hero />

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-5xl mx-auto px-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
            <Heart className="w-4 h-4 text-pink-300 fill-pink-200" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>

          <VenueSelector />
          <BudgetCalculator />

          <div className="flex items-center gap-4 max-w-5xl mx-auto px-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
            <Sparkles className="w-4 h-4 text-lime-400" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>

          <GiftSuggester />
          <MessageWriter />

          <div className="flex items-center gap-4 max-w-5xl mx-auto px-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
            <span className="text-pink-300 text-lg">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>

          <ItineraryBuilder />
          <OutfitCoordinator />
          <ConversationDeck />
        </main>

        <Footer />
        <Wingman />
      </div>
    </AppProvider>
  );
}
