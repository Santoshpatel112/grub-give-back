import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { sampleNGOs } from '@/data/restaurants';

const DonationSection = () => {
  const activeRequests = sampleNGOs.flatMap(ngo => ngo.activeRequests);
  const totalPeopleHelped = activeRequests.reduce((sum, req) => sum + req.peopleCount, 0);

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-donation/10 text-donation px-4 py-2 rounded-full text-sm font-medium mb-6 border border-donation/20">
            <Sparkles className="w-4 h-4" />
            <span>Making a difference together</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-donation">Food Donation</span> Requests
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Help us connect surplus food with those who need it most. Every donation makes a meaningful impact in our community.
          </p>

          {/* Impact stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-donation mb-2">{sampleNGOs.length}</div>
              <div className="text-sm text-muted-foreground">Verified NGOs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-donation mb-2">{activeRequests.length}</div>
              <div className="text-sm text-muted-foreground">Active Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-donation mb-2">{totalPeopleHelped}</div>
              <div className="text-sm text-muted-foreground">People to Help</div>
            </div>
          </div>
        </motion.div>

        {/* Donation requests grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activeRequests.slice(0, 3).map((request, index) => {
            const ngo = sampleNGOs.find(n => n.id === request.ngoId);
            
            return (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-card hover:shadow-donation transition-smooth group cursor-pointer overflow-hidden">
                  <CardContent className="p-6">
                    {/* Urgency badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        className={`
                          ${request.urgency === 'high' ? 'bg-destructive/10 text-destructive border-destructive/20' : ''}
                          ${request.urgency === 'medium' ? 'bg-warning/10 text-warning border-warning/20' : ''}
                          ${request.urgency === 'low' ? 'bg-success/10 text-success border-success/20' : ''}
                        `}
                      >
                        {request.urgency.toUpperCase()} PRIORITY
                      </Badge>
                      
                      <div className="w-8 h-8 bg-donation/10 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-donation" />
                      </div>
                    </div>

                    {/* Request details */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-donation transition-smooth">
                      {request.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {request.description}
                    </p>

                    {/* NGO info */}
                    <div className="flex items-center space-x-2 mb-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-donation/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-donation" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{ngo?.name}</div>
                        <div className="text-xs text-muted-foreground">Verified NGO</div>
                      </div>
                    </div>

                    {/* Request metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{request.peopleCount} people</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{request.timeNeeded}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="line-clamp-1">{request.location.address}</span>
                      </div>
                    </div>

                    {/* Action button */}
                    <Button variant="donation" className="w-full group-hover:scale-[1.02] transition-bounce">
                      Help Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-card/50 backdrop-blur rounded-3xl p-8 shadow-card border border-border/50"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-muted-foreground mb-6">
              Join our community of donors and help ensure no one goes hungry. 
              Your contribution, no matter how small, creates a ripple effect of kindness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="donation" size="lg" className="px-8">
                <Heart className="w-5 h-5 mr-2" />
                Start Donating
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View All Requests
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;