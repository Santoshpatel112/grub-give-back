import { motion } from 'framer-motion';
import { Star, Clock, Truck, Heart, Badge as BadgeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Restaurant } from '@/data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index?: number;
}

const RestaurantCard = ({ restaurant, index = 0 }: RestaurantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-smooth overflow-hidden group cursor-pointer"
    >
      {/* Image section */}
      <div className="relative">
        <div className="aspect-[4/3] bg-muted/30 rounded-t-2xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-donation/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-muted-foreground/30">
              {restaurant.name.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Donation badge */}
        {restaurant.isDonationPartner && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
            className="absolute top-3 left-3"
          >
            <Badge className="bg-donation text-donation-foreground shadow-donation">
              <Heart className="w-3 h-3 mr-1" />
              Donation Partner
            </Badge>
          </motion.div>
        )}

        {/* Price range indicator */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {restaurant.priceRange === 'budget' && '₹'}
            {restaurant.priceRange === 'mid' && '₹₹'}
            {restaurant.priceRange === 'premium' && '₹₹₹'}
          </Badge>
        </div>

        {/* Available donations indicator */}
        {restaurant.donationMealsAvailable && restaurant.donationMealsAvailable > 0 && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-3 left-3"
          >
            <Badge className="bg-donation/90 text-donation-foreground">
              {restaurant.donationMealsAvailable} meals available
            </Badge>
          </motion.div>
        )}
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-card-foreground mb-1 line-clamp-1">
              {restaurant.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {restaurant.cuisine.join(' • ')}
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 bg-success/10 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-success text-success" />
            <span className="text-sm font-semibold text-success">
              {restaurant.rating}
            </span>
          </div>
        </div>

        {/* Delivery info */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>₹{restaurant.deliveryFee}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {restaurant.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {restaurant.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{restaurant.tags.length - 2} more
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          <Button variant="default" className="flex-1">
            View Menu
          </Button>
          {restaurant.isDonationPartner && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="donation" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
    </motion.div>
  );
};

export default RestaurantCard;