import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Mail, Share2, BarChart, Zap } from 'lucide-react';

export const DigitalMarketing: React.FC = () => {
  const marketingServices = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major social platforms with strategic content and targeted campaigns.'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Google Ads, Facebook Ads, and other paid campaigns that deliver immediate results and measurable ROI.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email sequences and newsletters that nurture leads and drive customer retention.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and analysis to optimize campaigns and maximize marketing performance.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies focused on sustainable business growth and customer acquisition.'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Advanced marketing tools setup including CRM integration, lead scoring, and workflow automation.'
    }
  ];

  const marketingTools = [
    'Google Analytics', 'Google Ads', 'Facebook Business', 'HubSpot',
    'Mailchimp', 'Hootsuite', 'SEMrush', 'Hotjar'
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Drive growth with comprehensive digital marketing strategies. From social media campaigns 
            to marketing automation, we help you reach and convert your target audience effectively.
          </p>
        </div>

        {/* Marketing Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {marketingServices.map((service, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Marketing Strategy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Marketing Approach</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive strategy that covers every touchpoint of your customer journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', description: 'Market analysis and audience research' },
              { step: '02', title: 'Strategy', description: 'Custom marketing strategy development' },
              { step: '03', title: 'Execute', description: 'Campaign launch and optimization' },
              { step: '04', title: 'Analyze', description: 'Performance tracking and reporting' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Tools */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Marketing Tools We Install</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional marketing tools setup and configuration for maximum campaign effectiveness
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketingTools.map((tool, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-lg font-bold text-white">{tool}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Types */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Campaign Types We Run</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Paid Advertising</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Google Search Ads
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Google Display Network
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Facebook & Instagram Ads
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    LinkedIn Advertising
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    YouTube Advertising
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Organic Marketing</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Content Marketing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Social Media Management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Email Newsletter Campaigns
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Influencer Partnerships
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    Community Building
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive digital marketing strategy that drives qualified leads and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Marketing Strategy
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Discuss Your Goals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};