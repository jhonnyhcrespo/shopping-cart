import { CartController } from "@/lib/controllers/cartController";
import { NextRequest } from "next/server";

const cartController = new CartController();

/**
 * Handles DELETE requests to /api/v1/carts/{cartId}/items/{itemId}
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ cartId: string, itemId: string }> }
) {
  const { cartId, itemId } = await context.params;
  return cartController.removeCartItem(cartId, itemId);
}
