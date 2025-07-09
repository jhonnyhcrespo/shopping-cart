import { useCallback, useEffect, useState } from "react";
import { Product } from "@/lib/types";

interface UseCartOutput {
  products: Product[];
  loading: boolean;
}

// TODO: Replace async state management with TanStack Query
export const useProducts = (): UseCartOutput => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/api/products`
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch products: ${res.status} ${res.statusText}`
        );
      }

      const products: Product[] = await res.json();
      setProducts(products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading
  };
};
