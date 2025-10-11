"use client";

import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import TopTraders from "@/components/landing/TopTraders";
import LiveHiddenWallets from "@/components/landing/LiveHiddenWallets";
import AccessLock from "@/components/landing/AccessLock";
import Commit from "@/components/landing/Commit";
import ManageData from "@/components/landing/ManageData";
import Throwable from "@/components/landing/Throwable";
import Process from "@/components/landing/Process";
import Compare from "@/components/landing/Compare";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

const TELEGRAM_BOT_URL = "https://t.me/MoonXAIbot";

export default function Home() {
  const handleFooterClick = () => {
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
          <Navigation />
        </header>
        
        <Hero />
        
        <main className="flex flex-col gap-16 py-16 px-4">
          <div id="features">
            <Features />
          </div>
          
          <AccessLock>
            <div className="flex flex-col gap-16">
              <TopTraders />
              <LiveHiddenWallets />
            </div>
          </AccessLock>
          
          <div id="commit">
            <Commit />
          </div>
          
          <ManageData />
          
          <div id="throwable">
            <Throwable />
          </div>
          
          <div id="process">
            <Process />
          </div>
          
          <div id="compare">
            <Compare />
          </div>
          
          <div id="faq">
            <FAQ />
          </div>
          
          <div id="cta">
            <CTA />
          </div>
        </main>

        <footer className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-xl font-bold mb-2">MoonX AI</div>
                <div className="text-sm text-slate-600">
                  © 2025 - All Rights Reserved
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm justify-center">
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  X
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Discord
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Telegram
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Docs
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Pricing
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Terms of Use
                </button>
                <button onClick={handleFooterClick} className="text-slate-600 hover:text-primary transition-colors">
                  Terms and Conditions
                </button>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-slate-300">
              <p className="text-xs text-slate-500">
                MoonX AI provides AI-driven market insights. Trading involves risk. Illustrative data only.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}