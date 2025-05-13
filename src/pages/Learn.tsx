
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BookOpen, Info, Lightbulb, Library } from 'lucide-react';

const Learn = () => {
  const guides = [
    {
      id: 1,
      title: "Introduction to zBTC",
      description: "Learn the basics of zBTC and how it works on Solana",
      category: "basics",
      icon: <Info className="h-5 w-5" />,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Getting Started with zYield",
      description: "A beginner's guide to earning yield with your Bitcoin",
      category: "basics",
      icon: <Lightbulb className="h-5 w-5" />,
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Understanding Strategy Risks",
      description: "Learn about different risk levels and how to assess them",
      category: "basics",
      icon: <Info className="h-5 w-5" />,
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Advanced DeFi Strategies",
      description: "Explore complex yield farming strategies for experienced users",
      category: "advanced",
      icon: <Library className="h-5 w-5" />,
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Options Vaults Explained",
      description: "Deep dive into options vaults and how they generate returns",
      category: "advanced",
      icon: <Library className="h-5 w-5" />,
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Tax Implications of Yield",
      description: "Understanding how yield is taxed across jurisdictions",
      category: "advanced",
      icon: <Info className="h-5 w-5" />,
      readTime: "15 min read"
    }
  ];

  return (
    <div className="container mx-auto max-w-6xl py-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learn</h1>
          <p className="text-muted-foreground">Educational resources to help you navigate the world of Bitcoin yield</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 w-full h-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-bitcoin" />
                </div>
              </AspectRatio>
              <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs">
                Featured
              </div>
            </div>
            <CardHeader>
              <CardTitle>What is zBTC and How Does It Work?</CardTitle>
              <CardDescription>Learn everything you need to know about using Bitcoin on Solana</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This comprehensive guide explains how Bitcoin can be used on Solana through zBTC, 
                the benefits of faster transactions, and the security measures in place.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-bitcoin">Read Guide</span>
                <span className="text-zinc-500">10 min read</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 w-full h-full flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-bitcoin" />
                </div>
              </AspectRatio>
              <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs">
                Featured
              </div>
            </div>
            <CardHeader>
              <CardTitle>Maximizing Your Yield with zBTC</CardTitle>
              <CardDescription>Strategies to optimize your Bitcoin's earning potential</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Discover how to maximize returns on your Bitcoin by leveraging different yield strategies
                on Solana, with comparisons and risk assessments for each option.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-bitcoin">Read Guide</span>
                <span className="text-zinc-500">12 min read</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="border-b border-zinc-800 mb-6">
            <TabsList className="bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                All Guides
              </TabsTrigger>
              <TabsTrigger value="basics" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                Basics
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-bitcoin rounded-none">
                Advanced
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Card key={guide.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="bg-zinc-800 p-2 rounded-md inline-block mb-3">
                      {guide.icon}
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm pt-3 mt-1">
                      <span className="text-bitcoin">Read more</span>
                      <span className="text-zinc-500">{guide.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="basics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.filter(g => g.category === 'basics').map((guide) => (
                <Card key={guide.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="bg-zinc-800 p-2 rounded-md inline-block mb-3">
                      {guide.icon}
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm pt-3 mt-1">
                      <span className="text-bitcoin">Read more</span>
                      <span className="text-zinc-500">{guide.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.filter(g => g.category === 'advanced').map((guide) => (
                <Card key={guide.id} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="bg-zinc-800 p-2 rounded-md inline-block mb-3">
                      {guide.icon}
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm pt-3 mt-1">
                      <span className="text-bitcoin">Read more</span>
                      <span className="text-zinc-500">{guide.readTime}</span>
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

export default Learn;
