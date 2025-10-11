"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

const faqs = [
  {
    question: "What is MoonX AI?",
    answer: "MoonX AI is a cutting-edge Solana sniper bot designed for traders who want to catch newly launched memecoins on Raydium before the crowd. Supporting tokens launched on Raydium, Meteora, PumpSwap, and those migrated from Pump.fun, our sniper executes lightning-fast trades to secure early entries before prices explode."
  },
  {
    question: "How does it work?",
    answer: "Our advanced detection system constantly scans the blockchain for new token launches, instantly placing buy orders the moment a token becomes tradable based on your exact filters. Built-in scam detection, front-run protection, and customizable trading strategies help you maximize profits while reducing risks."
  },
  {
    question: "How much does it cost?",
    answer: "We keep pricing simple and performance-focused. Free Run: Access a basic version of MoonX AI with standard filters for entry-level trading. Premium Version: Unlock advanced filters and pro-level features for maximum control and security."
  },
  {
    question: "Is MoonX AI safe?",
    answer: "We've been in business for over a year, earning trust through transparency and results. Our active Discord community of 1,500+ members allows you to verify the legitimacy of our tool and connect with real traders who use it daily. Most importantly, we never require a wallet connection - you stay in full control of your keys and assets at all times."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4" />
            5 Star Customer • Support
          </motion.div>
          
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              background: "linear-gradient(180deg, #7f5bc4 0%, #60a3e6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Need Help?
          </h2>

          {/* Floating avatar */}
          <motion.div
            className="mt-8"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-6xl">🤝</span>
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ boxShadow: "0 10px 40px rgba(127, 91, 196, 0.2)" }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-slate-600 mb-6">
            Still not convinced? Check out{" "}
            <button onClick={handleClick} className="text-purple-600 underline hover:text-purple-700">
              the bot
            </button>{" "}
            in action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}