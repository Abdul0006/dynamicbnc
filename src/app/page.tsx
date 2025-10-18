import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Dynamic Builders & Contractors - Home",
  description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Leading construction company in Rawalpindi & Islamabad.",
  openGraph: {
    title: "Dynamic Builders & Contractors - Home",
    description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Leading construction company in Rawalpindi & Islamabad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Builders & Contractors - Home",
    description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Leading construction company in Rawalpindi & Islamabad.",
  }
};

const HomePage = () => {
  return <HomePageClient />;
};

export default HomePage;