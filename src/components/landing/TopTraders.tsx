"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingUp, Award, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

interface Trader {
  id: string;
  walletId: string;
  trades: number;
  pnl: string;
  winRate: string;
  badge?: string;
}

const traders: Trader[] = [
  { id: "1", walletId: "7xF...T3h9", trades: 47, pnl: "+$6,120", winRate: "89%" },
  { id: "2", walletId: "9sL...X8pV", trades: 32, pnl: "+$3,900", winRate: "76%" },
  { id: "3", walletId: "2kR...M4nQ", trades: 28, pnl: "+$2,340", winRate: "82%", badge: "AI Verified" },
  { id: "4", walletId: "5pT...J7wC", trades: 19, pnl: "+$874", winRate: "68%" },
  { id: "5", walletId: "8Jk...F2pL", trades: 15, pnl: "+$340", winRate: "71%", badge: "🟢 Active Now" },
  { id: "6", walletId: "4hN...B9xY", trades: 12, pnl: "+$154", winRate: "64%" },
];

export default function TopTraders() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4" />
            Live Performance
          </motion.div>
          
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(180deg, #7f5bc4 0%, #60a3e6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Top Traders Today
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-time analytics from our most successful traders
          </p>
        </motion.div>

        {/* Traders Table */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
            <div className="text-sm font-semibold text-slate-700">Trader</div>
            <div className="text-sm font-semibold text-slate-700 text-center">Trades</div>
            <div className="text-sm font-semibold text-slate-700 text-center">P&L</div>
            <div className="text-sm font-semibold text-slate-700 text-center">Win Rate</div>
          </div>

          {/* Table Rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {traders.map((trader, index) => (
              <motion.div
                key={index}
                variants={rowVariants}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-purple-50/30 transition-all cursor-pointer relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ x: 4 }}
              >
                {/* Rank & Wallet */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <div className="font-mono text-sm text-slate-800 font-semibold">
                      {trader.walletId}
                    </div>
                    {trader.badge && (
                      <motion.div
                        className="flex items-center gap-1 text-xs text-purple-600 mt-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {trader.badge === "AI Verified" && <Award className="w-3 h-3" />}
                        {trader.badge === "🟢 Active Now" && <Activity className="w-3 h-3" />}
                        {trader.badge}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Trades */}
                <div className="flex items-center justify-center">
                  <AnimatedNumber value={trader.trades} duration={1000} delay={index * 100} />
                </div>

                {/* P&L */}
                <div className="flex items-center justify-center">
                  <motion.span
                    className="font-semibold text-green-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    +${trader.pnl.toLocaleString()}
                  </motion.span>
                </div>

                {/* Win Rate */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <AnimatedPercentage value={trader.winRate} duration={1200} delay={index * 100} />
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: trader.winRate / 100 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                    />
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -top-12 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                  >
                    Connect to view live analytics
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-xs text-slate-500 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Data displayed for demonstration purposes only. Past performance is not indicative of future results.
        </motion.p>
      </div>
    </section>
  );
}

// Animated Number Component
function AnimatedNumber({ value, duration, delay }: { value: number; duration: number; delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(count, value, { duration: duration / 1000 });
      return controls.stop;
    }, delay);
    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return <span className="font-semibold text-slate-800">{displayValue}</span>;
}

// Animated Percentage Component
function AnimatedPercentage({ value, duration, delay }: { value: number; duration: number; delay: number }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const controls = animate(count, value, { duration: duration / 1000 });
      return controls.stop;
    }, delay);
    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [count]);

  return <span className="font-semibold text-slate-800">{displayValue}%</span>;
}