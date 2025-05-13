
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bitcoin, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const Withdraw = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = React.useState('');

  const handleWithdraw = () => {
    // This would typically connect to Apollo for actual withdrawals
    toast.success('Redirecting to APOLLO for withdrawal');
    window.open('https://apollo.zeusnetwork.io', '_blank');
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
        <h1 className="text-3xl font-bold">Withdraw zBTC</h1>
        <p className="text-muted-foreground mt-1">
          Withdraw your zBTC from the yield protocol
        </p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Bitcoin className="h-5 w-5 text-bitcoin" />
            <CardTitle>Withdraw zBTC</CardTitle>
          </div>
          <CardDescription>
            Convert your zBTC back to BTC through APOLLO
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
              Available: 0.12 zBTC
            </p>
          </div>
          
          <div className="rounded-md bg-zinc-800/50 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Current Value</span>
              <span className="text-sm font-medium text-bitcoin">$4,200.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Withdrawal Fee</span>
              <span className="text-sm">0.1%</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                className="w-full bg-bitcoin hover:bg-bitcoin/90" 
                disabled={!amount || parseFloat(amount) <= 0}
              >
                <Wallet className="mr-2 h-4 w-4" />
                Withdraw with APOLLO
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-900 border-zinc-800">
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Withdrawal</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to withdraw {amount} zBTC from the zYield protocol. This will stop earning yield on this amount. Are you sure you want to proceed?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-bitcoin hover:bg-bitcoin/90" onClick={handleWithdraw}>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
          <Button 
            variant="outline" 
            className="w-full border-zinc-700" 
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Withdraw;
