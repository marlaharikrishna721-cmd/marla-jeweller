"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./components/CartContext";

export default function Home() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 text-black">

      {/* HEADER */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-bold">
            MARLA PREMIUM JEWELLER
          </h1>

          <div className="flex gap-3">

            <Link
              href="/cart"
              className="bg-white text-black px-4 py-2 rounded-lg font-bold"
            >
              🛒 Cart ({cartCount})
            </Link>

            <a
              href="https://wa.me/919542511721"
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-white text-center py-16 px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Premium Fashion Jewellery
        </h2>

        <p className="mt-4 text-gray-800">
          Stylish Jewellery from ₹50 to ₹1500
        </p>

        <p className="mt-4 font-semibold text-black">
          📞 9542511721
        </p>

        <p className="mt-2 text-gray-800">
          J-165 Durga Bhavani Nagar, Jubilee Hills,
          Hyderabad, Telangana
        </p>

        <a
          href="https://wa.me/919542511721"
          target="_blank"
          className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Order On WhatsApp
        </a>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <Link
            href="/earrings"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/earrings.jpg"
                alt="Earrings"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                💎 Earrings
              </h3>
            </div>
          </Link>

          <Link
            href="/rings"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/ring.jpg"
                alt="Rings"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                💍 Rings
              </h3>
            </div>
          </Link>

          <Link
            href="/necklaces"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/necklace.jpg"
                alt="Necklaces"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                📿 Necklaces
              </h3>
            </div>
          </Link>

          <Link
            href="/bracelets"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/bracelet.jpg"
                alt="Bracelets"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                ✨ Bracelets
              </h3>
            </div>
          </Link>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">

          <div>
            <h3 className="font-bold text-xl">
              🚚 Fast Delivery
            </h3>
            <p className="mt-2 text-gray-800">
              Quick shipping across India
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              💎 Premium Quality
            </h3>
            <p className="mt-2 text-gray-800">
              High quality fashion jewellery
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              📞 Customer Support
            </h3>
            <p className="mt-2 text-gray-800">
              Direct WhatsApp assistance
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">

        <h3 className="font-bold text-lg">
          MARLA PREMIUM JEWELLER
        </h3>

        <p className="mt-2">
          📞 9542511721
        </p>

        <p className="mt-1">
          Hyderabad, Telangana
        </p>

      </footer>

    </main>
  );
}