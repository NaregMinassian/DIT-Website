import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Zap, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your needs and exceed expectations.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring robust, scalable, and maintainable solutions.'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Our team is passionate about technology and committed to delivering exceptional results for every client.'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started our journey in Yerevan, Armenia' },
    { year: '2020', title: 'First 50 Clients', description: 'Established strong local presence' },
    { year: '2021', title: 'International Expansion', description: 'Started serving clients worldwide' },
    { year: '2022', title: 'Award Recognition', description: 'Recognized as top digital agency in Armenia' },
    { year: '2023', title: '200+ Projects', description: 'Delivered successful projects across 15 countries' },
    { year: '2024', title: 'AI Integration', description: 'Leading the way with AI-powered solutions' }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Digital IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a forward-thinking digital agency based in Yerevan, Armenia, dedicated to 
            transforming businesses worldwide with innovative technology solutions and exceptional service.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="floating-card">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To empower businesses of all sizes with cutting-edge digital solutions that drive growth, 
              improve efficiency, and create meaningful connections with their customers. We believe 
              technology should be accessible, powerful, and transformative.
            </p>
          </div>

          <div className="floating-card">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-accent-600 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To become the leading digital transformation partner for businesses worldwide, 
              bridging the gap between local expertise and global reach. We envision a future 
              where every business can harness the full potential of digital technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="floating-card text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our growth and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-600 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="floating-card">
                    <div className="text-2xl font-bold text-primary-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full relative z-10 flex-shrink-0"></div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="floating-card text-center mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expertise 
            and passion for digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};