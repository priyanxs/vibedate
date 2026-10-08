import React, { useState, useCallback } from 'react';
import { MESSAGE_TEMPLATES } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { MessageSquare, Copy, RefreshCw, Check, Sparkles } from 'lucide-react';

const MESSAGE_TYPES = [
  { id: 'askOut',       label: 'Ask Them Out',       emoji: '💌' },
  { id: 'confirmPlans', label: 'Confirm Plans',       emoji: '✅' },
  { id: 'postDate',     label: 'Post-Date Follow Up', emoji: '😊' },
];

const TONES = [
  { id: 'flirty',  label: 'Flirty',   emoji: '😏' },
  { id: 'casual',  label: 'Casual',   emoji: '😊' },
  { id: 'direct',  label: 'Direct',   emoji: '💼' },
  { id: 'cute',    label: 'Cute',     emoji: '🥺' },
];

const DAYS = ['Today', 'Tomorrow', 'Friday', 'Saturday', 'Sunday', 'This Weekend'];

function fillTemplate(template, venueName, day) {
  return template
    .replace(/\{venue\}/g, venueName || 'our special place')
    .replace(/\{day\}/g, day || 'Saturday');
}

export default function MessageWriter() {
  const { selectedVenue, messageConfig, setMessageConfig } = useApp();
  const [copied, setCopied] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);

  const { type, tone, venueName, day } = messageConfig;

  const templates = MESSAGE_TEMPLATES[type]?.[tone] || [];
  const currentTemplate = templates[templateIndex % Math.max(templates.length, 1)] || '';
  const generated = currentTemplate ? fillTemplate(currentTemplate, venueName || selectedVenue?.name, day) : '';

  const handleCopy = useCallback(async () => {
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(generated);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = generated;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [generated]);

  const handleNext = () => {
    setTemplateIndex(i => (i + 1) % Math.max(templates.length, 1));
  };

  return (
    <section id="messages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 border border-rose-200 rounded-full">
          <span className="text-xs font-black text-rose-700 uppercase tracking-widest">Step 3</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Message Writer</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Generate the perfect message for every stage of your date — asking them out, confirming plans, or that post-date text.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          {/* Message type */}
          <div className="bg-white rounded-2xl border border-pink-100 p-5 space-y-3 shadow-sm">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Message Type</label>
            <div className="flex flex-col gap-2">
              {MESSAGE_TYPES.map(mt => (
                <button
                  key={mt.id}
                  onClick={() => { setMessageConfig(c => ({ ...c, type: mt.id })); setTemplateIndex(0); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all text-left ${
                    type === mt.id
                      ? 'border-crimson bg-crimson/5 text-crimson'
                      : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-pink-200'
                  }`}
                >
                  <span className="text-lg">{mt.emoji}</span>
                  <span>{mt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tone selector */}
          <div className="bg-white rounded-2xl border border-pink-100 p-5 space-y-3 shadow-sm">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Tone</label>
            <div className="grid grid-cols-2 gap-2">
              {TONES.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setMessageConfig(c => ({ ...c, tone: t.id })); setTemplateIndex(0); }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-xs font-bold transition-all ${
                    tone === t.id
                      ? 'border-crimson bg-crimson text-white shadow-md shadow-crimson/20'
                      : 'border-gray-100 bg-white text-gray-600 hover:border-crimson/40'
                  }`}
                >
                  <span>{t.emoji}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Venue name */}
          <div className="bg-white rounded-2xl border border-pink-100 p-5 space-y-3 shadow-sm">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Venue Name</label>
            <input
              type="text"
              placeholder={selectedVenue?.name || 'Enter venue name...'}
              value={venueName}
              onChange={e => setMessageConfig(c => ({ ...c, venueName: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-crimson placeholder-gray-300"
            />
            {selectedVenue && !venueName && (
              <p className="text-xs text-lime-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Using: {selectedVenue.name}
              </p>
            )}
          </div>

          {/* Day selector */}
          <div className="bg-white rounded-2xl border border-pink-100 p-5 space-y-3 shadow-sm">
            <label className="text-xs font-black text-gray-500 uppercase tracking-widest">When?</label>
            <div className="flex flex-wrap gap-2">
              {DAYS.map(d => (
                <button
                  key={d}
                  onClick={() => setMessageConfig(c => ({ ...c, day: d }))}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    day === d
                      ? 'bg-crimson text-white border-crimson'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-crimson/40'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated message preview */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-pink-100 shadow-xl p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-crimson" />
              <span className="text-sm font-black text-gray-800">Generated Message</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  tone === 'flirty' ? 'bg-rose-100 text-rose-600' :
                  tone === 'casual' ? 'bg-blue-100 text-blue-600' :
                  tone === 'direct' ? 'bg-gray-100 text-gray-600' :
                  'bg-pink-100 text-pink-600'
                }`}>
                  {TONES.find(t => t.id === tone)?.emoji} {tone}
                </span>
              </div>
            </div>

            {/* Message bubble */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                {/* iMessage-style bubble */}
                <div className="bg-crimson rounded-[20px] rounded-br-[4px] p-4 max-w-[90%] ml-auto shadow-lg">
                  <p className="text-white text-sm leading-relaxed font-medium">
                    {generated || (
                      <span className="opacity-60 italic">Configure the options on the left to generate your message...</span>
                    )}
                  </p>
                </div>
                <div className="w-3 h-3 bg-crimson absolute bottom-0 right-0 transform translate-x-1 translate-y-0" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCopy}
                disabled={!generated}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                  copied
                    ? 'bg-lime-500 text-white shadow-md'
                    : 'bg-crimson text-white hover:bg-rose-600 shadow-md shadow-crimson/20'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Message'}
              </button>
              <button
                onClick={handleNext}
                disabled={templates.length <= 1}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-white border border-gray-200 text-gray-600 hover:border-pink-300 hover:text-crimson transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                title="Try another variation"
              >
                <RefreshCw className="w-4 h-4" />
                Vary
              </button>
            </div>

            {templates.length > 1 && (
              <p className="text-xs text-gray-400 text-center mt-2">
                {templateIndex % templates.length + 1} of {templates.length} variations
              </p>
            )}
          </div>

          {/* Tips card */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100 p-4">
            <div className="text-xs font-black text-gray-600 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-lime-500" />
              Pro Tip
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {tone === 'flirty' && "Send flirty messages when you have good rapport. A hint of humor keeps things light and fun. 😏"}
              {tone === 'casual' && "Casual messages are perfect for early stages. Keep it low-pressure and genuine. Easy to respond to!"}
              {tone === 'direct' && "Directness is confidence. Confident people are attractive. If they're not interested, you'll know quickly — win either way. 💪"}
              {tone === 'cute' && "Cute messages work when there's already chemistry. They feel safe to reciprocate. Great for building emotional connection. 🥺"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
