import { VipDiscount } from './vipDiscount';
import { Cart, Customer, CartItem } from '../../types';

describe('vipDiscount', () => {
  let discountMethod: VipDiscount;

  beforeEach(() => {
    discountMethod = new VipDiscount();
  });

  const createMockCart = (items: CartItem[]): Cart => ({
    id: 'cart_test',
    customerId: 'cust_test',
    items: items,
    totalItems: 0,
    subtotal: 0,
    total: 0,
    discount: {
      name: 'No Discount',
      amount: 0,
    }
  });

  const createMockCustomer = (customerType: string): Customer => ({
    id: 'cust_test',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    customerType: customerType,
  });

  it('should apply 15% discount for a VIP customer with items in cart', () => {
    const customer = createMockCustomer('VIP');
    const cartItems: CartItem[] = [
      {
        id: "item_001",
        product: {
          id: "prod_001",
          name: "T-shirt",
          price: 35.99,
          image: "https://example.com/images/1/shirt.jpeg",
        },
        quantity: 1,
        totalPrice: 35.99,
      },
      {
        id: "item_002",
        product: {
          id: "prod_002",
          name: "Jeans",
          price: 65.5,
          image: "https://example.com/images/2/jeans.jpeg",
        },
        quantity: 1,
        totalPrice: 65.5,
      },
    ];

    const cart = createMockCart(cartItems);
    const result = discountMethod.applyDiscount(cart, customer);

    const expectedSubtotal = 101.49;
    const expectedDiscountAmount = 101.49 * 0.15;
    const expectedTotal = 101.49 - expectedDiscountAmount;

    expect(result.applicable).toBe(true);
    expect(result.discount).toBeDefined();
    expect(result.discount?.name).toBe('15% off');
    expect(result.discount?.amount).toBeCloseTo(expectedDiscountAmount);
    expect(result.total).toBeCloseTo(expectedTotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(2);
  });

  it('should not apply discount for a non-VIP customer', () => {
    const customer = createMockCustomer('Common');
    const cartItems: CartItem[] = [
      {
        id: "item_001",
        product: {
          id: "prod_001",
          name: "T-shirt",
          price: 35.99,
          image: "https://example.com/images/1/shirt.jpeg",
        },
        quantity: 1,
        totalPrice: 35.99,
      },
      {
        id: "item_002",
        product: {
          id: "prod_002",
          name: "Jeans",
          price: 65.5,
          image: "https://example.com/images/2/jeans.jpeg",
        },
        quantity: 1,
        totalPrice: 65.5,
      },
    ];

    const cart = createMockCart(cartItems);
    const result = discountMethod.applyDiscount(cart, customer);

    const expectedSubtotal = 101.49;

    expect(result.applicable).toBe(false);
    expect(result.discount.amount).toBe(0);
    expect(result.total).toBeCloseTo(expectedSubtotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(2);
  });
});
