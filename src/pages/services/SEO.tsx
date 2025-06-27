import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Target, BarChart, Globe, Zap } from 'lucide-react';

export const SEO: React.FC = () => {
  const seoServices = [
    {
      icon: Search,
      title: 'Technical SEO',
      description: 'Website optimization for search engine crawlers, including site speed, mobile-friendliness, and structured data.'
    },
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'In-depth keyword analysis to identify high-value search terms your target audience is using.'
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Strategic content planning and optimization to improve rankings and engage your audience.'
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description: 'Optimize your online presence for local searches and improve visibility in your geographic area.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure SEO performance and ROI.'
    },
    {
      icon: Zap,
      title: 'Link Building',
      description: 'Strategic link building campaigns to improve domain authority and search rankings.'
    }
  ];

  const seoMetrics = [
    { metric: '300%', description: 'Average organic traffic increase' },
    { metric: '85%', description: 'First page ranking achievement' },
    { metric: '40%', description: 'Average conversion rate improvement' },
    { metric: '90%', description: 'Client satisfaction rate' }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            SEO Optimization
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies. 
            From technical optimization to content marketing, we help you dominate search results.
          </p>
        </div>

        {/* SEO Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {seoServices.map((service, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* SEO Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our SEO Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A data-driven approach that delivers sustainable organic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', description: 'Comprehensive website and competitor analysis' },
              { step: '02', title: 'Strategy', description: 'Custom SEO strategy and roadmap creation' },
              { step: '03', title: 'Implementation', description: 'Technical and content optimization execution' },
              { step: '04', title: 'Monitoring', description: 'Continuous tracking and optimization' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Results</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {seoMetrics.map((item, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Checklist */}
        <div className="mb-20">
          <div className="floating-card">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">What We Optimize</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Page loading speed optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Mobile responsiveness
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Meta tags and descriptions
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Header structure (H1-H6)
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Image optimization and alt tags
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Internal linking structure
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  XML sitemaps
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Schema markup implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  URL structure optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Content quality and relevance
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  User experience signals
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                  Local business listings
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's analyze your current SEO performance and create a strategy that drives organic growth and qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Free SEO Audit
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Speak with SEO Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};