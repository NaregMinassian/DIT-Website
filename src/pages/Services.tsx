import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Search, 
  TrendingUp, 
  QrCode, 
  ShoppingCart, 
  Store, 
  Globe,
  ArrowRight 
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Node.js. Scalable, secure, and optimized for performance.',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Cloud Deployment'],
      path: '/services/web-development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Beautiful, user-friendly designs that convert visitors into customers. Mobile-first approach with modern UI/UX principles.',
      features: ['UI/UX Design', 'Responsive Design', 'Brand Identity', 'Prototyping'],
      path: '/services/web-design',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our comprehensive SEO strategies and technical optimizations.',
      features: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Analytics'],
      path: '/services/seo',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions including social media, PPC, email marketing, and marketing automation tools.',
      features: ['Social Media Marketing', 'PPC Campaigns', 'Email Marketing', 'Marketing Tools'],
      path: '/services/digital-marketing',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: QrCode,
      title: 'QR Codes for Restaurants',
      description: 'Contactless menu solutions for restaurants with QR code integration, online ordering, and table management systems.',
      features: ['Digital Menus', 'Online Ordering', 'Table Management', 'Payment Integration'],
      path: '/services/qr-codes',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce & E-commerce',
      description: 'Complete e-commerce solutions with WooCommerce, custom shopping carts, payment gateways, and inventory management.',
      features: ['WooCommerce Setup', 'Payment Gateways', 'Inventory Management', 'Order Processing'],
      path: '/services/ecommerce',
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      icon: Store,
      title: 'Marketplace Creation',
      description: 'Build custom marketplaces connecting buyers and sellers with advanced features like multi-vendor support and commission systems.',
      features: ['Multi-Vendor Platform', 'Commission System', 'Advanced Search', 'Payment Processing'],
      path: '/services/marketplace',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Globe,
      title: 'International Solutions',
      description: 'Global business solutions including multi-language support, currency conversion, international SEO, and compliance.',
      features: ['Multi-Language Support', 'Currency Conversion', 'International SEO', 'Compliance'],
      path: '/services/international',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="floating-card group cursor-pointer h-full"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300 mt-auto">
                <span className="mr-2 text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="floating-card text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see exactly what you're looking for? We specialize in creating custom digital solutions 
              tailored to your unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
              <a href="tel:+37498292248" className="btn-secondary">
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};