import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Cart } from './cart';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer: FC<CartDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer.Root open={open} size="sm">
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Drawer.CloseTrigger>
            <Drawer.Header
              borderBottom="0.0625rem solid #d1d1d1"
              id="cart-drawer-header"
              data-testid="cart-drawer-header"
            >
              <Drawer.Title>Your cart</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body id="cart-drawer-body" data-testid="cart-drawer-body">
              <Cart />
            </Drawer.Body>
            <Drawer.Footer
              borderTop="0.0625rem solid #d1d1d1"
              py={4}
              id="cart-drawer-footer"
              data-testid="cart-drawer-footer"
            >
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button>Checkout</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
