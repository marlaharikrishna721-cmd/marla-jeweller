"use client";

import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded"
            >
              <h2 className="font-bold">
                {item.name}
              </h2>

              <p>₹{item.price}</p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-6">
            Total: ₹{total}
          </h2>
        </>
      )}

    </main>
  );
}