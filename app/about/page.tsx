'use client';

import React from 'react';
import { Heart, Users, Target, Globe, Award, Lightbulb, Shield, Activity } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-sm font-medium text-primary-blue mb-8 animate-fade-in">
            <Heart className="w-4 h-4 mr-2" />
            About HealthWise
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transforming Lives Through <span className="text-primary-blue">Healthy Communities</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            HealthWise is dedicated to achieving UN Sustainable Development Goal 3: ensuring healthy lives 
            and promoting well-being for all at all ages. We believe that health is a fundamental human right 
            and work tirelessly to make quality healthcare accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="neumorphic rounded-3xl p-10 animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="p-3 neumorphic rounded-full mr-4">
                  <Target className="w-8 h-8 text-primary-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower communities worldwide by providing access to quality healthcare, 
                promoting preventive health measures, and fostering sustainable wellness practices 
                that contribute to achieving SDG Goal 3.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduce global health inequalities',
                  'Strengthen healthcare systems',
                  'Promote preventive care',
                  'Support mental health initiatives'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="neumorphic rounded-3xl p-10 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 neumorphic rounded-full mr-4">
                  <Globe className="w-8 h-8 text-primary-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where everyone, regardless of their background or location, has access to 
                quality healthcare services and can live healthy, fulfilling lives in thriving communities.
              </p>
              <ul className="space-y-3">
                {[
                  'Universal health coverage',
                  'Elimination of health disparities',
                  'Sustainable healthcare systems',
                  'Global health security'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and shape our approach to global health initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We approach every individual with empathy and understanding, recognizing the human dignity in all our interactions.'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We work together with communities, organizations, and governments to create sustainable health solutions.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do, from program delivery to impact measurement.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We embrace creative solutions and cutting-edge approaches to address complex health challenges.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="neumorphic rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 neumorphic rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goal 3 Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                UN SDG Goal 3: Good Health and Well-being
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our work directly contributes to achieving the targets set by the United Nations 
                for ensuring healthy lives and promoting well-being for all at all ages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  target: '3.1',
                  title: 'Maternal Mortality',
                  description: 'Reduce global maternal mortality ratio to less than 70 per 100,000 live births.'
                },
                {
                  target: '3.2',
                  title: 'Child Mortality',
                  description: 'End preventable deaths of newborns and children under 5 years of age.'
                },
                {
                  target: '3.3',
                  title: 'Infectious Diseases',
                  description: 'End epidemics of AIDS, tuberculosis, malaria, and other diseases.'
                },
                {
                  target: '3.4',
                  title: 'Mental Health',
                  description: 'Promote mental health and well-being through prevention and treatment.'
                },
                {
                  target: '3.5',
                  title: 'Substance Abuse',
                  description: 'Strengthen prevention and treatment of substance abuse and addiction.'
                },
                {
                  target: '3.8',
                  title: 'Universal Coverage',
                  description: 'Achieve universal health coverage and access to quality healthcare services.'
                }
              ].map((target, index) => (
                <div 
                  key={index}
                  className="neumorphic-inset rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {target.target}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{target.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{target.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ a comprehensive, evidence-based approach to create sustainable health improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Prevention First',
                description: 'We prioritize preventive care and health education to address root causes and reduce the burden of disease before it occurs.'
              },
              {
                icon: Users,
                title: 'Community-Centered',
                description: 'Our programs are designed with and by communities, ensuring cultural sensitivity and long-term sustainability.'
              },
              {
                icon: Activity,
                title: 'Data-Driven Impact',
                description: 'We use rigorous monitoring and evaluation to measure our impact and continuously improve our interventions.'
              }
            ].map((approach, index) => (
              <div 
                key={index}
                className="neumorphic rounded-3xl p-10 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 neumorphic rounded-full mb-8">
                  <approach.icon className="w-10 h-10 text-primary-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;