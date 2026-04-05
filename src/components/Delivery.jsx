import React from 'react';
import { ShieldCheck, CheckCircle2, Box, Warehouse, Truck, Home } from 'lucide-react';
import { deliverySteps } from './data/mockData';

const Delivery = () => {
  const lucideIcons = [ShieldCheck, CheckCircle2, Box, Warehouse, Truck, Home];

  return (
    <section id="delivery" className="py-24 bg-white relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight uppercase">Safe, Secure & Fast Delivery</h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight">We've specialized our delivery network to ensure your premium tech arrives in perfect condition within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {deliverySteps.map((step, index) => {
            const IconComponent = lucideIcons[index];
            const stepNumber = (index + 1).toString().padStart(2, '0');
            
            return (
              <div 
                key={index} 
                className="group relative flex flex-col items-center text-center p-8 bg-white rounded-[3rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Counter Badge */}
                <div className="absolute top-6 left-6 text-sm font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors">
                  {stepNumber}
                </div>

                {/* SVG background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-50 z-0"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 w-24 h-24 bg-blue-600 text-white rounded-[2.5rem] flex flex-col items-center justify-center mb-8 shadow-xl transform transition-transform group-hover:rotate-6 group-hover:scale-110">
                  {IconComponent ? <IconComponent className="w-10 h-10" /> : <span className="text-4xl">{step.icon}</span>}
                  
                  {/* Floating particles */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-tighter leading-none italic">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-xs">{step.description}</p>
                </div>

                {/* Bottom marker */}
                <div className="mt-8 w-12 h-1 bg-gray-100 group-hover:bg-blue-600 transition-colors rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Global Network Info */}
        <div className="mt-24 p-12 bg-blue-600 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
          {/* Background overlay */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>
          
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest border border-white/30">
              <Truck className="w-4 h-4 mr-2" />
              Express Network
            </div>
            <h3 className="text-5xl font-black tracking-tighter italic uppercase leading-none">Pan-India <br/> Coverage</h3>
            <p className="text-blue-50 text-xl font-medium leading-relaxed opacity-90 max-w-xl">With over <span className="font-extrabold text-white text-3xl">50+ local hubs</span> and 10,000+ delivery partners, we're reaching most metro cities same-day.</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-6 py-3 bg-white text-blue-600 rounded-2xl font-black text-xs tracking-widest uppercase">METROS: 24HR MAX</div>
              <div className="px-6 py-3 bg-white/20 border border-white/30 rounded-2xl font-black text-xs tracking-widest uppercase">PAN INDIA: 2-3 DAYS</div>
            </div>
          </div>

          <div className="flex-1 relative z-10 w-full flex justify-center lg:justify-end">
            <div className="relative group p-10 bg-white/10 rounded-[4rem] backdrop-blur-md border border-white/20 shadow-inner overflow-hidden">
               {/* Animated speed lines */}
               {[...Array(5)].map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute left-[-100%] h-1 bg-white/20 rounded-full animate-marquee" 
                   style={{ 
                     top: `${20 * i + 10}%`, 
                     width: `${20 + i * 10}%`, 
                     animationDuration: `${2 + i}s`,
                     animationDelay: `${i * 0.5}s`
                   }} 
                 />
               ))}
              <Truck className="w-48 h-48 text-white relative z-10 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
