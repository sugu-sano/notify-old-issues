export function group_by<K extends PropertyKey, V>(
  array: readonly V[],
  getKey: (cur: V, idx: number, src: readonly V[]) => K
): Record<string | number | symbol, V[]> {
  return array.reduce((obj, cur, idx, src) => {
    const key = getKey(cur, idx, src);
    (obj[key] || (obj[key] = []))?.push(cur);
    return obj;
  }, {} as Record<K, V[]>);
}
