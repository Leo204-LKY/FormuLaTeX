/**
 * Get current timestamp
 * @param precise Whether to return a timestamp accurate to milliseconds, default is false
 * @returns Current timestamp
 */
export function getCurrentTimestamp(precise: boolean = false): number {
  return precise ? Date.now() : Math.floor(Date.now() / 1000);
}

/**
 * Get current time in specific format
 * @param format Format string, default is 'yyyy-MM-dd HH:mm:ss'
 */
export function getCurrentFormatTime(
  format: string = 'yyyy-MM-dd HH:mm:ss'
): string {
  const date = new Date();

  const pad = (n: number) => n.toString().padStart(2, '0');

  const replacements: { [key: string]: string } = {
    yyyy: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1),
    dd: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => replacements[match]);
}
