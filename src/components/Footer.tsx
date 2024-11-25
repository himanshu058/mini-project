import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering individuals to take control of their physical and mental well-being through comprehensive self-care solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">About</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-violet-600" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-violet-600" />
                <span className="text-gray-600 dark:text-gray-400">support@mindfulwellness.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-violet-600" />
                <span className="text-gray-600 dark:text-gray-400">123 Wellness Street, CA 90210</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">24/7 Crisis Helpline:</p>
            <p className="text-xl font-bold text-violet-600">1-800-273-8255</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 MindfulWellness. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Terms of Service</Link>
              <div className="flex items-center space-x-1">
                <span className="text-gray-600 dark:text-gray-400">Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;