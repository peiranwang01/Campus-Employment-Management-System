/**
 * Convert a Buffer or a DataView to an array.
 *
 * @param obj a Buffer or a DataView instance
 */
export function toArray(obj: Buffer|DataView) {
  if (obj instanceof DataView) {
    return Array.from(new Uint8Array(obj.buffer))
  }
  return Array.from(obj)
}

