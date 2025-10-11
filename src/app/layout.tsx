import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SOL Sniper - AI Trading Bot for Fast & Secure Token Sniping",
  description: "Solana Sniper is an AI-powered trading bot to snipe tokens instantly, filter scams, and automate trades on Solana with speed and security in a simple web app.",
  keywords: "solana sniper, ai trading bot, automated trading, token sniping, solana bot",
  authors: [{ name: "SOL Sniper" }],
  openGraph: {
    title: "SOL Sniper - AI Trading Bot for Fast & Secure Token Sniping",
    description: "Solana Sniper is an AI-powered trading bot to snipe tokens instantly, filter scams, and automate trades on Solana with speed and security in a simple web app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}