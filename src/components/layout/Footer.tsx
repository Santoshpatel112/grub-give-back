import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-primary">
                FoodieDonor
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting food lovers with community impact. Every meal ordered helps feed those in need.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/restaurants" className="text-muted-foreground hover:text-primary transition-smooth">Restaurants</a></li>
              <li><a href="/donate" className="text-muted-foreground hover:text-donation transition-smooth">Food Donations</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="/partner" className="text-muted-foreground hover:text-primary transition-smooth">Partner with Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-muted-foreground hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get updates on new restaurants and donation opportunities.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button variant="donation" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Serving Gurgaon & Delhi NCR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7000-000-000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@foodiedonor.com</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 FoodieDonor. Made with ❤️ for the community.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;