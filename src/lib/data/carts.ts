import { Cart } from "../types";

export const carts: Cart[] = [
  {
    id: "cart_001",
    customerId: "cust_001",
    items: [
      {
        id: "item_001",
        product: {
          id: "prod_001",
          name: "Double Cheese Burger",
          price: 12.99,
          image:
            "https://res.cloudinary.com/dhq7es8xo/image/upload/v1751992514/double-cheese-burger_tl9elg.jpg",
        },
        quantity: 1,
        totalPrice: 12.99,
      },
    ],
    totalItems: 1,
    subtotal: 12.99,
    discount: {
      name: "No Discount",
      amount: 0,
    },
    total: 12.99,
  },
  {
    id: "cart_002",
    customerId: "cust_002",
    items: [
      {
        id: "item_002",
        product: {
          id: "prod_002",
          name: "Crispy Chicken Sandwich",
          price: 10.5,
          image:
            "https://res.cloudinary.com/dhq7es8xo/image/upload/v1751992514/chicken-sandwich_e79s10.jpg",
        },
        quantity: 1,
        totalPrice: 10.5,
      },
    ],
    totalItems: 1,
    subtotal: 10.5,
    discount: {
      name: "No Discount",
      amount: 0,
    },
    total: 10.5,
  },
];
