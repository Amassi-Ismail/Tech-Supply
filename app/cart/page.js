'use client';
import { useState } from 'react';
import Link from 'next/link';

const initialCartItems = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299, quantity: 2 },
  { id: 2, name: 'Smart Watch Pro', price: 199, quantity: 1 },
  // Add more items as needed
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length > 0 ? (
            <>
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      ${item.price * item.quantity}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center">
                <Link href="/shop" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Continue Shopping
                </Link>
                <div className="text-lg font-bold text-gray-900">
                  Total: ${getTotalPrice()}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">
              Your cart is empty. <Link href="/shop" className="text-blue-600 hover:underline">Continue Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}