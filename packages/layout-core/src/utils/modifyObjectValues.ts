export function modifyObjectValues<T extends Record<string, any>, R>(
  object: T,
  iterator: (
    value: T extends Record<string, infer V> ? NonNullable<V> : never,
    key: keyof T
  ) => R
): { [k in keyof T]: R } {
  let result: Record<keyof T, R> = object;
  Object.keys(result).forEach((k: keyof T) => {
    result[k] = iterator(object[k], k);
  });
  return result;
}
