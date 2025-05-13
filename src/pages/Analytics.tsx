
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const navigate = useNavigate();
  
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
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track the performance of your zBTC yield strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle>Yield Performance</CardTitle>
              <CardDescription>Historical APY across all strategies</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for chart */}
              <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                <p className="text-zinc-500">Performance Chart</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle>TVL Growth</CardTitle>
              <CardDescription>Total value locked over time</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for chart */}
              <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                <p className="text-zinc-500">TVL Chart</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Strategy Comparison</CardTitle>
            <CardDescription>Compare performance across different strategies</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for chart */}
            <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
              <p className="text-zinc-500">Comparison Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
