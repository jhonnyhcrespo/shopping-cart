import { NextResponse } from "next/server";
import { ErrorResponse } from "../types";

/**
 * Custom error class for not found resources (HTTP 404).
 */
export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

/**
 * Handles errors and returns a standardized JSON response.
 */
export const handleError = (error: unknown) => {
  let status = 500;
  let code = 'INTERNAL_SERVER_ERROR';
  let message = 'An unexpected error occurred.';

  if (error instanceof NotFoundError) {
    status = 404;
    code = 'NOT_FOUND';
    message = error.message;
  } else if (error instanceof Error) {
    // Catch any other errors 
    status = 500;
    code = 'SERVER_ERROR';
    message = error.message;
  }

  const errorResponse: ErrorResponse = { code, message };
  return NextResponse.json(errorResponse, { status });
};
