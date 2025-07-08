import { Cart } from "../types";

export const carts: Cart[] = [
  {
    id: "cart_001",
    customerId: "cust_001",
    items: [],
    totalItems: 0,
    subtotal: 0.00,
    discount: {
      name: "No Discount",
      amount: 0,
    },
    total: 0.00,
  },
  {
    id: "cart_002",
    customerId: "cust_002",
    items: [],
    totalItems: 1,
    subtotal: 0.00,
    discount: {
      name: "No Discount",
      amount: 0,
    },
    total: 0.00,
  },
];
