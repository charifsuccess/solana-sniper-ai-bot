"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Shield, TrendingUp, Activity } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

const features = [
  { icon: Zap, label: "AI-Powered Token Sniping", color: "from-yellow-400 to-orange-500" },
  { icon: Shield, label: "Rug Pull & Scam Protection", color: "from-green-400 to-emerald-500" },
  { icon: Target, label: "AI Auto-Slippage", color: "from-purple-400 to-pink-500" },
  { icon: Activity, label: "Custom RPC Support", color: "from-blue-400 to-cyan-500" },
  { icon: TrendingUp, label: "Expanded DEX Access", color: "from-indigo-400 to-blue-500" },
  { icon: Sparkles, label: "Premium Safety Filters", color: "from-rose-400 to-pink-500" },
];

export default function Throwable() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="throwable">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Custom Configuration • Unlimited
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
            What can it do for you?
          </h2>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <div
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-semibold shadow-lg cursor-move`}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span>{feature.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Like Icon */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-6xl">👍</span>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={handleClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7f5bc4 0%, #60a3e6 100%)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(127, 91, 196, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            Try All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}