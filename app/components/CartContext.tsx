"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeFromCart: (
    id: number
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;
};

const CartContext =
  createContext<CartContextType>({
    cart: [],

    addToCart: () => {},

    removeFromCart: () => {},

    increaseQuantity: () => {},

    decreaseQuantity: () => {},
  });

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart =
      localStorage.getItem(
        "MAYRA-cart"
      );

    if (savedCart) {
      setCart(
        JSON.parse(savedCart)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "MAYRA-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (
    item: Omit<CartItem, "quantity">
  ) => {
    setCart((prev) => {
      const existing =
        prev.find(
          (p) => p.id === item.id
        );

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity:
                  p.quantity + 1,
              }
            : p
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (
    id: number
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: number
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const removeFromCart = (
    id: number
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);