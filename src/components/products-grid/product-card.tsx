import { Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import Image from "next/image";
import { ProductCardCTA } from './product-card-cta';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const ProductCard: FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <Stack id="product-card" data-testid="product-card">
      <Image
        width={200}
        height={200}
        style={{
          width: "100%",
          height: "auto",
        }}
        src={image}
        alt={name}
      />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <ProductCardCTA productId={id} />
    </Stack>
  );
}
