"use client";

import { motion } from "framer-motion";
import { Wallet, Settings, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";
import LiquidEther from "@/components/LiquidEther";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

const steps = [
  {
    number: 1,
    icon: Wallet,
    title: "Fund your wallet",
    description: "We created a wallet for you, just transfer SOL and you're ready to go.",
    color: "from-purple-500 to-blue-500"
  },
  {
    number: 2,
    icon: Settings,
    title: "Configure settings",
    description: "Simply configure some basic parameters to configure the bot per your needs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 3,
    icon: Rocket,
    title: "Done",
    description: "Start the bot and follow the logs in real-time on the bot progress.",
    color: "from-cyan-500 to-green-500"
  },
];

export default function Process() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="process">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Settings className="w-4 h-4" />
            Easy to use • Process
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
            How it works?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Number Badge */}
                  <motion.div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Icon className="w-6 h-6 text-purple-600" />
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (not on last step) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.button
              onClick={handleClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-xl mt-6"
              style={{
                background: "linear-gradient(135deg, #7f5bc4 0%, #60a3e6 100%)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(127, 91, 196, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              Get Started Now
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 20px 60px rgba(127, 91, 196, 0.3)",
                    "0 20px 60px rgba(96, 163, 230, 0.3)",
                    "0 20px 60px rgba(127, 91, 196, 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/27be1740-70fa-4857-9031-550290582430/generated_images/professional-futuristic-solana-cryptocur-dbe1aabc-20251011152947.jpg"
                  alt="Solana Sniper Bot Interface"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}