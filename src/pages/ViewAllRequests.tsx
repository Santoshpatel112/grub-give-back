import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Clock, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/layout/Layout';
import { sampleNGOs } from '@/data/restaurants';

const ViewAllRequests = () => {
  const allRequests = sampleNGOs.flatMap(ngo => 
    ngo.activeRequests.map(request => ({
      ...request,
      ngo: ngo
    }))
  );

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-donation/10 text-donation px-4 py-2 rounded-full text-sm font-medium mb-6 border border-donation/20">
                <Users className="w-4 h-4" />
                <span>Community impact stories</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet the People <span className="text-gradient-donation">You Help</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every donation request represents real families and individuals in our community. 
                Your contribution goes directly to those who need it most.
              </p>
            </motion.div>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center bg-card/80 backdrop-blur rounded-2xl p-6 shadow-card">
                <div className="text-3xl font-bold text-donation mb-2">{allRequests.length}</div>
                <div className="text-sm text-muted-foreground">Active Requests</div>
              </div>
              <div className="text-center bg-card/80 backdrop-blur rounded-2xl p-6 shadow-card">
                <div className="text-3xl font-bold text-warning mb-2">
                  {allRequests.reduce((sum, req) => sum + req.peopleCount, 0)}
                </div>
                <div className="text-sm text-muted-foreground">People to Help</div>
              </div>
              <div className="text-center bg-card/80 backdrop-blur rounded-2xl p-6 shadow-card">
                <div className="text-3xl font-bold text-success mb-2">{sampleNGOs.length}</div>
                <div className="text-sm text-muted-foreground">Verified NGOs</div>
              </div>
              <div className="text-center bg-card/80 backdrop-blur rounded-2xl p-6 shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Goal Reached</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Requests Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allRequests.map((request, index) => {
                const raised = Math.floor(Math.random() * 800) + 200;
                const goal = Math.floor(Math.random() * 500) + 500;
                const progress = Math.min((raised / goal) * 100, 100);

                return (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden">
                      {/* Story image placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-donation/20 to-donation/5">
                        <Badge className={`absolute top-3 left-3 ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency.toUpperCase()} PRIORITY
                        </Badge>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-donation/20 flex items-center justify-center">
                            <Users className="w-10 h-10 text-donation" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Request title */}
                        <h3 className="font-bold text-lg mb-2 group-hover:text-donation transition-smooth">
                          {request.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {request.description}
                        </p>

                        {/* NGO info */}
                        <div className="flex items-center space-x-2 mb-4 p-3 bg-muted/30 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{request.ngo.name}</div>
                            <div className="text-xs text-muted-foreground">Verified NGO</div>
                          </div>
                        </div>

                        {/* Request details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>{request.peopleCount} people need help</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>Needed by {request.timeNeeded}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="line-clamp-1">{request.location.address}</span>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">${raised} of ${goal}</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        {/* Action button */}
                        <Button 
                          variant="donation" 
                          className="w-full group-hover:scale-[1.02] transition-bounce"
                        >
                          Donate to this Story
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Load more */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="px-8">
                Load More Stories
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <Target className="w-12 h-12 text-donation mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Every Story Matters</h2>
              <p className="text-muted-foreground mb-8">
                Behind every request is a real person with hopes, dreams, and dignity. 
                Your donation doesn't just provide food—it provides hope.
              </p>
              <Button variant="donation" size="lg" className="px-8">
                <Heart className="w-5 h-5 mr-2" />
                Make a General Donation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ViewAllRequests;