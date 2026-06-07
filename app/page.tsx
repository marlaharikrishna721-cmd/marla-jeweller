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
    <main className="min-h-screen luxury-bg text-white">
      <header className="bg-black sticky top-0 z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link href="/">
            <Image
              src="/logo.png"
              alt="MAYRA"
              width={180}
              height={60}
              priority
            />
          </Link>

          <div className="flex gap-3">
            <Link
              href="/cart"
              className="gold-button px-4 py-2 rounded-lg font-bold"
            >
              🛒 Cart ({cartCount})
            </Link>

            <a
              href="https://wa.me/919542511721"
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </header>

      <section className="text-center py-16 px-6">

        <h2 className="text-4xl md:text-5xl font-bold gold-text">
          Premium Fashion Jewellery
        </h2>

        <p className="mt-4 text-yellow-100">
          Stylish Jewellery from ₹50 to ₹1500
        </p>

        <p className="mt-4 font-semibold gold-text">
          📞 9542511721
        </p>

        <p className="mt-2 text-yellow-100">
          J-165 Durga Bhavani Nagar,
          Jubilee Hills,
          Hyderabad,
          Telangana
        </p>

        <a
          href="https://wa.me/919542511721"
          target="_blank"
          className="inline-block mt-6 gold-button px-6 py-3 rounded-lg"
        >
          Order On WhatsApp
        </a>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10 gold-text">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <Link
            href="/earrings"
            className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition"
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
              <h3 className="text-xl font-bold gold-text">
                💎 Earrings
              </h3>
            </div>
          </Link>

          <Link
            href="/rings"
            className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition"
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
              <h3 className="text-xl font-bold gold-text">
                💍 Rings
              </h3>
            </div>
          </Link>

          <Link
            href="/necklaces"
            className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition"
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
              <h3 className="text-xl font-bold gold-text">
                📿 Necklaces
              </h3>
            </div>
          </Link>

          <Link
            href="/bracelets"
            className="gold-card rounded-xl shadow overflow-hidden hover:scale-105 transition"
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
              <h3 className="text-xl font-bold gold-text">
                ✨ Bracelets
              </h3>
            </div>
          </Link>

        </div>

      </section>

      <section className="py-12 border-t border-yellow-700">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">

          <div className="gold-card p-6 rounded-xl">
            <h3 className="font-bold text-xl gold-text">
              🚚 Fast Delivery
            </h3>

            <p className="mt-2 text-yellow-100">
              Quick shipping across India
            </p>
          </div>

          <div className="gold-card p-6 rounded-xl">
            <h3 className="font-bold text-xl gold-text">
              💎 Premium Quality
            </h3>

            <p className="mt-2 text-yellow-100">
              High quality fashion jewellery
            </p>
          </div>

          <div className="gold-card p-6 rounded-xl">
            <h3 className="font-bold text-xl gold-text">
              📞 Customer Support
            </h3>

            <p className="mt-2 text-yellow-100">
              Direct WhatsApp assistance
            </p>
          </div>

        </div>

      </section>

      <footer className="bg-black text-center py-6 border-t border-yellow-600">

        <h3 className="font-bold text-lg gold-text">
           MAYRA Timeless Elegance
        </h3>

        <p className="mt-2 text-yellow-100">
          📞 9542511721
        </p>

        <p className="mt-1 text-yellow-100">
          Hyderabad, Telangana
        </p>

      </footer>

    </main>
  );
}