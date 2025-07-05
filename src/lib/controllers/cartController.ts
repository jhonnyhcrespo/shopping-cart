import { NextResponse } from "next/server";
import { CartService } from "../services/cartService";
import { AddCartItemRequest, CartsResponse } from "../types";
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
        return handleError(new BadRequestError("The Customer ID is required."));
      }

      const carts = await this.cartService.getCartsByCustomerId(customerId);

      if (carts.length === 0) {
        console.info(
          `[CartController] No carts found for the customer ID ${customerId}`
        );
      }

      const response: CartsResponse = { carts };
      return NextResponse.json(response, { status: 200 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }

  /**
   * Handles POST /carts/{cartId}/items request.
   * Adds a new item to the specified cart.
   */
  public async addCartItem(
    cartId: string,
    requestBody: AddCartItemRequest
  ): Promise<NextResponse> {
    try {

      if (!cartId) {
        return handleError(
          new BadRequestError("Cart ID is required as a path parameter.")
        );
      }

      if (
        !requestBody ||
        !requestBody.productId ||
        typeof requestBody.quantity === "undefined"
      ) {
        return handleError(
          new BadRequestError(
            "Request body must contain productId and quantity."
          )
        );
      }

      const newCartItem = await this.cartService.addCartItem(
        cartId,
        requestBody
      );
      return NextResponse.json(newCartItem, { status: 201 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
