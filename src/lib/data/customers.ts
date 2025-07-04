import { Customer } from "../types";

export const customers: Customer[] = [
  {
    id: "cust_123",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    customerType: "Common",
    createdAt: "2025-01-01T10:00:00Z",
    updatedAt: "2025-01-01T10:00:00Z",
  },
  {
    id: "cust_456",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    customerType: "VIP",
    createdAt: "2025-02-15T11:30:00Z",
    updatedAt: "2025-02-15T11:30:00Z",
  },
  {
    id: "cust_789",
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    customerType: "Common",
    createdAt: "2025-03-20T09:00:00Z",
    updatedAt: "2025-03-20T09:00:00Z",
  },
];
