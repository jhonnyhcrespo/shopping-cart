import { CartController } from "@/lib/controllers/cartController";
import { AddCartItemRequest } from "@/lib/types";
import { NextRequest } from "next/server";

const cartController = new CartController();

/**
 * Handles POST requests to /api/v1/carts/{cartId}/items
 */
export async function POST(
  request: NextRequest,
  context: { params: { cartId: string } }
) {
  const { cartId } = context.params;
  const requestBody: AddCartItemRequest = await request.json();

  return cartController.addCartItem(cartId, requestBody);
}
