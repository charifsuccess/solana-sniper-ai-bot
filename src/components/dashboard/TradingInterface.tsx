"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowDownUp, TrendingUp, TrendingDown } from "lucide-react";

export default function TradingInterface() {
  const [amount, setAmount] = useState("1.0");
  const [slippage, setSlippage] = useState([1]);
  const [autoApprove, setAutoApprove] = useState(false);

  return (
    <Card className="p-6">
      <Tabs defaultValue="snipe" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="snipe">Snipe</TabsTrigger>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="snipe" className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="token">Token Address</Label>
            <Input
              id="token"
              placeholder="Enter token address..."
              className="font-mono"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (SOL)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
            />
            <div className="flex gap-2">
              {["0.1", "0.5", "1.0", "5.0"].map((val) => (
                <Button
                  key={val}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(val)}
                  className="flex-1"
                >
                  {val}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Slippage: {slippage[0]}%</Label>
            </div>
            <Slider
              value={slippage}
              onValueChange={setSlippage}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Approve</Label>
                <p className="text-xs text-muted-foreground">
                  Automatically approve transactions
                </p>
              </div>
              <Switch checked={autoApprove} onCheckedChange={setAutoApprove} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Snipe Mode</Label>
                <p className="text-xs text-muted-foreground">
                  Execute trade instantly on launch
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Gas Fee</span>
              <span className="font-medium">~0.0001 SOL</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Expected Output</span>
              <span className="font-medium">~1,234 tokens</span>
            </div>
          </div>

          <Button className="w-full" size="lg">
            <TrendingUp className="h-5 w-5 mr-2" />
            Snipe Token
          </Button>
        </TabsContent>

        <TabsContent value="buy" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>From</Label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0.0" className="flex-1" />
                <Button variant="outline" size="sm">
                  SOL
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="p-2 rounded-full border bg-background">
                <ArrowDownUp className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>To (estimated)</Label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="0.0" className="flex-1" />
                <Button variant="outline" size="sm">
                  TOKEN
                </Button>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Buy Token
          </Button>
        </TabsContent>

        <TabsContent value="sell" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Sell Amount</Label>
              <Input type="number" placeholder="0.0" />
              <div className="flex gap-2">
                {["25%", "50%", "75%", "100%"].map((val) => (
                  <Button key={val} variant="outline" size="sm" className="flex-1">
                    {val}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">You'll receive</span>
                <span className="font-medium">~2.5 SOL</span>
              </div>
            </div>
          </div>

          <Button variant="destructive" className="w-full" size="lg">
            <TrendingDown className="h-5 w-5 mr-2" />
            Sell Token
          </Button>
        </TabsContent>
      </Tabs>
    </Card>
  );
}