"use client";

import React, { FC } from "react";
import { useCartContext } from "../cart/cart-provider";
import { Button } from "@chakra-ui/react";

interface ProductCardCTAProps {
  productId: string;
}

export const ProductCardCTA: FC<ProductCardCTAProps> = ({ productId }) => {
  const { cart, addItem } = useCartContext();

  if (cart == null) {
    return <Button>Loading</Button>;
  }

  return (
    <Button
      onClick={() => addItem(cart?.id, productId, 1)}
      id="product-card-cta"
      data-testid="product-card-cta"
    >
      Add to Cart
    </Button>
  );
};
