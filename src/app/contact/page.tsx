// components/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto pt-[6%]">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-2 lg:mb-3">
            Contact
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Have questions or need AI guidance? Let us know by filling out the form, and we&apos;ll be in touch!
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 lg:pt-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-medium text-white/60 mb-1 uppercase tracking-wider">
                  E-mail
                </h3>
                <a 
                  href="mailto:Admin@xtract.com"
                  className="text-base sm:text-lg lg:text-xl font-semibold text-white hover:text-white/80 transition-colors break-all"
                >
                  Admin@xtract.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-medium text-white/60 mb-1 uppercase tracking-wider">
                  Phone
                </h3>
                <a 
                  href="tel:+19698198061"
                  className="text-base sm:text-lg lg:text-xl font-semibold text-white hover:text-white/80 transition-colors"
                >
                  +1(969) 819-8061
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* First Name */}
                <div>
                  <label 
                    htmlFor="firstName" 
                    className="block text-xs sm:text-sm font-medium text-white/80 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-black/40 border border-white/20 rounded-lg 
                             text-white placeholder-white/40 
                             focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                             transition-all duration-200"
                    placeholder="Jane"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label 
                    htmlFor="lastName" 
                    className="block text-xs sm:text-sm font-medium text-white/80 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-black/40 border border-white/20 rounded-lg 
                             text-white placeholder-white/40 
                             focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                             transition-all duration-200"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs sm:text-sm font-medium text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-black/40 border border-white/20 rounded-lg 
                             text-white placeholder-white/40 
                             focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                             transition-all duration-200"
                    placeholder="jane@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-xs sm:text-sm font-medium text-white/80 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-black/40 border border-white/20 rounded-lg 
                             text-white placeholder-white/40 
                             focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                             transition-all duration-200"
                    placeholder="+1(969) 819-8061"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs sm:text-sm font-medium text-white/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 text-sm bg-black/40 border border-white/20 rounded-lg 
                           text-white placeholder-white/40 
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                           transition-all duration-200 resize-none"
                  placeholder="Hi, I am Jane I help.with....."
                />
              </div>

              {/* Submit Button with Gradient */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 
                         text-white font-semibold rounded-lg
                         hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700
                         transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         text-sm sm:text-base shadow-lg shadow-purple-500/30"
              >
                {isSubmitting ? 'Sending...' : 'Submit Form'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
