import { Box, Container, Flex } from "@chakra-ui/react";
import { CartButton } from "../cart/cart-btn";
import { SwitchCustomerMenu } from "./navbar/switch-customer-menu";

const Navbar = () => {
  return (
    <Box border="0.0625rem solid #d1d1d1" id="navbar" data-testid="navbar">
      <Container maxW="8xl" paddingY={4}>
        <Flex justify="flex-end" gap={2} align="center">
          <CartButton />
          <SwitchCustomerMenu />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
