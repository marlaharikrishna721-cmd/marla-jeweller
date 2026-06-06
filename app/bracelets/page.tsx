"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function BraceletsPage() {
  const { cart, addToCart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const products = [
    {
      id: 301,
      name: "Classic Bracelet",
      price: 199,
      image: "/products/bracelet.jpg",
    },
    {
      id: 302,
      name: "Designer Bracelet",
      price: 399,
      image: "/products/bracelet.jpg",
    },
    {
      id: 303,
      name: "Gold Style Bracelet",
      price: 599,
      image: "/products/bracelet.jpg",
    },
    {
      id: 304,
      name: "Premium Bracelet",
      price: 799,
      image: "/products/bracelet.jpg",
    },
    {
      id: 305,
      name: "Luxury Bracelet",
      price: 999,
      image: "/products/bracelet.jpg",
    },
    {
      id: 306,
      name: "Wedding Bracelet",
      price: 1299,
      image: "/products/bracelet.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">

        <Link
          href="/"
          className="font-bold text-xl"
        >
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
          ✨ Bracelets Collection
        </h1>

        <p className="text-gray-600 mt-3">
          Premium Bracelets From ₹199 To ₹1299
        </p>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <div className="relative h-72">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={item.id === 301}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />

              </div>

              <div className="p-4">

                <h2 className="font-bold text-xl">
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

                  <button
  onClick={() => {
    addToCart(item);
    window.location.href = "/cart";
  }}
  className="border px-4 py-2 rounded w-full text-center"
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