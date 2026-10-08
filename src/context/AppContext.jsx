import React, { createContext, useContext, useState, useCallback } from 'react';
import { BUDGET_DEFAULT } from '../data/vibedata';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // ── Budget ───────────────────────────────────────────────────
  const [budget, setBudget] = useState(BUDGET_DEFAULT);

  // ── Venue & Menu ─────────────────────────────────────────────
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedVibe, setSelectedVibe] = useState(null);
  const [cartItems, setCartItems] = useState([]); // { ...menuItem, quantity: 1, section }

  const addToCart = useCallback((item, section) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev; // already added
      return [...prev, { ...item, section }];
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  }, []);

  const isInCart = useCallback((itemId) => {
    return cartItems.some(i => i.id === itemId);
  }, [cartItems]);

  // ── Gifts ─────────────────────────────────────────────────────
  const [selectedGifts, setSelectedGifts] = useState([]);

  const toggleGift = useCallback((gift) => {
    setSelectedGifts(prev => {
      const exists = prev.find(g => g.id === gift.id);
      return exists ? prev.filter(g => g.id !== gift.id) : [...prev, gift];
    });
  }, []);

  const isGiftSelected = useCallback((giftId) => {
    return selectedGifts.some(g => g.id === giftId);
  }, [selectedGifts]);

  // ── Totals ────────────────────────────────────────────────────
  const venueTotal = cartItems.reduce((sum, i) => sum + i.price, 0);
  const giftTotal = selectedGifts.reduce((sum, g) => sum + g.price, 0);
  const coverCharge = selectedVenue?.coverCharge || 0;
  const total = venueTotal + giftTotal + coverCharge;
  const remaining = budget - total;
  const overBudget = total > budget;

  // ── Active Section (navigation) ───────────────────────────────
  const [activeSection, setActiveSection] = useState('hero');

  // ── Message Writer ────────────────────────────────────────────
  const [messageConfig, setMessageConfig] = useState({
    type: 'askOut',
    tone: 'flirty',
    venueName: '',
    day: 'Saturday',
    generated: '',
  });

  // ── Wingman Chat ──────────────────────────────────────────────
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      text: "Hey! I'm your AI Wingman 🤵 I'm here to help you nail this date. Ask me about etiquette, conversation starters, what to wear, gift ideas, or any date advice!",
    },
  ]);
  const [wingmanOpen, setWingmanOpen] = useState(false);

  // ── Conversation Deck ─────────────────────────────────────────
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  // ── Itinerary ─────────────────────────────────────────────────
  const [showItinerary, setShowItinerary] = useState(false);

  const clearPlan = useCallback(() => {
    setSelectedVenue(null);
    setSelectedVibe(null);
    setCartItems([]);
    setSelectedGifts([]);
    setShowItinerary(false);
  }, []);

  const value = {
    // Budget
    budget, setBudget,
    // Venue
    selectedVenue, setSelectedVenue,
    selectedVibe, setSelectedVibe,
    // Cart
    cartItems, setCartItems, addToCart, removeFromCart, isInCart,
    // Gifts
    selectedGifts, setSelectedGifts, toggleGift, isGiftSelected,
    // Totals
    venueTotal, giftTotal, coverCharge, total, remaining, overBudget,
    // Navigation
    activeSection, setActiveSection,
    // Message Writer
    messageConfig, setMessageConfig,
    // Wingman
    chatMessages, setChatMessages,
    wingmanOpen, setWingmanOpen,
    // Conversation Deck
    cardIndex, setCardIndex,
    cardFlipped, setCardFlipped,
    // Itinerary
    showItinerary, setShowItinerary,
    // Actions
    clearPlan,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
