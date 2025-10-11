"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Award } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

const comparisons = [
  { label: "No interface at all", moonx: true, others: false },
  { label: "Slow-speed Trading", moonx: false, others: true },
  { label: "Local time consuming setup", moonx: false, others: true },
  { label: "Unreliable and potential scams", moonx: false, others: true },
  { label: "Too expensive / Hidden Fees", moonx: false, others: true },
  { label: "No support", moonx: false, others: true },
];

const moonxFeatures = [
  "Friendly User Interface",
  "High-speed Trading",
  "Simple Web App",
  "100% Secure and Reliable",
  "Cheap and Transparent Pricing",
  "Full Discord Support",
];

export default function Compare() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="compare">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: ["0 0 0 0 rgba(251, 191, 36, 0)", "0 0 0 10px rgba(251, 191, 36, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className="w-4 h-4" />
            Nobody is faster • Why us?
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2
              className="text-4xl sm:text-6xl font-bold"
              style={{
                background: "linear-gradient(180deg, #7f5bc4 0%, #60a3e6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              23x Faster
            </h2>
            <motion.span
              className="text-5xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              🤘🏽
            </motion.span>
          </div>
          
          <p className="text-lg text-slate-600">
            Make your life easier by using MoonX AI
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Bots */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Other Bots
              </motion.span>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-slate-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MoonX AI */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="mb-6">
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-white font-semibold text-sm"
                  style={{
                    background: "linear-gradient(90deg, #7f5bc4 0%, #60a3e6 100%)"
                  }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ boxShadow: ["0 0 20px rgba(127, 91, 196, 0.3)", "0 0 30px rgba(96, 163, 230, 0.3)", "0 0 20px rgba(127, 91, 196, 0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MoonX AI
                </motion.span>
              </div>

              <div className="space-y-4">
                {moonxFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                    <span className="text-sm font-medium text-slate-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-slate-600 mb-6">
            Still not convinced? Check out{" "}
            <button onClick={handleClick} className="text-purple-600 underline hover:text-purple-700">
              the bot
            </button>{" "}
            in action.
          </p>

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
            See the Difference
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}