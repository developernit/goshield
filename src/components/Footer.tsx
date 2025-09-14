import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-white/5 pt-12 pb-8 h-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div className="text-slate-200 font-semibold">
          GoShield <span className="text-xs text-slate-500 ml-2">© {new Date().getFullYear()} GoShield Inc.</span>
        </div>
      </div>
      <div className="flex items-center gap-6 text-sm text-slate-400">
        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="/status" className="hover:text-white transition-colors">Status</a>
      </div>
    </div>
  </footer>
);
