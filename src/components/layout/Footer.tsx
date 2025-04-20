
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-kirana-primary">Kirana</span>
              <span className="text-kirana-accent">Cart</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Your one-stop solution for all grocery needs, delivering freshness to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-kirana-primary">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-kirana-primary">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-kirana-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-kirana-primary">All Products</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-600 hover:text-kirana-primary">Offers & Discounts</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-kirana-primary">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-kirana-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-kirana-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Account */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900">My Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-kirana-primary">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-kirana-primary">Register</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-kirana-primary">My Cart</Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-kirana-primary">My Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-600 hover:text-kirana-primary">Wishlist</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-900">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-kirana-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Grocery Lane, Fresh Market, Cityville - 123456</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-kirana-primary mr-2 flex-shrink-0" />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-kirana-primary mr-2 flex-shrink-0" />
                <span className="text-gray-600">support@kiranacart.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} KiranaCart. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-kirana-primary text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-600 hover:text-kirana-primary text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="text-gray-600 hover:text-kirana-primary text-sm">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
