import React from 'react';
import { ShoppingCart, Star, Zap } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const { 
    name, 
    price, 
    originalPrice, 
    discount, 
    image, 
    badge, 
    features, 
    stock 
  } = product;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-4">
      {/* Badge Overlay */}
      {badge && (
        <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide animate-pulse">
          {badge}
        </span>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-50 flex items-center justify-center p-6">
        <img 
          src={image} 
          alt={name} 
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Quick Features Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            {features.map((feat, i) => (
              <span key={i} className="text-[10px] text-white bg-blue-500/80 px-2 py-1 rounded-md">
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between min-h-[4rem]">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {name}
          </h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold ml-1">4.9</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-gray-900">
              ₹{price.toLocaleString()}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400 line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 rounded-md">
                {discount}% OFF
              </span>
            </div>
          </div>
          
          <div className="text-[10px] font-bold text-gray-500 flex items-center uppercase">
            <Zap className="w-3 h-3 text-blue-500 mr-1" />
            {stock}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full mt-4 flex items-center justify-center py-3.5 bg-blue-600 text-white font-bold rounded-2xl transition-all hover:bg-blue-700 active:scale-95 group/btn overflow-hidden"
        >
          <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
