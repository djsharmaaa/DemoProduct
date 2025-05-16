import Banner from '../components/Banner/Banner';
import ProductCard from '../components/ProductCard/ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    image: '/images/headphones.jpg',
    price: 89.99,
  },
  {
    id: '2',
    name: 'Smart Watch',
    image: '/images/watch.jpg',
    price: 149.99,
  },
  {
    id: '3',
    name: 'Gaming Mouse',
    image: '/images/mouse.jpg',
    price: 59.99,
  },
];

export default function HomePage() {
  return (
    <main>
      <Banner />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
