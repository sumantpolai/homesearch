import React from 'react';
import Button from './ui/Button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-md">
                Have questions about a property or need assistance? Our team of experts is ready to help you every step of the way.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@homesearch.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600">123 Real Estate Blvd, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300 appearance-none bg-white">
                  <option>General Inquiry</option>
                  <option>Property Viewing</option>
                  <option>Selling My Property</option>
                  <option>Mortgage Information</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button variant="primary" fullWidth className="mt-4">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;