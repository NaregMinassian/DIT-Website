import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Smartphone, CreditCard, Users, BarChart, Zap } from 'lucide-react';

export const QRCodes: React.FC = () => {
  const qrFeatures = [
    {
      icon: QrCode,
      title: 'Digital Menu System',
      description: 'Contactless digital menus with real-time updates, multiple languages, and dietary information.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ordering',
      description: 'Seamless mobile ordering experience directly from customer smartphones with no app required.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing with multiple payment methods including cards and digital wallets.'
    },
    {
      icon: Users,
      title: 'Table Management',
      description: 'Smart table management system with reservation handling and waitlist management.'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on customer behavior, popular items, and sales performance.'
    },
    {
      icon: Zap,
      title: 'Kitchen Integration',
      description: 'Direct order integration with kitchen display systems for efficient order processing.'
    }
  ];

  const benefits = [
    'Reduce contact and improve safety',
    'Eliminate printing costs for menus',
    'Real-time menu updates',
    'Increase average order value',
    'Reduce wait times',
    'Collect customer data and feedback',
    'Multi-language support',
    'Integration with POS systems'
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            QR Codes for Restaurants
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your restaurant with contactless dining solutions. Digital menus, mobile ordering, 
            and seamless payment processing that enhance customer experience and boost efficiency.
          </p>
        </div>

        {/* QR Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {qrFeatures.map((feature, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Simple, intuitive process that customers love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Scan QR Code', description: 'Customer scans QR code at their table' },
              { step: '02', title: 'Browse Menu', description: 'Digital menu opens on their phone' },
              { step: '03', title: 'Place Order', description: 'Select items and customize orders' },
              { step: '04', title: 'Pay & Enjoy', description: 'Secure payment and order tracking' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Benefits for Your Restaurant</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-4"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Advanced Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive restaurant management features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="floating-card">
              <h3 className="text-xl font-bold text-white mb-4">Menu Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Real-time menu updates
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Item availability control
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Pricing and promotion management
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Dietary information and allergens
                </li>
              </ul>
            </div>

            <div className="floating-card">
              <h3 className="text-xl font-bold text-white mb-4">Order Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Kitchen display integration
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Order tracking and notifications
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Special instructions handling
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Order history and analytics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Go Contactless?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your restaurant operations with our QR code solution. Improve safety, efficiency, and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get QR Solution
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};