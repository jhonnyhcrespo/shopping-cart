This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Run Locally

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```

## Running Tests

To run tests, run the following command

```bash
  pnpm run test
```

## Architecture

The project follows a standard Next.js application structure, with a focus on a clean separation of concerns. The core logic is organized into the following directories:

- **`src/app/api`**: Contains all the API route handlers, which are responsible for handling incoming HTTP requests and sending back responses. Each endpoint has its own route file, and they are organized into subdirectories based on the resource they handle (e.g., `carts`, `customer`).

- **`src/lib/controllers`**: These are responsible for handling incoming requests and validating **input**. They are called by the API route handlers and orchestrate the necessary operations to fulfill a request.

- **`src/lib/services`**: Services provide the core functionality of the application. They encapsulate the business logic and are responsible for interacting with the data layer.

- **`src/lib/repositories`**: The repositories are responsible for all the data access logic. They provide a clean API for the services to interact with the data sources, without exposing the implementation details.

- **`src/lib/data`**: This directory contains the in-memory data stores for the application. In a real-world application, this would be replaced with a database.

- **`src/lib/discounts`**: This directory contains the logic for applying discounts to the shopping cart. It follows a strategy pattern, where each discount method is implemented as a separate class.

- **`src/lib/types`**: This directory contains all the TypeScript type definitions used throughout the application.

- **`src/lib/utils`**: This directory contains utility functions that are used across the application.

## API Reference

### Carts

#### Get all carts for a customer

```http
  GET /api/carts?customerId=${customerId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `customerId` | `string` | **Required**. Id of customer to retrieve carts for |

#### Add item to cart

```http
  POST /api/carts/${cartId}/items
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `cartId` | `string` | **Required**. Id of cart to add items to |

Request body:

```json
{
  "productId": "string",
  "quantity": "number"
}
```

#### Remove item from cart

```http
  DELETE /api/carts/${cartId}/items/${itemId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `cartId` | `string` | **Required**. Id of cart to remove items from |
| `itemId` | `string` | **Required**. Id of item to remove from cart |

### Customer

#### Get customer by id

```http
  GET /api/customer/${customerId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `customerId` | `string` | **Required**. Id of customer to retrieve |

## Live Examples

Get cart by customer ID

```bash
curl --location 'https://shopping-cart-gamma-navy.vercel.app/api/carts?customerId=cust_001'
```

Add item to cart

```bash
curl --location 'https://shopping-cart-gamma-navy.vercel.app/api/carts/cart_001/items' \
--header 'Content-Type: application/json' \
--data '{
    "productId": "prod_002",
    "quantity": 1
}'
```

Remove item from cart

```bash
curl --location --request DELETE 'https://shopping-cart-gamma-navy.vercel.app/api/carts/cart_001/items/item_001'
```
