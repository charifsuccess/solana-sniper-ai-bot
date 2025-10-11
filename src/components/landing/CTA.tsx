"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function CTA() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="cta">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 p-12 md:p-16 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              >
                <Sparkles className="w-4 h-4" />
                Limited Time Offer
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to get started?
              </h2>

              <p className="text-xl text-white/90 leading-relaxed">
                Start sniping mooners today. Let's get you some profitable tokens early on before they moon!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { value: "1,500+", label: "Active Traders" },
                  { value: "$2.4M+", label: "Volume Traded" },
                  { value: "99.9%", label: "Uptime" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right CTA */}
            <motion.div
              className="flex flex-col items-center md:items-end justify-center space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={handleClick}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-purple-600 bg-white shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Start Sniping
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.p
                className="text-sm text-white/80 text-center md:text-right max-w-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Join 1,500+ traders already using MoonX AI to dominate the market
              </motion.p>

              {/* Trust badges */}
              <div className="flex items-center gap-4 text-white/60 text-xs">
                <div className="flex items-center gap-1">
                  <span>🔒</span>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚡</span>
                  <span>Fast Setup</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>✓</span>
                  <span>No KYC</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}