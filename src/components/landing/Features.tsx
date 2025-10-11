"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Lock, Cpu, RefreshCw, Server, Activity } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

const features = [
  {
    icon: Lock,
    title: "Zero Wallet Connection",
    description: "We generate secure, private wallets for all our users - so you never have to connect your personal wallet to our platform. This eliminates the risk of malicious wallet connection scams.",
    category: "standard"
  },
  {
    icon: Zap,
    title: "Real-time Sniping",
    description: "Our AI-powered engine scans the blockchain in real time to instantly detect and snipe newly launched tokens. This gives you the first-mover advantage for maximum profit potential.",
    category: "standard"
  },
  {
    icon: Shield,
    title: "Filters and Safety",
    description: "Stay protected with advanced token filters and multi-layer security checks that help you dodge scams, rug pulls, and malicious contracts before they can strike.",
    category: "standard"
  },
  {
    icon: RefreshCw,
    title: "Auto-Slippage",
    description: "Our AI-powered auto-slippage system analyzes real-time market conditions to instantly set the optimal slippage for your trade. This maximizes execution speed while minimizing losses.",
    category: "new",
    badge: "NEW"
  },
  {
    icon: Server,
    title: "Fully-Custom RPC Support",
    description: "Boost speed and reliability by connecting through your own custom RPC endpoints, giving you faster transactions and a smoother trading experience.",
    category: "new",
    badge: "NEW"
  },
  {
    icon: Activity,
    title: "Multiple DEXes Support",
    description: "We've added full Meteora, PumpSwap and Raydium support - letting you tap into deep liquidity pools and smarter trade routing to maximize gains on the hottest tokens.",
    category: "new",
    badge: "NEW"
  }
];

export default function Features() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="w-4 h-4" />
            Powerful Features
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
            Buy Faster, Profit Higher.
          </h2>
          
          <motion.button
            onClick={handleClick}
            className="mt-6 px-6 py-2 rounded-full text-sm font-semibold text-slate-700 border-2 border-purple-200 hover:border-purple-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Available to Everyone 🌍
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full transition-all group-hover:shadow-2xl group-hover:border-purple-200">
                  {/* Badge */}
                  {feature.badge && (
                    <motion.span
                      className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {feature.badge}
                    </motion.span>
                  )}

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-purple-600" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}