import { CustomerService } from "./customerService";
import { CustomerRepository } from "../repositories/customerRepository";
import { NotFoundError } from "../utils/errorHandler";
import { Customer } from "../types";

jest.mock("../repositories/customerRepository");

describe("CustomerService", () => {
  let customerService: CustomerService;
  let mockCustomerRepository: jest.Mocked<CustomerRepository>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockCustomerRepository =
      new CustomerRepository() as jest.Mocked<CustomerRepository>;
    customerService = new CustomerService(mockCustomerRepository);
  });

  it("should return a customer if found", async () => {
    const mockCustomer: Customer = {
      id: "cust_123",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      customerType: "Common",
      createdAt: "2025-01-01T10:00:00Z",
      updatedAt: "2025-01-01T10:00:00Z",
    };
    mockCustomerRepository.findById.mockResolvedValue(mockCustomer);

    const result = await customerService.getCustomerById("cust_123");

    expect(result).toEqual(mockCustomer);
    expect(mockCustomerRepository.findById).toHaveBeenCalledTimes(1);
    expect(mockCustomerRepository.findById).toHaveBeenCalledWith("cust_123");
  });

  it("should throw NotFoundError if customer is not found", async () => {
    mockCustomerRepository.findById.mockResolvedValue(undefined);

    await expect(
      customerService.getCustomerById("non_existent_id")
    ).rejects.toThrow(NotFoundError);

    expect(mockCustomerRepository.findById).toHaveBeenCalledTimes(1);
    expect(mockCustomerRepository.findById).toHaveBeenCalledWith(
      "non_existent_id"
    );
  });
});
