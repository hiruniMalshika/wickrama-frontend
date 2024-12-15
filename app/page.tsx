"use client"
import Image from "next/image";
import ProductsPage from "./products/page";
import Navbar from "./navbar/page";
import HeroSection from './components/HeroSection';
import ServiceCard from "./components/ServiceCard";
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import Banner from './components/Banner';
const services = [
  { icon: '🏗️', title: 'Construction', description: 'Expert industrial construction services.' },
  { icon: '⚙️', title: 'Machinery', description: 'Top-quality machinery solutions.' },
  { icon: '🔧', title: 'Maintenance', description: 'Reliable maintenance and support.' },
]

const testimonials = [
  { name: 'John Doe', quote: 'Ironhub transformed our business with exceptional solutions.', image: '/john.jpg' },
  { name: 'Jane Smith', quote: 'The team provided top-notch service and support.', image: '/jane.jpg' },
  { name: 'Michael Johnson', quote: 'Highly recommend Ironhub for industrial needs.', image: '/michel.jpg' },
]
export default function Home() {
  return (
    <div>
       <HeroSection />
       <Features features={services} />
       <Testimonials testimonials={testimonials} />
       <Banner
        message="Ready to take your industrial operations to the next level?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
