/**
 * 
 * @param rawString 
 * 
 * Returns a Base64 encoded string
 */
export function encode(base64String: string): string {
  const buff = Buffer.from(base64String);
  const decoded = buff.toString('base64');
  return decoded;
}

/**
 * 
 * @param base64String 
 * 
 * Returns a string from a Base64 encoded string
 */
export function decode(rawString: string): string {
  const buff = Buffer.from(rawString, 'base64');
  const encoded = buff.toString('ascii');
  return encoded;
}
