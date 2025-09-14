"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine active link
  const pathname = usePathname();

  const navLinks = [
    { title: "Product", href: "/" },
    { title: "Solutions", href: "/solutions" },
    { title: "About Us", href: "/about" },
    { title: "Docs", href: "/docs" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="font-extrabold tracking-tight text-xl">GoShield</div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`transition-colors ${pathname === link.href ? 'text-white font-semibold' : 'hover:text-white'}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 transition"
          >
            Request a Demo
          </motion.button>
          <div className="md:hidden">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && <MobileNav navLinks={navLinks} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

const HamburgerButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const lineVariants = {
    closed: { rotate: 0, y: 0, backgroundColor: "rgb(203 213 225)" },
    open: { backgroundColor: "rgb(255 255 255)" },
  };
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="relative h-8 w-8 z-50"
      animate={isOpen ? "open" : "closed"}
      aria-label="Toggle navigation menu"
    >
      <motion.span
        variants={{ ...lineVariants, open: { ...lineVariants.open, rotate: 45, y: 4 } }}
        className="absolute h-0.5 w-6 bg-slate-300"
        style={{ top: "35%" }}
      />
      <motion.span
        variants={{ ...lineVariants, open: { ...lineVariants.open, rotate: -45, y: -4 } }}
        className="absolute h-0.5 w-6 bg-slate-300"
        style={{ bottom: "35%" }}
      />
    </motion.button>
  );
};

const MobileNav = ({ navLinks, setIsOpen }: { navLinks: { title: string, href: string }[]; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const linkContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-40 p-6"
    >
      <motion.nav
        variants={linkContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center h-full gap-8"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.title}
            variants={linkVariants}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href={link.href}
              className="text-2xl text-slate-300 hover:text-white transition-colors"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
        <motion.button
          variants={linkVariants}
          className="mt-4 rounded-lg px-6 py-3 bg-indigo-600 text-white font-medium"
        >
          Request a Demo
        </motion.button>
      </motion.nav>
    </motion.div>
  );
};
