import { CartController } from "@/lib/controllers/cartController";
import { NextRequest } from "next/server";

const cartController = new CartController();

/**
 * Handles GET requests to /api/v1/carts
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get("customerId");

  // input validation handled in the controller
  return cartController.getCarts(customerId || "");
}
