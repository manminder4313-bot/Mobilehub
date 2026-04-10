import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import SavingsCalculator from "./components/SavingsCalculator";
import Delivery from "./components/Delivery";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ChatBot from "./components/ChatBot";
import MembershipModal from "./components/MembershipModal";
import CheckoutModal from "./components/CheckoutModal";
import { Toaster, toast } from "sonner";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success(`Added another ${product.name} to cart!`);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast.info('Item removed from cart');
  };

  const handleOpenMembershipModal = (plan) => {
    setSelectedPlan(plan);
    setIsMembershipModalOpen(true);
  };

  const handleConfirmPurchase = (plan) => {
    setIsMembershipModalOpen(false);
    toast.success(`Successfully purchased ${plan.name}! Check your email for details.`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setIsCheckoutModalOpen(false);
    setCartItems([]);
    toast.success('🎉 Order Placed Successfully!', {
      description: 'Your order is being processed. Check your email for the receipt.',
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Products onAddToCart={handleAddToCart} />
      <SavingsCalculator />
      <Delivery />
      <Membership onOpenMembershipModal={handleOpenMembershipModal} />
      <Testimonials />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <MembershipModal
        isOpen={isMembershipModalOpen}
        onClose={() => setIsMembershipModalOpen(false)}
        plan={selectedPlan}
        onConfirm={handleConfirmPurchase}
      />
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cartItems}
        onConfirm={handleConfirmOrder}
      />
      <ChatBot />
      <Toaster position="top-right" richColors />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
