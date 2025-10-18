'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ConsultationSection from '@/components/sections/ConsultationSection';
import SpecializationSection from '@/components/sections/SpecializationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

const HomePageClient = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ConsultationSection />
      <SpecializationSection />
      <ProjectsSection />
    </main>
  );
};

export default HomePageClient;