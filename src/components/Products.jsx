import React, { useState } from 'react';
import { products } from './data/mockData';
import ProductCard from './ProductCard';
import { Filter, Search } from 'lucide-react';

const Products = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Arrivals</h2>
          <p className="text-gray-600 mb-8 font-medium">Explore the best selection of genuine Apple products with guaranteed lowest prices.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search iPhone 15, AirPods..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-2xl border border-gray-200 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
              <Filter className="w-4 h-4 text-gray-400 mr-2" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1 rounded-xl text-sm font-bold transition-all ${
                      selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 flex items-center justify-between text-sm font-medium text-gray-500">
          <p>Showing {filteredProducts.length} results</p>
          {selectedCategory !== "All" && (
            <button 
              onClick={() => setSelectedCategory("All")}
              className="text-blue-600 hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="text-5xl mb-4 opacity-30">🔍</div>
            <h3 className="text-xl font-bold text-gray-800">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
