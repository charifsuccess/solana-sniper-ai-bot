"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function Commit() {
  const handleClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="commit">
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
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold w-fit"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-4 h-4" />
                Rug Pull Protection
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
                Instant Launch Domination
              </h2>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed">
                Strike first, snipe fast, and stay ahead of the competition. Detect and avoid high-risk tokens with smart safety filters.
              </p>

              {/* Features List */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {[
                  "Advanced scam detection algorithms",
                  "Real-time contract analysis",
                  "Automated risk assessment",
                  "Community-verified tokens"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

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
                <Lock className="w-5 h-5" />
                Activate Protection
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative flex items-center justify-center"
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/27be1740-70fa-4857-9031-550290582430/generated_images/professional-cryptocurrency-security-shi-ca71bc61-20251011151318.jpg"
                    alt="Rug Pull Protection"
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