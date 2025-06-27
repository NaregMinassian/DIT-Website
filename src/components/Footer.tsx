import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Logo />
              <div>
                <h3 className="text-xl font-bold gradient-text">Digital IT Services</h3>
                <p className="text-sm text-gray-300">Future-Ready Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming businesses with cutting-edge digital solutions. From Yerevan, Armenia to the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-muted hover:text-primary-400 transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@digital-it.services" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  info@digital-it.services
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+37498292248" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  +374 98 292 248
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">
                  Yerevan, Armenia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Digital IT Services. All rights reserved. | Future-Ready Digital Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};