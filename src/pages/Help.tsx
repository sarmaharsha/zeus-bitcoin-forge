
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is zBTC?",
      answer: "zBTC is a tokenized version of Bitcoin that allows you to earn yield through the zYield protocol while maintaining exposure to Bitcoin's price movement."
    },
    {
      question: "How do I deposit zBTC?",
      answer: "To deposit zBTC, first connect your APOLLO wallet by clicking 'Connect Wallet' at the top of the page. Then, navigate to the Deposit page and enter the amount of zBTC you want to deposit."
    },
    {
      question: "How is the yield generated?",
      answer: "The yield is generated through various on-chain strategies including lending, liquidity provision, and automated trading strategies. All strategies are transparent and can be viewed in the Strategies section."
    },
    {
      question: "Is my deposit safe?",
      answer: "zYield employs multiple security measures including audited smart contracts, multi-sig wallets, and insurance protocols to ensure the safety of your deposits. However, as with all DeFi protocols, there are risks involved."
    },
    {
      question: "How do I withdraw my zBTC?",
      answer: "To withdraw your zBTC, navigate to the Withdraw page, enter the amount you want to withdraw, and confirm the transaction. Withdrawals are typically processed within minutes."
    }
  ];

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
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground mt-1">
          Find answers to common questions about zYield
        </p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900/50 mb-6">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-5 w-5" />
            <CardTitle>Frequently Asked Questions</CardTitle>
          </div>
          <CardDescription>
            Find answers to common questions about zYield
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Need more help? Reach out to our support team
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm">
            Our support team is available 24/7 to help with any issues or questions you may have.
          </p>
          
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="border-zinc-700 justify-start">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Documentation
            </Button>
            <Button variant="outline" className="border-zinc-700 justify-start">
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Discord Community
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin/90 justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Submit Support Ticket
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;
