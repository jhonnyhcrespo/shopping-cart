// Server Component

import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./product-card";
import { Product } from "@/lib/types";

const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/api/products`)

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText);
    }

    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export const ProductsGrid = async () => {

  const products = await getProducts();

  return (
    <SimpleGrid
      columns={4}
      gap={2}
      id="products-grid"
      data-testid="products-grid"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </SimpleGrid>
  );
};
