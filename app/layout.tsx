import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/CartContext";

export const metadata: Metadata = {
  title: "MARLA PREMIUM JEWELLER",
  description: "Affordable Fashion Jewellery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}

          <a
            href="https://wa.me/919542511721"
            target="_blank"
            className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg z-50 font-bold"
          >
            WhatsApp
          </a>
        </CartProvider>
      </body>
    </html>
  );
}