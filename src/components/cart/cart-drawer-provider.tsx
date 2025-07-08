"use client";

import { createContext, useContext, ReactNode } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { CartDrawer } from "./cart-drawer";

interface CartContextType {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CartDrawerContext = createContext<CartContextType | undefined>(undefined);

export const useCartDrawer = () => {
  const context = useContext(CartDrawerContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartDrawerProvider = ({ children }: CartProviderProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <CartDrawerContext.Provider value={{ open, onOpen, onClose }}>
      {children}
      <CartDrawer open={open} onClose={onClose} />
    </CartDrawerContext.Provider>
  );
};
