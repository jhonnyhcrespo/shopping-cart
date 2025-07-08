import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { CartItem } from './cart-item'
import { CartTotalSummary } from './cart-total-summary'
// TODO: Read from API
import { carts } from '@/lib/data/carts'

export const Cart = () => {

  const cart = carts[0]

  return (
    <Stack id="cart" data-testid="cart" height="full">
      <Box id="cart-items" data-testid="cart-items">
        {cart.items.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </Box>
      <CartTotalSummary cart={cart} />
    </Stack>
  );
}
