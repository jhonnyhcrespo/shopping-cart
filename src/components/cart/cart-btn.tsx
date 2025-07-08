"use client";

import { Button } from "@chakra-ui/react";
import React from "react";
import { useCartDrawer } from "./cart-drawer-provider";

export const CartButton = () => {
  const { onOpen } = useCartDrawer();

  return <Button onClick={onOpen}>Open Cart</Button>;
};
