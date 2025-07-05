import { ApplyDiscountOutput, IDiscountStrategy } from "../interfaces";
import { Cart, Customer, Discount } from "../../types";

export class VipDiscount implements IDiscountStrategy {
  id = "VIP_DISCOUNT";
  name = "VIP 15% Discount";
  private readonly VIP_DISCOUNT_RATE = 0.15;

  applyDiscount(cart: Cart, customer: Customer): ApplyDiscountOutput {
    const isVip = customer.customerType === "VIP";
    const subtotal = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    if (isVip) {
      const discountAmount = subtotal * this.VIP_DISCOUNT_RATE;
      const finalTotal = subtotal - discountAmount;
      const discount: Discount = {
        name: this.name,
        amount: parseFloat(discountAmount.toFixed(2)),
      };
      return {
        applicable: true,
        discount,
        total: parseFloat(finalTotal.toFixed(2)),
        totalItems,
        subtotal: parseFloat(subtotal.toFixed(2)),
      };
    }

    return {
      applicable: false,
      discount: {
        name: this.name,
        amount: 0,
      },
      total: parseFloat(subtotal.toFixed(2)),
      totalItems,
      subtotal: parseFloat(subtotal.toFixed(2)),
    };
  }
}
