"use client";

import { useState, useEffect } from "react";
import { Lock, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

interface AccessLockProps {
  children: React.ReactNode;
}

export const AccessLock: React.FC<AccessLockProps> = ({ children }) => {
  const [isLocked] = useState(true);

  const handleLaunchBot = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative">
      {/* Blurred Content - Always visible */}
      <motion.div 
        className="blur-md pointer-events-none select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>

      {/* Lock Overlay - Always on top */}
      <AnimatePresence>
        {isLocked && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-sm rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-2xl mx-auto text-center px-6 py-12 space-y-8">
              {/* Lock Icon */}
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1
                }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 
                  className="text-4xl md:text-5xl font-bold"
                  style={{
                    background: "linear-gradient(180deg, #7f5bc4 0%, #60a3e6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Professional Analytics
                </h3>
                <p className="text-xl font-semibold text-gray-800">
                  Member Access Required
                </p>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Connect to the official MoonX AI Bot to view real-time data and trader performance.
                </p>
              </motion.div>

              {/* Single CTA - Launch Button */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={handleLaunchBot}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #7f5bc4 0%, #60a3e6 100%)"
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(127, 91, 196, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-6 h-6" />
                  Launch MoonX AI
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                className="pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs text-slate-500">
                  🔒 Secure authentication • 100% private • No wallet connection required
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessLock;