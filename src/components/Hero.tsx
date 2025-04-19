import React from 'react';
import SearchForm from './ui/SearchForm';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Find Your <span className="text-amber-500">Dream Home</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
            Discover the perfect property for you from our extensive collection of homes, apartments, and luxury estates
          </p>
          
          <div className="animate-fadeInUp animation-delay-400">
            <SearchForm />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Properties', value: '15,000+' },
              { label: 'Happy Clients', value: '10,500+' },
              { label: 'Cities', value: '100+' },
              { label: 'Agents', value: '200+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;