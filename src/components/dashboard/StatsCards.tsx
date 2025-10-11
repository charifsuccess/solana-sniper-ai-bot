"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";

const stats = [
  {
    label: "Total Profit",
    value: "$1,234.56",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Win Rate",
    value: "68%",
    change: "+5.2%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Total Trades",
    value: "156",
    change: "+23",
    trend: "up",
    icon: Activity,
  },
  {
    label: "Avg. ROI",
    value: "24.3%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingDown,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-sm flex items-center gap-1 ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {stat.change}
              </p>
            </div>
            <div className="p-3 rounded-full bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}