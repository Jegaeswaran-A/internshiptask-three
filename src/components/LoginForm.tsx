
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Lock, User, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      if (username === "admin" && password === "password") {
        toast({
          title: "Welcome back! 🎉",
          description: "Login successful! Redirecting to dashboard...",
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password. Try admin/password",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="backdrop-blur-lg bg-white/95 border-0 shadow-2xl">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-2">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Demo credentials hint */}
      <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20">
        <p className="text-sm text-gray-600 text-center">
          <strong>Demo:</strong> Username: <code className="bg-gray-100 px-2 py-1 rounded">admin</code> | Password: <code className="bg-gray-100 px-2 py-1 rounded">password</code>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
