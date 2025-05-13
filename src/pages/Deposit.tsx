
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bitcoin, Wallet, ExternalLink, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleDeposit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Redirecting to APOLLO for deposit');
      window.open('https://apollo.zeusnetwork.io', '_blank');
    }, 1000);
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
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
                <div className="flex justify-between">
                  <p className="text-xs text-muted-foreground">
                    Balance: 0.00 zBTC
                  </p>
                  <button 
                    className="text-xs text-bitcoin hover:underline" 
                    onClick={() => setAmount('0.05')}
                  >
                    Max
                  </button>
                </div>
              </div>
              
              <div className="rounded-md bg-zinc-800/50 p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">Estimated APY</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Annual Percentage Yield based on current market conditions. Actual returns may vary.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="text-sm font-medium text-bitcoin">8.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">Strategy</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Our algorithm automatically allocates your zBTC to the highest yielding strategies.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="text-sm">Automated Yield Optimizer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Deposit Fee</span>
                  <span className="text-sm">0.00%</span>
                </div>
                {amount && parseFloat(amount) > 0 && (
                  <div className="pt-2 border-t border-zinc-700 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Estimated Monthly Yield</span>
                      <span className="text-sm font-medium text-bitcoin">
                        {(parseFloat(amount) * 0.087 / 12).toFixed(5)} zBTC
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-3">
              <Button 
                className="w-full bg-bitcoin hover:bg-bitcoin/90" 
                onClick={handleDeposit}
                disabled={!amount || parseFloat(amount) <= 0 || loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Wallet className="mr-2 h-4 w-4" />
                    Deposit with APOLLO
                  </>
                )}
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

        <div className="md:col-span-1">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-base">Deposit Guide</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">1</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Convert BTC to zBTC</p>
                  <p className="text-xs text-muted-foreground">
                    Use APOLLO to convert your BTC to zBTC
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">2</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Enter deposit amount</p>
                  <p className="text-xs text-muted-foreground">
                    Specify how much zBTC you want to deposit
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">3</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Confirm transaction</p>
                  <p className="text-xs text-muted-foreground">
                    Approve the deposit in your APOLLO wallet
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-zinc-700 mt-4" size="sm">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                View Documentation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
