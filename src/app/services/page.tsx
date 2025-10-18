import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Our Services - Dynamic Builders & Contractors",
  description: "Explore our comprehensive range of construction, architecture, and design services. Specializing in architecture, landscape design, site planning, and interior design.",
  openGraph: {
    title: "Our Services - Dynamic Builders & Contractors",
    description: "Explore our comprehensive range of construction, architecture, and design services. Specializing in architecture, landscape design, site planning, and interior design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Dynamic Builders & Contractors",
    description: "Explore our comprehensive range of construction, architecture, and design services. Specializing in architecture, landscape design, site planning, and interior design.",
  }
};

const ServicesPage = () => {
  return <ServicesPageClient />;
};

export default ServicesPage;