export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  customerType: string;
  createdAt: string;
  updatedAt: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
