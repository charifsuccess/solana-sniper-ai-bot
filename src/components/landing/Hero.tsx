"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  const stats = [
    { label: "Active Traders", value: "10K+", icon: TrendingUp },
    { label: "Trading Volume", value: "$50M+", icon: Zap },
    { label: "Win Rate", value: "94%", icon: Shield }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/27be1740-70fa-4857-9031-550290582430/generated_videos/ultra-professional-cryptocurrency-tradin-3a492248-20251011152214.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
      </div>

      {/* Mouse-Following Background Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-400/25 rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${100 - mousePosition.x}%`,
          top: `${100 - mousePosition.y}%`,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-pink-400/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${mousePosition.x * 0.5}%`,
          top: `${mousePosition.y * 0.8}%`,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ type: "spring", damping: 35, stiffness: 180 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>

            <Zap className="w-4 h-4 text-purple-600" />
          </motion.div>
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI-Powered Trading Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">

          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent !w-[63%] !h-[157px]">
            AI Memecoin Trading
          </span>
          <br />
          <span className="text-slate-800 !w-[1079px] !h-[186px]">
            Begin your Automated Memecoin{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sniping Journey
            </span>{" "}
            Today
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Powered by High-Speed AI • Lightning-Fast Execution • Smart Contract Analysis
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <motion.button
            onClick={handleClick}
            className="group px-8 py-4 rounded-full font-semibold text-white text-lg flex items-center gap-3 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7f5bc4 0%, #60a3e6 100%)"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
              "0 10px 40px rgba(127, 91, 196, 0.3)",
              "0 10px 60px rgba(127, 91, 196, 0.5)",
              "0 10px 40px rgba(127, 91, 196, 0.3)"]

            }}
            transition={{ duration: 2, repeat: Infinity }}>

            Launch MoonX AI
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}>

              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>

                <Icon className="w-8 h-8 text-purple-600 mb-3" />
                <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}