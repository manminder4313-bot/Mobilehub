import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">📱</span>
              <span className="text-xl font-bold">Mobile<span className="text-blue-400">Mart</span></span>
            </div>
            <p className="text-gray-400 text-sm">India's #1 online mobile store. 100% genuine products with warranty. Express delivery across India.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <p className="text-gray-400 text-sm mb-3">Made by:</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2"><span>👤</span><span>Gurjot Singh</span></li>
              <li className="flex items-center space-x-2"><span>👤</span><span>Kabir Gulyani</span></li>
              <li className="flex items-center space-x-2"><span>👤</span><span>Aryan Saini</span></li>
              <li className="flex items-center space-x-2"><span>👤</span><span>Sangam Goyal</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty & Returns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Track Order</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#deals" className="hover:text-blue-400 transition-colors">Deals</a></li>
              <li><a href="#membership" className="hover:text-blue-400 transition-colors">Membership</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2"><span>📍</span><span>Mumbai, India</span></li>
              <li className="flex items-center space-x-2"><span>📧</span><span>support@mobilemart.in</span></li>
              <li className="flex items-center space-x-2"><span>📞</span><span>+91 7888300532</span></li>
              <li className="flex items-center space-x-2"><span>⏰</span><span>24/7 Customer Support</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">©️ 2025 MobileMart. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
