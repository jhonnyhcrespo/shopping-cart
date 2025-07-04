import { NextResponse } from "next/server";
import { CustomerService } from "../services/customerService";
import { handleError } from "../utils/errorHandler";

export class CustomerController {
  private customerService: CustomerService;

  constructor(customerService: CustomerService = new CustomerService()) {
    this.customerService = customerService;
  }

  /**
   * Handles GET /customer/{customerId} request.
   * Retrieves detailed information about a customer by ID.
   */
  public async getCustomerById(customerId: string): Promise<NextResponse> {
    try {
      const customer = await this.customerService.getCustomerById(customerId);
      return NextResponse.json(customer, { status: 200 });
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
