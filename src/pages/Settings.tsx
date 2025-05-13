
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings as SettingsIcon, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const [autoDeposit, setAutoDeposit] = React.useState(false);

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
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
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account preferences
        </p>
      </div>

      <Card className="border-zinc-800 bg-zinc-900/50 mb-6">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <SettingsIcon className="h-5 w-5" />
            <CardTitle>Account Settings</CardTitle>
          </div>
          <CardDescription>
            Customize your account preferences and notifications
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive updates about your deposits and yield
              </p>
            </div>
            <Switch 
              id="notifications" 
              checked={notifications} 
              onCheckedChange={setNotifications} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="darkMode">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Use dark theme for the zYield interface
              </p>
            </div>
            <Switch 
              id="darkMode" 
              checked={darkMode} 
              onCheckedChange={setDarkMode} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoDeposit">Auto Deposit</Label>
              <p className="text-sm text-muted-foreground">
                Automatically deposit new zBTC to earn yield
              </p>
            </div>
            <Switch 
              id="autoDeposit" 
              checked={autoDeposit} 
              onCheckedChange={setAutoDeposit} 
            />
          </div>
        </CardContent>
        
        <CardFooter>
          <Button onClick={handleSaveSettings} className="ml-auto">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible account actions
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            These actions cannot be undone. Be careful when making changes in this section.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="border-zinc-700">
            Disconnect Wallet
          </Button>
          <Button variant="destructive">
            Delete Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Settings;
