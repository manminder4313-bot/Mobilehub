import React, { useState } from 'react';
import { Sparkles, History, ArrowRight, Zap } from 'lucide-react';
import { products } from './data/mockData';

const SavingsCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const totalSavings = (selectedProduct.originalPrice - selectedProduct.price) * quantity;
  const totalCost = selectedProduct.price * quantity;

  return (
    <section id="savings" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-50/50 rounded-full mix-blend-multiply opacity-30 filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 rounded-[4rem] p-12 lg:p-20 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Interactive Section */}
            <div className="flex-1 space-y-10 w-full text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold border border-blue-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Calculate Your Smart Savings
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Smart Shopper's Hub</h2>
                <p className="text-blue-100/80 text-lg font-medium">Compare prices and see how much you can save by choosing MobileMart for your next upgrade.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Product Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-blue-300">Choose a Model</label>
                  <select 
                    className="w-full bg-blue-950/50 border border-blue-700/50 rounded-2xl p-4 text-white font-medium outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                    value={selectedProduct.id}
                    onChange={(e) => setSelectedProduct(products.find(p => p.id === parseInt(e.target.value)))}
                  >
                    {products.slice(0, 10).map(p => (
                      <option key={p.id} value={p.id} className="bg-blue-900">{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider text-blue-300">Quantity</label>
                  <div className="flex items-center bg-blue-950/50 border border-blue-700/50 rounded-2xl overflow-hidden p-1">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-blue-800 rounded-xl transition-colors font-bold text-xl"
                    >−</button>
                    <input 
                      type="number" 
                      className="flex-1 bg-transparent text-center font-black text-xl outline-none"
                      value={quantity}
                      readOnly
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-blue-800 rounded-xl transition-colors font-bold text-xl"
                    >+</button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-6 text-sm text-blue-300/60 font-medium italic">
                <History className="w-4 h-4" />
                <p>Based on official market prices as of today.</p>
              </div>
            </div>

            {/* Right: Results Section */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-[3rem] p-10 shadow-xl relative transform active:scale-95 transition-transform">
                <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-6 rounded-3xl shadow-lg border-4 border-white animate-bounce-slow">
                  <p className="text-[10px] font-black uppercase text-center mb-1">Savings</p>
                  <p className="text-3xl font-black italic tracking-tighter">₹{totalSavings.toLocaleString()}</p>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center p-3">
                      <img src={selectedProduct.image} alt="Selected Product" className="object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900">{selectedProduct.name}</h4>
                      <div className="flex items-center text-blue-600 font-bold">
                        <Zap className="w-4 h-4 mr-1 fill-current" />
                        <span>High Demand Pick</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-y border-gray-100 py-8">
                    <div className="flex justify-between items-center text-gray-500 font-medium">
                      <span>Market Price ({quantity}x)</span>
                      <span className="line-through">₹{(selectedProduct.originalPrice * quantity).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-900">
                      <span className="font-bold flex items-center">
                        MobileMart Price
                        <span className="ml-2 text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase">Exclusive</span>
                      </span>
                      <span className="text-2xl font-black">₹{totalCost.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="#products" 
                      className="w-full h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg hover:bg-blue-700 transition-all hover:gap-4 group shadow-xl active:translate-y-1"
                    >
                      Grab This Offer
                      <ArrowRight className="w-5 h-5 transition-transform translate-x-0 group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
