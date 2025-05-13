
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bitcoin, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = React.useState('');

  const handleDeposit = () => {
    // This would typically connect to Apollo for actual deposits
    // For now, just show a success message
    toast.success('Redirecting to APOLLO for deposit');
    window.open('https://apollo.zeusnetwork.io', '_blank');
  };

  const handleConnect = () => {
    window.open('https://apollo.zeusnetwork.io', '_blank');
    toast('Connecting to APOLLO wallet');
  };

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <div className="mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="mb-4" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold">Deposit zBTC</h1>
        <p className="text-muted-foreground mt-1">
          Deposit zBTC to start earning passive yield
        </p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Bitcoin className="h-5 w-5 text-bitcoin" />
            <CardTitle>Deposit zBTC</CardTitle>
          </div>
          <CardDescription>
            Convert your BTC to zBTC through APOLLO and deposit it into the zYield protocol
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (zBTC)</Label>
            <div className="relative">
              <Input
                id="amount"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-16"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                zBTC
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Balance: 0.00 zBTC
            </p>
          </div>
          
          <div className="rounded-md bg-zinc-800/50 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Estimated APY</span>
              <span className="text-sm font-medium text-bitcoin">8.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Strategy</span>
              <span className="text-sm">Automated Yield Optimizer</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-3">
          <Button 
            className="w-full bg-bitcoin hover:bg-bitcoin/90" 
            onClick={handleDeposit}
            disabled={!amount || parseFloat(amount) <= 0}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Deposit with APOLLO
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-zinc-700" 
            onClick={handleConnect}
          >
            Don't have zBTC? Mint with APOLLO
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Deposit;
