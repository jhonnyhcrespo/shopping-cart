import { Cart, Customer } from "../types";
import { IDiscountCalculator, IDiscountStrategy } from "./interfaces";
import { BuyTwoGetOneFree } from "./methods/buyTwoGetOneFree";
import { NoDiscount } from "./methods/noDiscount";
import { VipDiscount } from "./methods/vipDiscount";

export class DiscountCalculator implements IDiscountCalculator {
  private discounts: IDiscountStrategy[];

  constructor() {
    this.discounts = [
      new VipDiscount(),
      new BuyTwoGetOneFree(),
    ];
  }

  /**
   * Goes through each discount method and returns the cart with
   * the best discount
   */
  public async calculate(cart: Cart, customer: Customer): Promise<Cart> {
    const initialCalculation = new NoDiscount().applyDiscount(
      cart,
      customer
    );

    let bestCart: Cart = {
      ...cart,
      subtotal: initialCalculation.subtotal,
      totalItems: initialCalculation.totalItems,
      total: initialCalculation.total,
      discount: initialCalculation.discount
    };

    // find the best applicable discount
    for (const discount of this.discounts) {
      const result = discount.applyDiscount(cart, customer);

      // Check if this strategy offers a better discount than the current best
      if (
        result.applicable &&
        result.discount &&
        result.discount.amount > bestCart.discount?.amount
      ) {
        bestCart = {
          ...cart,
          totalItems: result.totalItems,
          subtotal: result.subtotal,
          discount: result.discount,
          total: result.total,
        };
      }
    }

    return bestCart;
  }
}
