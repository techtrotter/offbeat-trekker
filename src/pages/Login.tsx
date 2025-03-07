
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login with:', { email, password });
      setIsLoading(false);
      // Navigate to home page after login
      window.location.href = '/';
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-md">
          <AnimatedSection variant="fade-up">
            <Link to="/" className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-offbeats-600 dark:hover:text-offbeats-400 mb-6">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Sign in to your Offbeats account
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-offbeats-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-xs text-offbeats-600 hover:text-offbeats-700 dark:text-offbeats-400 dark:hover:text-offbeats-300">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-offbeats-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-offbeats-600 hover:bg-offbeats-700 text-white py-3 rounded-lg transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <Link to="/signup" className="font-medium text-offbeats-600 hover:text-offbeats-700 dark:text-offbeats-400 dark:hover:text-offbeats-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
