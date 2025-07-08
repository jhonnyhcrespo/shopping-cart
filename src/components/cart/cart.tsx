"use client";

import { Box, Stack, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { CartItem } from './cart-item'
import { CartTotalSummary } from './cart-total-summary'
import { CartsResponse, Cart as CartType } from '@/lib/types'

const getCart = async (): Promise<CartType | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CART_API_BASE_URL}/api/carts?customerId=cust_001`
    )

    if (!res.ok) {
      console.error("Failed to fetch cart:", res.status, res.statusText)
      return null
    }

    const resBody: CartsResponse = await res.json();
    return resBody.carts.length > 0 ? resBody.carts[0] : null;
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return null
  }
};

export const Cart = () => {

  const [cart, setCart] = useState<CartType | null>()

  // TODO: Add cache
  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart();
      setCart(cart)
    }
    fetchCart()
  }, [])

  if (cart == null || cart.items.length === 0) {
    return (
      <Box>
        <Text>Your cart is empty</Text>
      </Box>
    )
  }

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
