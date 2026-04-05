import React from 'react';
import { Star, Quote, Heart, CheckCircle } from 'lucide-react';
import { testimonials } from './data/mockData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-black uppercase tracking-widest border border-blue-100">
              <Heart className="w-4 h-4 mr-2" />
              Customer Love
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight uppercase">Trusted by Thousands <br /> of Tech Lovers</h2>
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-black text-gray-900 text-lg">4.9/5.0</span>
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest ml-2">App Store</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:border-blue-500/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                <Quote className="w-6 h-6" />
              </div>

              <div className="space-y-6 pt-4">
                {/* Rating */}
                <div className="flex text-blue-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium leading-relaxed italic text-lg opacity-80 min-h-[6rem]">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center pt-6 border-t border-gray-50 space-x-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                    {testimonial.avatar}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">{testimonial.name}</h4>
                    <div className="flex items-center text-xs font-bold text-blue-600">
                      <CheckCircle className="w-3 h-3 mr-1 fill-blue-50" />
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 bg-blue-600 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
           {/* Decorative patterns */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 skew-x-12 transform translate-x-1/2"></div>
           
           <div className="space-y-2 relative z-10">
             <p className="text-4xl font-extrabold tracking-tighter">50K+</p>
             <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Active Users</p>
           </div>
           <div className="space-y-2 relative z-10">
             <p className="text-4xl font-extrabold tracking-tighter">100%</p>
             <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Genuine Tech</p>
           </div>
           <div className="space-y-2 relative z-10">
             <p className="text-4xl font-extrabold tracking-tighter">24/7</p>
             <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Support Chat</p>
           </div>
           <div className="space-y-2 relative z-10">
             <p className="text-4xl font-extrabold tracking-tighter">4.9/5</p>
             <p className="text-xs font-bold uppercase tracking-widest text-blue-200">User Rating</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
