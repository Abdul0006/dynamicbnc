'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const AboutSection = () => {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider block mb-2">
              ABOUT US
            </span>
            <h2 className="section-title text-text-primary">
              WHO WE ARE
            </h2>
            <p className="text-text-secondary mb-6">
              At Dynamic Builders & Contractors, we blend creativity, quality, and integrity in every project we undertake. 
              Our focus is on delivering exceptional construction, architecture, and real estate solutions in Rawalpindi & Islamabad.
            </p>
            <p className="text-text-secondary mb-6">
              Our team includes experienced engineers, architects, and designers who are dedicated to building trust with our clients, 
              not just structures. We take pride in our commitment to excellence and attention to detail.
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
              <div className="w-full h-96">
                <img
                  src="https://picsum.photos/800/600?random=20"
                  alt="Construction site"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;