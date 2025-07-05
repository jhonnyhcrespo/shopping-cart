import { ApplyDiscountOutput, IDiscountStrategy } from "../interfaces";
import { Cart, Customer, Discount } from "../../types";

export class BuyTwoGetOneFree implements IDiscountStrategy {
  id = "BUY_TWO_GET_ONE_FREE";
  name = "Buy 2 Get 1 Free (Lowest Priced Item)";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyDiscount(cart: Cart, _customer: Customer): ApplyDiscountOutput {
    const totalQuantity = cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const subtotal = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    const totalItems = totalQuantity;

    // This promotion applies if there are 3 or more items
    if (totalQuantity >= 3 && cart.items.length > 0) {

      // find the item with the lowest price
      const lowestPricedItem = cart.items.reduce(
        (lowestPriceItem, currentItem) => {
          return currentItem.unitPrice < lowestPriceItem.unitPrice
            ? currentItem
            : lowestPriceItem;
        },
      );

      const freeProductDiscountAmount = lowestPricedItem
        ? lowestPricedItem.unitPrice
        : 0;

      const finalTotal = subtotal - freeProductDiscountAmount;

      const discount: Discount = {
        name: this.name,
        amount: parseFloat(freeProductDiscountAmount.toFixed(2)),
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
        amount: 0
      },
      total: parseFloat(subtotal.toFixed(2)),
      totalItems,
      subtotal: parseFloat(subtotal.toFixed(2)),
    };
  }
}
