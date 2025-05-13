
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, FileText, PlayCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();
  
  const resources = [
    {
      title: "Introduction to zBTC",
      description: "Learn about zBTC and how it enables Bitcoin yield on Solana",
      type: "article",
      icon: <FileText className="h-5 w-5 text-bitcoin" />,
      time: "5 min read"
    },
    {
      title: "How Yield Strategies Work",
      description: "Understand the mechanics behind different yield strategies",
      type: "video",
      icon: <PlayCircle className="h-5 w-5 text-bitcoin" />,
      time: "10 min video"
    },
    {
      title: "zYield Protocol Documentation",
      description: "Technical documentation about the zYield protocol",
      type: "doc",
      icon: <BookOpen className="h-5 w-5 text-bitcoin" />,
      time: "15 min read"
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
          <h1 className="text-3xl font-bold mb-2">Learn</h1>
          <p className="text-muted-foreground">Educational resources to help you make the most of zBTC</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border-zinc-800 bg-zinc-900/50 cursor-pointer hover:bg-zinc-900 transition-all">
              <CardHeader>
                <div className="bg-zinc-800 p-2 rounded-md w-fit mb-3">
                  {resource.icon}
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground capitalize">{resource.type}</span>
                  <span className="bg-zinc-800 px-2 py-1 rounded-full text-xs">{resource.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">What is zBTC?</h3>
              <p className="text-sm text-muted-foreground">zBTC is a wrapped version of Bitcoin on the Solana blockchain, enabling programmability and DeFi opportunities.</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">How is my yield generated?</h3>
              <p className="text-sm text-muted-foreground">Yield is generated through a variety of strategies including lending, liquidity provision, and staking.</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Is my zBTC safe?</h3>
              <p className="text-sm text-muted-foreground">zBTC is secured by smart contracts and backed 1:1 by BTC on the Bitcoin blockchain.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
