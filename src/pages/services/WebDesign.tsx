import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Smartphone, Eye, Layers, Figma, Zap } from 'lucide-react';

export const WebDesign: React.FC = () => {
  const designServices = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that look perfect on all devices, from smartphones to desktop computers.'
    },
    {
      icon: Eye,
      title: 'Brand Identity',
      description: 'Cohesive visual branding that reflects your company values and resonates with your target audience.'
    },
    {
      icon: Layers,
      title: 'Prototyping',
      description: 'Interactive prototypes that help visualize and test user journeys before development begins.'
    },
    {
      icon: Figma,
      title: 'Design Systems',
      description: 'Scalable design systems that ensure consistency across all your digital touchpoints.'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Data-driven design decisions that improve user engagement and increase conversion rates.'
    }
  ];

  const designPrinciples = [
    {
      title: 'User-Centered Design',
      description: 'Every design decision is made with your users in mind, ensuring optimal usability and satisfaction.'
    },
    {
      title: 'Visual Hierarchy',
      description: 'Strategic use of typography, color, and spacing to guide users through your content effectively.'
    },
    {
      title: 'Performance First',
      description: 'Optimized designs that load quickly and provide smooth interactions across all devices.'
    },
    {
      title: 'Accessibility',
      description: 'Inclusive designs that work for everyone, meeting WCAG guidelines and best practices.'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Web Design
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Create stunning, user-friendly designs that captivate your audience and drive business results. 
            Our design approach combines aesthetics with functionality for maximum impact.
          </p>
        </div>

        {/* Design Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {designServices.map((service, index) => (
            <div key={index} className="floating-card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Design Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures every design meets your goals and exceeds user expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Research', description: 'User research and competitive analysis' },
              { step: '02', title: 'Strategy', description: 'Design strategy and content planning' },
              { step: '03', title: 'Wireframes', description: 'Information architecture and wireframing' },
              { step: '04', title: 'Design', description: 'Visual design and interactive prototyping' },
              { step: '05', title: 'Testing', description: 'User testing and design refinement' }
            ].map((phase, index) => (
              <div key={index} className="floating-card text-center">
                <div className="text-3xl font-bold gradient-text mb-4">{phase.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Principles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Design Principles</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The core principles that guide our design decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="floating-card">
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-6">Design Tools</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional design tools for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision'
            ].map((tool, index) => (
              <div key={index} className="floating-card text-center">
                <h4 className="text-lg font-bold text-white">{tool}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="floating-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a stunning design that captures your brand essence and delivers exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Design Project
            </Link>
            <a href="tel:+37498292248" className="btn-secondary">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};