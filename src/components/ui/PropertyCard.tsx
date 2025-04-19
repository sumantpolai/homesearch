import React from 'react';
import { Heart, MapPin, Bed, Bath, LandPlot } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
    isNew?: boolean;
    isFeatured?: boolean;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-white transition-colors duration-300">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
        </div>
        {property.isNew && (
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-md text-sm font-medium">
            New
          </div>
        )}
        {property.isFeatured && (
          <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-md text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
          <span className="text-amber-500 font-bold">${property.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t pt-4">
          <div className="flex items-center justify-center">
            <Bed className="w-4 h-4 mr-1 text-blue-900" />
            <span className="text-sm text-gray-700">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center justify-center">
            <Bath className="w-4 h-4 mr-1 text-blue-900" />
            <span className="text-sm text-gray-700">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center justify-center">
            <LandPlot className="w-4 h-4 mr-1 text-blue-900" />
            <span className="text-sm text-gray-700">{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;