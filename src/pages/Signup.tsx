import { motion } from 'framer-motion';
import { Heart, Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const Signup = () => {
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show a message about Supabase integration
    alert('To enable signup functionality, please connect your project to Supabase using the green button in the top-right corner of the interface.');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-donation rounded-2xl mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Join Our Community</h1>
              <p className="text-muted-foreground">
                Create an account and start making a difference today
              </p>
            </div>

            {/* Signup Form */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Create Account</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        type="text" 
                        placeholder="Enter your full name"
                        className="pl-10 shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-10 shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        required
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        type="password" 
                        placeholder="Create a password"
                        className="pl-10 shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        required
                      />
                    </div>
                  </div>

                  {/* Confirm password field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        type="password" 
                        placeholder="Confirm your password"
                        className="pl-10 shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {/* Sign up button */}
                  <Button 
                    type="submit"
                    variant="donation" 
                    size="lg" 
                    className="w-full"
                  >
                    Create Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                {/* Divider */}
                <div className="my-6">
                  <Separator />
                  <div className="text-center text-sm text-muted-foreground -mt-3 bg-background px-3">
                    or continue with
                  </div>
                </div>

                {/* Social signup */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => alert('Social signup requires Supabase integration')}
                  >
                    <Chrome className="w-4 h-4 mr-2" />
                    Continue with Google
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => alert('Social signup requires Supabase integration')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Continue with GitHub
                  </Button>
                </div>

                {/* Sign in link */}
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link 
                      to="/login" 
                      className="text-donation hover:underline font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Info message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-6 p-4 bg-donation/10 border border-donation/20 rounded-lg"
            >
              <p className="text-sm text-donation">
                <strong>Demo Note:</strong> To enable user registration, connect your project to Supabase 
                using the integration in the top-right corner.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;