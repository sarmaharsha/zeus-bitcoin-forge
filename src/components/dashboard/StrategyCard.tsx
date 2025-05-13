
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface StrategyCardProps {
  title: string;
  provider: string;
  apy: string;
  risk: 'Low' | 'Medium' | 'High';
  tvl: string;
  description: string;
  capacityUsed: number;
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  provider,
  apy,
  risk,
  tvl,
  description,
  capacityUsed
}) => {
  const getRiskColor = () => {
    switch(risk) {
      case 'Low': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-green-500';
    }
  };

  return (
    <Card className="overflow-hidden hover:border-bitcoin/30 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm mt-0.5">by {provider}</CardDescription>
          </div>
          <div className="bg-bitcoin/10 text-bitcoin rounded-full px-3 py-1 text-sm font-medium">
            {apy} APY
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-zinc-800/50 rounded-lg">
            <p className="text-xs text-zinc-400 mb-1">TVL</p>
            <p className="font-medium">{tvl}</p>
          </div>
          <div className="text-center p-2 bg-zinc-800/50 rounded-lg">
            <p className="text-xs text-zinc-400 mb-1">Risk</p>
            <p className={`font-medium ${getRiskColor()}`}>{risk}</p>
          </div>
          <div className="text-center p-2 bg-zinc-800/50 rounded-lg">
            <p className="text-xs text-zinc-400 mb-1">Protocol</p>
            <p className="font-medium">Solana</p>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-400">Capacity</span>
            <span className="text-xs font-medium">{capacityUsed}%</span>
          </div>
          <Progress value={capacityUsed} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <div className="flex gap-1 items-center text-zinc-400 text-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>Audited</span>
        </div>
        <Button size="sm" className="gap-1">
          <span>Deposit</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StrategyCard;
