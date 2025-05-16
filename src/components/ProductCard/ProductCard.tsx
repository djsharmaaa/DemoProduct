interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
}
