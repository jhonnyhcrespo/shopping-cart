import { Box, Container, Flex } from "@chakra-ui/react";
import { CartButton } from "../cart/cart-btn";

const Navbar = () => {
  return (
    <Box border="0.0625rem solid #d1d1d1" id="navbar" data-testid="navbar">
      <Container maxW="8xl" paddingY={4}>
        <Flex justify="flex-end">
          <CartButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
