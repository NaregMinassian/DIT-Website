import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Users, CreditCard, BarChart, Shield, Settings } from 'lucide-react';

export const Marketplace: React.FC = () => {
  const marketplaceFeatures = [
    {
      icon: Store,
      title: 'Multi-Vendor Platform',
      description: 'Complete marketplace solution supporting unlimited vendors with individual storefronts and management.'
    },
    {
      icon: CreditCard,
      title: 'Commission System',
      description: 'Flexible commission structures with automated payouts and detailed financial reporting.'
    },
    {
      icon: Users,
      title: 'Vendor Management',
      description: 'Comprehensive vendor onboarding, verification, and performance monitoring systems.'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Detailed marketplace analytics, vendor performance metrics, and revenue tracking.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Built-in review systems, dispute resolution, and fraud protection mechanisms.'
    },
    {
      icon: Settings,
      title: 'Admin Control Panel',
      description: 'Powerful admin dashboard for marketplace management, moderation, and configuration.'
    }
  ];

  const marketplaceTypes = [
    {
      title: 'Product Marketplace',
      description: 'Physical goods marketplace like Amazon or eBay',
      examples: ['Electronics', 'Fashion', 'Home & Garden', 'Sports']
    },
    {
      title: 'Service Marketplace',
      description: 'Service-based marketplace like Upwork or Fiverr',
      examples: ['Freelancing', 'Home Services', 'Professional Services', 'Consulting']
    },
    {
      title: 'Digital Marketplace',
      description: 'Digital products and downloads marketplace',
      examples: ['Software', 'Graphics', 'Music', 'E-books']
    },
    {
      title: 'Rental Marketplace',
      description: 'Rental and booking marketplace like Airbnb',
      examples: ['Accommodation', 'Vehicle Rental', 'Equipment Rental', 'Event Spaces']
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Marketplace Creation
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build thriving multi-vendor marketplaces that connect buyers and sellers. Custom marketplace 
            solutions with advanced features for commission management, vendor control, and seamless transactions.
          </p>
        </div>

        {/* Marketplace Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {marketplaceFeatures.map((feature, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Marketplace Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Marketplace Types</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We build marketplaces for various industries and business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketplaceTypes.map((type, index) => (
              <div key={index} className="floating-card">
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Development Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to building successful marketplaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Research', description: 'Market analysis and competitor research' },
              { step: '02', title: 'Strategy', description: 'Business model and feature planning' },
              { step: '03', title: 'Design', description: 'UX/UI design for all user types' },
              { step: '04', title: 'Develop', description: 'Backend and frontend development' },
              { step: '05', title: 'Test', description: 'Quality assurance and user testing' },
              { step: '06', title: 'Launch', description: 'Deployment and vendor onboarding' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-2xl font-bold gradient-text mb-3">{phase.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-xs text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Marketplace Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">For Marketplace Owners</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Comprehensive admin dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Commission management system
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Vendor approval and verification
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Revenue and analytics reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Content moderation tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Dispute resolution system
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">For Vendors</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Individual vendor storefronts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Product/service management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Order and inventory management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Sales analytics and reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Customer communication tools
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Automated payout system
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Technology Stack</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Robust technologies for scalable marketplace solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React/Next.js', 'Node.js', 'MongoDB', 'PostgreSQL',
              'Stripe Connect', 'AWS/Cloud', 'Redis', 'Docker'
            ].map((tech, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-lg font-bold text-white">{tech}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Build Your Marketplace?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a thriving marketplace that connects buyers and sellers while generating sustainable revenue for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Marketplace Project
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Discuss Your Vision
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};