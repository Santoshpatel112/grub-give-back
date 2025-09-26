import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import RestaurantGrid from '@/components/sections/RestaurantGrid';
import DonationSection from '@/components/sections/DonationSection';

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <RestaurantGrid />
        <DonationSection />
      </motion.div>
    </Layout>
  );
};

export default Index;
