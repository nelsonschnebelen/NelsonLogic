'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function IntakeTerminal() {
  const [state, handleSubmit] = useForm('mwvqzelj');

  return (
    <section id="initialize-project" className="py-24 px-6 relative z-10">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Initialize Project</h2>
          <p className="text-gray-400 text-sm font-mono">SECURE_CHANNEL_ESTABLISHED // READY_FOR_INPUT</p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" aria-hidden />
          <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Received.</h3>
                  <p className="text-gray-400">I will analyze the request and respond within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="space-y-2">
                    <label htmlFor="intake-name" className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Operator Name</label>
                    <input id="intake-name" type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="intake-email" className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Contact Frequency</label>
                    <input id="intake-email" type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all" placeholder="john@company.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 block" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="intake-budget" className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Resource Allocation (Budget)</label>
                    <div className="relative">
                      <select id="intake-budget" name="budget" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer">
                        <option className="bg-gray-900" value="micro">Micro-Tool ($500 - $1k)</option>
                        <option className="bg-gray-900" value="mvp">MVP Build ($2k - $5k)</option>
                        <option className="bg-gray-900" value="full">Full System ($5k+)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="intake-message" className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-1">Mission Parameters</label>
                    <textarea id="intake-message" name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none" placeholder="Describe the tool you need built..." />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 block" />
                  </div>
                  <button type="submit" disabled={state.submitting} className="w-full bg-white text-black font-bold py-4 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group">
                    {state.submitting ? (<><Loader2 className="animate-spin" size={20} /><span>TRANSMITTING...</span></>) : (<><Send size={18} className="group-hover:translate-x-1 transition-transform" /><span>TRANSMIT REQUEST</span></>)}
                  </button>
                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="flex items-center gap-2 text-red-400 text-sm justify-center bg-red-500/10 p-2 rounded">
                      <AlertCircle size={16} />
                      <span>Error submitting form. Please try again.</span>
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
