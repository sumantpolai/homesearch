import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import navigation hook
import { Menu, X, Home, Building, Users, Phone, User } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // <-- hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', icon: Home },
    { label: 'Properties', icon: Building },
    { label: 'Agents', icon: Users },
    { label: 'Contact', icon: Phone },
  ];

  const handleSignInClick = () => {
    navigate('/auth'); // <-- goes to Auth.tsx
  };

  const handleListPropertyClick = () => {
    navigate('/list-property'); // <-- goes to ListProperty.tsx
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900 flex items-center">
              <Home className="h-7 w-7 mr-2 text-amber-500" />
              <span>HomeSearch</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className={`flex items-center text-base font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-amber-500'
                }`}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleSignInClick}>
              <User className="w-4 h-4 mr-1" />
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={handleListPropertyClick}>
              List Property
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-4 p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center py-2 px-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-2 text-blue-900" />
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-3 border-t grid grid-cols-2 gap-3">
                <Button variant="outline" fullWidth onClick={() => {
                  setIsOpen(false);
                  handleSignInClick();
                }}>
                  Sign In
                </Button>
                <Button variant="primary" fullWidth onClick={() => {
                  setIsOpen(false);
                  handleListPropertyClick();
                }}>
                  List Property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
