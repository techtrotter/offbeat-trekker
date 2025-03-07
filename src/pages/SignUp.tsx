
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      console.log('Sign up with:', { name, email, password });
      setIsLoading(false);
      // Navigate to home page after signup
      window.location.href = '/';
    }, 1500);
  };
  
  // Password strength indicators
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== '';
  
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
                  Create your account
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Join the Offbeats community today
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-offbeats-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
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
                    
                    {/* Password strength indicators */}
                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center text-xs">
                        <div className={`flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${hasMinLength ? 'text-green-500 bg-green-100' : 'text-gray-300 bg-gray-100'}`}>
                          {hasMinLength && <Check className="h-3 w-3" />}
                        </div>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">At least 8 characters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className={`flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${hasUpperCase && hasLowerCase ? 'text-green-500 bg-green-100' : 'text-gray-300 bg-gray-100'}`}>
                          {hasUpperCase && hasLowerCase && <Check className="h-3 w-3" />}
                        </div>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">Upper & lowercase letters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className={`flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${hasNumber ? 'text-green-500 bg-green-100' : 'text-gray-300 bg-gray-100'}`}>
                          {hasNumber && <Check className="h-3 w-3" />}
                        </div>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">At least one number</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-offbeats-500 focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                    {confirmPassword && !passwordsMatch && (
                      <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-offbeats-600 hover:bg-offbeats-700 text-white py-3 rounded-lg transition-colors"
                    disabled={isLoading || !passwordsMatch}
                  >
                    {isLoading ? 'Creating account...' : 'Create account'}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-offbeats-600 hover:text-offbeats-700 dark:text-offbeats-400 dark:hover:text-offbeats-300">
                    Sign in
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

export default SignUp;
