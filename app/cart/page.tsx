"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const deliveryCharge = total >= 500 ? 0 : 60;
  const finalTotal = total + deliveryCharge;

  const whatsappMessage = encodeURIComponent(
    `Hello MAYRA Timeless Elegance,

Customer Details:
Name: ${name}
Phone: ${phone}
Address: ${address}

Order Details:
${cart
  .map(
    (item) =>
      `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
  )
  .join("\n")}

Total Items: ${totalItems}
Subtotal: ₹${total}
Hyderabad Delivery: ${deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
Grand Total: ₹${finalTotal}

Note: Free delivery above ₹500. Far Hyderabad / outside Hyderabad delivery charges may vary based on distance.

Payment:
I will pay / paid ₹${finalTotal} using UPI ID: Hari95425@ybl
I will send payment screenshot here.`
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          MAYRA Timeless Elegance
        </Link>

        <Link
          href="/"
          className="bg-white text-black px-4 py-2 rounded-full font-bold"
        >
          Continue Shopping
        </Link>
      </header>

      <section className="text-center py-10 text-black">
        <h1 className="text-4xl font-bold">🛒 Shopping Cart</h1>
        <p className="mt-2 text-gray-700">Total Items: {totalItems}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-10 text-black">
        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-black">
              Your Cart Is Empty
            </h2>

            <Link
              href="/"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow mb-4 flex flex-col md:flex-row gap-4 md:items-center"
              >
                <div className="relative w-full md:w-28 h-40 md:h-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width:768px) 100vw, 112px"
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-bold text-xl text-black">
                    {item.name}
                  </h2>

                  <p className="text-gray-700">
                    Price: ₹{item.price}
                  </p>

                  <p className="font-semibold text-black">
                    Item Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-4 py-2 rounded font-bold"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-4 py-2 rounded font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-white p-6 rounded-xl shadow mt-6">
              <h2 className="text-2xl font-bold text-black">
                Order Summary
              </h2>

              <div className="mt-4 space-y-2 text-black">
                <p>Subtotal: ₹{total}</p>

                <p>
                  Hyderabad Delivery:{" "}
                  {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
                </p>

                <p className="text-sm text-gray-700">
                  Free delivery above ₹500. Far Hyderabad / outside Hyderabad
                  delivery charges may vary based on distance.
                </p>

                <h3 className="text-2xl font-bold mt-3">
                  Grand Total: ₹{finalTotal}
                </h3>
              </div>

              <div className="mt-5 border rounded-lg p-4 bg-gray-50 text-center">
                <h3 className="font-bold text-lg text-black">
                  Pay Using UPI
                </h3>

                <div className="flex justify-center mt-4">
                  <Image
                    src="/payment-qr.png"
                    alt="UPI Payment QR"
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>

                <p className="mt-4 text-black">
                  UPI ID:{" "}
                  <span className="font-bold">Hari95425@ybl</span>
                </p>

                <p className="text-sm text-gray-700 mt-2">
                  Pay ₹{finalTotal}. Then click "Place Order On WhatsApp" and
                  send your payment screenshot.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border p-3 rounded text-black bg-white"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border p-3 rounded text-black bg-white"
                />

                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border p-3 rounded text-black bg-white"
                />
              </div>

              <button
  onClick={() => {
    if (!name || !phone || !address) {
      alert("Please fill Name, Phone Number and Address");
      return;
    }

    window.open(
      `https://wa.me/919542511721?text=${whatsappMessage}`,
      "_blank"
    );
  }}
  className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
>
  Place Order On WhatsApp
</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}