
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/ui/chart";
import { Line, Bar, LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { BarChart2, TrendingUp } from 'lucide-react';

const Analytics = () => {
  // Sample data for charts
  const performanceData = [
    { month: 'Jan', yield: 2.4, benchmark: 1.2 },
    { month: 'Feb', yield: 3.1, benchmark: 1.3 },
    { month: 'Mar', yield: 2.9, benchmark: 1.4 },
    { month: 'Apr', yield: 3.8, benchmark: 1.6 },
    { month: 'May', yield: 4.2, benchmark: 1.8 },
    { month: 'Jun', yield: 4.6, benchmark: 2.0 },
    { month: 'Jul', yield: 5.1, benchmark: 2.1 },
    { month: 'Aug', yield: 4.9, benchmark: 2.2 },
    { month: 'Sep', yield: 5.3, benchmark: 2.3 },
    { month: 'Oct', yield: 5.8, benchmark: 2.5 },
    { month: 'Nov', yield: 6.2, benchmark: 2.6 },
    { month: 'Dec', yield: 6.7, benchmark: 2.8 },
  ];

  const strategyAllocationData = [
    { name: 'Lending', value: 40, fill: '#F97316' },
    { name: 'Liquidity', value: 25, fill: '#8B5CF6' },
    { name: 'Yield Farming', value: 20, fill: '#0EA5E9' },
    { name: 'Options Vaults', value: 15, fill: '#10B981' },
  ];

  const chartConfig = {
    yield: {
      color: "#F97316",
      label: "zYield"
    },
    benchmark: {
      color: "#6B7280",
      label: "BTC Avg."
    },
  };

  return (
    <div className="container mx-auto max-w-6xl py-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track performance metrics and insights for all strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">$21,394,238</p>
                <p className="text-xs text-green-500">+5.3% from last week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">Average APY</CardTitle>
                <TrendingUp className="h-4 w-4 text-bitcoin" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">6.7%</p>
                <p className="text-xs text-bitcoin">+0.4% from last week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <p className="text-2xl font-bold">3,127</p>
                <p className="text-xs text-green-500">+12.8% from last week</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="yield" className="w-full">
          <div className="border-b border-zinc-800 mb-6">
            <TabsList className="bg-transparent">
              <TabsTrigger value="yield" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                Yield Performance
              </TabsTrigger>
              <TabsTrigger value="allocation" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                Asset Allocation
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="yield" className="mt-0">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader>
                <CardTitle>Annual Yield Performance</CardTitle>
                <CardDescription>Comparing zYield performance vs Bitcoin average returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ChartContainer config={chartConfig}>
                    <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" tick={{ fill: "#999" }} />
                      <YAxis tick={{ fill: "#999" }} />
                      <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #333" }} />
                      <Legend />
                      <Line type="monotone" dataKey="yield" name="zYield APY" stroke="#F97316" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="benchmark" name="BTC Average" stroke="#6B7280" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="mt-0">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader>
                <CardTitle>Strategy Allocation</CardTitle>
                <CardDescription>Distribution of funds across different strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={strategyAllocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" tick={{ fill: "#999" }} />
                      <YAxis tick={{ fill: "#999" }} />
                      <Tooltip contentStyle={{ backgroundColor: "#222", border: "1px solid #333" }} />
                      <Legend />
                      <Bar dataKey="value" name="Allocation %" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
