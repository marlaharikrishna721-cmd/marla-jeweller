"use client";

import { useState } from "react";
import Image from "next/image";

export default function NecklacesPage() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Necklace Set", price: 499, image: "/products/necklace.jpg" },
    { id: 2, name: "Designer Necklace", price: 699, image: "/products/necklace.jpg" },
    { id: 3, name: "Premium Necklace", price: 899, image: "/products/necklace.jpg" },
    { id: 4, name: "Fashion Necklace", price: 999, image: "/products/necklace.jpg" },
    { id: 5, name: "Wedding Necklace", price: 1199, image: "/products/necklace.jpg" },
    { id: 6, name: "Luxury Necklace", price: 1499, image: "/products/necklace.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-black text-white p-4 flex justify-between">
        <a href="/" className="font-bold">MARLA PREMIUM JEWELLER</a>
        <div>🛒 {cartCount}</div>
      </header>

      <h1 className="text-4xl font-bold text-center py-8">📿 Necklaces Collection</h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="relative h-72">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <p className="text-2xl font-bold mt-2">₹{item.price}</p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="bg-black text-white px-4 py-2 rounded w-full"
                >
                  Add To Cart
                </button>

                <a
                  href={`https://wa.me/919542511721?text=I want to buy ${item.name}`}
                  target="_blank"
                  className="border px-4 py-2 rounded w-full text-center"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}