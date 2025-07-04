import { Cart } from "../types";

export const carts: Cart[] = [
  {
    id: "cart_456",
    customerId: "cust_123",
    items: [
      {
        id: "item_789",
        productId: "prod_001",
        productName: "Wireless Headphones",
        sku: "WH-001",
        quantity: 1,
        unitPrice: 99.99,
        totalPrice: 99.99,
        addedAt: "2025-01-15T14:20:00Z",
        updatedAt: "2025-01-15T14:20:00Z",
      },
      {
        id: "item_901",
        productId: "prod_003",
        productName: "Gaming Mouse",
        sku: "GM-003",
        quantity: 1,
        unitPrice: 49.99,
        totalPrice: 49.99,
        addedAt: "2025-01-15T14:22:00Z",
        updatedAt: "2025-01-15T14:22:00Z",
      },
    ],
    totalItems: 2,
    subtotal: 149.98,
    createdAt: "2025-01-15T14:15:00Z",
    updatedAt: "2025-01-15T14:22:00Z",
  },
  {
    id: "cart_111",
    customerId: "cust_456",
    items: [
      {
        id: "item_222",
        productId: "prod_002",
        productName: "Mechanical Keyboard",
        sku: "MK-002",
        quantity: 1,
        unitPrice: 129.99,
        totalPrice: 129.99,
        addedAt: "2025-02-01T10:00:00Z",
        updatedAt: "2025-02-01T10:00:00Z",
      },
    ],
    totalItems: 1,
    subtotal: 129.99,
    createdAt: "2025-02-01T09:55:00Z",
    updatedAt: "2025-02-01T10:00:00Z",
  },
];
