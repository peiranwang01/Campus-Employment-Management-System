export function castObjectNullsToUndefined<T>(
  item: T | undefined | null
): ObjectWithoutNulls<T> | undefined {
  if (item) {
    return Object.fromEntries(
      Object.entries(item as Object).map(([key, value]) => [
        key,
        value === null ? undefined : value,
      ])
    ) as ObjectWithoutNulls<T>;
  }
  return undefined;
}
