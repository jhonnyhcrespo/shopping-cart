import { Cart } from "../types";
import { CartRepository } from "../repositories/cartRepository";

export class CartService {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository = new CartRepository()) {
    this.cartRepository = cartRepository;
  }

  /**
   * Retrieves the carts for a given customer ID.
   */
  public async getCartsByCustomerId(customerId: string): Promise<Cart[]> {
    return await this.cartRepository.findByCustomerId(customerId);
  }
}
