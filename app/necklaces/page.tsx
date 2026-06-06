"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function NecklacesPage() {
  const { cart, addToCart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const necklaces = [
    { id: 201, name: "Pearl Necklace", price: 199, image: "/products/necklace1.jpg" },
    { id: 202, name: "Gold Necklace", price: 399, image: "/products/necklace2.jpg" },
    { id: 203, name: "Designer Necklace", price: 599, image: "/products/necklace3.jpg" },
    { id: 204, name: "Premium Necklace", price: 799, image: "/products/necklace4.jpg" },
    { id: 205, name: "Luxury Necklace", price: 999, image: "/products/necklace5.jpg" },
    { id: 206, name: "Wedding Necklace", price: 1299, image: "/products/necklace6.jpg" },
  ];

  return (
    <main className="min-h-screen luxury-bg text-white">
      <header className="bg-black border-b border-yellow-600 p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="font-bold text-xl gold-text">
          MARLA PREMIUM JEWELLER
        </Link>

        <Link href="/cart" className="gold-button px-4 py-2 rounded-full font-bold">
          🛒 {cartCount}
        </Link>
      </header>

      <section className="text-center py-10">
        <h1 className="text-5xl font-bold gold-text">📿 Necklaces Collection</h1>
        <p className="text-yellow-100 mt-3">Premium Necklaces From ₹199 To ₹1299</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {necklaces.map((item) => (
            <div key={item.id} className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition">
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={item.id === 201}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="font-bold text-xl gold-text">{item.name}</h2>
                <p className="text-2xl font-bold mt-2 text-yellow-100">₹{item.price}</p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-black border border-yellow-600 text-white px-4 py-2 rounded w-full font-bold"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => {
                      addToCart(item);
                      window.location.href = "/cart";
                    }}
                    className="gold-button px-4 py-2 rounded w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}