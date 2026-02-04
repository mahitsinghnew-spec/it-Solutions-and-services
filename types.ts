
import { Laptop, Globe, Server, BarChart3, Settings } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  features: string[];
  targetAudience: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'hardware-software',
    title: 'Computer Hardware & Software Support',
    shortDesc: 'Expert troubleshooting, installation, and hardware upgrades for desktops and laptops.',
    fullDesc: 'We provide comprehensive hardware and software solutions to keep your systems running at peak performance. From OS installation to advanced hardware diagnosis, our technicians are equipped to handle all your computer needs.',
    icon: Laptop,
    features: [
      'Operating System Installation & Repair',
      'Laptop Keyboard & Screen Replacement',
      'SSD/RAM Upgrades for Speed Enhancement',
      'Virus & Malware Removal',
      'Printer & Peripheral Setup'
    ],
    targetAudience: ['Home Users', 'Small Businesses', 'Offices']
  },
  {
    id: 'web-design',
    title: 'Website Design & Development',
    shortDesc: 'Modern, responsive, and SEO-friendly websites tailored to your business needs.',
    fullDesc: 'Your website is your digital storefront. We create stunning, high-performance websites that represent your brand professionally and convert visitors into customers.',
    icon: Globe,
    features: [
      'Custom Responsive Web Design',
      'E-commerce Solutions',
      'Portfolio & Corporate Websites',
      'Landing Page Optimization',
      'Website Maintenance'
    ],
    targetAudience: ['Startups', 'Local Shops', 'Corporate Offices']
  },
  {
    id: 'hosting-domains',
    title: 'Domain Registration & Web Hosting',
    shortDesc: 'Secure, reliable hosting and domain services to power your online presence.',
    fullDesc: 'We offer blazing-fast hosting and domain registration services with 99.9% uptime. Our servers are optimized for speed and security, ensuring your business stays online 24/7.',
    icon: Server,
    features: [
      'Global Domain Extensions (.com, .in, .net)',
      'High-Speed SSD Web Hosting',
      'SSL Certificates for Security',
      'Business Email Hosting',
      'Daily Backups & Support'
    ],
    targetAudience: ['Individual Bloggers', 'Small Businesses', 'Agencies']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    shortDesc: 'Grow your business online with strategic marketing and search engine optimization.',
    fullDesc: 'Get discovered by customers searching for your services. We provide results-driven digital marketing strategies that increase visibility and drive sales.',
    icon: BarChart3,
    features: [
      'Search Engine Optimization (SEO)',
      'Google My Business Management',
      'Social Media Marketing',
      'PPC / Google Ads',
      'Content Strategy'
    ],
    targetAudience: ['Local Businesses', 'Retailers', 'Online Stores']
  },
  {
    id: 'amc-maintenance',
    title: 'AMC & IT Maintenance Services',
    shortDesc: 'Peace of mind with periodic maintenance and priority support for your IT assets.',
    fullDesc: 'Our Annual Maintenance Contracts (AMC) ensure your IT infrastructure is always healthy. We provide proactive maintenance to prevent downtime and offer priority support whenever you need it.',
    icon: Settings,
    features: [
      'Regular Periodic Health Checks',
      'Priority Remote & On-site Support',
      'Network Infrastructure Management',
      'Software Updates & Security Patches',
      'Cost-Effective IT Management'
    ],
    targetAudience: ['Corporate Offices', 'Clinics', 'Educational Institutes', 'Retail Outlets']
  }
];
