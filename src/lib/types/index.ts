export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  customerType: string;
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
  subtotal?: number;
  discount: Discount;
  total: number;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartsResponse {
  carts: Cart[];
}

export interface AddCartItemRequest {
  productId: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Discount {
  name: string;
  amount: number;
}
