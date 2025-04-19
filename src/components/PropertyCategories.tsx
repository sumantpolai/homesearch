import React from 'react';
import { Home, Building2, Warehouse, Map, Trees, Building } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ElementType;
  title: string;
  count: number;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, count, imageUrl }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 transform hover:-translate-y-2">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/30 transition-opacity duration-500 group-hover:opacity-90"></div>
      </div>
      
      <div className="relative p-6 h-64 flex flex-col justify-end">
        <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-full w-fit transition-all duration-500 group-hover:bg-amber-500/90">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1 transition-transform duration-500 group-hover:translate-x-2">{title}</h3>
        <p className="text-white/80 transition-transform duration-500 group-hover:translate-x-2">{count} Properties</p>
      </div>
    </div>
  );
};

const PropertyCategories: React.FC = () => {
  const categories = [
    { 
      icon: Home, 
      title: 'Residential Homes', 
      count: 534, 
      imageUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: Building2, 
      title: 'Apartments & Condos', 
      count: 425, 
      imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: Warehouse, 
      title: 'Commercial', 
      count: 173, 
      imageUrl: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: Building, 
      title: 'Office Spaces', 
      count: 207, 
      imageUrl: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: Map, 
      title: 'Land & Plots', 
      count: 302, 
      imageUrl: 'https://images.pexels.com/photos/33970/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      icon: Trees, 
      title: 'Vacation Homes', 
      count: 198, 
      imageUrl: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Property Type</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of properties categorized by type to find your ideal match, whether it's a cozy apartment or a spacious family home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              icon={category.icon}
              title={category.title}
              count={category.count}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;