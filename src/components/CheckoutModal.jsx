import React from 'react';
import { X, Check, ShieldCheck, ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, cartItems, onConfirm }) => {
  if (!isOpen || cartItems.length === 0) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-[0_0_100px_-20px_rgba(37,99,235,0.2)] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-500 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="relative p-10 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white overflow-hidden flex-shrink-0">
          <div className="absolute top-[-50%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-40 h-40 bg-blue-400/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex justify-between items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-blue-100 text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-md">
                Final Step
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Confirm Order</h2>
              <p className="text-blue-100/80 font-bold text-sm tracking-tight">Review your items before we ship them to you</p>
            </div>
            <button 
              onClick={onClose}
              className="p-4 hover:bg-white/20 rounded-2xl transition-all active:scale-90 border border-white/10 backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide">
          
          {/* Order Summary List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Your Selection ({cartItems.length})</h4>
              <div className="h-px flex-1 bg-gray-100 mx-4"></div>
            </div>
            
            <div className="grid gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-4 bg-gray-50/50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center p-2 shadow-sm group-hover:scale-110 transition-transform">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="ml-5 flex-1">
                    <h5 className="font-extrabold text-gray-900 text-sm uppercase tracking-tight">{item.name}</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-blue-600 italic">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-blue-500/20 transition-colors"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center text-sm font-bold text-gray-400">
                <span className="uppercase tracking-widest">Subtotal</span>
                <span className="text-white">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-gray-400">
                <span className="uppercase tracking-widest">Shipping</span>
                <span className={shipping === 0 ? 'text-emerald-400 font-black' : 'text-white'}>
                  {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}
                </span>
              </div>
              
              <div className="h-px bg-white/10 my-6"></div>
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Total Amount</span>
                  <div className="text-4xl font-black tracking-tighter italic leading-none">₹{total.toLocaleString()}</div>
                </div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5 italic">
                  Incl. GST & Taxes
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 border border-gray-100 rounded-3xl flex items-center space-x-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-gray-900 uppercase">Secure Payment</p>
                <p className="text-[9px] font-bold text-gray-400 leading-tight">256-bit SSL encryption for safe checkout</p>
              </div>
            </div>
            <div className="p-5 border border-gray-100 rounded-3xl flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black text-gray-900 uppercase">Daily Delivery</p>
                <p className="text-[9px] font-bold text-gray-400 leading-tight">Fast shipping across all major cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-10 pt-0 bg-white flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <button 
            onClick={onClose}
            className="flex-1 py-5 bg-gray-50 text-gray-400 font-black rounded-3xl text-xs uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95 border border-gray-100"
          >
            Go Back
          </button>
          <button 
            onClick={onConfirm}
            className="flex-[2] py-5 bg-blue-600 text-white font-black rounded-3xl text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 group flex items-center justify-center"
          >
            Confirm & Pay
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutModal;
