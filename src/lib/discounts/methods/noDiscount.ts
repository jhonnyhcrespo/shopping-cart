import { ApplyDiscountOutput, IDiscountStrategy } from "../interfaces";
import { Cart, Customer } from "../../types";

export class NoDiscount implements IDiscountStrategy {
  id = "NO_DISCOUNT";
  name = "No Discount";

  applyDiscount(
    cart: Cart,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customer: Customer
  ): ApplyDiscountOutput {
    const subtotal = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      applicable: true,
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
