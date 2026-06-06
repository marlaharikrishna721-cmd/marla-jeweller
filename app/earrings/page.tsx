"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function EarringsPage() {
  const { cart, addToCart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const products = [
    {
      id: 101,
      name: "Pearl Earrings",
      price: 99,
      image: "/products/earrings.jpg",
    },
    {
      id: 102,
      name: "Stud Earrings",
      price: 149,
      image: "/products/earrings.jpg",
    },
    {
      id: 103,
      name: "Designer Earrings",
      price: 299,
      image: "/products/earrings.jpg",
    },
    {
      id: 104,
      name: "Gold Style Earrings",
      price: 499,
      image: "/products/earrings.jpg",
    },
    {
      id: 105,
      name: "Premium Earrings",
      price: 799,
      image: "/products/earrings.jpg",
    },
    {
      id: 106,
      name: "Luxury Earrings",
      price: 1299,
      image: "/products/earrings.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

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

      <section className="text-center py-10">

        <h1 className="text-4xl font-bold">
          💎 Earrings Collection
        </h1>

        <p className="text-gray-600 mt-3">
          Premium Earrings From ₹99 To ₹1299
        </p>

      </section>

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
                  priority={item.id === 101}
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
                      addToCart(item);
                      alert("Added To Cart ✅");
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