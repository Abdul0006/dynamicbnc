import { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: "Our Projects - Dynamic Builders & Contractors",
  description: "Explore our portfolio of successfully completed construction and architecture projects in Rawalpindi & Islamabad. Residential, commercial, healthcare, and more.",
  openGraph: {
    title: "Our Projects - Dynamic Builders & Contractors",
    description: "Explore our portfolio of successfully completed construction and architecture projects in Rawalpindi & Islamabad. Residential, commercial, healthcare, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - Dynamic Builders & Contractors",
    description: "Explore our portfolio of successfully completed construction and architecture projects in Rawalpindi & Islamabad. Residential, commercial, healthcare, and more.",
  }
};

const ProjectsPage = () => {
  return <ProjectsPageClient />;
};

export default ProjectsPage;