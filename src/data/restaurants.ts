export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  image: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  isDonationPartner: boolean;
  donationMealsAvailable?: number;
  description: string;
  address: string;
  priceRange: 'budget' | 'mid' | 'premium';
  isOpen: boolean;
  tags: string[];
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
  isPopular?: boolean;
  isDonationEligible?: boolean;
  allergens?: string[];
}

export interface NGO {
  id: string;
  name: string;
  description: string;
  address: string;
  contact: string;
  verified: boolean;
  totalDonationsReceived: number;
  activeRequests: DonationRequest[];
}

export interface DonationRequest {
  id: string;
  ngoId: string;
  title: string;
  description: string;
  peopleCount: number;
  urgency: 'low' | 'medium' | 'high';
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  timeNeeded: string;
  status: 'active' | 'fulfilled' | 'expired';
  createdAt: string;
}

export const sampleRestaurants: Restaurant[] = [
  {
    id: "rest_1",
    name: "Spice Junction",
    cuisine: ["North Indian", "Punjabi"],
    image: "/api/placeholder/400/300",
    rating: 4.5,
    reviewCount: 1250,
    deliveryTime: "25-35 mins",
    deliveryFee: 40,
    isDonationPartner: true,
    donationMealsAvailable: 12,
    description: "Authentic North Indian flavors with a commitment to community feeding",
    address: "MG Road, Sector 14, Gurgaon",
    priceRange: "mid",
    isOpen: true,
    tags: ["Donation Partner", "Popular", "Fast Delivery"],
    menu: [
      {
        id: "item_1",
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken pieces",
        price: 280,
        image: "/api/placeholder/200/150",
        category: "Main Course",
        isVeg: false,
        spiceLevel: "medium",
        isPopular: true,
        isDonationEligible: true,
        allergens: ["dairy"]
      },
      {
        id: "item_2", 
        name: "Dal Makhani",
        description: "Rich black lentils slow-cooked with butter and cream",
        price: 220,
        image: "/api/placeholder/200/150",
        category: "Main Course",
        isVeg: true,
        spiceLevel: "mild",
        isDonationEligible: true,
        allergens: ["dairy"]
      }
    ]
  },
  {
    id: "rest_2",
    name: "Green Bowl Café",
    cuisine: ["Healthy", "Continental", "Salads"],
    image: "/api/placeholder/400/300",
    rating: 4.3,
    reviewCount: 892,
    deliveryTime: "20-30 mins",
    deliveryFee: 35,
    isDonationPartner: true,
    donationMealsAvailable: 8,
    description: "Farm-to-table healthy meals with zero waste philosophy",
    address: "DLF Phase 2, Gurgaon",
    priceRange: "premium",
    isOpen: true,
    tags: ["Healthy", "Eco-Friendly", "Donation Partner"],
    menu: [
      {
        id: "item_3",
        name: "Mediterranean Bowl",
        description: "Quinoa, hummus, olives, feta, fresh vegetables",
        price: 320,
        image: "/api/placeholder/200/150",
        category: "Bowls",
        isVeg: true,
        isPopular: true,
        isDonationEligible: true,
        allergens: ["dairy", "gluten"]
      }
    ]
  },
  {
    id: "rest_3",
    name: "Street Food Express",
    cuisine: ["Street Food", "Chaat", "Indian"],
    image: "/api/placeholder/400/300", 
    rating: 4.1,
    reviewCount: 2100,
    deliveryTime: "15-25 mins",
    deliveryFee: 25,
    isDonationPartner: false,
    description: "Authentic street food flavors delivered to your doorstep",
    address: "Old Gurgaon, Sector 4",
    priceRange: "budget",
    isOpen: true,
    tags: ["Budget Friendly", "Quick Bites", "Popular"],
    menu: [
      {
        id: "item_4",
        name: "Pani Puri",
        description: "Crispy puris with spiced water and chutneys",
        price: 80,
        image: "/api/placeholder/200/150",
        category: "Chaat",
        isVeg: true,
        spiceLevel: "medium",
        isPopular: true
      }
    ]
  },
  {
    id: "rest_4",
    name: "Pizza Corner",
    cuisine: ["Italian", "Pizza", "Fast Food"],
    image: "/api/placeholder/400/300",
    rating: 4.2,
    reviewCount: 1580,
    deliveryTime: "30-40 mins", 
    deliveryFee: 45,
    isDonationPartner: true,
    donationMealsAvailable: 15,
    description: "Wood-fired pizzas with fresh ingredients and community spirit",
    address: "Cyber City, DLF Phase 3",
    priceRange: "mid",
    isOpen: true,
    tags: ["Wood Fired", "Donation Partner", "Italian"],
    menu: [
      {
        id: "item_5",
        name: "Margherita Pizza",
        description: "Classic tomato sauce, mozzarella, fresh basil",
        price: 250,
        image: "/api/placeholder/200/150",
        category: "Pizza",
        isVeg: true,
        isPopular: true,
        isDonationEligible: true,
        allergens: ["dairy", "gluten"]
      }
    ]
  },
  {
    id: "rest_5",
    name: "Biryani House",
    cuisine: ["Hyderabadi", "Biryani", "Mughlai"],
    image: "/api/placeholder/400/300",
    rating: 4.6,
    reviewCount: 3200,
    deliveryTime: "35-45 mins",
    deliveryFee: 50,
    isDonationPartner: true,
    donationMealsAvailable: 20,
    description: "Authentic Hyderabadi biryanis with aromatic spices and charitable heart",
    address: "Sector 29, Gurgaon",
    priceRange: "mid",
    isOpen: true,
    tags: ["Authentic", "Biryani Specialist", "Donation Partner"],
    menu: [
      {
        id: "item_6",
        name: "Chicken Dum Biryani",
        description: "Fragrant basmati rice layered with spiced chicken",
        price: 350,
        image: "/api/placeholder/200/150",
        category: "Biryani",
        isVeg: false,
        spiceLevel: "medium",
        isPopular: true,
        isDonationEligible: true
      }
    ]
  }
];

