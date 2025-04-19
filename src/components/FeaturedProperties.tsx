import React, { useState } from 'react';
import PropertyCard from './ui/PropertyCard';
import Button from './ui/Button';
import { Building, ArrowRight } from 'lucide-react';

// Sample property data
const properties = [
  {
    id: '1',
    title: 'Modern Apartment with City View',
    address: '123 Downtown Ave, New York, NY',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true
  },
  {
    id: '2',
    title: 'Luxury Waterfront Villa',
    address: '456 Ocean Blvd, Miami, FL',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Cozy Suburban Family Home',
    address: '789 Maple St, Columbus, OH',
    price: 320000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Contemporary Downtown Loft',
    address: '101 Arts District, Portland, OR',
    price: 550000,
    bedrooms: 1,
    bathrooms: 1.5,
    area: 950,
    imageUrl: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true
  },
  {
    id: '5',
    title: 'Classic Victorian Home',
    address: '202 Heritage Lane, San Francisco, CA',
    price: 1750000,
    bedrooms: 5,
    bathrooms: 3,
    area: 3600,
    imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isFeatured: true
  },
  {
    id: '6',
    title: 'Mountain View Cabin',
    address: '303 Pine Ridge, Denver, CO',
    price: 425000,
    bedrooms: 2,
    bathrooms: 1,
    area: 1500,
    imageUrl: 'https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const FeaturedProperties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'new'>('all');
  
  const filteredProperties = properties.filter(property => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return property.isFeatured;
    if (activeFilter === 'new') return property.isNew;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <div className="flex items-center mb-2">
              <Building className="h-6 w-6 text-blue-900 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            </div>
            <p className="text-gray-600 max-w-xl">
              Discover handpicked properties from our extensive portfolio to match your lifestyle
            </p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            {(['all', 'featured', 'new'] as const).map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;