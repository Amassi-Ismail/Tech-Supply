'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebaseConfig';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { TruckIcon, LockClosedIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const heroImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];

  const trendingProducts = [
    { id: 1, name: 'Wireless Headphones', price: '$299', image: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 2, name: 'Smart Watch Pro', price: '$199', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80' },
    { id: 3, name: '4K Action Camera', price: '$499', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1938&q=80' },
    { id: 4, name: 'Gaming Laptop', price: '$1599', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Animated Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <Swiper
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="h-[600px]"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
                  <div className="text-center text-white max-w-2xl px-4">
                    <motion.h1 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-5xl md:text-6xl font-bold mb-6"
                    >
                      Welcome to Tech Store
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl mb-8"
                    >
                      Discover Cutting-Edge Technology
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        Start Shopping
                        <ArrowRightIcon className="h-5 w-5 mt-0.5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Explore Our Collections
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Laptops', 'Smartphones', 'Accessories'].map((category, index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <div className="h-80 bg-gray-100 transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?${category}`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Trending Now</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="pb-12"
          >
            {trendingProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="h-64 bg-gray-100">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-blue-600 font-bold">{product.price}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <TruckIcon className="h-12 w-12 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Worldwide delivery in 3-5 business days</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <motion.div 
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <LockClosedIcon className="h-12 w-12 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">256-bit SSL encryption</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <ArrowPathIcon className="h-12 w-12 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8 text-lg">Get exclusive offers and tech news straight to your inbox</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}