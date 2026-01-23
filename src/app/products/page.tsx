import FeaturesSection from '@/components/FeaturesSection';
import Services from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="mt-20">
      <Services />
      <FeaturesSection />
    </div>
  );
}
