
/**
 * TODO: Replace with a UUID library
 */
export const generateUniqueId = (prefix: string = ""): string => {
  return `${prefix}${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
