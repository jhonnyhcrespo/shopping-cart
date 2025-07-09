"use client";

import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CartItem } from "./cart-item";
import { CartTotalSummary } from "./cart-total-summary";
import { useCart } from "./use-cart";
import { toaster } from "../ui/toaster";

export const Cart = () => {
  const { cart, removeItem } = useCart();

  if (cart == null || cart.items.length === 0) {
    return (
      <Center alignItems="center" height="full">
        <Text>Your cart is empty</Text>
      </Center>
    );
  }

  const removeItemHandler = (cartItemId: string) => {
    removeItem(cart.id, cartItemId, () => {
      toaster.create({
        description: "Item removed successfully",
        type: "success",
      });
    });
  }

  return (
    <Stack id="cart" data-testid="cart" height="full">
      <Box id="cart-items" data-testid="cart-items">
        {cart.items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            removeItem={() => removeItemHandler(cartItem.id)}
          />
        ))}
      </Box>
      <CartTotalSummary cart={cart} />
    </Stack>
  );
};
