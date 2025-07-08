import { SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { ProductCard } from "./product-card";
import { Product } from "@/lib/types";
import { products } from "@/lib/data/product";

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid: FC<ProductsGridProps> = () => {
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
