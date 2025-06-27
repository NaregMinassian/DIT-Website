import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Package, TrendingUp, Shield, Zap } from 'lucide-react';

export const Ecommerce: React.FC = () => {
  const ecommerceServices = [
    {
      icon: ShoppingCart,
      title: 'WooCommerce Development',
      description: 'Custom WooCommerce stores with advanced features, themes, and plugin integrations.'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with multiple payment methods and fraud protection.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking, stock management, and automated reorder systems.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Analytics',
      description: 'Comprehensive sales reporting, customer insights, and performance analytics.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'PCI compliance, SSL certificates, and robust security measures for safe transactions.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading stores optimized for conversions and search engine visibility.'
    }
  ];

  const platforms = [
    'WooCommerce', 'Shopify', 'Magento', 'Custom Solutions'
  ];

  const features = [
    'Product catalog management',
    'Shopping cart and checkout',
    'Order processing and fulfillment',
    'Customer account management',
    'Multi-currency support',
    'Tax calculation and reporting',
    'Shipping integration',
    'Email marketing integration',
    'SEO optimization',
    'Mobile responsive design',
    'Admin dashboard',
    'Third-party integrations'
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            E-commerce & WooCommerce
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build powerful online stores that convert visitors into customers. From WooCommerce to custom 
            e-commerce solutions, we create shopping experiences that drive sales and growth.
          </p>
        </div>

        {/* E-commerce Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ecommerceServices.map((service, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">E-commerce Platforms</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with leading e-commerce platforms to build your perfect online store
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-lg font-bold text-white">{platform}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Development Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From concept to launch, our proven process ensures your e-commerce success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Planning', description: 'Requirements and strategy definition' },
              { step: '02', title: 'Design', description: 'UI/UX design and user journey mapping' },
              { step: '03', title: 'Development', description: 'Store development and customization' },
              { step: '04', title: 'Testing', description: 'Quality assurance and performance testing' },
              { step: '05', title: 'Launch', description: 'Go-live and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-3xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">E-commerce Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-4"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WooCommerce Specialization */}
        <div className="mb-20">
          <div className="floating-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">WooCommerce Specialization</h2>
              <p className="text-lg text-gray-300">Why we recommend WooCommerce for most businesses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Built on WordPress - easy to manage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Thousands of plugins and themes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Cost-effective solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    SEO-friendly out of the box
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Highly customizable
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our WooCommerce Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Custom theme development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Plugin development and customization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Payment gateway integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Performance optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Migration from other platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build an e-commerce store that converts visitors into customers and grows your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Store
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Discuss E-commerce Needs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};