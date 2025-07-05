import { Cart } from "../types";

export const carts: Cart[] = [
  {
    id: "cart_001",
    customerId: "cust_001",
    items: [
      {
        id: "item_001",
        productId: "prod_001",
        productName: "T-shirt",
        quantity: 1,
        unitPrice: 35.99,
        totalPrice: 35.99,
      },
    ],
    discount: {
      name: "No Discount",
      amount: 0,
    },
    totalItems: 1,
    total: 35.99,
  },
  {
    id: "cart_002",
    customerId: "cust_002",
    items: [
      {
        id: "item_002",
        productId: "prod_002",
        productName: "Jeans",
        quantity: 1,
        unitPrice: 65.5,
        totalPrice: 65.5,
      },
    ],
    discount: {
      name: "No Discount",
      amount: 0,
    },
    totalItems: 1,
    total: 65.5,
  },
];
