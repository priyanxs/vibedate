import React, { useState, useRef, useEffect } from 'react';
import { WINGMAN_TOPICS } from '../data/vibedata';
import { useApp } from '../context/AppContext';
import { Send, X, Bot, User, Sparkles, Zap } from 'lucide-react';

const GEMINI_API_KEY_PLACEHOLDER = 'YOUR_GEMINI_API_KEY'; // Replace with actual key to enable AI

const QUICK_PROMPTS = [
  'How do I handle awkward silence?',
  'What to wear on a dinner date?',
  'How to give a good compliment?',
  "I'm really nervous — help!",
  'What gifts should I bring?',
  'How do I make them laugh?',
];

function getMockedResponse(userMessage) {
  const lower = userMessage.toLowerCase();
  for (const [, topicData] of Object.entries(WINGMAN_TOPICS)) {
    if (topicData.keywords && topicData.keywords.some(kw => lower.includes(kw))) {
      const responses = topicData.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  // Default
  const defaults = WINGMAN_TOPICS.default;
  return defaults[Math.floor(Math.random() * defaults.length)];
}

// Real Gemini API call (activated when a valid API key is provided)
async function callGeminiAPI(messages, apiKey) {
  const systemPrompt = `You are the VibeDate AI Wingman — a charming, witty, and practical dating coach. 
You help users plan the perfect date in Bhopal, India. You give concise, actionable advice about:
- Date etiquette and manners
- Conversation starters and topics
- Outfit suggestions based on venue vibe
- Gift ideas
- How to flirt tastefully
- Managing nervousness
- Post-date follow-ups
Keep responses friendly, warm, and to the point. Use emojis sparingly. Format key points in bold using markdown.`;

  const formattedMessages = messages
    .filter(m => m.role !== 'system')
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: formattedMessages,
        generationConfig: { maxOutputTokens: 400, temperature: 0.8 },
      }),
    }
  );

  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'I had trouble responding. Please try again!';
}

function MessageBubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-crimson' : 'bg-gradient-to-br from-lime-400 to-emerald-500'}`}>
        {isUser ? <User className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-white" />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-3 py-2.5 text-xs leading-relaxed ${
        isUser
          ? 'bg-crimson text-white rounded-br-sm'
          : 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm shadow-sm'
      }`}>
        {/* Render basic markdown bold */}
        {msg.text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
    </div>
  );
}

export default function Wingman() {
  const { chatMessages, setChatMessages, wingmanOpen, setWingmanOpen } = useApp();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    const userMsg = { role: 'user', text: userText };
    const updatedMessages = [...chatMessages, userMsg];
    setChatMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      let responseText;
      const effectiveKey = apiKey.trim() || GEMINI_API_KEY_PLACEHOLDER;

      if (effectiveKey !== 'YOUR_GEMINI_API_KEY' && effectiveKey.length > 10) {
        // Real Gemini API
        responseText = await callGeminiAPI(updatedMessages, effectiveKey);
      } else {
        // Mocked response
        await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
        responseText = getMockedResponse(userText);
      }

      setChatMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
    } catch (err) {
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        text: `Hmm, I had a hiccup! (${err.message}). Try asking again, or check your API key. Meanwhile, here's a universal tip: **Be present, be genuine, and smile.** That's 80% of it! ✨`,
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!wingmanOpen) {
    return (
      <button
        id="wingman-trigger"
        onClick={() => setWingmanOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-crimson to-rose-500 text-white font-bold rounded-2xl shadow-2xl shadow-crimson/30 hover:scale-105 transition-all text-sm"
      >
        <Zap className="w-4 h-4 fill-white" />
        <span>AI Wingman</span>
        <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 flex flex-col bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden" style={{ maxHeight: '580px' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-crimson to-rose-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-black text-white">AI Wingman</div>
            <div className="text-[10px] text-white/70 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
              {apiKey && apiKey !== 'YOUR_GEMINI_API_KEY' ? 'Gemini AI Active' : 'Smart Mode Active'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowApiInput(!showApiInput)}
            className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Configure Gemini API key"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setWingmanOpen(false)} className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* API Key input */}
      {showApiInput && (
        <div className="px-4 py-3 bg-lime-50 border-b border-lime-100">
          <label className="text-xs font-bold text-lime-800 block mb-1.5">Gemini API Key (optional)</label>
          <input
            type="password"
            placeholder="AIza..."
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-lime-200 text-xs text-gray-700 focus:outline-none focus:border-lime-400 bg-white"
          />
          <p className="text-[10px] text-lime-700 mt-1.5">Leave blank to use smart mocked responses. Get a free key at ai.google.dev</p>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50" style={{ minHeight: 200 }}>
        {chatMessages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}
        {loading && (
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-lime-400 to-emerald-500">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick prompts */}
      <div className="px-3 py-2 border-t border-gray-100 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {QUICK_PROMPTS.map(p => (
            <button
              key={p}
              onClick={() => sendMessage(p)}
              disabled={loading}
              className="shrink-0 px-2.5 py-1.5 rounded-xl bg-pink-50 border border-pink-100 text-[10px] font-semibold text-pink-700 hover:bg-pink-100 transition-colors disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask your wingman anything..."
            disabled={loading}
            className="flex-1 px-3 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-crimson bg-gray-50 disabled:opacity-50"
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-crimson text-white flex items-center justify-center hover:bg-rose-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-crimson/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
