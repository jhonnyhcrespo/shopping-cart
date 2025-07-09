import { products } from "@/lib/data/product";
import { NextResponse } from "next/server";

/**
 * Handles GET requests to /api/v1/products
 */
export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
