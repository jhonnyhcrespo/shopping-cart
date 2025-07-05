import { NextRequest } from "next/server";
import { CustomerController } from "@/lib/controllers/customerController";

const customerController = new CustomerController();

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ customerId: string }> }
) {
  const { customerId } = await context.params;
  return customerController.getCustomerById(customerId);
}
