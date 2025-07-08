import { useCallback, useEffect, useState } from "react";
import { CartsResponse, Cart as CartType } from "@/lib/types";
import { useCustomer } from "@/hooks/use-customer";

interface UseCartOutput {
  cart: CartType | null;
  loading: boolean;
  fetchCart: () => Promise<void>;
  addItem: (
    cartId: string,
    productId: string,
    quantity: number
  ) => Promise<void>;
  removeItem: (cartId: string, itemId: string) => Promise<void>;
}

// TODO: Replace async state management with TanStack Query
export const useCart = (): UseCartOutput => {
  const { customerId } = useCustomer();
  const [cart, setCart] = useState<CartType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CART_API_BASE_URL}/api/carts?customerId=${customerId}`
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch cart: ${res.status} ${res.statusText}`
        );
      }

      const cartsBody: CartsResponse = await res.json();
      setCart(
        cartsBody.carts && cartsBody.carts.length > 0
          ? cartsBody.carts[0]
          : null
      );
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setLoading(false);
    }
  }, [customerId]);

  const addItem = async (
    cartId: string,
    productId: string,
    quantity: number
  ) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CART_API_BASE_URL}/api/carts/${cartId}/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId,
            quantity,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to add item: ${res.status} ${res.statusText}`);
      }

      // Refresh cart after adding item
      await fetchCart();
    } catch (err) {
      console.error("Failed to add item:", err);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (cartId: string, itemId: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CART_API_BASE_URL}/api/carts/${cartId}/items/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          `Failed to remove item: ${res.status} ${res.statusText}`
        );
      }

      // Refresh cart after adding item
      await fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    } finally {
      setLoading(false);
    }
  };

  // fetch cart on mount
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cart,
    loading,
    fetchCart,
    addItem,
    removeItem,
  };
};
