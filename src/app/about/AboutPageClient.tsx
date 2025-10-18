'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const AboutPageClient = () => {
  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider block mb-2">
            ABOUT US
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            At Dynamic Builders & Contractors, we blend creativity, quality, and integrity in every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Our Story
            </h2>
            <p className="text-text-secondary mb-6">
              Founded with a vision to transform the construction and architecture landscape in Pakistan, 
              Dynamic Builders & Contractors has grown to become a trusted name in Rawalpindi & Islamabad. 
              Our journey began with a simple mission: to deliver exceptional construction, architecture, 
              and real estate solutions with uncompromising quality.
            </p>
            <p className="text-text-secondary mb-6">
              Our team includes experienced engineers, architects, and designers who are dedicated to 
              building trust with our clients, not just structures. We take pride in our commitment 
              to excellence and attention to detail.
            </p>
            <div className="flex items-center mt-6">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Call Us Now</h3>
                <a href="tel:+923361110444" className="text-primary hover:text-primary-dark text-lg font-medium">
                  +92 336 1110444
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Integrity</h3>
              <p className="text-text-secondary">
                We conduct business with honesty and transparency in all our dealings.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Excellence</h3>
              <p className="text-text-secondary">
                We strive for perfection in every project, exceeding client expectations.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Commitment</h3>
              <p className="text-text-secondary">
                We are dedicated to delivering on our promises and meeting deadlines.
              </p>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              View Our Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPageClient;