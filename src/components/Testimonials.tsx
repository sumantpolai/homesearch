import React, { useEffect } from 'react';
import TestimonialCard from './ui/TestimonialCard';
import { MessageSquareQuote } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Home Buyer',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'I was amazed by how easy it was to find my dream home through HomeSearch. The filters were incredibly precise, and the virtual tours saved me so much time!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Investor',
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'As an investor, I need reliable data and quick responses. HomeSearch provided both, along with excellent agent connections that made closing deals simple.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'First-time Seller',
    avatarUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Selling my first home was intimidating, but the team at HomeSearch guided me through every step. My listing received multiple offers within days!',
    rating: 4
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Real Estate Agent',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'HomeSearch has revolutionized how I connect with clients. The platform\'s intuitive design and powerful features make my job so much easier.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-blue-50" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-2">
            <MessageSquareQuote className="h-6 w-6 text-blue-900 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <TypeAnimation
            sequence={[
              "Don't just take our word for it...",
              1500,
              "Hear from some of our satisfied clients!",
              1500
            ]}
            wrapper="p"
            repeat={Infinity}
            className="text-gray-600 max-w-2xl mx-auto text-base"
            cursor={true}
          />
        </motion.div>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
