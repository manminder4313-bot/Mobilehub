import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Sparkles, Phone, HelpCircle } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your MobileMart assistant. How can I help you today?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      id: Date.now(), 
      text: input, 
      sender: 'user', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm still learning, but I can help you with product details or member benefits! Would you like to see our latest iPhone deals?";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("delivery")) botResponse = "We offer same-day delivery in metro cities and 2-3 days delivery across India. All our shipments are insured!";
      if (lowerInput.includes("iphone")) botResponse = "Our best seller right now is the iPhone 17 Pro Max. You can save up to ₹15,000 on it today!";
      if (lowerInput.includes("membership")) botResponse = "Our Pro membership at ₹2,999/year is our most popular plan, offering 10% extra discount on all products!";
      if (lowerInput.includes("warranty")) botResponse = "All products sold on MobileMart come with a minimum 1-year official brand warranty.";
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) botResponse = "Hello there! How can I assist you with your tech upgrade today?";

      setMessages(messages => [...messages, { 
        id: Date.now() + 1, 
        text: botResponse, 
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[110]">
      {/* Bot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center space-x-2 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : (
          <>
            <MessageCircle className="w-6 h-6 text-white animate-pulse" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-white font-bold text-xs uppercase tracking-widest pl-0 group-hover:pl-2">
              Chat Support
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-[3rem] shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 transform origin-bottom-right flex flex-col border border-gray-100 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 translate-y-10'
      }`}>
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-[3rem] text-white space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-lg uppercase tracking-tight">MobileMart Ai</h3>
                <div className="flex items-center text-[10px] text-emerald-300 font-black">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-1.5 animate-pulse"></span>
                  ONLINE NOW
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><Phone className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><HelpCircle className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth scrollbar-hide bg-gray-50/50"
        >
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end space-x-2 max-w-[85%] ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs shadow-sm ${
                  m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                }`}>
                  {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-[1.5rem] shadow-sm relative group overflow-hidden ${
                  m.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                }`}>
                  {m.sender === 'bot' && (
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-50 transform rotate-45 translate-x-4 -translate-y-4 opacity-50"></div>
                  )}
                  <p className="text-sm font-medium leading-relaxed">{m.text}</p>
                  <p className={`text-[9px] font-black mt-2 opacity-60 uppercase ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {m.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-4 rounded-[1.5rem] rounded-bl-none shadow-sm flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-6 bg-white border-t border-gray-100 rounded-b-[3rem]">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              className="w-full pl-6 pr-14 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-sm"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-xl shadow-lg transition-all hover:bg-blue-700 active:scale-90"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-blue-500" />
            <span>Smart Assistant Ready</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
