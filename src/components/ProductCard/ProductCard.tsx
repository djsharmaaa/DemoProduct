'use client';

import Spline from '@splinetool/react-spline';

const product = {
  name: 'Smart Parking System',
  description:
    'IoT-based automated parking with real-time availability and control from a mobile app. Perfect for malls, offices, and gated communities.',
  price: '₹9,999',
};

export default function ProductPage() {
  return (
    <section className="min-h-screen w-full px-6 py-12 bg-white text-gray-900 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-10">
        
        {/* Left - Product Details */}
        <div className="w-full lg:w-1/4 text-sm text-gray-600">
          <h3 className="font-semibold text-lg mb-4">Details</h3>
          <p className="mb-4">{product.description}</p>
          <div className="space-y-2">
            <a href="#" className="underline hover:text-gray-800">Shipping & Returns</a><br />
            <a href="#" className="underline hover:text-gray-800">Payment Information</a>
          </div>
        </div>

        {/* Center - Large Spline Model */}
     <div className="w-full lg:w-1/2 h-[700px] flex justify-center items-center overflow-visible">
  <div className="scale-[1.5] origin-center w-full h-full">
    <Spline scene="https://prod.spline.design/Nxsekh9ZF2smq73F/scene.splinecode" />
  </div>
</div>


        {/* Right - Product Info / Buy Section */}
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-4">{product.price}</p>

          <select className="w-full border-b border-gray-400 bg-transparent py-2 mb-4 text-sm focus:outline-none">
            <option>Select Plan</option>
            <option>Basic</option>
            <option>Premium</option>
          </select>

          <button className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-black transition">
            Add to Cart
          </button>

          <div className="flex gap-4 mt-6 justify-center lg:justify-start text-gray-600">
            <a href="#"><i className="fab fa-vimeo text-lg" /></a>
            <a href="#"><i className="fab fa-facebook text-lg" /></a>
            <a href="#"><i className="fab fa-twitter text-lg" /></a>
          </div>
        </div>

      </div>
    </section>
  );
}
