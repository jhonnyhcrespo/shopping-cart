// Server Component

import Navbar from "@/components/layout/Navbar";
import { ProductsGrid } from "@/components/products-grid/products-grid";
import { Box, Container } from "@chakra-ui/react";
import { PromoBanner } from "@/components/promotions/promo-banner";
import { CartDrawerProvider } from "@/components/cart/cart-drawer-provider";

export default async function Home() {
  return (
    <Box>
      <CartDrawerProvider>
        <Navbar />
        <PromoBanner />
        <Container maxW="8xl" mt={8}>
          <ProductsGrid />
        </Container>
      </CartDrawerProvider>
    </Box>
  );
}
