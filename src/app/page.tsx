import Footer from '@/components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import ProductCard from '../components/ProductCard/ProductCard';
import { SpinnerText } from '@/components/SpinnerText/SpinnerText';
import ProductGrid from '@/components/ProductGrid/ProductGrid';



export default function HomePage() {
  return (
    <main>
      <Banner />
<div className="absolute bottom-0 left-[90%] transform -translate-x-1/2 translate-y-1/2 z-20">
    <SpinnerText />
  </div>
     <ProductCard/>
<ProductGrid/>
      <Footer/>
    </main>
  );
}
