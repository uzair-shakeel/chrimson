import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import Brands from '@/components/BrandsSection';

export default function Home() {
  return (
    <div className="mt-20">
      <AboutSection />
      <FeaturesSection />
      <Brands />
    </div>
  );
}
