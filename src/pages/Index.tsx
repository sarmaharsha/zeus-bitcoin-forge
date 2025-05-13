
import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Sidebar from '@/components/navigation/Sidebar';
import Dashboard from '@/pages/Dashboard';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar activePath={location.pathname} />
        <main className="flex-1 p-6">
          <div className="container mx-auto max-w-6xl">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
