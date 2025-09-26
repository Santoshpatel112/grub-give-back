import { motion } from 'framer-motion';
import { Heart, Users, Home, Globe, DollarSign, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const MakeDonation = () => {
  const donationAmounts = [
    { amount: 5, description: 'Provides one meal' },
    { amount: 10, description: 'Feeds a child for a day' },
    { amount: 25, description: 'Feeds a family of four' },
    { amount: 50, description: 'Provides a week of meals' }
  ];

  const impactStats = [
    { icon: Users, number: '1,200', label: 'Meals Provided', color: 'text-donation' },
    { icon: Home, number: '350', label: 'Families Served', color: 'text-success' },
    { icon: Globe, number: '25', label: 'Communities Supported', color: 'text-warning' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-warm">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-donation/10 text-donation px-4 py-2 rounded-full text-sm font-medium mb-6 border border-donation/20">
                <Heart className="w-4 h-4" />
                <span>Your kindness matters</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-donation">Nourish a Neighbor</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every contribution creates a ripple effect of kindness. Join our community of changemakers 
                and help ensure no one in our community goes hungry tonight.
              </p>
            </motion.div>

            {/* Impact Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            >
              {impactStats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Choose Your Impact</CardTitle>
                  <p className="text-muted-foreground">Select an amount or enter a custom donation</p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Preset amounts */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {donationAmounts.map((option, index) => (
                      <motion.div
                        key={option.amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card className="cursor-pointer hover:shadow-donation transition-smooth hover:border-donation/30 group">
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-donation mb-2">
                              ${option.amount}
                            </div>
                            <div className="text-xs text-muted-foreground group-hover:text-donation transition-smooth">
                              {option.description}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Custom Amount</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          type="number" 
                          placeholder="Enter amount"
                          className="pl-10 text-lg font-semibold shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                        />
                      </div>
                    </div>

                    {/* Donation frequency */}
                    <div className="flex space-x-4">
                      <Badge variant="outline" className="cursor-pointer hover:bg-donation hover:text-donation-foreground transition-smooth">
                        One-time
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-donation hover:text-donation-foreground transition-smooth">
                        Monthly
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-donation hover:text-donation-foreground transition-smooth">
                        Weekly
                      </Badge>
                    </div>

                    {/* Donation button */}
                    <Button variant="donation" size="lg" className="w-full text-lg py-6">
                      <Gift className="w-5 h-5 mr-2" />
                      Donate Now
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your donation is secure and helps feed families in your community
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MakeDonation;