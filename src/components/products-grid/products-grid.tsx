import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./product-card";
import { useProducts } from "@/hooks/use-products";

export const ProductsGrid = () => {

  const { products } = useProducts()

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
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </SimpleGrid>
  );
};
