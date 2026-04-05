import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col rounded-l-[3rem]`}>
        
        {/* Header */}
        <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white relative z-20">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">Your Bag</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-2xl transition-all active:scale-90"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative flex items-center bg-gray-50/50 p-4 rounded-3xl border border-gray-100 hover:border-blue-500/30 transition-all hover:bg-white hover:shadow-xl overflow-hidden"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center p-2 shadow-sm transform transition-transform group-hover:scale-110">
                  <img src={item.image} alt={item.name} className="object-contain" />
                </div>
                
                <div className="ml-6 flex-1 space-y-1">
                  <h3 className="font-extrabold text-gray-900 text-lg leading-tight uppercase tracking-tight">{item.name}</h3>
                  <p className="text-blue-600 font-black text-lg italic">₹{item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center bg-white border border-gray-100 rounded-xl overflow-hidden p-1 shadow-sm">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-black text-gray-800">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-gray-50 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-colors hover:bg-red-50 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 grayscale opacity-40">
              <ShoppingBag className="w-24 h-24 text-gray-300" />
              <div className="space-y-2">
                <p className="text-2xl font-black text-gray-900 uppercase">Cart is Empty</p>
                <p className="text-sm font-medium text-gray-500">Add some tech to get started!</p>
              </div>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-blue-600 text-white font-black rounded-2xl text-sm uppercase tracking-widest shadow-lg"
              >
                Go Shopping
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-8 bg-white border-t border-gray-100 space-y-6 relative z-20 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="space-y-4">
              <div className="flex justify-between font-bold text-gray-500">
                <span className="uppercase tracking-widest text-xs">Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-500">
                <span className="uppercase tracking-widest text-xs">Shipping</span>
                <span className={shipping === 0 ? 'text-emerald-500' : ''}>
                  {shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-black text-gray-900 italic uppercase">Total</span>
                <span className="text-3xl font-black text-blue-600 italic">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full h-16 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 hover:gap-4 active:scale-95 group flex items-center justify-center uppercase tracking-[0.2em]"
            >
              Checkout
              <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center space-x-6 pt-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <div className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-emerald-500" /> Secure SSL</div>
              <div className="flex items-center"><Truck className="w-3 h-3 mr-1 text-blue-500" /> Express Pan-India</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
