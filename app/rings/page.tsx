"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function RingsPage() {
  const { cart, addToCart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const rings = [
    {
      id: 1,
      name: "Rose Gold Ring",
      price: 149,
      image: "/products/ring.jpg",
    },
    {
      id: 2,
      name: "Diamond Style Ring",
      price: 299,
      image: "/products/ring.jpg",
    },
    {
      id: 3,
      name: "Couple Ring",
      price: 499,
      image: "/products/ring.jpg",
    },
    {
      id: 4,
      name: "Premium Ring",
      price: 799,
      image: "/products/ring.jpg",
    },
    {
      id: 5,
      name: "Luxury Ring",
      price: 999,
      image: "/products/ring.jpg",
    },
    {
      id: 6,
      name: "Wedding Ring",
      price: 1299,
      image: "/products/ring.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">

        <Link href="/" className="font-bold text-xl">
          MARLA PREMIUM JEWELLER
        </Link>

        <Link
          href="/cart"
          className="bg-white text-black px-4 py-2 rounded-full font-bold"
        >
          🛒 {cartCount}
        </Link>

      </header>

      {/* Title */}
      <section className="text-center py-10">

        <h1 className="text-4xl font-bold">
          💍 Rings Collection
        </h1>

        <p className="mt-3 text-gray-600">
          Premium Rings From ₹149 To ₹1299
        </p>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {rings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
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

                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>

                <p className="text-2xl font-bold mt-2">
                  ₹{item.price}
                </p>

                <div className="flex gap-2 mt-4">

                  <button
                    onClick={() => {
                      addToCart(item)
                    }}
                    className="bg-black text-white px-4 py-2 rounded w-full"
                  >
                    Add To Cart
                  </button>

                  <a
                    href={`https://wa.me/919542511721?text=Hello MARLA PREMIUM JEWELLER,%0A%0AI want to buy ${item.name}%0APrice: ₹${item.price}`}
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

      </section>

    </main>
  );
}