
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart2, 
  BookOpen, 
  Settings, 
  HelpCircle,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => (
  <Link 
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      active 
        ? "bg-sidebar-accent text-white" 
        : "text-zinc-400 hover:text-white hover:bg-sidebar-accent/50"
    )}
  >
    {icon}
    <span>{label}</span>
    {active && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-bitcoin" />}
  </Link>
);

type SidebarProps = {
  activePath: string;
};

const Sidebar = ({ activePath }: SidebarProps) => {
  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/" },
    { icon: <TrendingUp size={18} />, label: "Strategies", href: "/strategies" },
    { icon: <BarChart2 size={18} />, label: "Analytics", href: "/analytics" },
    { icon: <BookOpen size={18} />, label: "Learn", href: "/learn" },
  ];
  
  const bottomNavItems = [
    { icon: <Settings size={18} />, label: "Settings", href: "/settings" },
    { icon: <HelpCircle size={18} />, label: "Help", href: "/help" },
  ];

  const handleLaunchApollo = () => {
    window.open('https://apollo.zeusnetwork.io', '_blank');
    toast('Opening APOLLO to mint zBTC');
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 p-4 border-r border-zinc-800 h-[calc(100vh-73px)]">
      <div className="flex-1 space-y-1 mt-6">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={item.href === activePath}
          />
        ))}
      </div>
      
      <div className="space-y-1 pt-4 border-t border-zinc-800">
        {bottomNavItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={item.href === activePath}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-zinc-800/60 to-zinc-900 border border-zinc-800">
        <h3 className="font-medium text-bitcoin mb-2">Mint zBTC</h3>
        <p className="text-xs text-zinc-400 mb-3">Convert your BTC to zBTC to start earning yield</p>
        <Button className="w-full" size="sm" onClick={handleLaunchApollo}>
          <Zap className="mr-2 h-3.5 w-3.5" />
          Launch APOLLO
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
