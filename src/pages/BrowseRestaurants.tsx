import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { sampleRestaurants } from '@/data/restaurants';

const BrowseRestaurants = () => {
  const cuisineFilters = ['All', 'North Indian', 'Continental', 'Street Food', 'Healthy', 'Vegetarian'];
  const otherFilters = ['Rating 4+', 'Fast Delivery', 'Donation Partner', 'Budget Friendly'];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-12 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Local Restaurants, <span className="text-gradient-primary">Global Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover amazing food while supporting your community. Every order from our donation partners helps feed families in need.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search restaurants, cuisines, or dishes..."
                  className="pl-12 pr-4 py-4 text-lg shadow-elegant border-border/50 focus:border-primary focus:shadow-soft transition-smooth"
                />
                <Button variant="default" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Cuisine Filters */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">CUISINE</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisineFilters.map((cuisine, index) => (
                    <Badge
                      key={cuisine}
                      variant={index === 0 ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {cuisine}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  More Filters
                </Button>
                {otherFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Restaurant Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sampleRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden">
                    {/* Restaurant Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                      {restaurant.isDonationPartner && (
                        <Badge className="absolute top-3 left-3 bg-donation text-donation-foreground border-0">
                          <Heart className="w-3 h-3 mr-1" />
                          Donation Partner
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                      >
                        <Heart className="w-4 h-4" fill="currentColor" />
                      </Button>
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
                        {restaurant.name.charAt(0)}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Restaurant Info */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-smooth">
                            {restaurant.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {restaurant.cuisine.join(' • ')}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                      </div>

                      {/* Delivery Info */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.distance}km away</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {restaurant.tags?.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        View Menu
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="px-8">
                Load More Restaurants
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BrowseRestaurants;
