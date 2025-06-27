import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Cloud, Shield, Zap, Monitor } from 'lucide-react';

export const WebDevelopment: React.FC = () => {
  const technologies = [
    { name: 'React', description: 'Modern frontend development' },
    { name: 'Node.js', description: 'Scalable backend solutions' },
    { name: 'TypeScript', description: 'Type-safe development' },
    { name: 'Next.js', description: 'Full-stack React framework' },
    { name: 'MongoDB', description: 'NoSQL database solutions' },
    { name: 'PostgreSQL', description: 'Relational database systems' },
    { name: 'AWS', description: 'Cloud infrastructure' },
    { name: 'Docker', description: 'Containerization' }
  ];

  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web applications built from scratch to meet your specific business requirements.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized database architecture for performance, scalability, and data integrity.'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Scalable cloud infrastructure setup with automated deployment and monitoring.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Robust security measures including encryption, authentication, and vulnerability testing.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized code, caching, and CDN integration.'
    },
    {
      icon: Monitor,
      title: 'Maintenance & Support',
      description: '24/7 monitoring, regular updates, and ongoing technical support for your applications.'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Web Development
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build powerful, scalable web applications with modern technologies. From simple websites 
            to complex enterprise solutions, we deliver exceptional digital experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Technologies We Use</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to build robust, scalable, and maintainable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-lg font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Development Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Planning', description: 'Architecture design and project roadmap' },
              { step: '03', title: 'Development', description: 'Agile development with regular updates' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Call for Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};