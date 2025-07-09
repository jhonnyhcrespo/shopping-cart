"use client";

import Navbar from "@/components/layout/Navbar";
import { ProductsGrid } from "@/components/products-grid/products-grid";
import { Box, Container } from "@chakra-ui/react";
import { PromoBanner } from "@/components/promotions/promo-banner";
import { CartDrawerProvider } from "@/components/cart/cart-drawer-provider";
import { CartProvider } from "@/components/cart/cart-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Box>
        <CartProvider>
          <CartDrawerProvider>
            <Navbar />
            <PromoBanner />
            <Container maxW="8xl" py={8}>
              <ProductsGrid />
            </Container>
          </CartDrawerProvider>
          <Toaster />
        </CartProvider>
      </Box>
    </Suspense>
  );
}
