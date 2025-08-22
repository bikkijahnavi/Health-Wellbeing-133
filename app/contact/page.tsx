'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Heart, MessageCircle, User } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You would integrate with your backend or email service here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message anytime',
      contact: 'hello@healthwise.org',
      link: 'mailto:hello@healthwise.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: '123 Health Street, Wellness City, HC 12345',
      link: '#'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Partnership Opportunities',
    'Volunteer Interest',
    'Project Collaboration',
    'Media & Press',
    'Donations & Funding',
    'Technical Support',
    'Other'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-sm font-medium text-primary-blue mb-8 animate-fade-in">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Let's Work Together for <span className="text-primary-blue">Better Health</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Ready to make a difference in global health? We'd love to hear from you. Whether you're interested 
            in partnerships, volunteering, or learning more about our initiatives, we're here to connect.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={index}
                  className="neumorphic rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 neumorphic rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 mb-4">{info.description}</p>
                  <a 
                    href={info.link}
                    className="text-primary-blue font-semibold hover:underline transition-all duration-300"
                  >
                    {info.contact}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="neumorphic rounded-3xl p-8 lg:p-12 animate-fade-in">
              <div className="flex items-center mb-8">
                <div className="p-3 neumorphic rounded-full mr-4">
                  <Send className="w-6 h-6 text-primary-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full neumorphic-inset rounded-2xl pl-12 pr-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full neumorphic-inset rounded-2xl pl-12 pr-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full neumorphic-inset rounded-2xl px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your inquiry, partnership idea, or how you'd like to get involved..."
                    className="w-full neumorphic-inset rounded-2xl px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full neumorphic-hover rounded-2xl py-4 px-8 bg-primary-blue text-white font-semibold text-lg transition-all duration-300 hover:scale-105 group"
                >
                  Send Message
                  <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-6 text-center">
                We typically respond within 24-48 hours. For urgent matters, please call us directly.
              </p>
            </div>

            {/* Additional Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Office Hours */}
              <div className="neumorphic rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 neumorphic rounded-full mr-4">
                    <Clock className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  All times are in Eastern Standard Time (EST)
                </p>
              </div>

              {/* Partnership Opportunities */}
              <div className="neumorphic rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 neumorphic rounded-full mr-4">
                    <Heart className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Get Involved</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Partner Organizations</p>
                      <p className="text-sm text-gray-600">Collaborate on health initiatives</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Healthcare Professionals</p>
                      <p className="text-sm text-gray-600">Join our expert network</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Volunteers</p>
                      <p className="text-sm text-gray-600">Make a direct impact</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Corporate Partners</p>
                      <p className="text-sm text-gray-600">Support our mission</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="neumorphic rounded-3xl p-8 bg-gradient-to-r from-red-50 to-pink-50 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Health Information</h3>
                <p className="text-red-700 text-sm mb-4">
                  If you're experiencing a medical emergency, please contact your local emergency services immediately.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-800 font-semibold">Emergency Services:</span>
                  <span className="text-red-800 font-bold text-lg">911 (US) | 999 (UK) | 112 (EU)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lavender-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
            <div className="h-64 bg-gradient-to-r from-primary-blue to-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Interactive Map Coming Soon</p>
                <p className="text-blue-100">123 Health Street, Wellness City, HC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;