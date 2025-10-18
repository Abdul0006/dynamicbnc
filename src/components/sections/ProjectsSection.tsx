'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "DYNAMIC HEIGHTS",
      description: "A luxurious residential complex with modern amenities.",
      image: "https://picsum.photos/600/400?random=10"
    },
    {
      id: 2,
      title: "BAHADAR HOUSE",
      description: "Custom-designed residential property with landscape gardens.",
      image: "https://picsum.photos/600/400?random=11"
    },
    {
      id: 3,
      title: "DR. NIAZ HOSPITAL ABBOTTABAD",
      description: "Modern healthcare facility with advanced infrastructure.",
      image: "https://picsum.photos/600/400?random=12"
    },
    {
      id: 4,
      title: "MODERN RESIDENCE",
      description: "Contemporary home design with energy-efficient features.",
      image: "https://picsum.photos/600/400?random=13"
    }
  ];

  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider block mb-2">
            OUR RECENT PROJECTS
          </span>
          <h2 className="section-title text-text-primary">
            SHOWCASING EXCELLENCE
          </h2>
          <p className="section-subtitle text-text-secondary max-w-3xl mx-auto">
            Signature projects crafted with precision and passion for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="secondary" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;