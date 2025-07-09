import { Cart } from "@/lib/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface CartTotalSummaryProps {
  cart: Cart;
}

export const CartTotalSummary: FC<CartTotalSummaryProps> = ({ cart }) => {
  return (
    <Box
      id="cart-total-summary"
      data-testid="cart-total-summary"
      p={2}
      marginTop="auto"
    >
      <Flex justifyContent="space-between">
        <Text>Subtotal</Text>
        <Text>{cart.subtotal}</Text>
      </Flex>
      {cart.discount.amount > 0 && (
        <Flex justifyContent="space-between">
          <Text>Discount ({cart.discount.name})</Text>
          <Text>{cart.discount.amount}</Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>Total</Text>
        <Text>{cart.total}</Text>
      </Flex>
    </Box>
  );
};
