import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lavender-light to-white border-t border-lavender-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 neumorphic rounded-full">
                <Heart className="w-6 h-6 text-primary-blue" />
              </div>
              <span className="text-xl font-bold text-primary-blue">HealthWise</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dedicated to promoting UN SDG Goal 3: Good Health and Well-being. 
              We work towards ensuring healthy lives and promoting well-being for all at all ages.
            </p>
            <div className="flex space-x-3">
              <div className="p-2 neumorphic rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Mail className="w-5 h-5 text-primary-blue" />
              </div>
              <div className="p-2 neumorphic rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Phone className="w-5 h-5 text-primary-blue" />
              </div>
              <div className="p-2 neumorphic rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer">
                <MapPin className="w-5 h-5 text-primary-blue" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary-blue transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-blue transition-colors duration-300">UN SDG Goals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-blue transition-colors duration-300">Health Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-blue transition-colors duration-300">Wellness Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-blue transition-colors duration-300">Research</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lavender-dark mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 HealthWise. All rights reserved. | Supporting UN SDG Goal 3: Good Health and Well-being
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;