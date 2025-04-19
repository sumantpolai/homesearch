import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="text-2xl font-bold flex items-center mb-4">
              <Home className="h-6 w-6 mr-2 text-amber-500" />
              <span>HomeSearch</span>
            </a>
            <p className="text-blue-100 mb-6">
              Your trusted partner in finding the perfect property that meets all your requirements.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 bg-blue-800 rounded-full hover:bg-amber-500 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Properties', 'Agents', 'About Us', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-amber-500 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Property Types</h3>
            <ul className="space-y-3">
              {['Residential Homes', 'Apartments & Condos', 'Commercial Properties', 'Office Spaces', 'Land & Plots', 'Vacation Homes'].map((type, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-amber-500 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-blue-100 mb-4">
              Subscribe to get the latest property listings and market insights.
            </p>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <Button variant="secondary" fullWidth>Subscribe</Button>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} HomeSearch. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-blue-200">
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;