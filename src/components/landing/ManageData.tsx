"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Activity, TrendingUp } from "lucide-react";
import Image from "next/image";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function ManageData() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  const stats = [
    { label: "Response Time", value: "<100ms", icon: Zap },
    { label: "Success Rate", value: "99.7%", icon: TrendingUp },
    { label: "Trades/Hour", value: "1000+", icon: Activity },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold w-fit"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="w-4 h-4" />
                Automation with AI
              </motion.div>

              {/* Title */}
              <h2
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  background: "linear-gradient(180deg, #7f5bc4 0%, #60a3e6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Automated Trading
              </h2>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed">
                Executes orders efficiently for you according to your configuration. Automated trading bot with artificial intelligence capabilities.
              </p>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(96, 163, 230, 0.2)" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      </motion.div>
                      <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {["Solana Sniper Bot", "Automated Trading Bot"].map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgb(243 244 246)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleClick}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-xl w-fit"
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
                Start Automating
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="relative w-full aspect-square max-w-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl" />
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 20px 60px rgba(96, 163, 230, 0.3)",
                      "0 20px 60px rgba(127, 91, 196, 0.3)",
                      "0 20px 60px rgba(96, 163, 230, 0.3)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/27be1740-70fa-4857-9031-550290582430/generated_images/futuristic-ai-powered-automated-trading--cbc4fc84-20251011151325.jpg"
                    alt="Automated Trading"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}