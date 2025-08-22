'use client';

import React from 'react';
import { Heart, Calendar, User, ArrowRight, BookOpen, Activity, Users, Shield } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Preventive Healthcare: Technology Meets Community Wellness',
    excerpt: 'Exploring how digital health innovations are transforming preventive care delivery in underserved communities worldwide.',
    author: 'Dr. Sarah Chen',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Healthcare Innovation',
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg',
    tags: ['Digital Health', 'Prevention', 'Technology', 'Community Health']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Mental Health in the Workplace: Building Supportive Environments',
      excerpt: 'How organizations can create mentally healthy workplaces that support employee well-being and productivity.',
      author: 'Marcus Johnson',
      date: '2024-12-12',
      readTime: '6 min read',
      category: 'Mental Health',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg',
      tags: ['Mental Health', 'Workplace Wellness', 'Employee Support']
    },
    {
      id: 3,
      title: 'Maternal Health Success Stories: Lessons from Sub-Saharan Africa',
      excerpt: 'Real impact stories from our maternal health programs and the communities they serve.',
      author: 'Dr. Amara Okafor',
      date: '2024-12-10',
      readTime: '5 min read',
      category: 'Maternal Health',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
      tags: ['Maternal Health', 'Success Stories', 'Community Impact']
    },
    {
      id: 4,
      title: 'Clean Water, Healthy Communities: The Connection That Saves Lives',
      excerpt: 'Understanding the critical link between water access and community health outcomes.',
      author: 'Elena Rodriguez',
      date: '2024-12-08',
      readTime: '7 min read',
      category: 'Environmental Health',
      image: 'https://images.pexels.com/photos/1680173/pexels-photo-1680173.jpeg',
      tags: ['Water Access', 'Environmental Health', 'Disease Prevention']
    },
    {
      id: 5,
      title: 'Youth Health Education: Empowering the Next Generation',
      excerpt: 'Innovative approaches to health education that engage young people and create lasting behavior change.',
      author: 'Carlos Martinez',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Health Education',
      image: 'https://images.pexels.com/photos/8613308/pexels-photo-8613308.jpeg',
      tags: ['Youth Health', 'Education', 'Behavior Change']
    },
    {
      id: 6,
      title: 'Universal Health Coverage: Progress and Challenges Ahead',
      excerpt: 'Examining global progress toward SDG 3.8 and the obstacles that remain in achieving universal health coverage.',
      author: 'Dr. James Mitchell',
      date: '2024-12-03',
      readTime: '9 min read',
      category: 'Policy & Systems',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      tags: ['Universal Coverage', 'Health Policy', 'SDG Goals']
    }
  ];

  const categories = [
    { name: 'All Posts', count: 25, icon: BookOpen },
    { name: 'Mental Health', count: 8, icon: Heart },
    { name: 'Healthcare Innovation', count: 6, icon: Activity },
    { name: 'Community Health', count: 7, icon: Users },
    { name: 'Disease Prevention', count: 4, icon: Shield }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mental Health':
        return 'bg-purple-100 text-purple-700';
      case 'Healthcare Innovation':
        return 'bg-blue-100 text-blue-700';
      case 'Maternal Health':
        return 'bg-pink-100 text-pink-700';
      case 'Environmental Health':
        return 'bg-green-100 text-green-700';
      case 'Health Education':
        return 'bg-orange-100 text-orange-700';
      case 'Policy & Systems':
        return 'bg-indigo-100 text-indigo-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-sm font-medium text-primary-blue mb-8 animate-fade-in">
            <BookOpen className="w-4 h-4 mr-2" />
            Health & Wellness Insights
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Empowering Health Through <span className="text-primary-blue">Knowledge</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Discover the latest insights, research, and stories from our global health initiatives. 
            Stay informed about innovations in healthcare, wellness practices, and community health solutions.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  className="neumorphic-hover rounded-full px-6 py-3 flex items-center space-x-2 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-4 h-4 text-primary-blue" />
                  <span className="text-gray-700 font-medium">{category.name}</span>
                  <span className="bg-primary-blue text-white text-xs px-2 py-1 rounded-full">{category.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.readTime}</p>
                    </div>
                  </div>

                  <button className="group neumorphic-hover rounded-2xl px-6 py-3 text-primary-blue font-semibold transition-all duration-300">
                    Read More
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Health Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest articles on global health initiatives, wellness practices, and community health solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="neumorphic rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Post Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>

                    <button className="group text-primary-blue font-semibold text-sm hover:underline transition-all duration-300">
                      Read More
                      <ArrowRight className="inline-block ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-primary-blue hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        #{tag.toLowerCase().replace(' ', '')}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="neumorphic-hover rounded-2xl px-8 py-4 text-primary-blue font-semibold text-lg transition-all duration-300 hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="neumorphic rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 neumorphic rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary-blue" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Informed About Global Health
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest health insights, project updates, 
              and wellness tips delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full neumorphic-inset rounded-2xl px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all duration-300"
                />
              </div>
              <button className="neumorphic-hover rounded-2xl px-8 py-4 bg-primary-blue text-white font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;