import { AddCartItemRequest, Cart } from "../types";
import { CartRepository } from "../repositories/cartRepository";
import { BadRequestError, NotFoundError } from "../utils/errorHandler";
import { CustomerRepository } from "../repositories/customerRepository";
import { DiscountCalculator } from "../discounts/discountCalculator";

export class CartService {
  private cartRepository: CartRepository;
  private customerRepository: CustomerRepository;
  private discountCalculator: DiscountCalculator;

  constructor(
    cartRepository: CartRepository = new CartRepository(),
    customerRepository: CustomerRepository = new CustomerRepository(),
    discountCalculator: DiscountCalculator = new DiscountCalculator()
  ) {
    this.cartRepository = cartRepository;
    this.customerRepository = customerRepository;
    this.discountCalculator = discountCalculator;
  }

  /**
   * Retrieves the carts for a given customer ID.
   */
  public async getCartsByCustomerId(customerId: string): Promise<Cart[]> {
    return await this.cartRepository.findByCustomerId(customerId);
  }

  /**
   * Adds or updates an item for the given cart ID
   */
  public async addCartItem(
    cartId: string,
    itemRequest: AddCartItemRequest
  ): Promise<Cart> {
    const { productId, quantity } = itemRequest;

    if (!productId || typeof productId !== "string") {
      throw new BadRequestError("the Product ID is required.");
    }

    if (quantity < 1) {
      throw new BadRequestError(
        "Quantity must be a number greater than or equal to 1."
      );
    }

    // TODO: use transaction
    const cart = await this.cartRepository.addCartItem(cartId, itemRequest);
    const customer = await this.customerRepository.findById(cart.customerId);

    if (!customer) {
      throw new NotFoundError(
        `Customer with ID '${cart.customerId}' not found for cart ${cartId}.`
      );
    }

    const cartWithTotals = await this.discountCalculator.calculate(cart, customer)
    const savedCart = await this.cartRepository.updateCart(cartWithTotals);
    return savedCart;
  }
}
