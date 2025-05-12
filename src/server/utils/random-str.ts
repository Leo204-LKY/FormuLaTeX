/**
 * @description Return random string (A-Z, a-z, 0-9)
 * @param length The length of the string
 * @returns Generated random string
 */
export function getRandomStr(length: number): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(
    { length: length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}
