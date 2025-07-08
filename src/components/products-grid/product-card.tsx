import { Button, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const ProductCard: FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <Stack id='product-card' data-testid="product-card">
      <Image width={200} height={200} layout='responsive' src={image} alt={name} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Button>Add to Cart</Button>
    </Stack>
  );
}
