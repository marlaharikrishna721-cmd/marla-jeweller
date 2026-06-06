"use client";

import Image from "next/image";
import { useCart } from "./CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="relative h-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-2xl font-bold mt-2">
          ₹{product.price}
        </p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded w-full"
          >
            Add To Cart
          </button>

          <a
            href={`https://wa.me/919542511721?text=I want to buy ${product.name} for ₹${product.price}`}
            target="_blank"
            className="border px-4 py-2 rounded w-full text-center"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}