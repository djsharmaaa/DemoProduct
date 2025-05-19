'use client';

import Image from 'next/image';

const products = [
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET1.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET2.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET3.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET4.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/BJM.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/BJM.png',
    badgeColor: 'bg-orange-500',
    features: [
      'Ready To Use',
      'High-quality Bonding Strength',
      'Saves Time And Labour',
    ],
    water: '23%–25%',
    potLife: '1.5 hours @ 23°C',
    coverage: '30–40 sq ft per 20 kg @ 6mm',
    theme: 'blue',
  },
];

export default function ProductGrid() {
  return (
    <section className="relative py-20 px-6 md:px-18 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

      <div className="relative grid md:grid-cols-2 gap-y-24 gap-x-20 max-w-7xl mx-auto z-10">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
          >
            {/* Enlarged Image with subtle smoke shadow */}
            <div className="relative w-86 h-86 flex-shrink-0 rounded-full flex items-center justify-center bg-transparent">
              <Image
                src={p.image}
                alt={p.title}
                width={340}
                height={340}
                className="object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 0 25px rgba(0,0,0,0.2))',
                }}
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>

              <div className="mb-5">
                <h4 className={`font-semibold text-${p.theme}-500 mb-1`}>
                  Key Features
                </h4>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                  {p.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-6 text-sm text-gray-700">
                <div>
                  <p className={`font-semibold text-${p.theme}-500`}>Water Demand</p>
                  <p>{p.water}</p>
                </div>
                <div>
                  <p className={`font-semibold text-${p.theme}-500`}>Pot Life</p>
                  <p>{p.potLife}</p>
                </div>
                <div>
                  <p className={`font-semibold text-${p.theme}-500`}>Coverage</p>
                  <p>{p.coverage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
