import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

interface CartButtonProps {
  setOpen: (open: boolean) => void
}

export const CartButton: FC<CartButtonProps> = ({ setOpen }) => {
  return <Button onClick={() => setOpen(true)}>Open Cart</Button>;
};
