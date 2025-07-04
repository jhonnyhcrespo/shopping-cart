import { Cart } from "../types";
import { carts } from "../data/carts";

export class CartRepository {

  /**
   * Finds the carts for the given customer ID.
   */
  public async findByCustomerId(customerId: string): Promise<Cart[]> {
    return Promise.resolve(
      carts.filter((cart) => cart.customerId === customerId)
    );
  }
}
