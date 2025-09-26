import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <AlertCircle className="w-12 h-12 text-primary" />
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-gradient-primary mb-4"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Oops! Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8"
            >
              The page you're looking for seems to have gone on a food delivery of its own. 
              Let's get you back to something delicious!
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="lg" asChild className="px-8">
                <a href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8">
                <a href="/restaurants">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Restaurants
                </a>
              </Button>
            </motion.div>

            {/* Helpful links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-sm text-muted-foreground"
            >
              <p className="mb-4">Popular pages you might be looking for:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/restaurants" className="hover:text-primary transition-smooth">Restaurants</a>
                <a href="/donate" className="hover:text-donation transition-smooth">Food Donations</a>
                <a href="/about" className="hover:text-primary transition-smooth">About Us</a>
                <a href="/contact" className="hover:text-primary transition-smooth">Contact</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
