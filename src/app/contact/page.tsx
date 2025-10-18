import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Us - Dynamic Builders & Contractors",
  description: "Get in touch with Dynamic Builders & Contractors. Contact us for construction, architecture, and real estate services in Rawalpindi & Islamabad.",
  openGraph: {
    title: "Contact Us - Dynamic Builders & Contractors",
    description: "Get in touch with Dynamic Builders & Contractors. Contact us for construction, architecture, and real estate services in Rawalpindi & Islamabad.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Dynamic Builders & Contractors",
    description: "Get in touch with Dynamic Builders & Contractors. Contact us for construction, architecture, and real estate services in Rawalpindi & Islamabad.",
  }
};

const ContactPage = () => {
  return <ContactPageClient />;
};

export default ContactPage;