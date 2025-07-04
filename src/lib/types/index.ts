export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  customerType: string;
  createdAt: string;
  updatedAt: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}

export interface Cart {
  id: string;
  customerId: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addedAt: string;
  updatedAt?: string;
}

export interface CartsResponse {
  carts: Cart[];
}
