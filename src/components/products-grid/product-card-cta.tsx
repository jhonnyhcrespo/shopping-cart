"use client";

import React, { FC } from "react";
import { useCartContext } from "../cart/cart-provider";
import { Button, Spinner } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";

interface ProductCardCTAProps {
  productId: string;
}

export const ProductCardCTA: FC<ProductCardCTAProps> = ({ productId }) => {
  const { cart, loading, addItem } = useCartContext();

  if (cart == null) {
    return <Button><Spinner size="sm" /></Button>;
  }

  const addItemHandler = () => {
    addItem(cart.id, productId, 1, () => {
      toaster.create({
        description: "Item added successfully",
        type: "success",
      });
    });
  }

  return (
    <Button
      onClick={addItemHandler}
      id="product-card-cta"
      data-testid="product-card-cta"
      disabled={loading}
    >
      Add to Cart
    </Button>
  );
};
