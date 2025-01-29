'use client';
import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Tech Store</h3>
            <p className="text-gray-400">
              Your premier destination for cutting-edge technology and innovative gadgets. 
              We bring you the latest in tech with verified quality and competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-blue-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-blue-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                {/* <FacebookIcon className="h-6 w-6" /> */}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                {/* <TwitterIcon className="h-6 w-6" /> */}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                {/* <InstagramIcon className="h-6 w-6" /> */}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                {/* <GithubIcon className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Tech Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}