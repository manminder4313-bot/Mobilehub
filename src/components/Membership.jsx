import React from 'react';
import { Check, X, Crown, Zap, Star, ShieldCheck } from 'lucide-react';
import { membershipPlans } from './data/mockData';

const Membership = ({ onOpenMembershipModal }) => {
  const icons = [Star, Zap, Crown];

  return (
    <section id="membership" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">Unlock Exclusive Perks</h2>
          <p className="text-lg text-gray-500 font-medium tracking-tight">Join our elite community and save more with priority service, exclusive discounts, and complimentary shipping on every order.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={plan.id} 
                className={`relative group h-full bg-white rounded-[3rem] p-10 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 ${
                  plan.popular 
                  ? 'border-blue-500 shadow-xl scale-105 z-10' 
                  : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg animate-pulse">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-6 mb-10 text-center">
                  <div className={`w-20 h-20 mx-auto rounded-[2rem] flex items-center justify-center text-3xl shadow-lg transform transition-transform group-hover:rotate-12 group-hover:scale-110 ${
                    plan.popular ? 'bg-blue-600 text-white' : 'bg-gray-100 text-blue-600'
                  }`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">{plan.name}</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-black text-blue-600 italic tracking-tighter">₹{plan.price.toLocaleString()}</span>
                      <span className="text-gray-400 font-bold text-sm tracking-tight">/ YEAR</span>
                    </div>
                    <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 text-xs font-black rounded-lg">
                      SAVE EXTRA ₹{plan.savings.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-5 mb-10 min-h-[14rem]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-medium">
                      {feature.included ? (
                        <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 animate-bounce-slow">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  onClick={() => onOpenMembershipModal(plan)}
                  className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg group/btn ${
                    plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="group-hover/btn:tracking-[0.2em] transition-all">Get Started</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Confidence Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 border-t border-gray-200">
           <div className="flex items-center space-x-4">
             <ShieldCheck className="w-8 h-8 text-blue-600" />
             <div>
               <h4 className="font-bold text-gray-900">Secure Purchase</h4>
               <p className="text-xs text-gray-500 font-medium">Encrypted transactions & protection</p>
             </div>
           </div>
           <div className="flex items-center space-x-4">
             <Check className="w-8 h-8 text-emerald-500" />
             <div>
               <h4 className="font-bold text-gray-900">Cancel Anytime</h4>
               <p className="text-xs text-gray-500 font-medium">No questions asked refund policy</p>
             </div>
           </div>
           <div className="flex items-center space-x-4">
             <Zap className="w-8 h-8 text-orange-400" />
             <div>
               <h4 className="font-bold text-gray-900">Instant Activation</h4>
               <p className="text-xs text-gray-500 font-medium">Benefits start immediately after join</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
