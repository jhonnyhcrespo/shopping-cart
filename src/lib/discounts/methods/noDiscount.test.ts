import { NoDiscount } from './noDiscount';
import { Cart, Customer } from '../../types';

describe('NoDiscount', () => {
  let noDiscountMethod: NoDiscount;

  const mockCustomer: Customer = {
    id: 'cust_test', firstName: 'Test', lastName: 'User', email: 'test@example.com',
    customerType: 'Common',
  };

  beforeEach(() => {
    noDiscountMethod = new NoDiscount();
  });

  const mockCart: Cart = ({
    id: 'cart_test',
    customerId: 'cust_test',
    items: [
      {
        id: "cart-item-001",
        productId: "prod-001",
        productName: "T-shirt",
        quantity: 1,
        totalPrice: 35.99,
        unitPrice: 35.99
      }
    ],
    totalItems: 0,
    subtotal: 0,
    total: 0, // Will be calculated by strategy
    discount: {
      name: 'No Discount',
      amount: 0,
    }
  });

  it('should always be applicable', () => {
    const result = noDiscountMethod.applyDiscount(mockCart, mockCustomer);
    expect(result.applicable).toBe(true);
  });

  it('should return no discount for a cart with items', () => {
    const result = noDiscountMethod.applyDiscount(mockCart, mockCustomer);

    const expectedSubtotal = 35.99;
    const expectedTotalItems = 1;

    expect(result.applicable).toBe(true);
    expect(result.discount.name).toBe("No Discount");
    expect(result.discount.amount).toBe(0)
    expect(result.total).toBeCloseTo(expectedSubtotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(expectedTotalItems);
  });

  it('should return no discount for an empty cart', () => {

    const mockEmptyCart: Cart = ({
      id: 'cart_test',
      customerId: 'cust_test',
      items: [],
      totalItems: 0,
      subtotal: 0,
      total: 0, // Will be calculated by strategy
      discount: {
        name: 'No Discount',
        amount: 0,
      }
    });

    const result = noDiscountMethod.applyDiscount(mockEmptyCart, mockCustomer);

    expect(result.applicable).toBe(true);
    expect(result.discount.name).toBe("No Discount");
    expect(result.discount.amount).toBe(0);
    expect(result.total).toBeCloseTo(0);
    expect(result.subtotal).toBeCloseTo(0);
    expect(result.totalItems).toBe(0);
  });
});