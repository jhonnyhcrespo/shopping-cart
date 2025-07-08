"use client";

import { useCustomer } from "@/hooks/use-customer";
import { Button, Menu, Portal } from "@chakra-ui/react";

export const SwitchCustomerMenu = () => {
  const { customerType, switchCustomer } = useCustomer();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {customerType}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="common" onClick={() => switchCustomer("Common")}>
              Common
            </Menu.Item>
            <Menu.Item value="vip" onClick={() => switchCustomer("Vip")}>
              VIP
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
