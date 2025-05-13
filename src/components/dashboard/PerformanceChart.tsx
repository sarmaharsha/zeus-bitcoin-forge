
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Jan', zBTC: 0.0015, BTC: 0.0012 },
  { name: 'Feb', zBTC: 0.0017, BTC: 0.0012 },
  { name: 'Mar', zBTC: 0.0018, BTC: 0.0013 },
  { name: 'Apr', zBTC: 0.0022, BTC: 0.0014 },
  { name: 'May', zBTC: 0.0026, BTC: 0.0016 },
  { name: 'Jun', zBTC: 0.0030, BTC: 0.0018 },
  { name: 'Jul', zBTC: 0.0035, BTC: 0.0019 },
];

type TimeRange = '1W' | '1M' | '3M' | '6M' | '1Y' | 'ALL';

const PerformanceChart = () => {
  const [selectedRange, setSelectedRange] = React.useState<TimeRange>('6M');
  
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-0 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Performance</CardTitle>
        <div className="flex gap-1">
          {(['1W', '1M', '3M', '6M', '1Y', 'ALL'] as TimeRange[]).map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              onClick={() => setSelectedRange(range)}
              className={cn(
                'h-8 px-3 text-xs font-medium', 
                selectedRange === range 
                  ? 'bg-zinc-800 text-white' 
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#999', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#999', fontSize: 12 }}
                tickFormatter={(value) => `${value} BTC`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1B1E', 
                  border: '1px solid #333',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                labelStyle={{ color: '#FFF' }}
                formatter={(value: number) => [`${value} BTC`, '']}
              />
              <Legend 
                verticalAlign="top" 
                wrapperStyle={{ paddingBottom: '20px' }}
                formatter={(value) => <span style={{ color: value === 'zBTC' ? '#F7931A' : '#00AEFF' }}>{value}</span>}
              />
              <Line 
                type="monotone" 
                dataKey="zBTC" 
                stroke="#F7931A" 
                strokeWidth={2} 
                dot={{ fill: '#F7931A', r: 4 }}
                activeDot={{ r: 6, fill: '#F7931A' }}
              />
              <Line 
                type="monotone" 
                dataKey="BTC" 
                stroke="#00AEFF" 
                strokeWidth={2} 
                dot={{ fill: '#00AEFF', r: 4 }}
                activeDot={{ r: 6, fill: '#00AEFF' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
