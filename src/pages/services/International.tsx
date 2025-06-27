import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Languages, CreditCard, Search, Shield, Zap } from 'lucide-react';

export const International: React.FC = () => {
  const internationalServices = [
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Complete website localization with professional translation and cultural adaptation for global markets.'
    },
    {
      icon: CreditCard,
      title: 'Multi-Currency System',
      description: 'Dynamic currency conversion, local payment methods, and region-specific pricing strategies.'
    },
    {
      icon: Search,
      title: 'International SEO',
      description: 'Hreflang implementation, country-specific SEO optimization, and local search visibility.'
    },
    {
      icon: Shield,
      title: 'Compliance & Legal',
      description: 'GDPR, CCPA, and other international privacy regulations compliance and legal requirements.'
    },
    {
      icon: Globe,
      title: 'Global CDN Setup',
      description: 'Content delivery network optimization for fast loading times across all geographic regions.'
    },
    {
      icon: Zap,
      title: 'Regional Optimization',
      description: 'Performance optimization and hosting solutions tailored for specific geographic markets.'
    }
  ];

  const regions = [
    {
      region: 'Europe',
      features: ['GDPR Compliance', 'Multi-language EU sites', 'Local payment methods', 'VAT handling']
    },
    {
      region: 'North America',
      features: ['CCPA Compliance', 'US/Canada localization', 'Regional SEO', 'Local business listings']
    },
    {
      region: 'Asia-Pacific',
      features: ['Cultural adaptation', 'Local payment gateways', 'Mobile-first approach', 'Regional partnerships']
    },
    {
      region: 'Middle East & Africa',
      features: ['RTL language support', 'Cultural sensitivity', 'Local regulations', 'Regional hosting']
    }
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Armenian'
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            International Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expand your business globally with comprehensive international solutions. From multi-language 
            websites to compliance and localization, we help you succeed in international markets.
          </p>
        </div>

        {/* International Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {internationalServices.map((service, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Regional Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Regional Expertise</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for different global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="floating-card">
                <h3 className="text-xl font-bold text-white mb-4">{region.region}</h3>
                <ul className="space-y-3">
                  {region.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Localization Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Localization Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach to international expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Analysis', description: 'Market research and target audience analysis' },
              { step: '02', title: 'Strategy', description: 'International expansion strategy development' },
              { step: '03', title: 'Localization', description: 'Content translation and cultural adaptation' },
              { step: '04', title: 'Technical', description: 'Multi-language and currency implementation' },
              { step: '05', title: 'Launch', description: 'Regional launch and ongoing optimization' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-3xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Supported */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Languages We Support</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional translation and localization services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.map((language, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-sm font-bold text-white">{language}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Features */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Compliance & Legal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy Regulations</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    GDPR (European Union)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    CCPA (California)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    PIPEDA (Canada)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Cookie consent management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Data protection policies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Business Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Terms of service localization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Tax compliance (VAT, GST)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Accessibility standards (WCAG)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Industry-specific regulations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Legal documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's expand your business internationally with comprehensive localization and compliance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start International Project
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Discuss Global Strategy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};