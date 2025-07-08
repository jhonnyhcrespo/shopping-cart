import { products } from "@/lib/data/product";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to /api/v1/products
 */
export async function GET(request: NextRequest) {
  return NextResponse.json(products, { status: 200 });
}
