import { Box, Container, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface NavbarProps {
  cartBtn: React.ReactElement;
}

const Navbar: FC<NavbarProps> = ({ cartBtn }) => {
  return (
    <Box border="0.0625rem solid #d1d1d1" id="navbar" data-testid="navbar">
      <Container maxW="8xl" paddingY={4}>
        <Flex justify="flex-end">{cartBtn}</Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
