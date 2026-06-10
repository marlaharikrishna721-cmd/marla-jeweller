"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function RingsPage() {
  const { cart, addToCart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const rings = [
    { id: 1, name: "Twin Blossom Gam Stone Ring", price: 49, image: "/products/ring1.jpg", inStock: false },
    { id: 2, name: "Ruby Blossom Vintage Ring", price: 59, image: "/products/ring2.jpg", inStock: true },
    { id: 3, name: "Twisted Crystal Band Ring", price: 79, image: "/products/ring3.jpg", inStock: true },
    { id: 4, name: "Golden Halo Leaf Ring", price: 79, image: "/products/ring4.jpg", inStock: true },
    { id: 5, name: "Golden Halo Leaf Ring", price: 79, image: "/products/ring5.jpg", inStock: true },
    { id: 6, name: "Regal Bloom Open Ring", price: 99, image: "/products/ring6.jpg", inStock: true },
  ];

  return (
    <main className="min-h-screen luxury-bg text-white">
      <header className="bg-black border-b border-yellow-600 p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="font-bold text-xl gold-text">
          MAYRA Timeless Elegance
        </Link>

        <Link href="/cart" className="gold-button px-4 py-2 rounded-full font-bold">
          🛒 {cartCount}
        </Link>
      </header>

      <section className="text-center py-10">
        <h1 className="text-5xl font-bold gold-text">💍 Rings Collection</h1>
        <p className="text-yellow-100 mt-3">Premium Rings From ₹49 To ₹299</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rings.map((item) => (
            <div key={item.id} className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition">
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={item.id === 1}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="font-bold text-xl gold-text">{item.name}</h2>

                <p className="text-2xl font-bold mt-2 text-yellow-100">
                  ₹{item.price}
                </p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => item.inStock && addToCart(item)}
                    disabled={!item.inStock}
                    className="bg-black border border-yellow-600 text-white px-4 py-2 rounded w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={() => {
                      if (item.inStock) {
                        addToCart(item);
                        window.location.href = "/cart";
                      }
                    }}
                    disabled={!item.inStock}
                    className="gold-button px-4 py-2 rounded w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>

                {!item.inStock && (
                  <p className="text-red-500 font-bold text-center mt-3 text-lg">
                    ❌ Out of Stock
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}