'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const ConsultationSection = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">
            GET YOUR FREE CONSULTATION
          </h2>
          <p className="section-subtitle text-white/90 max-w-2xl mx-auto mb-8">
            We provide expert consultation services in Rawalpindi, Islamabad, and Bahria Town. 
            Book your appointment today and take the first step towards your dream project.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;