"use client";
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const phoneNumber = "584245583492";

  const handleSend = (e) => {
    e.preventDefault();
    const textToSend = message.trim() || "¿Quieres consultar disponibilidad, cotizar un desarrollo o colaborar?";
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-3">
      {/* Popup Chat Box */}
      {isOpen && (
        <div className="w-[300px] sm:w-[340px] bg-[#12121a] border border-[#222232] rounded-2xl p-5 shadow-2xl animate-fade-in-up transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#222232] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse"></span>
              <span className="font-mono text-sm font-semibold text-white">Genesis en WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Question */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">
            ¿Quieres consultar disponibilidad, cotizar un desarrollo o colaborar?
          </p>

          {/* Form / Input */}
          <form onSubmit={handleSend} className="flex flex-col gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe un mensaje rápido..."
              className="w-full bg-[#181826] border border-[#2a2a3c] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#25D366] transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-sm transition-all duration-300 active:scale-[0.98] shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
            >
              <span>Enviar por WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button with Outer Glow Ring */}
      <div className="relative p-3 rounded-full bg-[#10b981]/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#10b981]/30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#20c961] hover:bg-[#1ebd57] text-white rounded-full p-3.5 shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white fill-white"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.438 5.168L2.05 21.95a1 1 0 0 0 1.258 1.258l4.782-1.388A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
