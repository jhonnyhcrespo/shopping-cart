import { AddCartItemRequest, Cart, CartItem } from "../types";
import { carts } from "../data/carts";
import { products } from "../data/product";
import { generateUniqueId } from "../utils/uuid";

export class CartRepository {
  /**
   * Finds the carts for the given customer ID.
   */
  public async findByCustomerId(customerId: string): Promise<Cart[]> {
    return Promise.resolve(
      carts.filter((cart) => cart.customerId === customerId)
    );
  }

  /**
   * Find the cart for the given cart ID
   */
  public async findCartById(cartId: string): Promise<Cart | undefined> {
    return Promise.resolve(carts.find((cart) => cart.id === cartId));
  }

  /**
   * Adds an item in a specified cart If the product already exists
   * in the cart, its quantity is updated. Otherwise, a new cart item is added.
   */
  public async addCartItem(
    cartId: string,
    itemRequest: AddCartItemRequest
  ): Promise<Cart> {
    const cart = await this.findCartById(cartId);

    if (!cart) {
      throw new Error(`Cart with ID ${cartId} not found.`);
    }

    const product = products.find((p) => p.id === itemRequest.productId);

    if (!product) {
      throw new Error(`Product with ID ${itemRequest.productId} not found.`);
    }

    const existingItem = cart.items.find(
      (item) => item.product.id === itemRequest.productId
    );

    let newCartItem: CartItem;

    if (existingItem) {
      // Update existing item's quantity and total price
      existingItem.quantity += itemRequest.quantity;
      existingItem.totalPrice = existingItem.quantity * existingItem.product.price;
      newCartItem = existingItem;
    } else {
      // Add new item to cart
      newCartItem = {
        id: generateUniqueId("item_"),
        product: {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price
        },
        quantity: itemRequest.quantity,
        totalPrice: itemRequest.quantity * product.price,
      };
      cart.items.push(newCartItem);
    }

    return Promise.resolve(cart);
  }

  /**
   * Replaces the existing cart with the given cart
   */
  public async updateCart(updatedCart: Cart): Promise<Cart> {
    const index = carts.findIndex((c) => c.id === updatedCart.id);
    if (index === -1) {
      throw new Error(`Cart with ID ${updatedCart.id} not found for update.`);
    }

    carts[index] = { ...updatedCart };
    return Promise.resolve(carts[index]);
  }

  /**
   * Removes an item from a specified cart.
   * This method modifies the cart in place but does NOT recalculate totals.
   */
  public async removeCartItem(cartId: string, itemId: string): Promise<Cart> {
    const cart = carts.find((c) => c.id === cartId);
    if (!cart) {
      throw new Error(`Cart with ID ${cartId} not found.`);
    }

    // remove item
    cart.items = cart.items.filter((item) => item.id !== itemId);

    return Promise.resolve(cart);
  }
}
