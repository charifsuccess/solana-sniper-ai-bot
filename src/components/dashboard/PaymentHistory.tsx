"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, TrendingDown } from "lucide-react";

const transactions = [
  {
    id: "1",
    type: "buy",
    token: "BONK",
    amount: "1.5 SOL",
    tokens: "1,234,567",
    time: "2 min ago",
    status: "completed",
    txHash: "5Qr...",
  },
  {
    id: "2",
    type: "sell",
    token: "WIF",
    amount: "2.3 SOL",
    tokens: "456,789",
    time: "15 min ago",
    status: "completed",
    txHash: "8Ks...",
  },
  {
    id: "3",
    type: "buy",
    token: "MYRO",
    amount: "0.8 SOL",
    tokens: "98,765",
    time: "1 hour ago",
    status: "completed",
    txHash: "3Tp...",
  },
  {
    id: "4",
    type: "sell",
    token: "JITO",
    amount: "5.2 SOL",
    tokens: "234,567",
    time: "3 hours ago",
    status: "completed",
    txHash: "7Nm...",
  },
];

export default function PaymentHistory() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    tx.type === "buy"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {tx.type === "buy" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{tx.token}</span>
                    <Badge
                      variant="secondary"
                      className={
                        tx.type === "buy"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-red-500/10 text-red-500"
                      }
                    >
                      {tx.type.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tx.tokens} tokens • {tx.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-medium">{tx.amount}</div>
                  <div className="text-xs text-muted-foreground">{tx.txHash}</div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      `https://solscan.io/tx/${tx.txHash}`,
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}