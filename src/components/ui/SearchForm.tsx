import React, { useState } from 'react';
import Button from './Button';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-4xl mx-auto transition-all duration-300">
      <div className="flex mb-6 border-b">
        {(['buy', 'rent', 'sell'] as const).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium text-lg capitalize transition-all duration-300 relative ${
              activeTab === tab
                ? 'text-blue-900'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-900 rounded-t-lg" />
            )}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Enter location"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <div className="relative">
            <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
              <option>Any Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Townhouse</option>
              <option>Land</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="relative">
            <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
              <option>Any Price</option>
              <option>$100k - $200k</option>
              <option>$200k - $300k</option>
              <option>$300k - $500k</option>
              <option>$500k - $750k</option>
              <option>$750k - $1M</option>
              <option>$1M+</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {expanded && (
        <div className="grid md:grid-cols-4 gap-4 mb-6 animate-fadeIn">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Square Feet</label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
                <option>Any</option>
                <option>500+ sqft</option>
                <option>1000+ sqft</option>
                <option>1500+ sqft</option>
                <option>2000+ sqft</option>
                <option>2500+ sqft</option>
                <option>3000+ sqft</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Year Built</label>
            <div className="relative">
              <select className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent appearance-none">
                <option>Any</option>
                <option>2020+</option>
                <option>2010+</option>
                <option>2000+</option>
                <option>1990+</option>
                <option>1980+</option>
                <option>Pre-1980</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5 pointer-events-none" />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button 
          className="flex items-center text-blue-900 font-medium" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Less Filters' : 'More Filters'}
          <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </button>
        
        <Button variant="primary" size="lg" className="min-w-[120px]">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;