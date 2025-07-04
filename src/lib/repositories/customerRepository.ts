import { Customer } from "../types";
import { customers } from "../data/customers";

export class CustomerRepository {
  /**
   * Finds a customer by its ID.
   */
  public async findById(id: string): Promise<Customer | undefined> {
    return Promise.resolve(customers.find((customer) => customer.id === id));
  }
}
