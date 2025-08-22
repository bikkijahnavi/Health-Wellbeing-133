'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Shield, Activity, CheckCircle, Target, Globe } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-sm font-medium text-primary-blue">
                <Globe className="w-4 h-4 mr-2" />
                UN SDG Goal 3: Good Health and Well-being
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Ensure <span className="text-primary-blue">Healthy Lives</span> and Well-being for All
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Join us in promoting sustainable health initiatives, wellness education, and 
                community-driven programs that create lasting positive impact worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects"
                  className="group inline-flex items-center justify-center px-8 py-4 neumorphic-hover rounded-2xl bg-primary-blue text-white font-semibold text-lg transition-all duration-300"
                >
                  Explore Our Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 neumorphic-hover rounded-2xl text-primary-blue font-semibold text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-float">
              <div className="relative neumorphic rounded-3xl p-8 bg-gradient-to-br from-white to-lavender-light">
                <div className="grid grid-cols-2 gap-6">
                  <div className="neumorphic-inset rounded-2xl p-6 text-center">
                    <Heart className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Wellness</h3>
                    <p className="text-sm text-gray-600 mt-1">Promoting healthy lifestyles</p>
                  </div>
                  
                  <div className="neumorphic-inset rounded-2xl p-6 text-center">
                    <Users className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Community</h3>
                    <p className="text-sm text-gray-600 mt-1">Building healthier communities</p>
                  </div>
                  
                  <div className="neumorphic-inset rounded-2xl p-6 text-center">
                    <Shield className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Prevention</h3>
                    <p className="text-sm text-gray-600 mt-1">Disease prevention programs</p>
                  </div>
                  
                  <div className="neumorphic-inset rounded-2xl p-6 text-center">
                    <Activity className="w-8 h-8 text-primary-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-sm text-gray-600 mt-1">Healthcare innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Making a Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through collaborative efforts and innovative solutions, we're working towards achieving SDG Goal 3 targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '2.5M+', label: 'Lives Impacted', icon: Heart },
              { number: '150+', label: 'Active Projects', icon: Target },
              { number: '50+', label: 'Partner Organizations', icon: Users },
            ].map((stat, index) => (
              <div 
                key={index}
                className="neumorphic rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 neumorphic rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <div className="text-4xl font-bold text-primary-blue mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing critical health challenges through targeted initiatives and sustainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Maternal Health',
                description: 'Reducing maternal mortality and ensuring quality healthcare for mothers and newborns.',
                points: ['Prenatal Care', 'Safe Delivery', 'Postnatal Support']
              },
              {
                title: 'Mental Health',
                description: 'Promoting mental wellness and providing accessible mental health resources.',
                points: ['Awareness Programs', 'Counseling Services', 'Community Support']
              },
              {
                title: 'Disease Prevention',
                description: 'Implementing preventive measures against infectious and non-communicable diseases.',
                points: ['Vaccination Programs', 'Health Education', 'Early Detection']
              },
            ].map((area, index) => (
              <div 
                key={index}
                className="neumorphic rounded-3xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                <ul className="space-y-3">
                  {area.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-blue to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our mission to ensure healthy lives and promote well-being for all. 
            Together, we can create a healthier, more sustainable world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold text-lg rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-primary-blue transition-all duration-300"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;