import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(5085); // 1 hour, 24 minutes, 45 seconds in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply opacity-20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 filter blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              <span>India's Most Trusted Mobile Store</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
              Get the Latest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-gradient">
                iPhone 17 Pro
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed shadow-sm">
              Experience the powerhouse of innovation. From advanced titanium design to professional cameras, elevate your world with MobileMart's exclusive deals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#products" 
                className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:bg-blue-50 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center"
              >
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Shop Now
              </a>
              <a 
                href="#membership" 
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                Join Membership
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/10 opacity-80">
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-emerald-400" />
                <span className="text-sm font-medium">1 Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Image/Representation */}
          <div className="flex-1 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://cdn.akakce.com/_static/370526315/iphone-17-pro-max-arkadan-gorunumu.jpg?auto=format&fit=crop&q=80&w=600" 
                alt="iPhone 17 Pro Max" 
                className="rounded-3xl shadow-2xl border-4 border-white/10"
              />
              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl text-blue-900 border border-blue-100 animate-bounce">
                <p className="text-sm font-bold">SALE ENDS IN</p>
                <p className="text-2xl font-black tabular-nums">{formatTime(timeLeft)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
