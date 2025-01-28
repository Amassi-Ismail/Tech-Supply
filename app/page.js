'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Tech Store
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the latest tech gadgets and accessories
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Featured Products */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">New Arrivals</h3>
            <p className="text-gray-600">Explore our latest tech products</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Best Sellers</h3>
            <p className="text-gray-600">Shop our most popular items</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Deals</h3>
            <p className="text-gray-600">Limited-time offers and discounts</p>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tech Store?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Delivery within 3-5 business days</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure checkout process</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}