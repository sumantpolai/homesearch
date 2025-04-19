import React from 'react';
import Button from './ui/Button';
import { MapPin, School, ShoppingBag, Train, Utensils, TreePine, Users } from 'lucide-react';

const NeighborhoodInsights: React.FC = () => {
  const neighborhoods = [
    {
      name: 'Downtown Metro',
      description: 'Urban living at its finest with restaurants, shops, and nightlife just steps from your door.',
      amenities: ['Shopping', 'Dining', 'Transit', 'Entertainment'],
      imageUrl: 'https://www.kayak.co.in/rimg/himg/29/91/47/revato-10609-132374-717181.jpg?width=836&height=607&crop=true' // Updated Image URL
    },
    {
      name: 'Oakridge Heights',
      description: 'Family-friendly suburb with top-rated schools and beautiful parks throughout the community.',
      amenities: ['Schools', 'Parks', 'Community Center', 'Shopping'],
      imageUrl: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const amenityIcons = {
    'Shopping': <ShoppingBag className="h-4 w-4" />,
    'Dining': <Utensils className="h-4 w-4" />,
    'Transit': <Train className="h-4 w-4" />,
    'Entertainment': <Utensils className="h-4 w-4" />,
    'Schools': <School className="h-4 w-4" />,
    'Parks': <TreePine className="h-4 w-4" />,
    'Community Center': <Users className="h-4 w-4" />,
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="h-6 w-6 text-blue-900 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Neighborhood Insights</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect neighborhood that fits your lifestyle with our detailed community guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={neighborhood.imageUrl} 
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{neighborhood.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{neighborhood.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities Nearby:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.amenities.map((amenity, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-900"
                      >
                        {amenityIcons[amenity as keyof typeof amenityIcons]}
                        <span className="ml-1">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  Explore {neighborhood.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="primary">
            View All Neighborhoods
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodInsights;
