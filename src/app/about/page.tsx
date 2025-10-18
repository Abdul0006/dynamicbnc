import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: "About Us - Dynamic Builders & Contractors",
  description: "Learn about Dynamic Builders & Contractors, your trusted partner in construction, architecture & real estate. Serving Rawalpindi & Islamabad.",
  openGraph: {
    title: "About Us - Dynamic Builders & Contractors",
    description: "Learn about Dynamic Builders & Contractors, your trusted partner in construction, architecture & real estate. Serving Rawalpindi & Islamabad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Dynamic Builders & Contractors",
    description: "Learn about Dynamic Builders & Contractors, your trusted partner in construction, architecture & real estate. Serving Rawalpindi & Islamabad.",
  }
};

const AboutPage = () => {
  return <AboutPageClient />;
};

export default AboutPage;