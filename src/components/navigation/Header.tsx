
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Wallet, Lightning, Zap, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="border-b border-zinc-800 py-4 px-6">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightning className="h-8 w-8 text-bitcoin" />
          <span className="text-2xl font-bold font-montserrat">
            <span className="text-bitcoin">z</span>
            <span className="text-white">Yield</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-800 transition-colors">
            Dashboard
          </Link>
          <Link to="/strategies" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-800 transition-colors">
            Strategies
          </Link>
          <Link to="/analytics" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-800 transition-colors">
            Analytics
          </Link>
          <Link to="/learn" className="px-3 py-2 text-sm rounded-md hover:bg-zinc-800 transition-colors">
            Learn
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button className="bg-zinc-800 hover:bg-zinc-700">
            <Zap className="mr-2 h-4 w-4 text-bitcoin" />
            Connect Wallet
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-zinc-700">
                <Wallet className="mr-2 h-4 w-4 text-zinc-400" />
                <span className="hidden sm:inline">0.00 zBTC</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link to="/deposit" className="flex items-center w-full">Deposit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/withdraw" className="flex items-center w-full">Withdraw</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
