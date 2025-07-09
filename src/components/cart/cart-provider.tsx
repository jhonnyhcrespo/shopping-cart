"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Cart as CartType } from "@/lib/types";
import { useCart } from "./use-cart";

interface CartContextType {
  cart: CartType | null;
  loading: boolean;
  fetchCart: () => Promise<void>;
  addItem: (
    cartId: string,
    productId: string,
    quantity: number,
    onAddItem: () => void
  ) => Promise<void>;
  removeItem: (
    cartId: string,
    itemId: string,
    onRemoveItem: () => void
  ) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cartState = useCart();
  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
