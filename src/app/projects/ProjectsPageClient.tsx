'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import ProjectsSection from '@/components/sections/ProjectsSection';

const ProjectsPageClient = () => {
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
            OUR PROJECTS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Completed Projects
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects showcasing our expertise and craftsmanship.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <ProjectsSection />

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Residential", count: 42, description: "Luxurious homes and apartment complexes" },
              { title: "Commercial", count: 28, description: "Offices, retail spaces, and business centers" },
              { title: "Healthcare", count: 8, description: "Hospitals, clinics, and medical facilities" },
              { title: "Educational", count: 15, description: "Schools, colleges, and training centers" },
              { title: "Industrial", count: 12, description: "Factories, warehouses, and manufacturing units" },
              { title: "Infrastructure", count: 19, description: "Roads, bridges, and civic projects" }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-primary mb-2">{category.count}+</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{category.title}</h3>
                <p className="text-text-secondary">{category.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-background rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Ali Raza",
                role: "Property Developer",
                content: "Dynamic BNC delivered our commercial complex on time and within budget. Their attention to detail and quality is unmatched in the industry."
              },
              {
                name: "Fatima Khan",
                role: "Homeowner",
                content: "The team transformed our dream house into reality. Professional, reliable, and creative - couldn't be happier with the results."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-dashed mr-4"></div>
                  <div>
                    <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                    <p className="text-text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPageClient;