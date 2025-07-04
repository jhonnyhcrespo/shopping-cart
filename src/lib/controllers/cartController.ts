import { NextResponse } from "next/server";
import { CartService } from "../services/cartService";
import { CartsResponse } from "../types";
import {
  handleError,
  BadRequestError,
} from "../utils/errorHandler";

export class CartController {
  private cartService: CartService;

  constructor(cartService: CartService = new CartService()) {
    this.cartService = cartService;
  }

  /**
   * Handles GET /carts request.
   * Retrieves a collection of carts filtered by customer ID.
   */
  public async getCarts(customerId: string): Promise<NextResponse> {
    try {
      if (!customerId) {
        return handleError(
          new BadRequestError("The Customer ID is required.")
        );
      }

      const carts = await this.cartService.getCartsByCustomerId(customerId);

      if (carts.length === 0) {
        console.info(`[CartController] No carts found for the customer ID ${customerId}`);
      }

      const response: CartsResponse = { carts };
      return NextResponse.json(response, { status: 200 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
