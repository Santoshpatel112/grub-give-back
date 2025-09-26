import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/layout/Layout';

const StartDonating = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-donation/10 text-donation px-4 py-2 rounded-full text-sm font-medium mb-6 border border-donation/20">
                <Zap className="w-4 h-4" />
                <span>Instant impact</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-donation">Give Back Today</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Your donation creates immediate impact. With just a few clicks, 
                you can provide meals to families in need right in your community.
              </p>

              {/* Quick Impact Visual */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-donation/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-donation" />
                  </div>
                  <div className="text-2xl font-bold text-donation mb-2">1 minute</div>
                  <div className="text-sm text-muted-foreground">To make a difference</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-success" />
                  </div>
                  <div className="text-2xl font-bold text-success mb-2">Instant</div>
                  <div className="text-sm text-muted-foreground">Donation processing</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warning/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-warning" />
                  </div>
                  <div className="text-2xl font-bold text-warning mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Secure & verified</div>
                </div>
              </div>
            </motion.div>

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-lg mx-auto"
            >
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2 text-gradient-donation">
                    Feed Someone in Need
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Choose your donation amount and payment method
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form className="space-y-6">
                    {/* Quick amounts */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">Quick Select</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[5, 15, 30].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant="outline"
                            className="h-12 font-semibold hover:bg-donation hover:text-donation-foreground hover:border-donation transition-smooth"
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Custom amount */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Custom Amount</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input 
                          type="number" 
                          placeholder="Enter amount"
                          className="pl-12 h-12 text-lg font-semibold shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        />
                      </div>
                    </div>

                    {/* Payment method */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Payment Method</label>
                      <Select>
                        <SelectTrigger className="h-12 shadow-card border-border/50 focus:border-donation transition-smooth">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="upi">UPI</SelectItem>
                          <SelectItem value="netbanking">Net Banking</SelectItem>
                          <SelectItem value="wallet">Digital Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Donation button */}
                    <Button 
                      variant="donation" 
                      size="xl" 
                      className="w-full text-lg py-6 shadow-donation hover:shadow-lg hover:scale-[1.02] transition-bounce"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                    </Button>

                    {/* Security note */}
                    <div className="text-center text-xs text-muted-foreground space-y-1">
                      <p>🔒 Your donation is secure and encrypted</p>
                      <p>Tax receipts will be sent to your email</p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Impact message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-8 p-6 bg-card/50 backdrop-blur rounded-2xl border border-border/50"
              >
                <Heart className="w-8 h-8 text-donation mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  "Thanks to donors like you, we served <span className="font-semibold text-donation">127 meals</span> yesterday to families in our community."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartDonating;