import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Trophy, Globe } from 'lucide-react';

export const Home: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies',
      path: '/services/web-development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive real results',
      path: '/services/digital-marketing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with WooCommerce & custom platforms',
      path: '/services/ecommerce',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Trophy },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-slide-up">
              Future-Ready
              <br />
              Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge web development, digital marketing, 
              and e-commerce solutions from Yerevan, Armenia to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary text-lg">
                Explore Services
              </Link>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center floating-card">
                <stat.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="floating-card group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="floating-card text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something amazing together. 
              From concept to launch, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+37498292248" className="btn-secondary text-lg">
                Call Now: +374 98 292 248
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};