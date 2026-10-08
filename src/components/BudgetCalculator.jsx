import React, { useMemo } from 'react';
import { AlertTriangle, CheckCircle, ShoppingBag, Gift, Utensils, X, TrendingDown, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BudgetCalculator() {
  const {
    budget,
    cartItems,
    selectedGifts,
    venueTotal,
    giftTotal,
    coverCharge,
    total,
    remaining,
    overBudget,
    selectedVenue,
    removeFromCart,
    toggleGift,
  } = useApp();

  const spentPercent = Math.min((total / budget) * 100, 100);

  const statusColor = useMemo(() => {
    if (overBudget) return { bar: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
    if (spentPercent > 80) return { bar: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
    return { bar: 'bg-lime-500', text: 'text-lime-600', bg: 'bg-lime-50', border: 'border-lime-200' };
  }, [overBudget, spentPercent]);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-50 border border-lime-200 rounded-full">
          <span className="text-xs font-black text-lime-700 uppercase tracking-widest">Live Calculator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Your Date Budget</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Every item you add is tracked in real-time. Stay in budget, or splurge a little — we'll let you know! 💚
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: Summary card */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-xl p-6 space-y-5">
          {/* Total display */}
          <div className={`rounded-2xl p-5 border ${statusColor.bg} ${statusColor.border} text-center`}>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Total Spend</div>
            <div className={`text-4xl font-black ${statusColor.text}`}>
              ₹{total.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-gray-500 mt-1">of ₹{budget.toLocaleString('en-IN')} budget</div>

            {/* Progress bar */}
            <div className="mt-4 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${statusColor.bar}`}
                style={{ width: `${spentPercent}%` }}
              />
            </div>

            {/* Status */}
            <div className={`flex items-center justify-center gap-1.5 mt-3 text-xs font-bold ${statusColor.text}`}>
              {overBudget ? (
                <>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Over by ₹{Math.abs(remaining).toLocaleString('en-IN')}</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>₹{remaining.toLocaleString('en-IN')} remaining</span>
                </>
              )}
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Breakdown</div>

            {coverCharge > 0 && (
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Cover Charge ({selectedVenue?.name})
                </span>
                <span className="text-sm font-bold text-orange-600">₹{coverCharge}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-crimson" />
                Food & Drinks ({cartItems.length} items)
              </span>
              <span className="text-sm font-bold text-gray-800">₹{venueTotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <Gift className="w-3.5 h-3.5 text-pink-500" />
                Gifts ({selectedGifts.length} items)
              </span>
              <span className="text-sm font-bold text-gray-800">₹{giftTotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-black text-gray-900">Total</span>
              <span className={`text-base font-black ${overBudget ? 'text-red-600' : 'text-lime-600'}`}>
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {overBudget && (
            <div className="flex items-start gap-2 p-3 bg-red-50 rounded-xl border border-red-100">
              <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-600 font-medium leading-relaxed">
                You're over budget! Consider removing some items or increasing your budget in the hero section. Quality > quantity on a date 💡
              </p>
            </div>
          )}

          {total === 0 && (
            <div className="flex items-start gap-2 p-3 bg-pink-50 rounded-xl border border-pink-100">
              <Sparkles className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <p className="text-xs text-pink-600 font-medium leading-relaxed">
                Nothing added yet! Select a venue and pick menu items to start building your perfect date plan. ✨
              </p>
            </div>
          )}
        </div>

        {/* Right: Item list */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-crimson" />
            <h3 className="text-sm font-black text-gray-800">Your Date Plan Items</h3>
          </div>

          {cartItems.length === 0 && selectedGifts.length === 0 ? (
            <div className="text-center py-10 text-gray-400 space-y-2">
              <div className="text-3xl">🛒</div>
              <p className="text-sm font-medium">Your plan is empty</p>
              <p className="text-xs">Add menu items and gifts to see them here</p>
            </div>
          ) : (
            <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
              {coverCharge > 0 && (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-50 border border-orange-100">
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Cover Charge</div>
                    <div className="text-[10px] text-gray-500">{selectedVenue?.name}</div>
                  </div>
                  <span className="text-sm font-bold text-orange-600">₹{coverCharge}</span>
                </div>
              )}

              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-pink-50 group transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-800 truncate">{item.name}</div>
                    <div className="text-[10px] text-gray-400 capitalize">{item.section}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold text-gray-700">₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-5 h-5 rounded-full bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}

              {selectedGifts.map(gift => (
                <div key={gift.id} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-pink-50 group transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-800 flex items-center gap-1">
                      <span>{gift.emoji}</span>
                      <span className="truncate">{gift.name}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 capitalize">Gift — {gift.category}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold text-gray-700">₹{gift.price}</span>
                    <button
                      onClick={() => toggleGift(gift)}
                      className="w-5 h-5 rounded-full bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(cartItems.length > 0 || selectedGifts.length > 0) && (
            <div className="pt-3 border-t border-gray-100">
              <div className={`flex items-center justify-between p-3 rounded-xl ${statusColor.bg} ${statusColor.border} border`}>
                <div className="flex items-center gap-2">
                  <TrendingDown className={`w-4 h-4 ${statusColor.text}`} />
                  <span className="text-xs font-bold text-gray-700">Budget Remaining</span>
                </div>
                <span className={`text-base font-black ${statusColor.text}`}>
                  {overBudget ? '-' : ''}₹{Math.abs(remaining).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
