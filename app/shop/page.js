'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data - replace with your actual data source
const products = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299, category: 'audio', aisle: 'accessories', sale: true, image: 'https://images.unsplash.com/photo-1505740426531-4243f3831c78' },
  { id: 2, name: 'Smart Watch Pro', price: 199, category: 'wearables', aisle: 'smartphones', trending: true, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12' },
  { id: 3, name: '4K Action Camera', price: 499, category: 'cameras', aisle: 'cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' },
  { id: 4, name: 'Gaming Laptop', price: 1599, category: 'computers', aisle: 'laptops', sale: true, image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6' },
  // Add more products...
];

const aisles = {
  special: [
    { id: 'on-sale', name: 'On Sale' },
    { id: 'trending', name: 'Trending Now' },
    { id: 'clearance', name: 'Clearance' }
  ],
  categories: [
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'cameras', name: 'Cameras' },
    { id: 'wearables', name: 'Wearables' }
  ]
};

export default function ShopPage() {
  const [selectedAisle, setSelectedAisle] = useState('on-sale');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [selectedAisle, searchQuery]);

  const filterProducts = () => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (selectedAisle === 'on-sale') return product.sale && matchesSearch;
      if (selectedAisle === 'trending') return product.trending && matchesSearch;
      if (selectedAisle === 'clearance') return product.clearance && matchesSearch;
      return product.aisle === selectedAisle && matchesSearch;
    });
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 hidden md:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
  <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">Special Aisles</h3>
    <ul className="space-y-2 mb-8">
      {aisles.special.map((aisle) => (
        <li key={aisle.id}>
          <button
            onClick={() => setSelectedAisle(aisle.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedAisle === aisle.id 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-800 hover:bg-gray-200'
            }`}
          >
            {aisle.name}
          </button>
        </li>
      ))}
    </ul>

    <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
    <ul className="space-y-2">
      {aisles.categories.map((aisle) => (
        <li key={aisle.id}>
          <button
            onClick={() => setSelectedAisle(aisle.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedAisle === aisle.id 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-800 hover:bg-gray-200'
            }`}
          >
            {aisle.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
</aside>

        {/* Main Content */}
        <main className="flex-1 py-8">
          <motion.div
            key={selectedAisle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      On Sale!
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                      {product.sale && (
                        <span className="ml-2 text-sm text-red-600 line-through">
                          ${product.price * 1.2}
                        </span>
                      )}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No products found in this category
            </div>
          )}
        </main>
      </div>
    </div>
  );
}