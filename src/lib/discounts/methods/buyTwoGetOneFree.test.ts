import { BuyTwoGetOneFree } from './buyTwoGetOneFree';
import { Cart, Customer, CartItem } from '../../types';

describe('BuyTwoGetOneFree', () => {
  let discountMethod: BuyTwoGetOneFree;
  const mockCustomer: Customer = {
    id: 'cust_test', firstName: 'Test', lastName: 'User', email: 'test@example.com',
    customerType: 'Common',
  };

  beforeEach(() => {
    discountMethod = new BuyTwoGetOneFree();
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

  it('should apply discount for 3 items, making the lowest priced item free', () => {
    const cartItems: CartItem[] = [
      {
        id: "item_001",
        productId: "prod_001",
        productName: "T-shirt",
        quantity: 1,
        unitPrice: 35.99,
        totalPrice: 35.99,
      },
      {
        id: "item_002",
        productId: "prod_002",
        productName: "Jeans",
        quantity: 1,
        unitPrice: 65.5,
        totalPrice: 65.5,
      },
      {
        id: "item_003",
        productId: "prod_003",
        productName: "Dress",
        quantity: 1,
        unitPrice: 80.75,
        totalPrice: 80.75,
      }
    ];
    const cart = createMockCart(cartItems);

    const result = discountMethod.applyDiscount(cart, mockCustomer);

    const expectedSubtotal = 182.24;
    const lowestPrice = 35.99;
    const expectedDiscountAmount = lowestPrice;
    const expectedTotal = expectedSubtotal - expectedDiscountAmount;

    expect(result.applicable).toBe(true);
    expect(result.discount).toBeDefined();
    expect(result.discount?.name).toBe('Buy 2 Get 1 Free (Lowest Priced Item)');
    expect(result.discount?.amount).toBeCloseTo(expectedDiscountAmount);
    expect(result.total).toBeCloseTo(expectedTotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(3);
  });

  it('should apply discount for more than 3 items, making the lowest priced item free', () => {
    const cartItems: CartItem[] = [
      {
        id: "item_001",
        productId: "prod_001",
        productName: "T-shirt",
        quantity: 1,
        unitPrice: 35.99,
        totalPrice: 35.99,
      },
      {
        id: "item_002",
        productId: "prod_002",
        productName: "Jeans",
        quantity: 1,
        unitPrice: 65.5,
        totalPrice: 65.5,
      },
      {
        id: "item_003",
        productId: "prod_003",
        productName: "Dress",
        quantity: 1,
        unitPrice: 80.75,
        totalPrice: 80.75,
      },
      {
        id: "item_004",
        productId: "prod_004",
        productName: "Shoes",
        quantity: 1,
        unitPrice: 50.25,
        totalPrice: 50.25,
      }
    ];
    const cart = createMockCart(cartItems);

    const result = discountMethod.applyDiscount(cart, mockCustomer);

    const expectedSubtotal = 232.49;
    const lowestPrice = 35.99;
    const expectedDiscountAmount = lowestPrice;
    const expectedTotal = expectedSubtotal - expectedDiscountAmount;

    expect(result.applicable).toBe(true);
    expect(result.discount).toBeDefined();
    expect(result.discount?.amount).toBeCloseTo(expectedDiscountAmount);
    expect(result.total).toBeCloseTo(expectedTotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(4);
  });

  it('should not apply discount if total quantity is less than 3', () => {
    const cartItems: CartItem[] = [
      {
        id: "item_001",
        productId: "prod_001",
        productName: "T-shirt",
        quantity: 1,
        unitPrice: 35.99,
        totalPrice: 35.99,
      },
      {
        id: "item_002",
        productId: "prod_002",
        productName: "Jeans",
        quantity: 1,
        unitPrice: 65.5,
        totalPrice: 65.5,
      },
    ];

    const cart = createMockCart(cartItems);

    const result = discountMethod.applyDiscount(cart, mockCustomer);

    const expectedSubtotal = 101.49;

    expect(result.applicable).toBe(false);
    expect(result.discount.amount).toBe(0)
    expect(result.total).toBeCloseTo(expectedSubtotal);
    expect(result.subtotal).toBeCloseTo(expectedSubtotal);
    expect(result.totalItems).toBe(2);
  });

  it('should not apply discount if cart is empty', () => {
    const cart = createMockCart([]);

    const result = discountMethod.applyDiscount(cart, mockCustomer);

    expect(result.applicable).toBe(false);
    expect(result.discount.amount).toBe(0);
    expect(result.total).toBeCloseTo(0);
    expect(result.subtotal).toBeCloseTo(0);
    expect(result.totalItems).toBe(0);
  });

});