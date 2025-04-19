import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyCategories from '../components/PropertyCategories';
import NeighborhoodInsights from '../components/NeighborhoodInsights';
import MortgageCalculator from '../components/MortgageCalculator';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <PropertyCategories />
        <NeighborhoodInsights />
        <MortgageCalculator />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;