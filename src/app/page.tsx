import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Brands from '@/components/BrandsSection';
import Partners from '@/components/PartnersSection';
import Services from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <ProductsSection />
      <FeaturesSection />
      <Partners />
      <Brands />
      <ContactSection />
    </>
  );
}
