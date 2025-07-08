"use client";

import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartButton } from "@/components/cart/cart-btn";
import Navbar from "@/components/layout/Navbar";
import { ProductsGrid } from "@/components/products-grid/products-grid";
import { Box, Container, useDisclosure } from "@chakra-ui/react";
// TODO: Replace with api call
import { products } from "@/lib/data/product";
import { PromoBanner } from "@/components/promotions/promo-banner";

export default function Home() {
  const { open, setOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Navbar cartBtn={<CartButton setOpen={setOpen} />} />
      <PromoBanner />
      <Container maxW="8xl" mt={8}>
        <ProductsGrid products={products} />
        <CartDrawer open={open} onClose={onClose} />
      </Container>
    </Box>
  );
}
