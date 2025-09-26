import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Heart, MapPin, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-card"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                FoodieDonor
              </span>
            </motion.div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/restaurants" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Browse Restaurants
            </Link>
            <Link to="/donate" className="text-sm font-medium text-muted-foreground hover:text-foreround transition-smooth">
              Make a Donation
            </Link>
            <Link to="/requests" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              View Requests
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              How It Works
            </Link>
          </nav>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Gurgaon, Haryana</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search restaurants, cuisines, or dishes..."
              className="pl-10 shadow-card border-border/50 focus:border-primary focus:shadow-soft transition-smooth"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Donation Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden sm:block"
            >
              <Badge variant="secondary" className="bg-donation/10 text-donation border-donation/20 animate-pulse-donation">
                <Heart className="w-3 h-3 mr-1" />
                12 donations today
              </Badge>
            </motion.div>

            {/* Cart */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
                  3
                </Badge>
              </Button>
            </motion.div>

            {/* Profile */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;