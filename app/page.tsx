"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-bold">
            MARLA PREMIUM JEWELLER
          </h1>

          <a
            href="https://wa.me/919542511721"
            target="_blank"
            className="bg-green-500 px-4 py-2 rounded-lg"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-white text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Premium Fashion Jewellery
        </h2>

        <p className="mt-4 text-gray-600">
          Stylish Jewellery from ₹50 to ₹1500
        </p>

        <p className="mt-4 font-semibold">
          📞 9542511721
        </p>

        <p className="mt-2 text-gray-600">
          J-165 Durga Bhavani Nagar,
          Jubilee Hills,
          Hyderabad,
          Telangana
        </p>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Earrings */}
          <a
            href="/earrings"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/earrings.jpg"
                alt="Earrings"
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                💎 Earrings
              </h3>
            </div>
          </a>

          {/* Rings */}
          <a
            href="/rings"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/ring.jpg"
                alt="Rings"
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                💍 Rings
              </h3>
            </div>
          </a>

          {/* Necklaces */}
          <a
            href="/necklaces"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/necklace.jpg"
                alt="Necklaces"
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                📿 Necklaces
              </h3>
            </div>
          </a>

          {/* Bracelets */}
          <a
            href="/bracelets"
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-64">
              <Image
                src="/products/bracelet.jpg"
                alt="Bracelets"
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">
                ✨ Bracelets
              </h3>
            </div>
          </a>

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