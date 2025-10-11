import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WalletConnection from "@/components/dashboard/WalletConnection";
import TradingInterface from "@/components/dashboard/TradingInterface";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import PaymentHistory from "@/components/dashboard/PaymentHistory";
import StatsCards from "@/components/dashboard/StatsCards";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Stats Overview */}
          <StatsCards />

          {/* Main Trading Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trading Interface - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <TradingInterface />
              <PortfolioChart />
            </div>

            {/* Sidebar - Takes 1 column */}
            <div className="space-y-6">
              <WalletConnection />
              <PaymentHistory />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}