import React from 'react';
import { X, Check, ShieldCheck, creditCard, Zap } from 'lucide-react';

const MembershipModal = ({ isOpen, onClose, plan, onConfirm }) => {
  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="relative p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">Purchase Plan</h2>
              <p className="text-blue-100 font-medium text-sm opacity-90">Confirm your subscription details</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          
          {/* Plan Info Card */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{plan.name}</span>
              <div className="flex items-center text-2xl font-black text-gray-900 italic tracking-tighter">
                ₹{plan.price.toLocaleString()}
                <span className="text-xs text-gray-400 ml-2 not-italic font-bold">/ YEAR</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Zap className="w-6 h-6 text-blue-600 fill-blue-50" />
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">What's Included:</h4>
            <ul className="space-y-3">
              {plan.features.filter(f => f.included).slice(0,3).map((feature, i) => (
                <li key={i} className="flex items-start text-sm font-bold text-gray-700">
                  <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 animate-bounce-slow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Info */}
          <div className="flex items-center space-x-4 p-4 border border-dashed border-gray-200 rounded-2xl opacity-60">
             <ShieldCheck className="w-6 h-6 text-emerald-500" />
             <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
               Secure 256-bit SSL Encrypted Payment Checkout
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-gray-100 text-gray-600 font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(plan)}
            className="flex-1 py-4 bg-blue-600 text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
          >
            Confirm Purchase
          </button>
        </div>

      </div>
    </div>
  );
};

export default MembershipModal;
