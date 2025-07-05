import { Cart, Customer, Discount } from "../types";

export interface ApplyDiscountOutput {
  applicable: boolean;
  discount: Discount;
  total: number;
  totalItems: number;
  subtotal: number;
}

export interface IDiscountStrategy {
  id: string;
  name: string;
  applyDiscount(cart: Cart, customer: Customer): ApplyDiscountOutput;
}

export interface IDiscountCalculator {
  calculate(cart: Cart, customer: Customer): Promise<Cart>;
}
