"use client";

import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CartItem } from "./cart-item";
import { CartTotalSummary } from "./cart-total-summary";
import { useCart } from "./use-cart";

export const Cart = () => {
  const { cart, removeItem } = useCart();

  if (cart == null || cart.items.length === 0) {
    return (
      <Box>
        <Text>Your cart is empty</Text>
      </Box>
    );
  }

  return (
    <Stack id="cart" data-testid="cart" height="full">
      <Box id="cart-items" data-testid="cart-items">
        {cart.items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            removeItem={() => removeItem(cart.id, cartItem.id)}
          />
        ))}
      </Box>
      <CartTotalSummary cart={cart} />
    </Stack>
  );
};
