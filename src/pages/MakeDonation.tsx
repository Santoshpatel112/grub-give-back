import { motion } from 'framer-motion';
import { Heart, Users, Home, Globe, Package, Gift, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const MakeDonation = () => {
  const [foodItems, setFoodItems] = useState([
    { type: '', category: '', quantity: 1, description: '' }
  ]);

  const foodTypes = [
    'Fresh Produce', 'Canned Goods', 'Dry Goods', 'Dairy Products', 
    'Meat & Protein', 'Bakery Items', 'Frozen Foods', 'Beverages'
  ];

  const foodCategories = {
    'Fresh Produce': ['Fruits', 'Vegetables', 'Herbs'],
    'Canned Goods': ['Vegetables', 'Fruits', 'Soups', 'Sauces'],
    'Dry Goods': ['Rice', 'Pasta', 'Beans', 'Cereals', 'Flour'],
    'Dairy Products': ['Milk', 'Cheese', 'Yogurt', 'Butter'],
    'Meat & Protein': ['Chicken', 'Beef', 'Fish', 'Eggs', 'Tofu'],
    'Bakery Items': ['Bread', 'Rolls', 'Pastries'],
    'Frozen Foods': ['Vegetables', 'Fruits', 'Meals', 'Ice Cream'],
    'Beverages': ['Water', 'Juice', 'Soft Drinks', 'Coffee', 'Tea']
  };

  const impactStats = [
    { icon: Users, number: '1,200', label: 'Meals Provided', color: 'text-donation' },
    { icon: Home, number: '350', label: 'Families Served', color: 'text-success' },
    { icon: Globe, number: '25', label: 'Communities Supported', color: 'text-warning' }
  ];

  const addFoodItem = () => {
    setFoodItems([...foodItems, { type: '', category: '', quantity: 1, description: '' }]);
  };

  const removeFoodItem = (index: number) => {
    if (foodItems.length > 1) {
      setFoodItems(foodItems.filter((_, i) => i !== index));
    }
  };

  const updateFoodItem = (index: number, field: string, value: any) => {
    const updated = foodItems.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setFoodItems(updated);
  };

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
                <span className="text-gradient-donation">Donate Food</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Every food donation creates a ripple effect of kindness. Join our community of changemakers 
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

            {/* Food Donation Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Donate Food Items</CardTitle>
                  <p className="text-muted-foreground">Share what you have to help feed families in need</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {foodItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border border-border/50 rounded-lg bg-card/50"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold flex items-center">
                            <Package className="w-5 h-5 mr-2 text-donation" />
                            Food Item {index + 1}
                          </h3>
                          {foodItems.length > 1 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFoodItem(index)}
                              className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* Food Type */}
                          <div>
                            <label className="block text-sm font-medium mb-2">Food Type</label>
                            <Select
                              value={item.type}
                              onValueChange={(value) => {
                                updateFoodItem(index, 'type', value);
                                updateFoodItem(index, 'category', ''); // Reset category when type changes
                              }}
                            >
                              <SelectTrigger className="shadow-card border-border/50 focus:border-donation">
                                <SelectValue placeholder="Select food type" />
                              </SelectTrigger>
                              <SelectContent>
                                {foodTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Food Category */}
                          <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <Select
                              value={item.category}
                              onValueChange={(value) => updateFoodItem(index, 'category', value)}
                              disabled={!item.type}
                            >
                              <SelectTrigger className="shadow-card border-border/50 focus:border-donation">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {item.type && foodCategories[item.type as keyof typeof foodCategories]?.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          {/* Quantity */}
                          <div>
                            <label className="block text-sm font-medium mb-2">Quantity</label>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateFoodItem(index, 'quantity', Math.max(1, item.quantity - 1))}
                                className="px-3"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateFoodItem(index, 'quantity', parseInt(e.target.value) || 1)}
                                className="text-center shadow-card border-border/50 focus:border-donation"
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateFoodItem(index, 'quantity', item.quantity + 1)}
                                className="px-3"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          {/* Unit */}
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">Unit/Size</label>
                            <Input
                              placeholder="e.g., lbs, cans, boxes, servings"
                              value={item.description.split(' - ')[1] || ''}
                              onChange={(e) => {
                                const baseDesc = item.description.split(' - ')[0] || '';
                                updateFoodItem(index, 'description', baseDesc + (e.target.value ? ` - ${e.target.value}` : ''));
                              }}
                              className="shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className="block text-sm font-medium mb-2">Description (Optional)</label>
                          <Textarea
                            placeholder="Additional details about the food item (expiry date, condition, etc.)"
                            value={item.description.split(' - ')[0] || ''}
                            onChange={(e) => {
                              const unit = item.description.split(' - ')[1] || '';
                              updateFoodItem(index, 'description', e.target.value + (unit ? ` - ${unit}` : ''));
                            }}
                            className="shadow-card border-border/50 focus:border-donation focus:shadow-soft transition-smooth"
                            rows={3}
                          />
                        </div>
                      </motion.div>
                    ))}

                    {/* Add More Items Button */}
                    <Button
                      variant="outline"
                      onClick={addFoodItem}
                      className="w-full border-dashed border-2 hover:border-donation hover:text-donation transition-smooth"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Add Another Food Item
                    </Button>

                    {/* Donation button */}
                    <Button variant="donation" size="lg" className="w-full text-lg py-6 mt-8">
                      <Gift className="w-5 h-5 mr-2" />
                      Donate Food Items
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your food donation helps feed families in your community. All donations are coordinated with local food banks.
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