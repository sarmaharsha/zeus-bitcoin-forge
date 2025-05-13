
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, ChartLine, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Strategies = () => {
  const navigate = useNavigate();
  
  const strategies = [
    {
      id: 1,
      name: "Bitcoin Lending",
      description: "Lend your zBTC to earn consistent passive income",
      apy: "4.8%",
      risk: "Low",
      type: "defi",
      icon: <TrendingUp className="h-5 w-5 text-bitcoin" />,
      tvl: "$2.4M"
    },
    {
      id: 2,
      name: "Liquidity Provider",
      description: "Provide liquidity to DEXes and earn trading fees",
      apy: "7.2%",
      risk: "Medium",
      type: "defi",
      icon: <ChartLine className="h-5 w-5 text-bitcoin" />,
      tvl: "$5.1M"
    },
    {
      id: 3,
      name: "Yield Farming",
      description: "Stake LP tokens to earn additional rewards",
      apy: "12.5%",
      risk: "High",
      type: "defi",
      icon: <Target className="h-5 w-5 text-bitcoin" />,
      tvl: "$3.7M"
    },
    {
      id: 4,
      name: "Staking Vault",
      description: "Earn yield through automated staking strategies",
      apy: "6.2%",
      risk: "Medium",
      type: "vault",
      icon: <ChartLine className="h-5 w-5 text-bitcoin" />,
      tvl: "$8.2M"
    },
    {
      id: 5,
      name: "Options Vault",
      description: "Generate yield through covered calls and puts",
      apy: "14.8%",
      risk: "High",
      type: "vault",
      icon: <Target className="h-5 w-5 text-bitcoin" />,
      tvl: "$1.9M"
    }
  ];

  return (
    <div className="container mx-auto max-w-6xl py-6">
      <div className="flex flex-col gap-6">
        <div>
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-4" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold mb-2">Strategies</h1>
          <p className="text-muted-foreground">Optimize your zBTC holdings with our yield strategies</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="border-b border-zinc-800 mb-6">
            <TabsList className="bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                All Strategies
              </TabsTrigger>
              <TabsTrigger value="defi" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                DeFi Strategies
              </TabsTrigger>
              <TabsTrigger value="vault" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                Yield Vaults
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.map((strategy) => (
                <Card key={strategy.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="bg-zinc-800 p-2 rounded-md">{strategy.icon}</div>
                      <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs">
                        {strategy.risk} Risk
                      </div>
                    </div>
                    <CardTitle className="mt-2">{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm border-t border-zinc-800 pt-3 mt-1">
                      <div>
                        <p className="text-muted-foreground">APY</p>
                        <p className="font-medium text-bitcoin">{strategy.apy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">TVL</p>
                        <p className="font-medium">{strategy.tvl}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="defi" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.filter(s => s.type === 'defi').map((strategy) => (
                <Card key={strategy.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="bg-zinc-800 p-2 rounded-md">{strategy.icon}</div>
                      <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs">
                        {strategy.risk} Risk
                      </div>
                    </div>
                    <CardTitle className="mt-2">{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm border-t border-zinc-800 pt-3 mt-1">
                      <div>
                        <p className="text-muted-foreground">APY</p>
                        <p className="font-medium text-bitcoin">{strategy.apy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">TVL</p>
                        <p className="font-medium">{strategy.tvl}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vault" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.filter(s => s.type === 'vault').map((strategy) => (
                <Card key={strategy.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="bg-zinc-800 p-2 rounded-md">{strategy.icon}</div>
                      <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs">
                        {strategy.risk} Risk
                      </div>
                    </div>
                    <CardTitle className="mt-2">{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm border-t border-zinc-800 pt-3 mt-1">
                      <div>
                        <p className="text-muted-foreground">APY</p>
                        <p className="font-medium text-bitcoin">{strategy.apy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">TVL</p>
                        <p className="font-medium">{strategy.tvl}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Strategies;
