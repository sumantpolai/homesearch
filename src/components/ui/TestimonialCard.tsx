import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatarUrl} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;