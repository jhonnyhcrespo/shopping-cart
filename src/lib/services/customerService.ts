import { Customer } from "../types";
import { CustomerRepository } from "../repositories/customerRepository";
import { NotFoundError } from "../utils/errorHandler";

export class CustomerService {
  private customerRepository: CustomerRepository;

  constructor(
    customerRepository: CustomerRepository = new CustomerRepository()
  ) {
    this.customerRepository = customerRepository;
  }

  /**
   * Retrieves a customer by their ID.
   * @param customerId The unique identifier of the customer.
   * @returns A promise that resolves to the Customer object.
   * @throws NotFoundError if the customer is not found.
   */
  public async getCustomerById(customerId: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(customerId);
    if (!customer) {
      throw new NotFoundError(`Customer with ID ${customerId} not found.`);
    }
    return customer;
  }
}
