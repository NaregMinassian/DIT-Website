import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'QR Codes', path: '/services/qr-codes' },
    { name: 'E-commerce', path: '/services/ecommerce' },
    { name: 'Marketplace Creation', path: '/services/marketplace' },
    { name: 'International Solutions', path: '/services/international' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Logo />
            <div>
              <h1 className="text-xl font-bold gradient-text">Digital IT Services</h1>
              <p className="text-xs text-gray-300">Future-Ready Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${
                isActive('/') ? 'text-primary-400' : 'text-white hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                  location.pathname.startsWith('/services') ? 'text-primary-400' : 'text-white hover:text-primary-400'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div
                className={`absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl border border-white/20 shadow-2xl transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-white hover:text-primary-400 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-300 ${
                isActive('/about') ? 'text-primary-400' : 'text-white hover:text-primary-400'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-300 ${
                isActive('/contact') ? 'text-primary-400' : 'text-white hover:text-primary-400'
              }`}
            >
              Contact
            </Link>

            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 glass-effect rounded-xl p-6 border border-white/20">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/') ? 'text-primary-400' : 'text-white hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <span className="block font-medium text-white mb-2">Services</span>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/about') ? 'text-primary-400' : 'text-white hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`block font-medium transition-colors duration-300 ${
                  isActive('/contact') ? 'text-primary-400' : 'text-white hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="btn-primary inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};