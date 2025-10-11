"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Wallet, Shield, Activity, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

interface WalletData {
  id: string;
  pnl: number;
  badge?: string;
}

// Generate daily PnL data
function generateDailyPnL(): WalletData[] {
  const today = new Date().toDateString();
  const stored = localStorage.getItem('moonx_daily_pnl');
  
  if (stored) {
    const data = JSON.parse(stored);
    if (data.date === today) {
      return data.wallets;
    }
  }

  // Generate new data for today
  const wallets: WalletData[] = [
    { id: "8Jk...F2pL", pnl: 6120, badge: "AI Verified" },
    { id: "9sL...X8pV", pnl: 3900, badge: "🟢 Active Now" },
    { id: "2kR...M4nQ", pnl: 2340 },
    { id: "7xF...T3h9", pnl: 874 },
    { id: "5pT...J7wC", pnl: 340 },
    { id: "4hN...B9xY", pnl: 154 },
  ];

  // Ensure total doesn't exceed $31,000
  const total = wallets.reduce((sum, w) => sum + w.pnl, 0);
  if (total > 31000) {
    const scale = 31000 / total;
    wallets.forEach(w => w.pnl = Math.floor(w.pnl * scale));
  }

  localStorage.setItem('moonx_daily_pnl', JSON.stringify({
    date: today,
    wallets
  }));

  return wallets;
}

export default function LiveHiddenWallets() {
  const [wallets, setWallets] = useState<WalletData[]>([]);

  useEffect(() => {
    setWallets(generateDailyPnL());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const totalPnL = wallets.reduce((sum, w) => sum + w.pnl, 0);

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0)", "0 0 0 10px rgba(34, 197, 94, 0)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Activity className="w-4 h-4" />
            Live Updates
          </motion.div>
          
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(180deg, #10b981 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Live Hidden Wallets
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Track real-time performance from verified whale wallets
          </p>

          {/* Total PnL Card */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-5 h-5" />
            <div className="text-left">
              <div className="text-xs opacity-90">Today's Total</div>
              <div className="text-2xl font-bold">
                <AnimatedCurrency value={totalPnL} duration={2000} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Wallets Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {wallets.map((wallet, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all group-hover:shadow-2xl group-hover:border-green-200 overflow-hidden">
                {/* Background gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />

                {/* Badge */}
                {wallet.badge && (
                  <motion.div
                    className="absolute -top-2 -right-2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {wallet.badge === "AI Verified" && <Shield className="w-3 h-3" />}
                    {wallet.badge === "🟢 Active Now" && <Activity className="w-3 h-3" />}
                    {wallet.badge}
                  </motion.div>
                )}

                <div className="relative z-10">
                  {/* Wallet Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Wallet className="w-6 h-6 text-green-600" />
                  </motion.div>

                  {/* Wallet ID */}
                  <div className="font-mono text-sm text-slate-500 mb-3">
                    {wallet.id}
                  </div>

                  {/* PnL */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-500">Today's P&L:</span>
                    <motion.div
                      className="text-2xl font-bold text-green-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      +<AnimatedCurrency value={wallet.pnl} duration={1500} delay={index * 100} />
                    </motion.div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(wallet.pnl / 7000) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Important Notice:</strong> Data displayed for demonstration purposes only. 
              Past performance is not indicative of future results. MoonX AI provides AI-driven 
              market insights. Trading involves risk. Illustrative data only.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Animated Currency Component
function AnimatedCurrency({ value, duration, delay = 0 }: { value: number; duration: number; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => `$${Math.round(latest).toLocaleString()}`);
  const [displayValue, setDisplayValue] = useState("$0");

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

  return <>{displayValue}</>;
}