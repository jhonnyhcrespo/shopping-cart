"use client";

import { CartItem as CartItemType } from "@/lib/types";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";

interface CartItemProps {
  item: CartItemType;
  removeItem: () => void
}

export const CartItem: FC<CartItemProps> = ({ item, removeItem }) => {
  return (
    <Flex p={2}>
      <Box></Box>
      <Stack>
        <Flex>
          <Box>
            <Image width={120} height={120} src={item.product.image} alt={item.product.image} />
          </Box>
          <Stack px={2}>
            <Text>{item.product.name}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.totalPrice}</Text>
            <Button size="xs" onClick={removeItem}>Remove</Button>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
};
