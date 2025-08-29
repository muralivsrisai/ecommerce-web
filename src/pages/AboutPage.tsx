import React from 'react';
import { Award, Users, Target, Heart, Truck, Shield, Star } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source only the finest products from trusted brands and manufacturers worldwide.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing exceptional customer experiences.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously evolve our platform to offer cutting-edge shopping experiences.',
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to responsible business practices and environmental stewardship.',
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Fast & Free Shipping',
      description: 'Free shipping on orders over $50, with express delivery options available.',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your personal and payment information is protected with bank-level security.',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Every product undergoes rigorous quality checks before reaching our customers.',
    },
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.5%', label: 'Customer Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About EliteStore
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than just an e-commerce platform. We're your trusted partner in discovering 
              premium products that enhance your lifestyle and bring joy to your everyday experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, EliteStore began with a simple mission: to make premium quality 
                  products accessible to everyone, everywhere. What started as a small team with big 
                  dreams has grown into a trusted global marketplace.
                </p>
                <p>
                  We believe that exceptional products shouldn't be limited by geography or accessibility. 
                  That's why we've built a platform that connects customers with the world's best brands, 
                  all while maintaining the personal touch of a local store.
                </p>
                <p>
                  Today, we're proud to serve over 500,000 customers worldwide, offering everything from 
                  cutting-edge electronics to timeless fashion pieces, all backed by our commitment to 
                  quality and service excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">5 Years</div>
                <div className="text-blue-100">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EliteStore?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional shopping experience at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">
              These numbers represent real people and real experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              To democratize access to premium products worldwide while building lasting relationships 
              with our customers through trust, transparency, and exceptional service.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate team behind EliteStore's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Former VP at Amazon with 15 years of e-commerce experience.',
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Tech visionary who previously led engineering at Shopify.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Customer Experience',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Customer service expert focused on creating delightful experiences.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;