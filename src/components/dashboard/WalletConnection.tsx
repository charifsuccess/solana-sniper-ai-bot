"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, Copy, ExternalLink, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WalletConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [copied, setCopied] = useState(false);
  const walletAddress = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU";
  const balance = "12.45";

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isConnected) {
    return (
      <Card className="p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="p-4 rounded-full bg-primary/10">
            <Wallet className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground">
              Connect your Solana wallet to start trading
            </p>
          </div>
          <Button onClick={handleConnect} className="w-full max-w-xs">
            Connect Wallet
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Supported:</span>
            <Badge variant="outline">Phantom</Badge>
            <Badge variant="outline">Solflare</Badge>
            <Badge variant="outline">Backpack</Badge>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-green-500/10">
              <Wallet className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Wallet Connected</div>
              <div className="text-xs text-muted-foreground">Phantom</div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-500/10 text-green-500">
            Connected
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Address</div>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-sm font-mono bg-muted px-3 py-2 rounded">
              {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={() =>
                window.open(`https://solscan.io/account/${walletAddress}`, "_blank")
              }
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="text-sm text-muted-foreground">Balance</div>
          <div className="text-2xl font-bold">{balance} SOL</div>
        </div>

        <Button
          variant="destructive"
          className="w-full"
          onClick={handleConnect}
        >
          Disconnect
        </Button>
      </div>
    </Card>
  );
}