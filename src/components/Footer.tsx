import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t pt-5 pb-5 border-white/5 h-28 flex justify-content items-center">
    <div className="max-w-full mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 h-full">
      <div className="flex items-center gap-3 min-w-0 flex-shrink">
        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div className="flex items-center text-slate-200 font-semibold truncate">
          GoShield <span className="text-xs text-slate-500 ml-2">© {new Date().getFullYear()} GoShield Inc.</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-sm text-slate-400 flex-wrap justify-center md:justify-end">
        <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</Link>
        <Link href="/status" className="hover:text-white transition-colors whitespace-nowrap">Status</Link>
      </div>
    </div>
  </footer>
);
