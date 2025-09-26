import { motion } from 'framer-motion';
import { Filter, Heart, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import { sampleRestaurants } from '@/data/restaurants';

const RestaurantGrid = () => {
  const donationPartners = sampleRestaurants.filter(r => r.isDonationPartner);
  const totalDonationMeals = donationPartners.reduce((sum, r) => sum + (r.donationMealsAvailable || 0), 0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-donation" />
            <Badge className="bg-donation/10 text-donation border-donation/20">
              {donationPartners.length} Donation Partners
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Popular</span> Restaurants
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover amazing restaurants that not only serve delicious food but also contribute to feeding the community
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-success" />
              <span>4.3+ average rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>30 min average delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-donation" />
              <span>{totalDonationMeals} meals available for donation</span>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="border-primary text-primary bg-primary/5">
              <Filter className="w-4 h-4 mr-2" />
              All Restaurants
            </Button>
            <Button variant="outline" size="sm">
              Donation Partners
            </Button>
            <Button variant="outline" size="sm">
              Fast Delivery
            </Button>
            <Button variant="outline" size="sm">
              Highly Rated
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {sampleRestaurants.length} restaurants found
            </span>
          </div>
        </motion.div>

        {/* Restaurant grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRestaurants.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              index={index}
            />
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8">
            Load More Restaurants
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantGrid;