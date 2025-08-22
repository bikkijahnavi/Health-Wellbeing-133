'use client';

import React from 'react';
import { Heart, Users, Shield, Activity, MapPin, Calendar, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Maternal Health Initiative',
      category: 'Healthcare Access',
      location: 'Sub-Saharan Africa',
      startDate: '2023',
      status: 'Active',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
      description: 'Comprehensive program providing prenatal care, skilled birth attendance, and postnatal support to reduce maternal mortality rates.',
      impact: {
        beneficiaries: '250,000+',
        metric: 'Lives Impacted',
        achievement: '45% reduction in maternal mortality'
      },
      sdgTargets: ['3.1', '3.8'],
      features: [
        'Mobile health clinics',
        'Training for local healthcare workers',
        'Emergency transportation system',
        'Community health education'
      ]
    },
    {
      id: 2,
      title: 'Mental Health Awareness Campaign',
      category: 'Mental Health',
      location: 'Global',
      startDate: '2022',
      status: 'Active',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
      description: 'Digital platform and community programs focused on destigmatizing mental health and providing accessible mental health resources.',
      impact: {
        beneficiaries: '1.2M+',
        metric: 'People Reached',
        achievement: '60% increase in help-seeking behavior'
      },
      sdgTargets: ['3.4', '3.5'],
      features: [
        'Online counseling platform',
        'Peer support networks',
        'Educational workshops',
        'Crisis intervention hotline'
      ]
    },
    {
      id: 3,
      title: 'Community Vaccination Drive',
      category: 'Disease Prevention',
      location: 'Rural Asia',
      startDate: '2023',
      status: 'Active',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg',
      description: 'Large-scale immunization program targeting preventable diseases in underserved communities with focus on children and adults.',
      impact: {
        beneficiaries: '500,000+',
        metric: 'Vaccinated',
        achievement: '90% vaccination coverage achieved'
      },
      sdgTargets: ['3.2', '3.3'],
      features: [
        'Mobile vaccination units',
        'Cold chain management',
        'Community education campaigns',
        'Digital health records'
      ]
    },
    {
      id: 4,
      title: 'Clean Water & Sanitation',
      category: 'Environmental Health',
      location: 'West Africa',
      startDate: '2021',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/1680173/pexels-photo-1680173.jpeg',
      description: 'Infrastructure development project providing clean water access and improved sanitation facilities to prevent waterborne diseases.',
      impact: {
        beneficiaries: '75,000+',
        metric: 'People Served',
        achievement: '80% reduction in waterborne illness'
      },
      sdgTargets: ['3.3', '6.1', '6.2'],
      features: [
        'Solar-powered water systems',
        'Community-managed maintenance',
        'Hygiene education programs',
        'Waste management systems'
      ]
    },
    {
      id: 5,
      title: 'Digital Health Records',
      category: 'Healthcare Innovation',
      location: 'Southeast Asia',
      startDate: '2024',
      status: 'In Planning',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      description: 'Implementation of electronic health record systems to improve healthcare delivery and patient outcomes in resource-limited settings.',
      impact: {
        beneficiaries: '300,000+',
        metric: 'Expected Reach',
        achievement: 'Projected 30% efficiency improvement'
      },
      sdgTargets: ['3.8', '9.c'],
      features: [
        'Cloud-based health records',
        'Mobile data collection',
        'Interoperable systems',
        'Privacy-first design'
      ]
    },
    {
      id: 6,
      title: 'Youth Health Education',
      category: 'Health Promotion',
      location: 'Latin America',
      startDate: '2022',
      status: 'Active',
      image: 'https://images.pexels.com/photos/8613308/pexels-photo-8613308.jpeg',
      description: 'Comprehensive health education program for adolescents covering nutrition, sexual health, mental wellness, and substance abuse prevention.',
      impact: {
        beneficiaries: '180,000+',
        metric: 'Students Reached',
        achievement: '70% improvement in health knowledge'
      },
      sdgTargets: ['3.4', '3.5', '3.7'],
      features: [
        'Peer-to-peer education',
        'Interactive health modules',
        'School-based clinics',
        'Parent engagement programs'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-100';
      case 'Completed':
        return 'text-blue-600 bg-blue-100';
      case 'In Planning':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Healthcare Access':
        return Heart;
      case 'Mental Health':
        return Users;
      case 'Disease Prevention':
        return Shield;
      case 'Environmental Health':
      case 'Healthcare Innovation':
      case 'Health Promotion':
        return Activity;
      default:
        return Activity;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-sm font-medium text-primary-blue mb-8 animate-fade-in">
            <Activity className="w-4 h-4 mr-2" />
            Our Health Initiatives
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transforming <span className="text-primary-blue">Communities</span> Through Health
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Discover our comprehensive portfolio of health initiatives that directly contribute to 
            UN SDG Goal 3, creating lasting impact in communities worldwide.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const IconComponent = getCategoryIcon(project.category);
              
              return (
                <div 
                  key={project.id}
                  className="neumorphic rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-r from-primary-blue to-indigo-600 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        Since {project.startDate}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-2 neumorphic rounded-full mr-3">
                          <IconComponent className="w-5 h-5 text-primary-blue" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          <p className="text-sm text-gray-600">{project.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact Stats */}
                    <div className="neumorphic-inset rounded-2xl p-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-blue mb-1">
                          {project.impact.beneficiaries}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{project.impact.metric}</div>
                        <div className="text-sm font-medium text-gray-800">
                          {project.impact.achievement}
                        </div>
                      </div>
                    </div>

                    {/* SDG Targets */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Contributing to SDG Targets:</p>
                        <div className="flex gap-2">
                          {project.sdgTargets.map((target, targetIndex) => (
                            <span 
                              key={targetIndex}
                              className="px-3 py-1 bg-primary-blue text-white text-xs font-bold rounded-full"
                            >
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">Key Features:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full neumorphic-hover rounded-2xl py-3 px-6 text-primary-blue font-semibold transition-all duration-300 group">
                      Learn More About This Project
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="neumorphic rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our mission to create healthier communities worldwide. Whether you're an organization, 
              government entity, or individual, there are many ways to get involved and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neumorphic-hover rounded-2xl py-4 px-8 bg-primary-blue text-white font-semibold text-lg transition-all duration-300">
                Start a Partnership
              </button>
              <button className="neumorphic-hover rounded-2xl py-4 px-8 text-primary-blue font-semibold text-lg transition-all duration-300">
                Download Our Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;