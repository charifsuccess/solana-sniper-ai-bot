"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Features", id: "features" },
    { label: "Benefits", id: "commit", badge: "New" },
    { label: "Use Cases", id: "throwable" },
    { label: "Advantages", id: "compare" },
    { label: "Start", id: "cta" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-8 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-bold text-xl">M</span>
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            MoonX AI
          </span>
        </motion.a>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-slate-700 hover:text-purple-600 font-medium transition-colors group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              {link.badge && (
                <motion.span
                  className="absolute -top-2 -right-6 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {link.badge}
                </motion.span>
              )}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden flex items-center justify-between px-4 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            MoonX AI
          </span>
        </motion.a>

        {/* Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200 px-4 py-6 space-y-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-slate-700 hover:text-purple-600 font-medium py-2 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
              {link.badge && (
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500">
                  {link.badge}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  );
}