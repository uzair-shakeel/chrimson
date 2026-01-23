import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';

export default function Home() {
  return (
    <div className="mt-20">
      <ProductsSection />
      <FeaturesSection />
    </div>
  );
}