export const sampleNGOs: NGO[] = [
  {
    id: "ngo_1",
    name: "Hope Foundation",
    description: "Supporting underprivileged children with education and nutrition",
    address: "Sector 15, Gurgaon",
    contact: "+91 9876543210",
    verified: true,
    totalDonationsReceived: 450,
    activeRequests: [
      {
        id: "req_1",
        ngoId: "ngo_1",
        title: "Evening Meal for 30 Children",
        description: "We need dinner for 30 children at our education center",
        peopleCount: 30,
        urgency: "high",
        location: {
          address: "Hope Education Center, Sector 15, Gurgaon",
          lat: 28.4595,
          lng: 77.0266
        },
        timeNeeded: "6:00 PM - 8:00 PM",
        status: "active",
        createdAt: "2024-01-15T10:00:00Z"
      }
    ]
  },
  {
    id: "ngo_2",
    name: "Seva Sangh",
    description: "Community kitchen serving daily meals to homeless individuals",
    address: "Old Gurgaon, Sector 5",
    contact: "+91 9876543211",
    verified: true,
    totalDonationsReceived: 1200,
    activeRequests: [
      {
        id: "req_2",
        ngoId: "ngo_2", 
        title: "Lunch for 50 People",
        description: "Daily community kitchen needs fresh cooked meals",
        peopleCount: 50,
        urgency: "medium",
        location: {
          address: "Community Center, Sector 5, Gurgaon",
          lat: 28.4600,
          lng: 77.0300
        },
        timeNeeded: "12:00 PM - 2:00 PM",
        status: "active",
        createdAt: "2024-01-15T08:00:00Z"
      }
    ]
  },
  {
    id: "ngo_3",
    name: "Annapurna Trust",
    description: "Fighting hunger in urban communities through food redistribution",
    address: "DLF Phase 1, Gurgaon",
    contact: "+91 9876543212",
    verified: true,
    totalDonationsReceived: 850,
    activeRequests: [
      {
        id: "req_3",
        ngoId: "ngo_3",
        title: "Emergency Food for 100 Families",
        description: "Urgent need for packaged meals due to local crisis",
        peopleCount: 400,
        urgency: "high",
        location: {
          address: "Relief Camp, DLF Phase 1, Gurgaon",
          lat: 28.4700,
          lng: 77.0400
        },
        timeNeeded: "All day - immediate",
        status: "active",
        createdAt: "2024-01-15T06:00:00Z"
      }
    ]
  }
];