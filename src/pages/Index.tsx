
import React from 'react';
import Header from '@/components/navigation/Header';
import Sidebar from '@/components/navigation/Sidebar';
import Dashboard from '@/pages/Dashboard';
import Strategies from '@/pages/Strategies';
import Analytics from '@/pages/Analytics';
import Learn from '@/pages/Learn';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/strategies':
        return <Strategies />;
      case '/analytics':
        return <Analytics />;
      case '/learn':
        return <Learn />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar activePath={path} />
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
