/**
 * Get current timestamp
 * @param precise Whether to return a timestamp accurate to milliseconds, default is false
 * @returns Current timestamp
 */
export function getCurrentTimestamp(precise: boolean = false): number {
  return precise ? Date.now() : Math.floor(Date.now() / 1000);
}
