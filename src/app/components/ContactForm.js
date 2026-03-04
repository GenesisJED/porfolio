'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulación de envío
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="py-0 md:py-24 bg-white-900/50">
      <div className="container mx-auto px-0">
        <div className="max-w-9xl mx-auto glass p-8 md:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 gradient-bg opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="gradient-text">Lets build</span> Something Great.
              </h2>
              <p className="text-slate-400 mb-10 text-md">
                Whether you have a specific project in mind or just want to say hi, my inbox is always open.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-gray-500 font-medium">escalonagenesis97@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-gray-500 font-medium">Remote (UTC-5)</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-gray/10 rounded-2xl px-4 py-3 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-gray/10 rounded-2xl px-4 py-3 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Project Details</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-gray/10 rounded-2xl px-6 py-4 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-2 gradient-bg rounded-2xl font-bold text-md text-white shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent! ✨'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;