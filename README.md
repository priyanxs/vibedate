# 🌹 VibeDate — Bhopal's Premium Date Planner SPA

**VibeDate** is a modern, responsive Single Page Application (SPA) designed to help couples and romantics plan unforgettable dates across Bhopal, Madhya Pradesh. Built with **React 18**, **Tailwind CSS**, and **Lucide React**, VibeDate features a sophisticated Pink, Crimson Red, and Lime Green aesthetic with glassmorphic cards, smooth interactions, real-time budget calculations, and an intelligent AI Wingman.

---

## 📸 Key Features

### 1. 💰 Dynamic Budget Scroller
- Interactive budget slider (₹500 to ₹10,000).
- Dynamically adapts recommendations across venues, dishes, and gift suggestions.
- Live tier indicators: *Casual Hangout*, *Nice Date Night*, and *Premium Experience*.

### 2. 🍽️ Curated Bhopal Venue Database & Live Menu Selection
- Authentic Bhopal restaurants and cafes categorized strictly by vibe:
  - **Romantic 🌹**: *Under the Mango Tree* (Shyamla Hills), *Lake View Terrace* (Upper Lake)
  - **Cozy ☕**: *Oliver's Café* (MP Nagar), *The Reading Room* (Arera Colony)
  - **Vibrant 🎉**: *Greek Food & Brewery* (Zone-1 MP Nagar), *The Hub Rooftop* (New Market)
  - **Casual 😊**: *Sagar Gaire* (Bittan Market), *Chai Tale* (BHEL)
- Expandable menus with realistic prices and dish descriptions (Appetizers, Mains, Drinks, Desserts).
- One-click addition to the date plan with real-time budget warnings.

### 3. 📊 Real-Time Date Calculator
- Sticky and prominent financial breakdown with animated progress bar.
- Tracks cover charges, culinary picks, and curated gifts.
- **Lime Green** indicator for remaining funds, with automatic alert badges if budget is exceeded.
- Item removal with a single tap.

### 4. 🎁 Vibe & Budget-Matched Gift Suggester
- Thoughtfully categorized gifts: *Flowers*, *Chocolates*, *Personalized Keepsakes*, *Jewelry*, and *Fun & Unique*.
- Automated **"Vibe Match"** and budget affordability tags.
- Direct integration into the date calculator.

### 5. 💌 Contextual Message Writer
- Tailored message templates across three dating milestones:
  - *Ask Them Out*
  - *Confirm Plans*
  - *Post-Date Follow-up*
- Four distinct tones: **Flirty 😏**, **Casual 😊**, **Direct 💼**, and **Cute 🥺**.
- Auto-populates selected venue and selected day of the week with 1-click clipboard copy.

### 6. 🤵 AI Wingman Assistant
- Embedded dating coach chat drawer at the bottom-right corner.
- Expert advice on date etiquette, etiquette rules, conversation starters, and outfit tips.
- Includes both a fast pre-programmed intelligent mock responder and optional direct **Google Gemini 1.5 Flash API** integration.

### 7. 🌟 Unique "VibeDate" Additions
- **Itinerary Builder**: Chronological timeline generator customized to your vibe with downloadable `.txt` itinerary and pre-date checklist.
- **Outfit Coordinator**: Tailored dress codes, color palettes, styling tips, and what to avoid for both men and women.
- **Conversation Deck**: 3D interactive flip cards with 20 conversation starters categorized by depth (*Light*, *Medium*, *Deep*, *Fun*) to eliminate awkward silences.

---

## 🎨 Design System

- **Primary Romantic / Buttons:** Crimson Red (`#dc143c`)
- **Success / Budget Badges:** Lime Green (`#84cc16`)
- **Soft Ambient Accents:** Subtle Rose & Pink Glassmorphism
- **Typography:** Plus Jakarta Sans

---

## 🚀 Instant Deployment to GitHub Pages

### Method 1: Automated via GitHub Actions (Recommended)
This repository includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete VibeDate SPA"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. GitHub Actions will build and deploy automatically to `https://<username>.github.io/<repo>/`.

### Method 2: Manual deployment with `gh-pages`
```bash
npm install
npm run deploy
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build production bundle
npm run build
```

---

## 🔑 Optional Gemini API Integration

1. Get an API key from [Google AI Studio](https://aistudio.google.com/).
2. Open the **AI Wingman** chat in the bottom right corner.
3. Tap the sparkle (✨) icon in the chat header to enter your API key.
4. Enjoy real-time generative AI advice! Without an API key, the built-in smart assistant handles all questions seamlessly.

---

Crafted with ❤️ for couples & romantics in Bhopal.
