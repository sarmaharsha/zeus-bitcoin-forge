
import React from 'react';
import { Coins, TrendingUp, LineChart, Wallet } from 'lucide-react';

import StatsCard from '@/components/ui/stats-card';
import StrategyCard from '@/components/dashboard/StrategyCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const strategies = [
    {
      title: 'Liquid Staking',
      provider: 'Marinade',
      apy: '5.1%',
      risk: 'Low' as const,
      tvl: '562.4 zBTC',
      description: 'Earn yield from Solana validator rewards while maintaining liquidity',
      capacityUsed: 78
    },
    {
      title: 'zBTC-USDC LP',
      provider: 'Raydium',
      apy: '9.8%',
      risk: 'Medium' as const,
      tvl: '187.2 zBTC',
      description: 'Provide liquidity to zBTC-USDC pool and earn trading fees',
      capacityUsed: 45
    },
    {
      title: 'Automated Vault',
      provider: 'Kamino',
      apy: '12.3%',
      risk: 'Medium' as const,
      tvl: '95.1 zBTC',
      description: 'Automated yield strategies with auto-compounding returns',
      capacityUsed: 32
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to zYield, your Bitcoin yield optimizer
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-bitcoin hover:bg-bitcoin/90 text-white">
            Deposit zBTC
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Value Locked"
          value="845.3 zBTC"
          description="≈ $44,156,240"
          icon={<Coins className="h-4 w-4" />}
          trend={{ value: 5.2, positive: true }}
        />
        <StatsCard
          title="Your Balance"
          value="0.00 zBTC"
          description="Deposit to start earning"
          icon={<Wallet className="h-4 w-4" />}
        />
        <StatsCard
          title="Average APY"
          value="8.7%"
          description="Across all strategies"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 0.5, positive: true }}
        />
        <StatsCard
          title="Active Strategies"
          value="3"
          description="Discover more options"
          icon={<LineChart className="h-4 w-4" />}
        />
      </div>

      <PerformanceChart />

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Top Strategies</h2>
          <Button variant="outline" size="sm">View all</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((strategy, index) => (
            <StrategyCard key={index} {...strategy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
