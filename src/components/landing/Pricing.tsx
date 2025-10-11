"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with token sniping",
    features: [
      "5 snipes per day",
      "Basic scam detection",
      "Manual trading only",
      "Community support",
      "Standard execution speed",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious traders who need automation",
    features: [
      "Unlimited snipes",
      "Advanced AI scam filter",
      "Automated trading bots",
      "Priority support",
      "Lightning-fast execution",
      "Copy trading",
      "Custom alerts",
    ],
    cta: "Start Pro Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Maximum performance for professional traders",
    features: [
      "Everything in Pro",
      "Dedicated RPC nodes",
      "API access",
      "Custom strategies",
      "24/7 phone support",
      "Multi-wallet management",
      "Advanced analytics",
      "White-glove onboarding",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your trading style. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${
                plan.featured
                  ? "border-2 border-primary shadow-xl scale-105 relative"
                  : "border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/dashboard">
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          All plans include a 14-day money-back guarantee. No credit card required for free tier.
        </div>
      </div>
    </section>
  );
}